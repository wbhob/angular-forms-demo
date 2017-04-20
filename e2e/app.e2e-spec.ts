import { AngularForms2Page } from './app.po';

describe('angular-forms2 App', () => {
  let page: AngularForms2Page;

  beforeEach(() => {
    page = new AngularForms2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
