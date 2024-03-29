import STARDIU from '../../../assets/img/project-stardiu.png';
import ANIME from '../../../assets/img/anime-list.jpeg';
import MAPS from '../../../assets/img/maps.png';
import CALENDAR from '../../../assets/img/calendar-app.png';
import INSTA from '../../../assets/img/instaclone.png';

export interface IProject {
  id?: number;
  name: string;
  type: 'Web';
  url: string;
  img: string;
}

export const projects: Array<IProject> = [
  {
    id: 1,
    name: 'Stardiu Coffee',
    type: 'Web',
    url: 'https://stardiu.herokuapp.com/',
    img: STARDIU,
  },
  {
    id: 2,
    name: 'Instaclone',
    type: 'Web',
    url: 'https://r-instaclone.netlify.app/',
    img: INSTA,
  },
  {
    id: 3,
    name: 'Anime List',
    type: 'Web',
    url: 'https://anime-list-gold.vercel.app',
    img: ANIME,
  },
  {
    id: 4,
    name: 'Mapas',
    type: 'Web',
    url: 'https://r-maps.netlify.app/',
    img: MAPS,
  },
  {
    id: 5,
    name: 'Calendario',
    type: 'Web',
    url: 'https://r-calendar.herokuapp.com/',
    img: CALENDAR,
  },
];
