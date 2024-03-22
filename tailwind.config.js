const config = {
    content: ['./src/**/*.{jsx,tsx}'],
    mode: 'jit',
    theme: {
        extend: {
            screens: {
                xxs: '350px',
                s440: '440px',
                s428: '428px',
                xs: '480px',
                xl: '1260px',
                pc: '1440px',
                '3xl': '1800px',
                '4xl': '2000px',
            },

            colors: {
                white: '#FFFFFF',
                cobalt: '#1F2937',
                midnight: '#111827',
                fog: '#EFEFF0',
                black: '#000000',
                iron: '#D1D5D6',
                red: '#FF0033',
                rock: '#3C4652',
                steel: '#454D59',
                stormy: '#444D58',
                porcelain: '#F9FAFB',
                gunmetal: '#B7BABE',
                silvery: '#f0f1f3',
                gret: '#4B5563',
                ocean: '#649AB3',
                smolder: '#F8F9FD',
                groy: '#F8F8F8',

                'darkfox-dark': '#0F1155',
                'darkfox-primary': '#2328C2',
                'darkfox-accent': '#120733',
                'darkfox-ash': '#CDCAD4',
                'darkfox-gray': '#716A85',
                'darkfox-light-gray': '#FBFBFC',
                'darkfox-medium-gray': '#F8F8F9',
                'darkfox-semidark-gray': '#4A4657',
                'darkfox-grid-border-color': '#DEE1FF',
                'darkfox-title-bg-color': '#F6F7FB',
                'darkfox-gray-border': '#dbdbdb',
                'darkfox-complimentary': '#F4F7FF',
                'darkfox-blue': '#2744DC',
                'darkfox-very-light-blue': '#E5EBFC',
                'darkfox-light-blue': '#b9ccff',
                'darkfox-dominant': '#2328C2',
                'darkfox-purple-strong': '#7A5EDB',
                'darkfox-purple': '#967BEE',
                'darkfox-purple-light': '#E6E7FF',
                'darkfox-danger': '#E0444F',

                'darkfox-pipeline': '#5A88FF',
                'darkfox-portfolio': '#294BFF',
                'darkfox-closed-deals': '#17A2C1',
                'darkfox-dead-deals': '#FF8038',

                'darkfox-aromatic': '#716A85',
                'darkfox-aromatic-30': '#D4D2DA',
                'darkfox-aromatic-15': '#e9e8ec',
                'darkfox-forgotten-purple': '#957BEE',

                'darkfox-tc-dark': '#120733',
                'darkfox-tc-medium': '#3B3356',
                'darkfox-tc-light': '#716A85',

                'darkfox-null': '#BBBBBB',
                'darkfox-royalblue': '#414bc9',
                'darkfox-gray-expand': '#C7CAD6',
                'darkfox-energy-a': '#00A74D',
                'darkfox-energy-b': '#4DB947',
                'darkfox-energy-c': '#C0D72D',
                'darkfox-energy-d': '#FFF002',
                'darkfox-energy-e': '#FDB717',
                'darkfox-energy-f': '#F76E1C',
                'darkfox-energy-g': '#EC2324',
                'darkfox-blue-active': '#232BC2',
                'darkfox-valuation-nav': '#E0E6FC',
                'darkfox-light-child': '#F1F4F7',
                'darkfox-border-15': '#DEE0E6',

                // design system colors

                primary: '#2328C2',
                'primary-button': '#7A5EDB',
                'primary-button-10': 'rgba(122, 94, 219, 0.1)',
                'purple-dim': '#EEEBFF',
                'purple-white': '#FAF9FF',
                'secondary-button': '#F5F6FF',
                'table-hover': '#F4F7FF',

                header: '#120733',
                title: '#3B3356',
                paragraph: '#716A85',
                'paragraph-light': '#87809C',
                'disabled-text': 'rgba(113, 106, 133, 0.5)',

                gray: {
                    200: '#F3F4F5',
                    300: '#DCDAE0',
                    400: '#AEB3BD',
                },

                pipeline: '#5A88FF',
                portfolio: '#294BFF',
                closed: '#17A2C1',
                dead: '#F17732',

                error: '#F14368',
                'error-10': 'rgba(241, 67, 104, 0.10)',
                success: '#2CB66B',
                'success-10': 'rgba(44, 182, 107, 0.10)',

                'paginate-selected': '#2744DC',
                basic: 'rgba(113, 106, 133, 0.25)',
            },

            minWidth: {
                4: '1rem',
            },

            fontSize: {
                'title-large-22-600': ['22px', { lineHeight: '25px', fontWeight: '600' }],
                'title-large-20-600': ['20px', { lineHeight: '25px', fontWeight: '600' }],
                'title-large-18-600': ['18px', { lineHeight: '25px', fontWeight: '600' }],
                'title-medium-16-600': ['16px', { lineHeight: '22px', fontWeight: '600' }],
                'title-small-15-600': ['15px', { lineHeight: '20px', fontWeight: '600' }],
                'title-small-15-500': ['15px', { lineHeight: '20px', fontWeight: '500' }],
                'sub-title-large-15-600': ['15px', { lineHeight: '25px', fontWeight: '600' }],
                'sub-title-medium-14-600': ['14px', { lineHeight: '22px', fontWeight: '600' }],
                'sub-title-medium-14-500': ['14px', { lineHeight: '25px', fontWeight: '500' }],
                'sub-title-small-13-600': ['13px', { lineHeight: '20px', fontWeight: '600' }],
                'body-large-15-500': ['15px', { lineHeight: '20px', fontWeight: '500' }],
                'body-large-15-300': ['15px', { lineHeight: '20px', fontWeight: '400' }],
                'body-medium-13-500': ['13px', { lineHeight: '22px', fontWeight: '500' }],
                'body-small-12-500': ['12px', { lineHeight: '18px', fontWeight: '500' }],
                'body-small-10-500': ['10px', { lineHeight: '18px', fontWeight: '500' }],
                bodysmall10500: ['10px', { lineHeight: '18px', fontWeight: '500' }],
                bodysmall12600: ['12px', { lineHeight: '18px', fontWeight: '600' }],
            },

            boxShadow: {
                basic: '0px 0px 5px 0px rgba(200, 201, 209, 0.65)',
                'basic-solid': 'inset 0 0 0 10px #fff;',
                button: '0px 0px 10px rgba(122, 94, 219, 0.3)',
                'tertiary-hover': '0px 4px 10px rgba(122, 94, 219, 0.5)',
                'border-bottom': '0px -2px #2328C2 inset',
                'border-bottom-hover': '0px -2px #7A5EDB inset',
                card: '0px 0px 10px 0px rgba(122, 94, 219, 0.3)',
            },

            borderColor: {
                basic: 'rgba(113, 106, 133, 0.25)',
            },

            divideColor: {
                basic: 'rgba(113, 106, 133, 0.25)',
            },

            icon: {
                large: '20px',
                small: '16px',
                extraSmall: '14px',
            },

            borderRadius: {
                xl: '10px',
                md: '5px',
                sm: '3px',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['odd', 'even'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
};

module.exports = config;
