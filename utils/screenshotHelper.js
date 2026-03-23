// Load Playwright's test library
const test = require('@playwright/test');

// Create a function that takes a screenshot and attaches it to the report
async function attachScreenshot(page, stepName) {
  // Take a screenshot of the whole page
  const screenshot = await page.screenshot({ fullPage: true });

  // Attach the screenshot to the test report
  await test.test.info().attach(stepName, {
    body: screenshot,          // the actual screenshot data
    contentType: 'image/png',  // tell Playwright it's a PNG image
  });
}

// Make this function available to other files
module.exports = { attachScreenshot};
