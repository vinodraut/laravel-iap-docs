---
sidebar_position: 1
---

# Installation

Install the package via composer:

```
composer require imdhemy/laravel-purchases
```

## Configuration

Publish the config file:

```
php artisan liap:config:publish
```

This creates a file `config/liap.php` which contains 4 main keys:

- `routing`: Which allows you to add custom routing configurations.
- `google_play_package_name`: The default Google play package name.
- `appstore_password`: The default App Store password.
- `eventListeners`: A List of Store events and event handlers.

## Routing

LIAP adds two `POST` endpoints ...

## Event Listeners

Your application should handle the different state of the subscription ...
