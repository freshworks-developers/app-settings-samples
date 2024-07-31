exports = {
  onSettingsUpdate: function (args) {
    console.log('onSettingsUpdate invoked with following data: \n', args);
    $request.invokeTemplate('getContacts', {
      context: {
        subdomain: args.freshdesk_subdomain,
        api_key: args.freshdesk_api_key
      }
    }).then(
      function () {
        console.log('Success: Verified the subdomain and api key');
        renderData();
      },
      function (error) {
        console.error('Error: Failed to verify the subdomain and api key');
        console.error(error);
        renderData({error_msg: `Failed to verify the subdomain and api key ${args.freshdesk_subdomain} and ${args.freshdesk_api_key}`});
      }
    );
  }
};
