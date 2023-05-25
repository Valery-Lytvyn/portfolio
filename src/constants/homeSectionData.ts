export interface HeroTitleData {
  helloText: string;

  fullName: {
    name: string;
    surname: string;
  };
  profession: string;
}

export const heroTitleData: HeroTitleData = {
  helloText: "Hi, I am",
  fullName: {
    name: "Valery",
    surname: "Lytvyn",
  },
  profession: "Front-end Developer",
};
