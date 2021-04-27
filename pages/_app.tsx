import { ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark"
  }
});


function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
export default MyApp;
