require('webdriverio');

module.exports.config = {
  host: 'selenium-chrome',
  port: 4444,
  specs: [
    'test/**.ts'
  ],
  reporters: ['spec'],
  capabilities: [
    {
      browserName: 'chrome'
    }
  ],
  before() {
    require('ts-node/register');
  },
  afterTest(test) {
    if (test.err) {
      const browserName = browser.desiredCapabilities.browserName;
      const timeMillis = new Date().getTime();
      browser.saveScreenshot(`screenshots/error-${browserName}-${timeMillis}.png`);
    }
  }
};
