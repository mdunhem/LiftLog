import { LiftLogPage } from './app.po';

describe('lift-log App', function() {
  let page: LiftLogPage;

  beforeEach(() => {
    page = new LiftLogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
