---
sidebar_position: 1
---

# Installation and Configuration

## Installation

Install the package via composer:

```shell
composer require imdhemy/laravel-purchases
```

## Configuration

Publish the config file:

```shell
php artisan liap:config:publish
```

This creates a file `config/liap.php` which contains 4 main keys:

- `routing`: Which allows you to add custom routing configurations.
- `google_play_package_name`: The default Google play package name.
- `appstore_password`: The default App Store password.
- `eventListeners`: A List of Store events and event handlers.

### Routing

LIAP provides you a route to receive the server notifications. The `routing` key allows you to secure this route. Check
the [routing](/docs/get-started/routing) document for detailed information.

### Event Listeners

Your application should handle the different state of the subscription ...
