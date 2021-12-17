# App Store IAP Manual

App Store IAP is a PHP package to handle App Store purchase verification and Server Notifications with expressive and elegant syntax. This package takes the pain out of development by allowing you to mock receipts and implement their business logic without actual iOS receipts!

## Why App Store IAP
There are a variety of PHP packages available to you when it comes to App Store receipt validation. However, we believe App Store IAP is the best choice to add this vital functionality to your PHP application.

### Object Oriented Code
The basic idea of receipt validation is sending an HTTP request to the App Store endpoint, and parse the response to know the receipt status. Other packages are using an HTTP client and deal with responses as a plain arrays, which makes it hard for the developer to understand the business behind the receipt validation and the responses. 

The expressive elegant syntax provided by App Store IAP solves this problem and makes the process a piece of cake.

### Server Notifications
Unlike other packages that was developed for the same purpose of receipt validation, App Store IAP helps you to parse and deal with the Server Notifications using a Parser Class that gives you the ability to trigger the proper events on your PHP app in respond to the subscription lifecycle notifications received from the App Store.

### Mock Receipts
You can start developing your back-end functionality without real receipts at all. App store IAP gives you an easy way to mock all responses from the App store.

## Installation

Use composer

```
composer require imdhemy/appstore-iap
```

## Usage

Below is a simple example of receipt validation:

```php title="verify-receipt.php"
use Imdhemy\AppStore\ClientFactory;
use Imdhemy\AppStore\Receipts\Verifier;

// Create a client
$client = ClientFactory::create();

// Create a verifier instance
// Pass the client, receipt data and the password to the verifier constructor
// The receipt data is the data received after finishing the transaction on the mobile app.
$verifier = new Verifier($client, $receiptData, $password);

// Get the receipt response
$receiptResponse = $verifier->verify();

// Get receipt status
$status = $receiptResponse->getStatus();

if($status->isValid()) {
    // Grant the user the entitelment
    $receiptInfo = $receiptResponse->getLatestReceiptInfo()[0];
    $productId = $receiptInfo->getProductId();
    // ...
}
```

For a detailed usage and other features check the other documentation pages.
