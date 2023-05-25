export const openPage = (link: string, label: string | undefined) => {
  label === "mail"
    ? //@ts-ignore window.location = "/";
      (window.location = `mailto:${link}`)
    : window.open(link, "_blank");
};
