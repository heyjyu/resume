import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '이력서';
const description = '개발자 최지우의 이력서입니다.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'profile.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Jiwoo',
        lastName: 'Choi',
        username: 'jiwoo',
        gender: 'female',
      },
    },
  },
};
