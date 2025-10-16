import LogoGenbiPolos from './genbi/logo-genbi-polos.png';
import Fotbar from './img/fotbar.jpg';
import HomePage from './img/homepage.jpg';
import Rapat from './img/rapat.jpg';
import Rektor from './img/rektor.jpg';
import LoadingV1 from './loading-v1.json';
import NotDataFoundV1 from './no-data-v1.json';
import NotDataFoundV2 from './no-data-v2.json';

const fallback = {
  LoadingV1,
  NotDataFoundV1,
  NotDataFoundV2,
};

export const assets = {
  fallback,
  img: {
    Fotbar,
    HomePage,
    Rapat,
    Rektor,
  },
  genbi: {
    LogoGenbiPolos,
  },
};
