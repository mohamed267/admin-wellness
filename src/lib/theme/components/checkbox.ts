import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle, extendTheme } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const primary = definePartsStyle({
    control: {
        bg: "ckeckbox.bg.gray",
        borderRadius: "5px",
        borderColor: "checkbox.border.gray"
    }
})

export const checkBoxTheme= defineMultiStyleConfig({
  variants: { 
    primary },
})


export const CheckBoxComponent = extendTheme({
    components: { Checkbox: checkBoxTheme },
})
