import { NgrxdemoPage } from './app.po';

describe('ngrxdemo App', () => {
  let page: NgrxdemoPage;

  beforeEach(() => {
    page = new NgrxdemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
