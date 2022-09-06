const pallete = {
    white: '#fff',
    orange: 'rgb(252,80,40)',
    grey: 'rgb(92,93,95)',
    lightGrey: 'rgb(234,236,241)'
}

export const theme = {
    background: require('../../assets/img/bg-2.jpeg'),
    color: {
        foreground: pallete.grey,
        primary: pallete.orange,
        secondary: pallete.lightGrey,
        white: pallete.white
    },
    spacing: {
        xs: 4,
        s: 8,
        m: 16,
        l: 32,
        xl: 40,
    },
    radius: {
        xs: 2,
        s: 5,
        m: 10,
        l: 25,
        xl: 40,
    },
    text: {
        title: {
            fontSize: 32,
            fontWeight: 'bold',
            color: pallete.grey,
            fontFamily: 'Poppins-Bold'
        },
        subtitle: {
            fontSize: 16,
            color: pallete.primary,
            fontFamily: 'Poppins-ThinItalic'
        },
        subtitle2: {
            fontSize: 24,
            color: pallete.grey,
            fontFamily: 'Poppins-Regular'
        }
    }
}