export interface AboutData {
  title: string;
  subtitle: string;
  summary: Array<string>;
}

export const aboutTextData: AboutData = {
  title: "About me",
  subtitle: "Every modification in our life is solely aimed at enhancing it.",
  summary: [
    `Hello, my name is Valery. Looking for a fresh start after losing my job in July 2022, I took advantage of the opportunity for a complete professional transformation.`,
    ` My friend, a front-end developer, volunteered to be my mentor and made sure that I mastered  a career as a front-end developer on my own. `,
    ` Starting with the basics of HTML, I've continuously improved my skills through numerous projects, constantly increasing my knowledge of CSS/SCSS and JavaScript. Realizing the importance of libraries and frameworks in a developer's toolkit, I expanded my stack to include the REACT and REDUX libraries.  Continuing my professional development, I started learning TypeScript.`,
    ` With this comprehensive skill set, I am ready to use my experience to contribute to innovative projects in this field.`,
    `  Some may question the value of investing time in learning new skills. However, I invite you to view a portfolio of my work, which I believe demonstrates my abilities and dedication.`,
    `The future is uncertain, but I am excited to embrace the unknown and discover where this newfound passion will lead me.`,
  ],
};

export const skills: Array<string> = [
  "HTML",
  "CSS/SCSS",
  "JS",
  "BOOTSTRAP",
  "REDUX",
  "REACT",
  "TYPESCRIPT",
];
