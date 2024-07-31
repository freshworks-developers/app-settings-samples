# App settings sample

This app demonstrates how to configure and use app settings in your app, allowing you to provide runtime data for credentials such as tokens and API keys without hard-coding them into your app's code.

## Functionality

This app showcases the ability to define and manage app settings through the Freshworks Developer portal. It includes setting up credentials via environment variables and updating them without the need to republish the app.


### Steps to run app

1. Follow the steps in the documentation [here](https://developer.freshdesk.com/v2/docs/quick-start) to get started with the platform.
2. Create an `app_settings.json` file inside the `config` folder of the app’s root directory and define the credentials.
3. Add the `onSettingsUpdate` method in the `server.js` file to validate and handle the app settings.
4. Execute the command `fdk run` to run the app.

1. Follow the steps in the documentation [here](https://developer.freshdesk.com/v2/docs/quick-start) to get started with the platform.
2. Execute the command, `fdk run` to run the app.

### Platform features used

1. [App Settings](https://developers.freshworks.com/docs/app-sdk/v2.3/freshdesk/app-settings/developer-app-settings) - to define and manage app settings.
2. [Data Methods](https://developers.freshworks.com/docs/app-sdk/v2.3/freshdesk/front-end-apps/data-method/) - to fetch the logged in user.
2. [Request Methods](https://developers.freshworks.com/docs/app-sdk/v2.3/freshdesk/advanced-interfaces/request-method/) - to make API request for ticket creation.
3. [Interface Methods](https://developers.freshworks.com/docs/app-sdk/v2.3/freshdesk/front-end-apps/interface-methods/) - to show notification to the user.

### Freshdesk APIs used

1. [Create Ticket API](https://developers.freshdesk.com/api/#create_ticket) - to create a ticket on Freshdesk with Request Method.

### Implementing app settings

1. **Define Credentials:**
   - Create an `app_settings.json` file inside the `config` folder of the app’s root directory and define the credentials.

2. **Update Server Logic:**
   - Add the `onSettingsUpdate` method in the `server.js` file to handle the validation and logic for app settings updates.
