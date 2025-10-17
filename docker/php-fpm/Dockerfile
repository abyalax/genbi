# NOTE: keep this file minimal. We add libpq-dev and pdo_pgsql so PHP can talk to Postgres.
FROM php:8.1-fpm

# Install commonly used extensions for Laravel and Postgres client dev libs
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    zip \
    unzip \
    git \
    curl \
  && docker-php-ext-install pdo pdo_mysql pdo_pgsql mbstring exif pcntl bcmath gd xml \
  && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Set permissions for Laravel storage if present
# Note: this is a best-effort; the user may prefer to handle permissions on host
RUN usermod -u 1000 www-data || true

EXPOSE 9000
CMD ["php-fpm"]
