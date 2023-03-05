import { faEnvelope, faPhone, faBook } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '최지우',
    small: '',
  },
  contact: [
    {
      title: 'jooooosmile@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '010 7235 9484',
      icon: faPhone,
      // badge: true,
    },
    {
      title: 'https://github.com/heyjyu',
      link: 'https://github.com/heyjyu',
      icon: faGithub,
    },
    {
      title: 'https://yomiju.tistory.com',
      link: 'https://yomiju.tistory.com',
      icon: faBook,
    },
  ],
  notice: {
    title: '',
    icon: faBell,
  },
};

export default profile;
