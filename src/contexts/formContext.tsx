
import { useContext, createContext } from "react";




export const FormContext = createContext<{
    isError?: any
}>({
    isError: false
})


export const useFormContext= () => useContext(FormContext);
