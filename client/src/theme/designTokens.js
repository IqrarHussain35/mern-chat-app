/* eslint-disable prettier/prettier */
import { grey } from '@mui/material/colors';

const getMode = (mode) => {
    if (mode === 'light') return true;
    else return false;
};
const getDesignTokens = (mode) => {
    getMode(mode);
    return {
        breakpoints: {
            keys: ['xs', 'sm', 'md', 'lg', 'xl'],
            values: {
                xs: 0,
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
            },
        },
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    // palette values for light mode
                    background: {
                        default: '#FFFFFF',
                    },
                    typography: {
                        fontFamily: 'cursive',
                    },
                    appColors: {
                        black: '#0C0507',
                        blackDull: '#1F1F1F',
                        white: '#FFFFFF',
                        greenLighter: '#F2FDE6',
                        dullBlue: '#022C49',
                        pink: '#FF5363',
                        pinkLight: '#FF00003B',
                        yellow: '#FFA901',
                        blue: '#24A8FA',
                        blueDull: '#022C49',
                        red: '#FF0000',
                        redDull: '#E84646',
                        green: '#0EBE7F',
                        greenLight: '#BDEA73',
                        grey: '#F8F9FA',
                        greyDark: '#E2E4E5',
                        greyDull: '#838996',
                        greenDull: '#244400',
                        aqua: '#62BBB4',
                        aquaLight: '#E0F6F6',
                        aquaDull: '#B5CCFA',
                        purpleLight: '#D3A5E9',
                        pista: '#B9F9B7',
                        orange: '#FFA900',
                        orangeLight: '#FFE1C7',
                        blueLight: '#C8E9E3',
                    },
                    primary: {
                        main: '#FE5F55',
                        light: '#fe7f77', //it changed the bg color of contained button,
                        dark: '#b1423b', //this shade is use for hover, like we hover on the any CONTAINED button it change bg color of contained button on hover.
                        contrastText: '#FFFFFF', //this shade is used for text contrast , its should be the opposite of main shade.
                    },
                    secondary: {
                        main: '#EEF5DB',
                        light: '#f1f7e2',
                        dark: '#a6ab99',
                        contrastText: '#c2c2c2',
                    },
                    error: {
                        main: '#d32f2f',
                        light: '#db5b58',
                        dark: '#93202a',
                        contrastText: '#ffffff',
                    },
                    success: {
                        main: '#2e7d39',
                        light: '#579759',
                        dark: '#205728',
                        contrastText: '#ffffff',
                    },
                    // divider: {
                    //     main: '#9055FD'
                    // },
                    text: {
                        primary: grey[900],
                        secondary: grey[800],
                    },
                    divider: '#CBD5E1',
                }
                : {
                    // palette values for dark mode
                    appColors: {
                        black: '#FFFFFF',
                        white: '#000000',
                        blackDull: '#1F1F1F',
                        greenLighter: '#F2FDE6',
                        dullBlue: '#022C49',
                        pink: '#FF5363',
                        pinkLight: '#FF00003B',
                        yellow: '#FFA901',
                        blue: '#24A8FA',
                        blueDull: '#022C49',
                        red: '#FF0000',
                        redDull: '#E84646',
                        green: '#0EBE7F',
                        greenLight: '#BDEA73',
                        // grey: '#F8F9FA',
                        grey: '#414141',
                        greyDark: '#E2E4E5',
                        greyDull: '#838996',
                        greenDull: '#244400',
                        aqua: '#62BBB4',
                        aquaLight: '#E0F6F6',
                        aquaDull: '#B5CCFA',
                        purpleLight: '#D3A5E9',
                        pista: '#B9F9B7',
                        orange: '#FFA900',
                        orangeLight: '#FFE1C7',
                        blueLight: '#C8E9E3',
                    },
                    background: {
                        default: '#000000',
                    },
                    primary: {
                        main: '#7CB839',
                        light: '#8cc841', //it changed the bg color of contained button,
                        dark: '#549026', //this shade is use for hover, like we hover on the any CONTAINED button it change bg color of contained button on hover.
                        contrastText: '#FFFFFF', //this shade is used for text contrast , its should be the opposite of main shade.
                    },
                    secondary: {
                        main: '#000000',
                        light: '#555555',
                        dark: '#f5f5f5',
                        contrastText: '#c2c2c2',
                    },
                    error: {
                        main: '#d32f2f',
                        light: '#db5b58',
                        dark: '#93202a',
                        contrastText: '#ffffff',
                    },
                    success: {
                        main: '#2e7d39',
                        light: '#579759',
                        dark: '#205728',
                        contrastText: '#ffffff',
                    },
                    // divider: {
                    //     main: '#9055FD'
                    // },
                    divider: '#434343',
                    text: {
                        primary: '#fff',
                        secondary: '#fff',
                    },
                }),
        },
        components: {
            // MuiAppBar: {
            //   styleOverrides: {
            //     root: {
            //       textTransform: 'none',
            //       backgroundColor: getMode ? '#FFFFFF' : '#000000',
            //     },
            //   },
            // },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        color: mode === 'light' ? '#7f7f7f' : '#5D5D5D',
                    },
                    // h4: {
                    //     fonatSize: '1.75rem',
                    //     fontWeight: 700,
                    //     color: getMode ? '#7f7f7f"' : 'white',
                    // },
                    // subtitle2: {
                    //     fontWeight: 200,
                    //     color: '#7f7f7f',
                    // },
                    // subtitle1: {
                    //     color: getMode ? '#7f7f7f' : '#fff',
                    // }
                },
            },
            // MuiDrawer: {
            //     styleOverrides: {
            //         root: {
            //             backgroundColor: mode === 'light' ? '#FFFFFF' : '#000000',
            //         },
            //     },
            // },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: mode === 'light' ? '#FFFFFF' : '#000000',
                    },
                },
            },
            MuiBox: {
                styleOverrides: {
                    root: {
                        backgroundColor: mode === 'light' ? '#FFFFFF' : '#000000',
                    },
                },
            },
            MuiGrid: {
                styleOverrides: {
                    root: {
                        backgroundColor: mode === 'light' ? '#FFFFFF' : '#000000',
                    },
                },
            },
            // MuiList:{
            //   styleOverrides:{
            //     root: {
            //       backgroundColor: mode === 'light' ? '#FFFFFF' : '#000000',
            //     },
            //   }
            // }
        },
    };
};
export default getDesignTokens;
