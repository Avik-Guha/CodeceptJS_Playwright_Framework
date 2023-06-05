const { I } = inject();

module.exports = {

  // insert your locators here
  locators:{
    txtName:"//input[@name='g7-name']",
    txtEmail:"//input[@name='g7-email']",
    txtWebsite:"//input[@name='g7-website']",
    txtDate:"//input[@name='g7-date']",
    buttonSubmit:".pushbutton-wide"
  },


  // insert your methods here
  fillForm(name,email,website,date) {
    I.fillField(this.locators.txtName, name);
    I.fillField(this.locators.txtEmail, email);
    I.fillField(this.locators.txtWebsite, website);
    I.fillField(this.locators.txtDate, date);
  },

  submitForm() {
    I.forceClick(this.locators.buttonSubmit);
  }

}
