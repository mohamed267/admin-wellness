


import { mode } from '@chakra-ui/theme-tools';
export const buttonStyles = {
	components: {
		Button: {
			baseStyle: {
				borderRadius: '16px',
				boxShadow: '45px 76px 113px 7px rgba(112, 144, 176, 0.08)',
				transition: '.25s all ease',
				boxSizing: 'border-box',
                _firstLetter:{
                    textTransform:"capitalize"
                },
				_focus: {
					boxShadow: 'none'
				},
				_active: {
					boxShadow: 'none'
				}
			},
			variants: {
                primaryFill :(props:any)=>({
                    bg: mode("primary.500" , "primary.600")(props),
                    color : "white" , 
                    _hover :{
                        filter: "brightness(.95)",
                    }
                }),
               

				primaryOutline :(props:any)=>({
					border : "1px solid",
                    borderColor: mode("primary.500" , "primary.600")(props),
                    color : mode("primary.500" , "primary.600")(props) , 
                    _hover :{
                        filter: "brightness(.95)",
                        bg: mode("primary.500" , "primary.600")(props),
                        color : mode("white" , "white")(props) , 
                    }
                }),
				dangerFill :(props:any)=>({
                    bg: mode("red.500" , "red.600")(props),
                    color : "white" , 
                    _hover :{
                        filter: "brightness(.95)",
                    }
                }),
				successFill :(props:any)=>({
                    bg: mode("green.500" , "green.600")(props),
                    color : "white" , 
                    _hover :{
                        filter: "brightness(.95)",
                    }
                }),
                orangeFill:(props:any)=>({
                    bg: mode("orange.500" , "orange.600")(props),
                    color : "white" , 
                    _hover :{
                        filter: "brightness(.95)",
                    }
                }),

                whiteFill :(props:any)=>({
					border : "1px solid",
                    borderColor: mode("white" , "white")(props),
                    bg: mode("white" , "white")(props),
                    color : mode("gray.500" , "gray.600")(props) , 
                    _hover :{
                        filter: "brightness(.98)",
                    }
                }),
                whiteOutline: (props:any)=>({
					border : "1px solid",
                    borderColor: mode("white" , "white")(props),
                    color: mode("white" , "white")(props),
                    _hover :{
                        color: mode("primary.500" , "primary.500")(props),
                        bg: mode("white" , "white")(props),
                    }
                }),

                grayOutline: (props: any) => ({
                    fontWeight: '500',
                    color: mode('black.700', 'white')(props),
                    bg: mode('transparent', 'transparent')(props),
                    border: '1px solid',
                    borderColor: mode('gray.500', 'rgba(135, 140, 189, 0.3)')(props),
                    borderRadius: 'md',
                    _placeholder: { color: 'secondaryGray.600', fontWeight: '400' },
                    _hover: {
                        borderColor: mode('primary.500', 'primary.500')(props),
                    }	
				}),

                grayFill :(props:any)=>({
                    bg: mode("gray.600" , "gray.600")(props),
                    color : "white" , 
                    _hover :{
                        filter: "brightness(.95)",
                    }
                }),

                
			
			}
		}
	}
};
