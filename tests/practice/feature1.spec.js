import{test,expect}from'@playwright/test';
const { attachScreenshot } = require('utils/screenshotHelper');
test('has title',async({page})=>{
await page.goto('https://www.saucedemo.com/');
//screenshot
await attachScreenshot(page, 'Homepage Screenshot');
//assertion
await expect(page).toHaveTitle(/Swag Labs/);
});