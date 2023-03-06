import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'JAVA',
    },
    {
      title: 'Spring boot',
    },
    {
      title: 'PHP',
    },
    {
      title: 'Python',
    },
    {
      title: 'JUnit',
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
    },
    {
      title: 'PostgreSQL',
    },
    {
      title: 'H2',
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React.js',
    },
    {
      title: 'Vue.js',
    },
    {
      title: 'jquery',
    },
    {
      title: 'Cypress',
    },
    {
      title: 'Playwright',
    },
    {
      title: 'Codecept.js',
    },
    {
      title: 'Jest',
    },
    {
      title: 'Javascript',
    },
    {
      title: 'HTML/CSS',
    },
    {
      title: 'bootstrap',
    },
    {
      title: 'MobX',
    },
    {
      title: 'Recoil',
    },
    {
      title: 'Typescript',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Vim',
    },
    {
      title: 'Git',
    },
    {
      title: 'SVN',
    },
    {
      title: 'Docker',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'IntelliJ',
    },
    {
      title: 'Github action',
    },
    {
      title: 'Github action',
    },
    {
      title: 'crontab',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
