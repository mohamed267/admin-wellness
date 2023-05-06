import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import rtl from 'stylis-plugin-rtl'
import { useLocation } from 'react-router-dom'
import { ReactNode } from 'react'
import { useIntl } from 'react-intl'
import { Box } from '@chakra-ui/react'
import { DirectionContext } from 'contexts/directionContext'

// NB: A unique `key` is important for it to work!
const options = {
  rtl: { key: 'css-ar', stylisPlugins: [rtl] },
  ltr: { key: 'css-en' },
}

type RtlProps = {
    children: ReactNode
}

export function RtlProvider({ children }:RtlProps) {
    const location = useLocation();

    const { locale } = useIntl()

    const dir = locale === 'ar' ? 'rtl' : 'ltr'
    const cache = createCache(options[dir])
    return(
        <DirectionContext.Provider
            value={{
                dir
            }}
        >
            <CacheProvider value={cache} children={children} />
        </DirectionContext.Provider>
    )
}