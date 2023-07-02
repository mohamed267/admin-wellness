import { mode } from '@chakra-ui/theme-tools';
export const inputStyles = {
	components: {
		Input: {
			baseStyle: {
				field: {
					fontWeight: 400,
					borderRadius: '8px'
				}
			},

			variants: {
				
				auth: (props: any) => ({
					field: {
						fontWeight: '500',
						color: mode('black.700', 'white')(props),
						bg: mode('primary.bg.100', 'primary.bg.100')(props),
						border: '1px solid',
						borderColor: mode('gray.500', 'rgba(135, 140, 189, 0.3)')(props),
						borderRadius: '2xl',
						_placeholder: { color: 'secondaryGray.600', fontWeight: '400' },
						_hover: {
							borderColor: mode('primary.500', 'primary.500')(props),
						}
					}
				}),
				search: () => ({
					field: {
						border: 'none',
						py: '11px',
						borderRadius: 'inherit',
						_placeolder: { color: 'gray.700' }
					}
				}),
				primary: (props: any) => ({
					field: {
						fontWeight: '500',
						color: mode('black.900', 'white')(props),
						bg: mode('white', 'white')(props),
						border: '1px solid',
						borderColor: mode('gray.300', 'rgba(135, 140, 189, 0.3)')(props),
						borderRadius: '16px',
						boxShadow:"xs" , 
						_placeholder: { color: 'gray.600', fontWeight: '400' } , 
						_hover:{
							borderColor: mode('primary.500', 'rgba(135, 140, 189, 0.3)')(props),
							boxShadow:"sm" ,
						
						}
					}
				}),
				
				error: (props: any) => ({
					field: {
						fontWeight: '500',
						color: mode('red.600', 'red.600')(props),
						border: '1px solid',
						borderColor: mode('red.500', 'red.600')(props),
						borderRadius: 'md',
						boderColor: mode('red.500', 'red.500')(props),
						_focus:{
							borderColor: mode('red.500', 'red.600')(props),
						
						}
					}
				}),
			}
		},
		NumberInput : {
			baseStyle: {
				field: {
					fontWeight: 400,
					borderRadius: '8px'
				}
			},

			variants: {
				primary: (props: any) => ({
					field: {
						fontWeight: '500',
						color: mode('black.900', 'white')(props),
						bg: mode('transparent', 'transparent')(props),
						border: '1px solid',
						borderColor: mode('gray.500', 'rgba(135, 140, 189, 0.3)')(props),
						borderRadius: '16px',
						_placeholder: { color: 'gray.600', fontWeight: '400' } , 
						_hover:{
							borderColor: mode('primary.500', 'rgba(135, 140, 189, 0.3)')(props),
						
						}
					}
				}),
				auth: (props: any) => ({
					field: {
						fontWeight: '500',
						color: mode('black.700', 'white')(props),
						bg: mode('white', 'white')(props),
						border: '1px solid',
						borderColor: mode('gray.500', 'rgba(135, 140, 189, 0.3)')(props),
						borderRadius: 'md',
						_placeholder: { color: 'secondaryGray.600', fontWeight: '400' },
						_hover: {
							borderColor: mode('primary.500', 'primary.500')(props),
						}
					}
				}),

			}

		} ,
		PinInput: {
			baseStyle: {
				field: {
					fontWeight: 400,
					borderRadius: '8px'
				}
			},

			variants: {
				primary: (props: any) => ({
					field: {
						fontWeight: '500',
						color: mode('black.900', 'white')(props),
						bg: mode('transparent', 'transparent')(props),
						border: '1px solid',
						borderColor: mode('gray.500', 'rgba(135, 140, 189, 0.3)')(props),
						borderRadius: '16px',
						_placeholder: { color: 'gray.600', fontWeight: '400' } , 
						_hover:{
							borderColor: mode('primary.500', 'rgba(135, 140, 189, 0.3)')(props),
						
						}
					}
				}),
			}
		},
		Textarea: {
			baseStyle: {
				field: {
					fontWeight: 400,
					borderRadius: '8px'
				}
			},

			variants: {
				
				auth: {
					fontWeight: '500',
					color: 'black.700',
					bg: 'white',
					border: '2px solid',
					borderColor: 'gray.500',
					fontSize: "md",
					borderRadius: 'md',
					_placeholder: { color: 'secondaryGray.600', fontWeight: '400' },
					_hover: {
						borderColor: 'primary.500'
					}


				
				},
				search: () => ({
					field: {
						border: 'none',
						py: '11px',
						borderRadius: 'inherit',
						_placeolder: { color: 'gray.700' }
					}
				}),
				primary: (props: any) => ({
					field: {
						fontWeight: '500',
						color: mode('black.900', 'white')(props),
						bg: mode('transparent', 'transparent')(props),
						border: '1px solid',
						borderColor: mode('gray.500', 'rgba(135, 140, 189, 0.3)')(props),
						borderRadius: '16px',
						_placeholder: { color: 'gray.600', fontWeight: '400' } , 
						_hover:{
							borderColor: mode('primary.500', 'rgba(135, 140, 189, 0.3)')(props),
						
						}
					}
				}),
			}
		},
	}
};
