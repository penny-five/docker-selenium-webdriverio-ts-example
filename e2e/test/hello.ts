import 'mocha';
import 'webdriverio';
import * as assert from 'assert';

describe('example app', function() {
  it('should render title correctly', function() {
    browser.url('http:/app:8080');
    assert.equal(browser.getTitle(), 'Test app');
  });
});
