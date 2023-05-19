export const openPage = (link, label) => {
   label === 'mail' ? window.location = `mailto:${link}` : window.open(link, '_blank')
}