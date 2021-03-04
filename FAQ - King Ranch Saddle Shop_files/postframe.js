'use strict';

/**
 * Postframe
 *
 * @summary A simple way to enable cross-site communiction using the HTML postMessage API
 * @author Vance Lucas <vance@vancelucas.com>
 */

// @TODO:
// Test 'send' without a callback but WITH data
// Test to ensure multiple callbacks via 'on' all fire
// Create "once" and "off" method similar to Backbone API

/**
 * Universal CommonsJS + AMD support
 *
 * @link https://github.com/umdjs/umd/blob/master/commonjsStrict.js
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['exports'], function(exports) {
			factory(exports)
			return exports.Postframe;
		});
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(exports);
	} else {
		// Browser globals
		factory(root, null);
	}
}(this, function (exports) {

	/**
	 * EventEmitter from 'component'
	 *
	 * @link https://github.com/component/emitter
	 */
	var emitter = (function() {
		/**
		 * Initialize a new `Emitter`.
		 *
		 * @api public
		 */

		function Emitter(obj) {
			if (obj) return mixin(obj);
		};

		/**
		 * Mixin the emitter properties.
		 *
		 * @param {Object} obj
		 * @return {Object}
		 * @api private
		 */

		function mixin(obj) {
			for (var key in Emitter.prototype) {
				obj[key] = Emitter.prototype[key];
			}
			return obj;
		}

		/**
		 * Listen on the given `event` with `fn`.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 * @return {Emitter}
		 * @api public
		 */

		Emitter.prototype.on =
		Emitter.prototype.addEventListener = function(event, fn){
			this._callbacks = this._callbacks || {};
			(this._callbacks['$' + event] = this._callbacks['$' + event] || [])
				.push(fn);
			return this;
		};

		/**
		 * Adds an `event` listener that will be invoked a single
		 * time then automatically removed.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 * @return {Emitter}
		 * @api public
		 */

		Emitter.prototype.once = function(event, fn){
			function on() {
				this.off(event, on);
				fn.apply(this, arguments);
			}

			on.fn = fn;
			this.on(event, on);
			return this;
		};

		/**
		 * Remove the given callback for `event` or all
		 * registered callbacks.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 * @return {Emitter}
		 * @api public
		 */

		Emitter.prototype.off =
		Emitter.prototype.removeListener =
		Emitter.prototype.removeAllListeners =
		Emitter.prototype.removeEventListener = function(event, fn){
			this._callbacks = this._callbacks || {};

			// all
			if (0 == arguments.length) {
				this._callbacks = {};
				return this;
			}

			// specific event
			var callbacks = this._callbacks['$' + event];
			if (!callbacks) return this;

			// remove all handlers
			if (1 == arguments.length) {
				delete this._callbacks['$' + event];
				return this;
			}

			// remove specific handler
			var cb;
			for (var i = 0; i < callbacks.length; i++) {
				cb = callbacks[i];
				if (cb === fn || cb.fn === fn) {
					callbacks.splice(i, 1);
					break;
				}
			}
			return this;
		};

		/**
		 * Emit `event` with the given args.
		 *
		 * @param {String} event
		 * @param {Mixed} ...
		 * @return {Emitter}
		 */

		Emitter.prototype.emit = function(event){
			this._callbacks = this._callbacks || {};
			var args = [].slice.call(arguments, 1)
				, callbacks = this._callbacks['$' + event];

			if (callbacks) {
				callbacks = callbacks.slice(0);
				for (var i = 0, len = callbacks.length; i < len; ++i) {
					callbacks[i].apply(this, args);
				}
			}

			return this;
		};

		/**
		 * Return array of callbacks for `event`.
		 *
		 * @param {String} event
		 * @return {Array}
		 * @api public
		 */

		Emitter.prototype.listeners = function(event){
			this._callbacks = this._callbacks || {};
			return this._callbacks['$' + event] || [];
		};

		/**
		 * Check if this emitter has `event` handlers.
		 *
		 * @param {String} event
		 * @return {Boolean}
		 * @api public
		 */

		Emitter.prototype.hasListeners = function(event){
			return !! this.listeners(event).length;
		};

		return new Emitter();
	})();
	// end emitter

	/**
	 * Add 'bind' method for IE7/8 support
	 */
	if (!Function.prototype.bind) {
		Function.prototype.bind = function(oThis) {
			if (typeof this !== 'function') {
				// closest thing possible to the ECMAScript 5
				// internal IsCallable function
				throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
			}

			var aArgs		= Array.prototype.slice.call(arguments, 1),
					fToBind = this,
					fNOP		= function() {},
					fBound	= function() {
						return fToBind.apply(this instanceof fNOP && oThis
									 ? this
									 : oThis,
									 aArgs.concat(Array.prototype.slice.call(arguments)));
					};

			fNOP.prototype = this.prototype;
			fBound.prototype = new fNOP();

			return fBound;
		};
	}

	var previousPostframe = exports.Postframe;

	/**
	 * Postframe object constructor
	 */
	function Postframe(/* string */ allowedOrigin) {
			// Properties
			this.allowedOrigin = allowedOrigin;
			this.listenerReady = false;

			// Initialize
			this.setupListener();
	}

	/**
	 * Postframe noConflict mode
	 */
	Postframe.prototype.noConflict = function() {
		exports.Postframe = previousPostframe;
		return Postframe;
	};

	/**
	 * Postframe debug logger
	 */
	Postframe.prototype.debug = function() {
		if (typeof this.debugFn() != 'undefined') {
			return this._debugFn.apply(this, arguments);
		}
	};

	/**
	 * Postframe debugger function
	 */
	Postframe.prototype.debugFn = function(debugFn) {
		if (debugFn) {
			this._debugFn = debugFn;
		}
		return this._debugFn;
	};

	/**
	 * Send data via postMessage, and listen for result with callback to call after
	 *
	 * @param DOMElement frame
	 * @param mixed data
	 * @param callback|mixed
	 * @param callback
	 */
	Postframe.prototype.send = function(/* frame, eventName [, params], callback */) {
		this.debugFrame();
		var args			= Array.prototype.slice.call(arguments),
				frame			= args.shift(),
				eventName = typeof args[0] === 'string' && args.shift(),
				params		= !(args[0] instanceof Function) && args.shift(),
				callback	= args[0] instanceof Function && args.shift();

		var id = (+ new Date()).toString() + Math.random();

		// Listen for <eventName>:response event (response from external frame/window)
		if (callback) {
			this.once(eventName + ':response:' + id, callback);
		}

		// Send message to frame/window
		frame.postMessage({ id: id, message: eventName, result: null, params: params, done: false }, this.allowedOrigin);
	};

	/**
	 * Debugging log for which frame you are currently in
	 */
	Postframe.prototype.debugFrame = function() {
		var winName = (window.self != window.top) ? 'IFRAME' : 'MAIN';
	};


	/**
	 * Event listener
	 *
	 * @param string eventName
	 * @param callback
	 */
	Postframe.prototype.on = function(eventName, callback) {
		this.debug('postframe.on(' + eventName + ')');
		return emitter.on.apply(this, arguments);
	};

	/**
	 * Event listener that only executes the event once
	 *
	 * @param string eventName
	 * @param callback
	 */
	Postframe.prototype.once = function(eventName, callback) {
		this.debug('postframe.once(' + eventName + ')');
		return emitter.once.apply(this, arguments);
	};

	/**
	 * Event listener that only executes the event once
	 *
	 * @param string eventName
	 * @param callback
	 */
	Postframe.prototype.off = function(eventName, callback) {
		this.debug('postframe.off(' + eventName + ')');
		return emitter.off.apply(this, arguments);
	};

	/**
	 * Add event listener (with IE7/8 support and its proprietary attachEvent)
	 *
	 * @param DOMNode el
	 * @param string eventName
	 * @param callback eventHandler
	 */
	Postframe.prototype.bindEventToElement = function(el, eventName, eventHandler) {
		if (el.addEventListener) {
			return el.addEventListener(eventName, eventHandler);
		} else if (el.attachEvent) {
			return el.attachEvent('on'+eventName, eventHandler);
		}
	};

	/**
	 * Emit event
	 *
	 * @param string eventName
	 */
	Postframe.prototype.emit = function(eventName, data /* ...params */) {
		this.debugFrame();
		var args = Array.prototype.slice.call(arguments);
		var eventName = args.shift();
		var data = args.shift();

		this.debug('postframe.emit(' + eventName + ')', data);

		// Final emit
		if (data && data.done == undefined) {
			args.unshift(eventName, data);
			return emitter.emit.apply(this, args);
		}

		if (data && !data.done) {
			var done = function postframeDone() {
				var doneArgs = Array.prototype.slice.call(arguments);
				var result = doneArgs.shift();
				this.debug('postframe.doneFn(' + eventName + ')', data);
				this.sourceWindow.postMessage({ id: (data ? data.id : false), message: eventName, result: result, params: (data.params ? data.params : doneArgs), done: true }, this.allowedOrigin);
			}.bind(this);
			args.unshift(eventName, done);
			if (data.params) {
				args.splice(2, 0, data.params);
			}
		} else {
			args.unshift(eventName, data);

			if (data && data.params) {
				args.splice(2, 0, data.params);
			}
		}

		emitter.emit.apply(this, args);
	};

	/**
	 * Setup event listener
	 */
	Postframe.prototype.setupListener = function() {
		if (this.listenerReady) {
			return;
		}

		this.bindEventToElement(window, 'message', function(event) {
			// Security: Check origin is within allowedOrigins
			if (this.allowedOrigin != event.origin) {
				this.debug('Orgin disallowed!', event.origin, this.allowedOrigin);
				return;
			}

			this.debugFrame();

			// Update source window
			this.sourceWindow = event.source;
			var data = event.data;

			// Check 'message' key for result
			var eventName = data.message;
			var params = [];
			if (data.done) {
				this.debug('DONE ' + eventName);
				// emit(id, message, result, ...params);
				// Emit specific event with id if set
				if (data.id) {
					eventName += ':response:' + data.id;
				}
				params = [eventName, data.result];
			} else {
				this.debug('NOT done ' + eventName);
				params = [data.message, data];
			}

			if (data.params) {
				params.push(data.params);
			}

			// emit
			this.emit.apply(this, params);
		}.bind(this));
		this.listenerReady = true;
	};

	/**
	 * Expose Postframe
	 */
	exports.Postframe = Postframe;
}));
