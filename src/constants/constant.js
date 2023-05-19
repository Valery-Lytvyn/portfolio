

export const colors = {
   LAWN_GREEN: '#7CFC00',
   SPRING_GREEN: '#00FF7F',
   ORANGE: '#ffa600',
   CYAN: '#00FFFF',
   BLUE: '#00BFFF',
   RED: '#FF0000',
   SILVER: '#C0C0C0',
   GOLD: '#FFD700',
}

export const colorPalette = [
   colors.LAWN_GREEN,
   colors.SPRING_GREEN,
   colors.CYAN,
   colors.ORANGE,
   colors.BLUE,
   colors.RED,
   colors.SILVER,
   colors.GOLD,
]

export const verticalVariant = {
   visible: { opacity: 1, y: 0, transition: { duration: 1, delay: .5 } },
   hidden: { opacity: 0, y: 60 }
};

export const opacityVariant = {
   visible: { opacity: 1, transition: { duration: 1, delay: .5 } },
   hidden: { opacity: 0, }
};

export const leftHorizontalVariant = {
   visible: { opacity: 1, x: 0, transition: { duration: 1, delay: .5 } },
   hidden: { opacity: 0, x: '-150px' }
};
export const rightHorizontalVariant = {
   visible: { opacity: 1, x: 0, transition: { duration: 1, delay: .5 } },
   hidden: { opacity: 0, x: '+150px' }
};


