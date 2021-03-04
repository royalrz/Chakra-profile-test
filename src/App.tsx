import * as React from "react";
import { Profile } from "./component";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "./const/colors";

const theme = extendTheme({ colors });

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Profile />
    </ChakraProvider>
  );
};

export default App;
