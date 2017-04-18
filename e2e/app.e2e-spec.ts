import { NgattackPage } from './app.po';

describe('ngattack App', () => {
  let page: NgattackPage;

  beforeEach(() => {
    page = new NgattackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
