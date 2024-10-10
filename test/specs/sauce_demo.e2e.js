'use strict';
const assert = require("assert");
const SauceDemo = require('sauce-po');
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

  it("Verify login with valid credentails", async () => {
 
    await SauceDemo.login("standard_user","secret_sauce");
  });
});
