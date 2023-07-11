import { mode } from '@chakra-ui/theme-tools';




export const globalStyles = {
	colors: {
        primary: {
            bg: {
                100: "#f4f9f8",
            },
            100: '#D6FFFB',
            200: '#99FFF5',
            300: '#85FFF3',
            400: '#00E0CA',
            500: '#00A18E',
            600: '#007B73',
            700: '#00665C',
            800: '#003D37',
            900: '#001412',
        },

        checkbox:{
            border: {
                gray: "#C4C8D4"
            },
            bg: {
                gray: "#F4F5F7"
            }
        },
        
        sidebar:{
            active:{
                iconStroke: "#00A18E",
                iconFill:"#00A18E",
                text: "#00A18E",
                identifier: "#00A18E"
            },
            logout:{
                iconStroke: "#FB6B63",
                iconFill:"#FB6B63",
                text: "#FB6B63",
                identifier: "#FB6B63"
            },
            notActive: {
                iconStroke: "#A3A4AE",
                iconFill:"#A3A4AE" ,
                text: "#6F7181",
                identifier: "transparent"
            }
        },
        gray : {
            50: '#FCFCFC',
            100: '#FAFAFB',
            200: '#efefef', 
            300: '#F1F1F1',
            400: '#C8C6C6',
            500: "#707070", 
            600: '#2e3237',
            700: '#363939',
            800: "#18181B"
        },  

        blue: {
            900: "#04103B",
        },
        black: {
            200: "#C4C8D4",
            500: "#0A0A0A",
        },
        youtube: "#CD201F" ,
        facebook: "#1976D2",
        twitter: "#03A9F4",
        secondaryGray: {
			100: '#E0E5F2',
			200: '#E1E9F8',
			300: '#F4F7FE',
			400: '#E9EDF7',
			500: '#8F9BBA',
			600: '#A3AED0',
			700: '#707EAE',
			800: '#707EAE',
			900: '#1B2559'
		},
        warning:{
            500: "#F7FF00"
        },
        badge: {
            yellow: "#E9FF0E"
        },
        // dark: {
        //     100: '#aac0fe',
        //     200: '#a3b9f8',
        //     300: '#728fea',
        //     400: '#3652ba',
        //     500: '#1b3bbb',
        //     600: '#24388a',
        //     700: '#1B254B',
        //     800: '#111c44',
        //     900: '#0b1437'
        // },
        orange: {
            100: "#FFDEC2",
            200: "#FFBE85",
            300: "#FF9D47",
            400: "#FF871F",
            500: "#FC7700" , 
            600: "#CC5F00", 
            700: "#A34C00",
            800: "#7A3900",
            900: "#522600",
        },
        red:{
            500: "#FF0000"
        },
        yellow:{
            400: "#EEFF01"
        }
		
	},
	styles: {
		global: (props: any) => ({
            
			body: {
				overflowX: 'hidden',
                bg: mode('primary.bg.100', 'dark.900')(props),
				fontFamily: "'Roboto', sans-serif",
				letterSpacing: '.2px'
			},
			input: {
				color: 'gray.700'
			},
			html: {
				fontFamily: "'Roboto', sans-serif"
			},
            "*::-webkit-scrollbar": {
                display: "none !important"
            },
            '.qrReader': {  
                section:{
                    div: {
                        boxShadow: "unset !important",
                        border: "none !important"
                    }
                }
            }
		})
	}
};
