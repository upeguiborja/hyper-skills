import { extendTheme, ThemeOverride } from '@chakra-ui/react'
import { global } from './styles'

const overrides: ThemeOverride = {
  styles: {
    global: global,
  },
}

export const theme = extendTheme(overrides)
