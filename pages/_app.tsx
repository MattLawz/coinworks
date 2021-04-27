import { ChakraProvider } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
    const { toggleColorMode } = useColorMode();
    return (
        {toggleColorMode}
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
export default MyApp;
