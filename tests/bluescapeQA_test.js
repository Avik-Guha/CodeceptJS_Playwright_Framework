Feature('bluescapeQA');

Before(({I}) => {
    I.say('Executing Before Hooks');
    I.say('Launching browser');
    I.launchApp();
})

Scenario('test_bluescapeQA', async ({ I,bluescapeQAPage,contactPage,userData_data }) => {

    I.say('Fill form');
    bluescapeQAPage.fillForm(
        userData_data.userDetails.name,
        userData_data.userDetails.email,
        userData_data.userDetails.website,
        userData_data.dateInfo.date
        );
    
    I.say('Click on submit button');
    bluescapeQAPage.submitForm();

    I.say('Verify Name, Email, Website and Date');
    I.see(userData_data.userDetails.name, contactPage.locators.txtName);
    I.see(userData_data.userDetails.email, contactPage.locators.txtEmail);
    I.see(userData_data.userDetails.website, contactPage.locators.txtWebsite);
    I.see(userData_data.dateInfo.date, contactPage.locators.txtDate);

});

