const pallete = {
  white: '#fff',
  orange: 'rgb(252,80,40)',
  grey: 'rgb(132,133,135)',
  lightGrey: 'rgb(234,236,241)',
  blue: 'blue',
  black: 'dark',
};

export const theme = {
  background: require('../../assets/img/bg-6.jpg'),
  color: {
    foreground: pallete.black,
    primary: pallete.blue,
    secondary: pallete.lightGrey,
    white: pallete.white,
  },
  spacing: {
    xs: 6,
    s: 8,
    m: 16,
    l: 24,
    xl: 30,
    xxl: 36,
  },
  radius: {
    s: 5,
    m: 10,
    l: 25,
  },
  text: {
    title: {
      fontSize: 32,
      color: pallete.black,
      fontFamily: 'Poppins-Bold',
    },
    subtitle: {
      fontSize: 16,
      color: pallete.black,
      fontFamily: 'Poppins-Regular',
    },
    subtitle2: {
      fontSize: 24,
      color: pallete.black,
      fontFamily: 'Poppins-Regular',
    },
  },
};
