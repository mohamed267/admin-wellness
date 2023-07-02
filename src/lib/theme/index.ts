import { extendTheme, HTMLChakraProps, ThemeConfig, ThemingProps } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { CardComponent } from "./additions/card";
import { inputStyles } from "./components/input";
import { buttonStyles } from "./components/button";
import { StepsTheme as Steps } from 'chakra-ui-steps';
import { CheckBoxComponent } from "./components/checkbox";

// import { CardComponent } from './additions/card';
// import { buttonStyles } from './components/button';
// import { inputStyles } from './components/input';
// import { globalStyles } from './styles';
const config: ThemeConfig = {
    initialColorMode: 'light',
    // useSystemColorMode: false,
  }

export default extendTheme(
    {
      config,
      direction: "rtl"
    },
    {
      components: {
        Steps,
      },
    },
    globalStyles,
    CardComponent,
    inputStyles,
    buttonStyles,
    CheckBoxComponent

);

export interface CustomCardProps extends HTMLChakraProps<'div'>, ThemingProps {}

