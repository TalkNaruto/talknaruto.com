(function () {
  addBanner();

  function addBanner() {
    const siteBannerArea = document.getElementsByClassName('banner-area')[0];
    const siteBanner = createBanner();

    siteBannerArea.appendChild(siteBanner);
  }

  function createBanner() {
    const banner = document.createElement('img');
    banner.alt = 'TalkNaruto';
    banner.className = 'banner';

    const bannerNumber = getBannerNumber();
    banner.src = `./assets/banners/banner${bannerNumber}.png`;

    return banner;
  }

  function getBannerNumber() {
    const numBanners = 4;
    return getRandomInt(numBanners);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
})();