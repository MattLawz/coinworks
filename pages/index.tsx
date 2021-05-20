import Head from "next/head";
import { Heading, Stack, Center, Text, Button } from "@chakra-ui/react";
import Container from "../components/Container";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Coinworks</title>
                <link rel="icon" href="/btc.svg" />
                <meta name="og:type" content="website" />
                <meta
                    name="description"
                    content="A website that allows you to make your own custom Bitcoin donation link! No login or registration needed, comes with many cool features."
                />
                <meta
                    name="keywords"
                    content="coinworks, donate bitcoin, coinbase, donation"
                />
                <meta
                    name="og:description"
                    content="A website that allows you to make your own custom Bitcoin donation link! No login or registration needed, comes with many cool features."
                />
                <meta name="og:image" content="/btc.svg" />
                <meta name="theme-color" content="#f2a900" />
                <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "fef3541e62cb41638edfcbc111e1bde8"}'></script>
                <script>
     !function(){var e=window,i=document,t="customerly",n="queue",o="load",r="settings",u=e[t]=e[t]||[];if(u.t){return void u.i("[customerly] SDK already initialized. Snippet included twice.")}u.t=!0;u.loaded=!1;u.o=["event","attribute","update","show","hide","open","close"];u[n]=[];u.i=function(t){e.console&&!u.debug&&console.error&&console.error(t)};u.u=function(e){return function(){var t=Array.prototype.slice.call(arguments);return t.unshift(e),u[n].push(t),u}};u[o]=function(t){u[r]=t||{};if(u.loaded){return void u.i("[customerly] SDK already loaded. Use customerly.update to change settings.")}u.loaded=!0;var e=i.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://messenger.customerly.io/launcher.js";var n=i.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};u.o.forEach(function(t){u[t]=u.u(t)})}();
    
     customerly.load({
           "app_id": "474a02da"
     });
</script>
            </Head>
            <Container />
            <Center>
                <Stack spacing={8}>
                    <Heading>Coinworks</Heading>
                    <Text>No registrations. Easy. Fast.</Text>
                    <Link href="/create">
                        <a>
                            <Button
                                rightIcon={<ArrowForwardIcon />}
                                colorScheme="teal"
                                variant="outline"
                            >
                                Get Started
                            </Button>
                        </a>
                    </Link>
                    <Link href="/docs">
                        <a rel="noreferer">
                            <Button
                                rightIcon={<ArrowForwardIcon />}
                                colorScheme="teal"
                                variant="outline"
                            >
                                Documentation
                            </Button>
                        </a>
                    </Link>
                </Stack>
            </Center>
        </>
    );
}
