const { I } = inject();

module.exports = {

  // insert your locators here
  locators:{
    txtName:"(//div[@class='contact-form-submission']/div)[2]",
    txtEmail:"(//div[@class='contact-form-submission']/div)[4]",
    txtWebsite:"(//div[@class='contact-form-submission']/div)[6]",
    txtDate:"(//div[@class='contact-form-submission']/div)[8]"
  }

}
