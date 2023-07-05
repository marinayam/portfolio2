import {
  codeSlash,
  layoutTextWindow,
  showcase,
  mTravel
} from "../assets";

const skills = [
  {
    image:codeSlash,
    title:"Web Engineer",
    features_title: "Language",
    experience: "HTML, CSS, Javascript,PHP, SQL",
    features_subtitle: "flamework,Tools",
    tools: [
      {
        name: "React",
      },
      {
        name: "Sass",
      },
      {
        name: "jQuery",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Next.js",
      },
      {
        name: "Laravel",
      },
      {
        name: "Git",
      },
    ],
  },
  {
    image:layoutTextWindow,
    title:"Web Designer",
    features_title:"Experience",
    experience: "UX, UI, Web,Thumbnail",
    features_subtitle:"Tools",
    tools: [
      {
        name: "Figma",
      },
      {
        name: "Wordpress",
      },
      {
        name: "Webflow",
      },
      {
        name: "Wix",
      },
    ],
  },
];
const projects = [
  {
    name: "Showcase",
    description:
      "美容関係者の為の、実績を共有したり、検索してアイディアを得たり、ビジネスを広げるためのコミュニティアプリです",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: showcase,
    source_code_link: "https://github.com/marinayam/showcase",
    demo_link:"https://showcase-pi-eight.vercel.app/",
  },
  {
    name: "mTravel",
    description:
      "仮想の旅行会社の静的コーポレートサイト。ユーザビリティーを保ちながら情報量を多く記載するためUI/UXデザイン設計を意識しました",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: mTravel,
    source_code_link: "https://github.com/marinayam/responsive_react",
    demo_link:"https://marinayam.github.io/responsive_react",
  },
];
export { skills, projects };