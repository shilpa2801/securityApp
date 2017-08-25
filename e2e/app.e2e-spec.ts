import { KavachBasicAppPage } from './app.po';

describe('kavach-basic-app App', () => {
  let page: KavachBasicAppPage;

  beforeEach(() => {
    page = new KavachBasicAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
