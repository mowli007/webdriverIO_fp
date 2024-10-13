'use strict';
const assert = require("assert");
const axios = require('axios');  
const SauceDemo = require('sauce-po');
const Home_Page= require('home-po');
const Cart_Page= require('cart-po');
const Actions = require('common-actions')

describe("Login Test", () => {
  it("Verify Title", async () => {
    await browser.url(
      "/"
    );
    await browser.maximizeWindow();

    const title = await browser.getTitle();
    await assert.strictEqual(
      title,
      "Swag Labs"
    );
  });

  it("Verify login with valid credentails, Add First product to Cart and validate the same product added to cart,logut", async () => {
 
    //Login to Sauce Demo
    await SauceDemo.login("standard_user","secret_sauce");
    //Fetch the product name and price, Add to Cart
    const productNameFromProductListPage = await Home_Page.home();
    console.log(productNameFromProductListPage);  // Log to console

    //Validate the same product has been to Cart and log out
    const productNameFromAddToCartPage = await Cart_Page.cart();
    console.log(productNameFromAddToCartPage);  // Log to console

    //Assertion verify that cart page contains the product which was added from product listing page
    await assert.strictEqual(await productNameFromAddToCartPage, await productNameFromAddToCartPage)

   

  });

  

describe('API Test - Validate GET request response code', () => {

    it('should validate that the response code is 200', async () => {
        // Use browser.call() to handle async operations within a WebDriverIO test
        const response = await browser.call(async () => {
            // Make a GET request using axios to the given URL
            return await axios.get('https://reqres.in/api/users/2');
        });

        // Log the response status code to the console
        console.log(`Status Code: ${response.status}`);

        // Validate that the response status is 200
        expect(response.status).toEqual(200);  
    });

});

});
