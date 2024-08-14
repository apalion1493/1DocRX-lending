/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,php}'],
    theme: {
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            '100%': '100%',
            '100-auto': '100% auto',
        },
        fontFamily: {
            sans: ['Outfit', 'sans-serif'],
        },
        fontSize: {
            none: ['0px', '0px'],
            base: ['16px', '140%'],
            h1: ['54px', '120%'],
            h2: ['48px', '100%'],
            h3: ['32px', '100%'],
            h4: ['22px', '120%'],
            h5: ['20px', '120%'],
            'main-text': ['18px', '120%'],
        },
        screens: {
            xl: {max: '1179.98px'},
            lg: {max: '1023.98px'},
            md: {max: '767.98px'},
            sm: {max: '639.98px'},
            sm2: {max: '480px'},

            minsm: {min: '640px'},
            minmd: {min: '768px'},
            minlg: {min: '1024px'},
            minxl: {min: '1180px'},
        },
        container: {
            center: true,
            padding: {
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            boxShadow: {},
            colors: {
                transparent: 'transparent',
                primary: '#001A60',
                secondary: '#365AC1',
                'light-blue-1': '#D9E3FE',
                'light-blue-2': '#EFF3FF',
                'background-color': '#F9FAFF',
                'dark-blue-100': '#001A60',
                'dark-blue-50': '#001A6080',
                'dark-blue-50-2': 'rgba(0, 26, 96, 0.50)',
                'blue-1': '#335ACB',
                'blue-2': '#3A60CD',
                'white-2': '#FFFFFF1A',

            },
            letterSpacing: {
                'tight-2.16': '-2.16px'
            },
            padding: {
                '1/4': '25%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '5/6': '83.333333%',
                '1/24': '4.166667%',
                '2/24': '8.333333%',
                '3/24': '12.5%',
                '4/24': '16.666667%',
                '5/24': '20.833333%',
                '6/24': '25%',
                '7/24': '29.166667%',
                '8/24': '33.333333%',
                '2.5': '10px',
            },
        },
    },
    plugins: [
        // require('@tailwindcss/typography'),
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/aspect-ratio'),
        // require('@tailwindcss/container-queries'),
    ],
}