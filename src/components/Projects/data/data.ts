import STARDIU from '../../../assets/img/project-stardiu.png';
import ANIME from '../../../assets/img/anime-list.jpeg';

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
    name: 'Anime List',
    type: 'Web',
    url: 'https://anime-list-gold.vercel.app',
    img: ANIME,
  },
];