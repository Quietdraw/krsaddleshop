{{!
	© 2015 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="home">

<section class="home-main-slider" data-cms-area="home-main-slider" data-cms-area-filters="path"></section>

<section class="home-featured-section" data-cms-area="home-featured-section" data-cms-area-filters="path"></section>


<section class="home-essentials">
  <div class="container">
    
    <h1 class="heading-marquee">King Ranch<br>Essentials</h1>
    
    <div class="row">
      <div class="col-xs-6 col-sm-3 col-md-2">
        <div class="card product">
          <a href="https://www.krsaddleshop.com/King-Ranch-Leather-Care-Set">
            <img class="card-img-top" src="https://www.krsaddleshop.com/Images/products/223627_main-image.jpg?resizeid=6&resizeh=1200&resizew=1200" alt="Protect your investment with our Leather Cleaner and Conditioner set.">
            <div class="card-body">
              <h5 class="card-title">KING RANCH LEATHER CARE SET</h5>
            </div>
          </a>
        </div>
      </div>
      <div class="col-xs-6 col-sm-3 col-md-2">
        <div class="card product">
          <a href="https://www.krsaddleshop.com/RANCH-TOTE">
            <img class="card-img-top" src="https://www.krsaddleshop.com/Images/products/223575_Chaparral%20Docil-Color.png?resizeid=6&resizeh=1200&resizew=1200" alt="This handbag has the perfect blend of convenience, capacity and, of course classic style.">
            <div class="card-body">
              <h5 class="card-title">RANCH TOTE</h5>
            </div>
          </a>
        </div>
      </div>
      <div class="col-xs-6 col-sm-3 col-md-2">
        <div class="card product">
          <a href="https://www.krsaddleshop.com/Western-Jacket-w-Conceal-Carry-King-Ranch-Saddle-Shop">
            <img class="card-img-top" src="https://www.krsaddleshop.com/Images/products/223297_Tan-Color.png?resizeid=6&resizeh=1200&resizew=1200" alt="This men's jacket is built with light weight insulation that will keep you warm without weighing you down.">
            <div class="card-body">
              <h5 class="card-title">WESTERN JACKET W/ CONCEAL CARRY</h5>
            </div>
            
          </a>
        </div>
      </div>
      <div class="col-xs-6 col-sm-3 col-md-2">
        <div class="card product">
          <a href="https://www.krsaddleshop.com/Ladies-Long-Sleeve-Western-Shirt">
            <img class="card-img-top" src="https://www.krsaddleshop.com/Images/products/223271_Coral-Color.png?resizeid=6&resizeh=1200&resizew=1200" alt="Lightweight rugged looking and beautifully tailored. Shaping seams for a comfortable fit.">
            <div class="card-body">
              <h5 class="card-title">LADIES LONG SLEEVE WESTERN SHIRT</h5>
            </div>
          </a>
        </div>
      </div>
      <div class="col-xs-6 col-sm-3 col-md-2">
        <div class="card product">
          <a href="https://www.krsaddleshop.com/Mens-Elite-Vented-Short-Sleeve-Shirt">
            <img class="card-img-top" src="https://www.krsaddleshop.com/Images/products/223275_Olive-Color.png?resizeid=6&resizeh=1200&resizew=1200" alt="Designed to meet the needs of the hunter or angler. these cool, protective shirts are constructed of a soft, lightweight fabric with a relaxed fit.">
            <div class="card-body">
              <h5 class="card-title">MEN'S ELITE VENTED SHORT SLEEVE SHIRT</h5>
            </div>
          </a>
        </div>
      </div>
      <div class="col-xs-6 col-sm-3 col-md-2">
        <div class="card product">
          <a href="https://www.krsaddleshop.com/Don-Robertos-Dowel-Case">
            <img class="card-img-top" src="https://www.krsaddleshop.com/Images/products/216348_Chaparral%20Latigo-Color[1].png?resizeid=6&resizeh=1200&resizew=1200" alt="DON ROBERTO'S DOWEL LEATHER CASE">
            <div class="card-body">
              <h5 class="card-title">DON ROBERTO'S DOWEL LEATHER CASE</h5>
            </div>
          </a>
        </div>
      </div>
      

    </div>
  </div>
</section>

<section class="home-spotlight__full-section" data-cms-area="home-spotlight__full-section" data-cms-area-filters="path"></section>

<section class="home-spotlight__2-col-section" data-cms-area="home-spotlight__2-col-section" data-cms-area-filters="path"></section>

<section class="home-featured-videos"  data-cms-area="home-featured-videos" data-cms-area-filters="path"></section>

<section class="home-spotlight__3-col-section" data-cms-area="home-spotlight__3-col-section" data-cms-area-filters="path"></section>

</div><!-- /.home -->

<div class="modal fade" tabindex="-1" role="dialog" id="homeVideoModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="global-views-modal-content-header-close" data-dismiss="modal" id="close-modal">&times;</button>
      </div>
      <div class="modal-body">
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

<!-- REMOVE THIS BELOW -->
<script>
  $('.cms-page-faq header h1').click(function() {
    alert( "Handler for .click() called." );
  });
</script>
<script>
// Toggle Faqs 
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
</script>
<style>
</style>
<div class="cms-landing-page">
<div class="cms-page-faq">
  <header>
    <h1>Frequently Asked Questions</h1>
  </header>

  <section class="cms-page-faq__introduction">
    <div class="container">
      <div class="row set-1">

        <div class="col-xs-12">
          <p>In order to serve you better, we have created this section to answer some of the most commonly asked questions you may have. Please take a moment to browse the subject headings below. If the answer to a question you have is not here, please <a href="mailto:krsaddleshop@king-ranch.com">email us</a>.</p>
        </div>  

      </div>
    </div>

  </section>

  <section class="cms-page-faq__store-info">
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col-xs-12 text-center">

          <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
            <div itemscope itemtype="http://schema.org/LocalBusiness">
              <h4><span itemprop="name">King Ranch Saddle Shop</span></h4>
              <span itemprop="priceRange" class="hidden">King Ranch Saddle Shop</span>
              <span itemprop="description" class="hidden">Highest quality ranch wear and leather goods.</span>
              <div itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
                <img  class="hidden" src="https://blog.krsaddleshop.com/wp-content/uploads/2019/03/KRSS_LOGO_600x300.png" width="600" itemprop="url">
              </div>
              <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                <span itemprop="streetAddress">120 S. 6th St.</span><br>
                <span itemprop="addressLocality">Kingsville</span>,
                <span itemprop="addressRegion">TX </span>
                <span itemprop="postalCode"> 78363</span>
              </div>
              
              <div style="font-style: italic;">
                <h5>Customer Service</h5>
                <span class="clearfix" itemprop="telephone" content="+18772825777">1-877-282-5777</span>
                <div itemprop="openingHoursSpecification" itemscope itemtype="http://schema.org/OpeningHoursSpecification">
                    <link itemprop="dayOfWeek" href="http://schema.org/Monday">Monday - <link itemprop="dayOfWeek" href="http://schema.org/Friday">Friday <time itemprop="opens" content="08:00:00">8:00 AM CT</time> - <time itemprop="closes" content="18:00:00">6:00 PM CT</time>
                    <br>
                    <link itemprop="dayOfWeek" href="http://schema.org/Saturday">Saturday <time itemprop="opens" content="10:00:00">10:00 AM CT</time> - <time itemprop="closes" content="18:00:00">6:00 PM CT</time>
                </div>
                <span class="clearfix" itemprop="faxNumber" content="+13615951011">1-361-595-1011</span>
                <br>
                <a class="clearfix" style="" href="mailto:krsaddleshop@king-ranch.com"  itemprop="email">Email Us</a>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>


  <section class="cms-page-faq__questions">
    <div class="faq-container">
      <h2 class="text-center">FAQ</h2>
      <ul class="collapsible__menu">
        <li class="collapsible__menu-item">
          <button class="collapsible">Shipping</button>
          <div class="collapsible__content-wrapper">
            <div class="collapsible__content">
              <h5>How do I calculate my shipping charges?</h5>

              <h6>Shipping Charges:</h6>
              <p>We offer flat rate shipping charges using standard FEDEX Ground shipping. Orders up to $100 will be charged a flat $7 shipping fee. Orders over $100 to $250 will be charged a flat $15 shipping fee. Orders over $250 will be charged a flat $22 shipping fee.</p>

              <p>NOTE: the above Standard Shipping rates apply to each individual address you request. For deliveries outside the U.S. call 361.595.1424 for special quotes. See below for Shipping Information for furniture delivery charges.</p>

              <p>We ship FEDEX within the continental USA, which normally takes 3-7 days for delivery. Rest assured that once you place your order with us, we make sure that all in-stock items are shipped within 24 business hours.</p>

              <h6>Furniture Delivery:</h6>
              <p>Freight Delivery: Heavy or oversized furniture and accessories will include a shipping and handling charge which is listed as a surcharge. For each of these items ordered, please add only that amount to determine your total delivery charge on each item. Items ordered at the same time may be delivered separately. Next Day or 2 Day shipping is not available for any item with a surcharge.</p>

              <p>Curbside Delivery is available: King Ranch Saddle Shop will deliver your selection to your curbside. There is no unpacking of the item by the delivery service. Next Day or 2 Day shipping is not available for this item. Customer is responsible for all freight charges if delivery of Furniture if returned, refused or cancelled during processing.</p>

              <p>Inside Delivery is available for additional charges: King Ranch Saddle Shop will deliver your selection into your home and place the package 10 feet inside the front entry. There is no unpacking of the item by the delivery service. Delivery can be scheduled Monday through Friday and the freight company will call to arrange a time convenient for you. Next Day or 2 Day shipping is not available for this item. Customer is responsible for all freight charges if delivery of Furniture if returned, refused or cancelled during processing.</p>

              <p>White Glove Delivery is available for additional charges: King Ranch Saddle Shop will delivery your selection into your home, unpack it, inspect it, and provide simple assembly. We will also take away all the packing material. Delivery can be scheduled Monday through Friday and the freight company will call to arrange a time convenient for you. Next Day or 2 Day shipping is not available for this item. Customer is responsible for all freight charges if delivery of Furniture if returned, refused or cancelled during processing.</p>

              <h5>What is the standard form of shipping?</h5>
              <p>King Ranch Saddle Shop utilizes FEDEX Shipping Services, which normally takes 7-10 business days for delivery. Rest assured that once you place your order with us we will make sure that all in-stock items are shipped within 24 business hours - HOLIDAY shipping estimates change during the month of December.</p>

              <h5>Overnight and Second Day Shipping availability?</h5>
              <p>Orders requesting Overnight or Second Day Delivery must be submitted and received before 10:00 a.m. CST. These delivery options do not include weekends or HOLIDAY season. All orders received after 10:01 a.m CST will ship the next business day - HOLIDAY hours and days may vary. You must provide a physical address for expedited delivery, we cannot ship next day or 2nd day to a Post Office Box.</p>

              <h5>What are CURBSIDE, INSIDE and WHITEGLOVE Deliveries?</h5>
              <p>CURBSIDE delivery available: King Ranch Saddle Shop will deliver your selection to your curbside. There is no unpacking of the item by the delivery service. Next Day or 2 Day shipping is not available for this item. Customer is responsible for all freight charges if delivery of Furniture if returned, refused or cancelled during processing.</p>

              <p>INSIDE delivery is available for additional charges: King Ranch Saddle Shop will deliver your selection into your home and place the package 10 feet inside the front entry. There is no unpacking of the item by the delivery service. Delivery can be scheduled Monday through Friday and the freight company will call to arrange a time convenient for you. Next Day or 2 Day shipping is not available for this item. Customer is responsible for all freight charges if delivery of Furniture if returned, refused or cancelled during processing.</p>

              <p>WHITE GLOVE delivery is available for additional charges: King Ranch Saddle Shop will delivery your selection into your home, unpack it, inspect it, and provide simple assembly. We will also take away all the packing material. Delivery can be scheduled Monday through Friday and the freight company will call to arrange a time convenient for you. Next Day or 2 Day shipping is not available for this item. Customer is responsible for all freight charges if delivery of Furniture if returned, refused or cancelled during processing.</p>

              <h5>Can items be shipped internationally?</h5>
              <p>Orders delivered outside the U.S. must be paid by credit card. International customers please call 1.361.595.1424 to speak to a Customer Service Representative. There will be additional shipping and handling charges and the recipient will be responsible for all applicable duties and taxes.</p>

              <h5>Are Drop Ship items delayed during the Holidays?</h5>
              <p>Any of the items we offer that are Drop Shipped, shipped directly from our vendors, have the delivery time listed on the product detail page as well as in the check-out process once you put the item in your cart. Due to the Holidays, your item(s) may be delayed up to 2 weeks from the time listed on the product page.</p>


            </div>
          </div>
        </li>
        <li class="collapsible__menu-item">
          <button class="collapsible">Ordering</button>
          <div class="collapsible__content-wrapper">
            <div class="collapsible__content">
              <h5>Can I redeem a Gift Certificate online?</h5>
              <p>We currently do not redeem Gift Certificates online. Please call Customer Service toll-free at 1-877-282-5777 and a representative will assist you.</p>

              
              <h5>How do I order online?</h5>
              <p>The King Ranch Saddle Shop will make ordering as easy as possible. When shopping online, simply click on the item you want, select a color, size, and quantity, then click the "add to basket" button. You can always call us toll-free at 1.877.282.5777 and a Customer Service Representative will be glad to help. You can fax your order to us 24 hours a day, 7 days a week at 361.595-1011.</p>

              <h5>How do you make shopping via the Web secure?</h5>
              <p>We use a secure server and premium SSL with GoDaddy certification to protect your ordering information as it comes to us via the Internet. This means that all information such as name, address and your credit card number enter in the checkout section of our online store is encrypted with Secure Sockets Layer (SSL).</p>

              <h5>Which products are available online, compared to the items offered in the King Ranch Saddle Shop Catalog?</h5>
              <p>To make your online shipping as convenient as possible all items in our catalog are available online. There are items that are exclusively on the King Ranch Saddle Shop web site that you will not find in our catalog.</p>

            </div>
          </div>
        </li>
        <li class="collapsible__menu-item">
          <button class="collapsible">Payment</button>
          <div class="collapsible__content-wrapper">
            <div class="collapsible__content">
              <h5>How can I order through the mail (USPS)?</h5>
              <p>Simply print out the order form page from King Ranch Saddle Shop online and mail check or Money order payable to King Ranch Saddle Shop to:</p>
              <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                
                <div itemscope itemtype="http://schema.org/LocalBusiness">
                  <strong><span itemprop="name">King Ranch Saddle Shop</span></strong>
                  <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                    <span itemprop="streetAddress">P.O. Box 1594</span>
                    <span itemprop="addressLocality">Kingsville</span>,
                    <span itemprop="addressRegion">TX </span>
                    <span itemprop="postalCode"> 78364-1594</span>
                  </div>
                </div>

              </div>

              <p>COD's will not be accepted. Personal checks will delay your order for up to 15 days.</p>

              <h5>How do I know if my online order is secure? What happens to my name and order information?</h5>
              <p>The first layer of security, "Safe Technology", is the most visible to you. Our Secure Socket Layer (SSL) technology is an industry standard and among the best software available today for secure commerce transactions. Using RSA key technology, our web server is stable and secure, so you can shop via the web without worry and without risk. We encrypt all of your personal information including credit card number, name, and address, so that it cannot be read as the information travels over the Internet. The second layer, our "Firewall", works behind the scenes. We protect all of your private information, including your order, behind a network security system. Only our own staff has access to this information, and then only enough to service your order. As a final precaution, we authorize all credit card transactions through the same private channel that we use for traditional phone, fax, or mail orders. If you have any questions about our security system, please email us at krsaddleshop@king-ranch.com.</p>

              <h5>When will my credit card be charged?</h5>
              <p>We will charge your credit card for the correct amount when your order is released for shipment.</p>

              <h5>When will my credit card be charged?</h5>
              <p>We accept MasterCard, Visa, American Express, and Discover.</p>

            </div>
          </div>
        </li>
        <li class="collapsible__menu-item">
          <button class="collapsible">Returns</button>
          <div class="collapsible__content-wrapper">
            <div class="collapsible__content">
              
              <h5>Can I return something I purchased online?</h5>
              <p>Each product we make is of uncompromising quality. The Selection of leathers and the meticulous work of craftsmen reflect our tradition of quality.</p>
              <p>We will repair items with defects in material and craftsmanship for 60 days from purchase with Normal Usage.</p>
              <p>King Ranch Saddle Shop offers returns or exchanges up to 60 days from date of purchase. Items must be unworn, unwashed, and unused with original tags. All returns and exchanges will be at King Ranch’s discretion.</p>

              <h5>Returns, Exchanges, and Repairs:</h5>
              <p>King Ranch Saddle Shop offers the following options for exchange or return of merchandise for up to 60 days from purchase date.</p>
              <ul>
                <li>Original receipt - an even exchange or refund based upon the original tender or King Ranch Saddle Shop Gift Card.</li>
                <li>Gift Receipt - King Ranch Saddle Shop Gift Card for approved refund or exchange.</li>
                <li>Checks - Purchases made by check will be refunded after 15 business days.</li>
                <li>ALL SALES ARE FINAL ON CLEARANCE AND OUTLET MERCHANDISE.</li>
                <li>Sale items or items that have been personalized cannot be returned for a refund or credit.</li>
              </ul>

              <ul>
                <li>Include the packing slip or original receipt that you received with your shipment.</li>
                <li>Indicate the reason for the return. Please send the package securely wrapped, prepaid and insured to the address below.</li>
                <li>Items returned will be reviewed for refund or exchange so please include contact number or email.</li>
                <li>Returns and exchanges may take up to 2-3 weeks.</li>
                <li>All returns must be New, Unused and contain all original tags.</li>
              </ul>

              <br>

              <p>Send items to:</p>
              <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                
                <div itemscope itemtype="http://schema.org/LocalBusiness">
                  <strong><span itemprop="name">King Ranch Saddle Shop</span></strong>
                  <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                    <span itemprop="streetAddress">120 S. 6th St.</span>
                    <span itemprop="addressLocality">Kingsville</span>,
                    <span itemprop="addressRegion">TX </span>
                    <span itemprop="postalCode"> 78363</span>
                  </div>
                </div>

              </div>

              <p>**Do not send any packages C.O.D, as we will not accept product returns shipped C.O.D. Personalized items cannot be exchanged or returned for a refund. King Ranch Saddle Shop offers exchange or return of merchandise for up to 60 days from purchase date.</p>

            </div>
          </div>
        </li>
        <li class="collapsible__menu-item">
          <button class="collapsible">Registration</button>
          <div class="collapsible__content-wrapper">
            <div class="collapsible__content">
              
              <h5>What are the benefits of registering on your site?</h5>
              <p>Registering your personal information on our website makes it easier for you next time you want to place an order. We'll already have all the information necessary, so ordering will be a breeze. Plus, when the King Ranch Saddle Shop has special offers, you will be the first to know.</p>

            </div>
          </div>
        </li>
        <li class="collapsible__menu-item">
          <button class="collapsible">General</button>
          <div class="collapsible__content-wrapper">
            <div class="collapsible__content">
              
              <h5>How can I speak to a "real person" or get a question answered?</h5>
              <p>If you have a question that has not been answered, Contact us toll-free at 1.877.282.5777, 8am - 6pm (CST) Monday - Friday and 10am - 6pm (CST) Saturday, to speak with someone in our Customer Service Department. You can also send a fax to 361.595.1011, and we will respond as soon as possible.</p>

              <h5>How do I care for the leather or King Ranch Embossed Fabric?</h5>
              <p>Leather Care: The leather we use in our products will last for many years with proper care. In our experience, the best way to preserve leather is to condition the leather every 3 months with King Ranch Leather Conditioner (item#1053). Do not use oil on any of our leather products. Doing so will turn the leather very dark.</p>

              <p>King Ranch Embossed Fabric Care: The tan-colored materials we use can be washed with water and any non-abrasive soap. We suggest using soap such as Soft Scrub, which does not leave a film. If the material is marked by a ball point pen, it is important to remove the ink before it dries. The best choice for this is our King Ranch Canvas Cleaner (item#216939), 22 fl. oz. spray bottle.</p>

              <p>Spray it on the spot, let it work for 20 to 30 seconds and then wipe it off with a soft cloth. Do not scrub with a lot of pressure or you will dull the surface.</p>

              <h5>How often is the site updated?</h5>
              <p>We update our site on a daily basis. Be sure to check back often, as we are continually adding more exclusive products to our line.</p>

              <h5>What is the Running W® Brand?</h5>
              <p>The exact date of Captain Richard King's first use of the brand has not been determined. However, the earliest registration in Texas was on the 9th of February, 1869. There are several theories as to why the Running W was chosen. Some say it originated in Mexico because of its shape. The Mexicans call the brand viborita, which means the little snake. Others believe that it was a simple inversion of the initial M brand, because Captain King purchased the land and livestock of William Mann'?'s estate in 1862. When King Ranch began to operate its own saddlery in the years following the Civil War, it began using the Running W on the saddles and leather goods it produced. The brand is only to be put on goods of the finest quality. Today, the Running W appears on both prize-winning cattle and top quality leather goods, as an icon of American Ranching culture.</p>

              <h5>What type of leathers does the King Ranch Saddle Shop offer?</h5>
              <p>You will immediately notice the aroma and character that comes with each leather item you have purchased. The full grain leather we use is a classic but challenging material with which to work. Along with the beauty, which allows you to mix and match any of our leathers, you will discover a lot of priceless character on the various pieces. Our leather hides carry random markings earned from a spirited life among mesquite and cactus. The leathers used in all King Ranch merchandise are Docil, Latigo and Natural Saddle Leather. Docil Leather: Feel the softness of our smooth, supple, yet sturdy Docil leather. This wonderfully textured material gives each bag a unique shape with simple elegance. Latigo: We have taken this hard leather, traditionally used for bridles and reins, because of its toughness and durability, to bring you a smooth, rich, long-lasting leather. Latigo is often used as a trim on items made of soft, supple Docil Leather. These two types of leathers are available in Chaparral, Rio or sometimes Sombra colors. Natural Saddle Leather: We use the same thick, rugged natural leather traditionally used for our saddles and riding tack. Beyond their strength and endurance is the character each piece reveals as it ages to a golden tan from season after season of use.</p>

              <h5>What type of personalization is available?</h5>
              <p>The following information will guide you through your personalization decision. <strong>Please note that after an item has been personalized, it cannot be exchanged or returned for a refund.</strong> For this reason, please be certain that you have selected the color, style, and size you want before you ask for personalization. If you have any doubts or questions, we highly encourage you to call us for clarification so that we can avoid any misunderstandings. NOTE: some articles are not suitable for personalization because of their design. Items that can be personalized will state in the product detail. A few articles have no plaques, but take personalization near the handle, on a luggage tag, or a key fob. </p>
              <p>Format Styles available:</p>

              <h5>Monogram Styles (Henrietta M. King)</h5>

              <div class="row text-center ">
                <div class="col-xs-6">
                  <img src="https://4031305-sb1.app.netsuite.com/c.4031305_SB1/img/landing_page_assets/cms-page__faq-monogram-1.jpg" alt="King Ranch Leather Monogram Style Version 1" title="King Ranch Leather Monogram Style Version 1">
                  <p>Style 01</p>
                </div>
                <div class="col-xs-6">
                  <img src="https://4031305-sb1.app.netsuite.com/c.4031305_SB1/img/landing_page_assets/cms-page__faq-monogram-2.jpg" alt="King Ranch Leather Monogram Style Version 1" title="King Ranch Leather Monogram Style Version 1">
                  <p>Style 02</p>
                </div>
              </div>

            </div>
          </div>
        </li>
      </ul>
    </div>

  </section>


</div>
</div>
<!-- REMOVE THIS ABOVE -->