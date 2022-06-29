---
slug: /
sidebar_position: 1
---

The top-notch Laravel In-app Purchases package Laravel IAP (**LIAP**). LIAP contains everything you need to implement and manage in-app purchases and subscriptions. 

- ⚡️ LIAP will help you manage the subscription life-cycle for Google Play and App Store.
- ⏳ Using real receipts on development is boring, LIAP lets you mock receipts.
- 🧐 LIAP helps you to write a testable code.

**LIAP** was designed from the ground up to be easily installed and used to get your in-app purchases features up and running quickly. It gives you the required tools to mock receipts during development. No need to real receipts from different providers.

## Get started resources

Here are a few ways to get started:

- Store setup and products configuration.
- Configuring server notifications.
- Package installation.
- Package configuration.
- Best practices and code examples.

## Technical decisions

LIAP is a wrapper over two packages App Store IAP and Google Play Billing. Developing and maintaining separate packages per store gives us the ability to re-use the code to support different PHP frameworks. We started by Laravel, but supporting other Frameworks is planned, the next one will be Symfony. In addition to code re-usability, separate packages opens the door to support more stores and service providers in the future.

The current version supports Google Play and App Store. Good to mention that App Store Notifications `v2` is not supported, but it will be supported in the next release.

## Contributing

Contributions are welcomed and will be fully credited. Please read and understand the [contribution guide](/docs/contributing) before creating an issue or pull request.

## Discussions and QA

Feel free to join our humble community on Github. 

- [Laravel](https://github.com/imdhemy/laravel-in-app-purchases/discussions) discussion board.
- [Google Play Billing](https://github.com/imdhemy/google-play-billing/discussions) discussion board.
- [App Store IAP](https://github.com/imdhemy/appstore-iap/discussions) discussion board.
