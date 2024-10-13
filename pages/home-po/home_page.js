const fs = require('fs'); // Import fs module
const Actions = require('common-actions')

class Home_Page {
  // Define selectors for static elements
  get firstProductName_label() { 
      return $("(//div[@class='inventory_item_name '])[1]"); 
  }

  get firstProductPrice_label() { 
      return $("(//div[@class='inventory_item_price'])[1]"); 
  }

  get addToCart_button(){
    return $("//button[@id='add-to-cart-sauce-labs-backpack']");
  }
  
  get shoppingCart_link(){
    return $("//a[@class='shopping_cart_link']")
  }

  get sideBar_menu(){
    return $("//button[@id='react-burger-menu-btn']");
  }
  
  get lobout_link(){
    return $("//a[@id='logout_sidebar_link']")
  }

  async home() {
      try {
          const elemProductName = await this.firstProductName_label;
          await elemProductName.waitForDisplayed({ timeout: 70000 });

          const productText = await elemProductName.getText();
          console.log(productText);  // Log to console

          const elemProductPrice = await this.firstProductPrice_label;
          const productPrice = await elemProductPrice.getText();
          console.log(productPrice);  // Log to console

          // Concatenate product name and price and write to the file
          const content = `Product Name: ${productText}\nProduct Price: ${productPrice}`;

          // Specify the relative path or use absolute path if needed
          const filePath = './output.txt';
          fs.writeFileSync(filePath, content);  // Write to file
          
          console.log('File successfully written!');// Log to console

          
      } catch (err) {
          console.error('Error writing to file:', err);
      }
      
      // //Click on Add to Cart Button for first product
      // await Actions.click_element(this.addToCart_button);

      // //Click on Shopping Cart Link to Verify what is added
      // await Actions.click_element(this.shoppingCart_link);

      
      
      return this.productText;

  }

 
}

module.exports = new Home_Page();
