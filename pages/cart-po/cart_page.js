const fs = require('fs'); // Import fs module
const Actions = require('common-actions')

class Cart_Page {
  // Define selectors for static elements
  get cartFirstProductName_label() { 
       return $("//a[@id='item_4_title_link']")
  }
  get sideBar_menu(){
    return $("//button[@id='react-burger-menu-btn']");
  }
  
  get lobout_link(){
    return $("//a[@id='logout_sidebar_link']")
  }
  
  async cart() {


    
          const elemCartProductName = await this.cartFirstProductName_label;
          await elemCartProductName.waitForDisplayed({ timeout: 70000 });

          const cartProductText = await elemCartProductName.getText();
          console.log(cartProductText);  // Log to console

          //Click on Sidebar
          await Actions.click_element(this.sideBar_menu);

          //Click on Logout link
          await Actions.click_element(this.lobout_link);

          return  cartProductText;
      

  }

 
}

module.exports = new Cart_Page();
