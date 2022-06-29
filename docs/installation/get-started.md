# Get Started

Laravel In-app Purchase (**LIAP**) provides you everything you need to implement and manage in-app purchases and subscriptions. **LIAP** was designed from the ground up to be easily installed and used to get your in-app purchases features up and running quickly. It gives you the required tools to mock receipts during development. No need to real receipts from different providers.

## Installation

Install the package via composer:

```
composer require imdhemy/laravel-purchases
```

## Configuration

Publish the config file:

```
php artisan liap:config:publish
```

This creates a file `config/purchase.php` which contains 4 main keys:

- `routing`: Which allows you to add custom routing configurations.
- `google_play_package_name`: The default Google play package name.
- `appstore_password`: The default App Store password.
- `eventListeners`: A List of Store events and event handlers.
