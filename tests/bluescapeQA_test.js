Feature('bluescapeQA');

const assert = require('assert');

// hooks
Before(({I}) => {
    // launch url
    I.launchApp();
})

Scenario('test_bluescapeQA', async ({ I,bluescapeQAPage,contactPage,userData_data }) => {

    // fill form
    bluescapeQAPage.fillForm(
        userData_data.userDetails.name,
        userData_data.userDetails.email,
        userData_data.userDetails.website,
        userData_data.dateInfo.date
        );
    
    // click on submit button
    bluescapeQAPage.submitForm();

    // verify Name
    let name = await I.grabTextFrom(contactPage.locators.txtName);
    assert.equal(name, userData_data.userDetails.name, 'Name is not matching');

    // verify Email
    let email = await I.grabTextFrom(contactPage.locators.txtEmail);
    assert.equal(email, userData_data.userDetails.email, 'Email is not matching');

    // verify Website
    let website = await I.grabTextFrom(contactPage.locators.txtWebsite);
    assert.equal(website, userData_data.userDetails.website, 'Website is not matching');

    // verify Date
    let date = await I.grabTextFrom(contactPage.locators.txtDate);
    assert.equal(date, userData_data.dateInfo.date, 'Date is not matching');

});

