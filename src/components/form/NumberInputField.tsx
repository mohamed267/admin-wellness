import FieldWrapper, { FieldWrapperPassThroughProps } from './FieldWrapper'
import { NumberInput, NumberInputField } from '@chakra-ui/react'

import { UseFormRegisterReturn } from "react-hook-form"
import { useIntl } from 'react-intl'

type NumberInputFieldProps = FieldWrapperPassThroughProps  & {
    registration : Partial<UseFormRegisterReturn> , 
    inputStyle?: any,
    placeholder?:string,
    [rest:string]: any
}


const NumberInputFieldComponent = (
   {
    registration ,
    placeholder="", 
    error , 
    label  , 
    inputStyle={},
    ...rest
   }:NumberInputFieldProps

) => {
    const int1 =  useIntl()
    return (
        <FieldWrapper
        error={error}
        label={label}
        >
            <NumberInput 
             
    {...inputStyle}


            >
            <NumberInputField
                py={2}
                fontSize="sm"
                {...registration}
                placeholder={
                    placeholder ? int1.formatMessage({id: placeholder}) : ""
                  }
                  {...rest}
            />
            

            </NumberInput> 
        </FieldWrapper>
    )
}


export default NumberInputFieldComponent