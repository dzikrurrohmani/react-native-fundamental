const pallete = {
  white: '#fff',
  orange: 'rgb(252, 80, 40)',
  grey: 'rgb(92, 93, 95)',
  lightGrey: 'rgb(234, 236, 241)',
};

export const theme = {
  background: require('../../assets/img/bg-1.jpg'),
  color: {
    foreground: pallete.grey,
    primary: pallete.orange,
    secondary: pallete.lightGrey,
    white: pallete.white,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
  },
  radius: {
    s: 5,
    m: 10,
    l: 25,
  },
  text: {
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: pallete.grey,
    },
    subtitle: {
      fontSize: 24,
      color: pallete.grey,
    },
    subtitle2: {
      fontSize: 16,
      color: pallete.grey,
    },
  },
};
