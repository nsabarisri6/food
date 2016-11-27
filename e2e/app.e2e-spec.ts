import { RateThisMoviePage } from './app.po';

describe('rate-this-movie App', function() {
  let page: RateThisMoviePage;

  beforeEach(() => {
    page = new RateThisMoviePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
