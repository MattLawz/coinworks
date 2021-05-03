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
