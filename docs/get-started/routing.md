---
sidebar_position: 2
---

# Routing

## Introduction

Liap provides a `POST` endpoint `liap.serverNotifications` to receive
the [Server notifications](/docs/server-notifications) from different providers. This route uses a query
variable `provider` to define the service provider.

| Provider    | URI                                        | Query Value |
|-------------|--------------------------------------------|-------------|
| Google Play | `/liap/notifications?provider=google-play` | google-play |
| App Store   | `/liap/notifications?provider=app-store`   | app-store   |

You can add custom configurations to this endpoint through the `routing` key in the config file `liap.php`. For
instance, you can assign a [middleware](https://laravel.com/docs/middleware) or add a custom route prefix.

```php
[   
// .. 
    'routing' => [
        'signed' => false,
        'middleware' => 'my_middleware',
        'prefix' => 'my_prefix'
    ],
]
```

## Generate a signed URL

In order to set up the server notifications, the service provider asks you to provide a URL to receive the server
notifications. LIAP allows you to easily create a "signed" URL which have a "signature" hash appended to the query
string. This allows Laravel to verify that the URL has not been modified since it was created.

You can generate them using the following composer command:

```shell
php artisan liap:url
```

## Validating a signed route request

In order to verify that an incoming request has a valid signature, you should set the `routing.signed` key to true.

```php
[   
// .. 
    'routing' => [
        'signed' => true, // This is false by default
        'middleware' => 'my_middleware',
        'prefix' => 'my_prefix'
    ],
]
```

If the incoming request does not have a valid signature, the middleware will automatically return a `403` HTTP response.
