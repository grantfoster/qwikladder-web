import { QwikladderWebPage } from './app.po';

describe('qwikladder-web App', function() {
  let page: QwikladderWebPage;

  beforeEach(() => {
    page = new QwikladderWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
