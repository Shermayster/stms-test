import { StmsTestPage } from './app.po';

describe('stms-test App', function() {
  let page: StmsTestPage;

  beforeEach(() => {
    page = new StmsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
