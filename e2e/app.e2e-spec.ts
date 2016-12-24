import { STMSTestPage } from './app.po';

describe('stms-test App', function() {
  let page: STMSTestPage;

  beforeEach(() => {
    page = new STMSTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
