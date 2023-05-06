import { ReactNode, Suspense } from "react"
import { HashRouter as Router } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "lib/theme"
import { RtlProvider } from "./rtl"
import TranslationProvider from "./translation"







type AppProviderProps = {
    children?: ReactNode
}


export const AppProvider=(
    {
        children
    }:
    AppProviderProps
)=>{
    return (
        <ChakraProvider
            theme={theme}
        >
            <Suspense fallback={<div>Loading...</div>}>
                <TranslationProvider locale="en" >
                    <Router>
                        <RtlProvider>
                            {children}
                        </RtlProvider>
                    </Router>

                </TranslationProvider>
            
            </Suspense>
        </ChakraProvider>

    )



}