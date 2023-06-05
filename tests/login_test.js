Feature('login');

const assert = require('assert');

Scenario('bluescapeQA_fill_form',  async ({ I }) => {

    I.amOnPage('/'); // opens main page of website
    await I.fillField("//input[@name='g7-name']", 'John');
    await I.fillField("//input[@name='g7-email']", 'John@test.test');
    await I.fillField("//input[@name='g7-website']", 'https://www.John.test');
    await I.fillField("//input[@name='g7-date']", 'June 04, 2023');
    await I.pressKey('Enter');
    await I.click(".pushbutton-wide");
    // await I.forceClick(".pushbutton-wide");

    //verify Name
    let name = await I.grabTextFrom("(//div[@class='contact-form-submission']/div)[2]");
    assert.equal('John', name);

    //verify Email
    let email = await I.grabTextFrom("(//div[@class='contact-form-submission']/div)[4]");
    assert.equal('John@test.test', email);

    //verify Website
    let website = await I.grabTextFrom("(//div[@class='contact-form-submission']/div)[6]");
    assert.equal('https://www.John.test', website);

    //verify Date
    let date = await I.grabTextFrom("(//div[@class='contact-form-submission']/div)[8]");
    assert.equal('June 04, 2023', date);
    

});