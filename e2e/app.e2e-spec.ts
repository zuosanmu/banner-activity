import { ActivePage } from './app.po';

describe('active App', () => {
  let page: ActivePage;

  beforeEach(() => {
    page = new ActivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
