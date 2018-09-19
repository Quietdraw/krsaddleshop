worker_processes auto;
pid nginx.pid;
daemon off;
error_log  nginx-error.log;

events {
    worker_connections 768;
    multi_accept on;
}

http {
    ##
    # Basic Settings
    ##

    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    include mime.types;
    default_type application/octet-stream;

    ##
    # Logging Settings
    ##
    access_log access.log;
    error_log error.log;

    ##
    # Gzip Settings
    ##

    gzip on;
    gzip_disable "msie6";

    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    <% if(http_config){ %>
        include http.conf;
    <% } %>
    <% if(https_config){ %>
        include https.conf;
    <% } %>
}
