import Head from "next/head";
import {
    Heading,
    Stack,
    Center,
    Text,
    ListItem,
    UnorderedList,
    Button
} from "@chakra-ui/react";
import Container from "../../components/Container";
import Link from "next/link"

export default function DocsIndex() {
    return (
        <>
            <Head>
            <title>Coinworks</title>
                <link rel="icon" href="/btc.svg" />
                <meta name="og:type" content="website" />
                <meta
                    name="description"
                    content="A website that allows you to make your own custom cryptocurrency donation link! No login or registration needed, comes with many cool features."
                />
                <meta
                    name="keywords"
                    content="coinworks, donate bitcoin, coinbase, donation"
                />
                <meta
                    name="og:description"
                    content="A website that allows you to make your own custom cryptocurrency donation link! No login or registration needed, comes with many cool features."
                />
                <meta name="og:image" content="/btc.svg" />
                <meta name="theme-color" content="#f2a900" />
                <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "fef3541e62cb41638edfcbc111e1bde8"}'></script>
            </Head>
            <Container />
            <Center>
                <Stack spacing={8}>
                    <Heading>Documentation</Heading>

                    <Text id="why" fontSize="4xl">
                        Why us?
                    </Text>
                    <UnorderedList spacing={1}>
                        <ListItem>
                            There is no registration or logins, it is meant to
                            be easy and fast
                        </ListItem>
                        <ListItem>
                            A QR code is automatically generated for that
                            crypto Address
                        </ListItem>
                        <ListItem>
                            The crypto address is validated to make sure your BTC
                            isn't wasted
                        </ListItem>
                        <ListItem>Easy copy to clipboard button</ListItem>
                        <ListItem>
                            A Blockchain Explorer link is available for you if
                            you click the QR code
                        </ListItem>
                        <ListItem>No Advertisements period</ListItem>
                        <ListItem>Fast and up 24/7</ListItem>
                        <ListItem>
                            <Link href="https://github.com/MattLawz/coinworks">
                            <a target="_blank">
                                <Text as="i" color="blue.600">
                                Open-Source
                                </Text>
                                {" "}
                                </a>
                            </Link>
                        </ListItem>
                    </UnorderedList>

                    <Text fontSize="4xl" id="help">
                        Link Generator
                    </Text>

                    <Link href="https://coinworks.club/docs/btc">
                    <a target="_blank">
                    <Button colorScheme="teal" variant="outline">
                     Generate Bitcoin Link
                    </Button>
                    </a>
                    </Link>

                    <Link href="https://coinworks.club/docs/bch">
                    <a target="_blank">
                    <Button colorScheme="teal" variant="outline">
                     Generate Bitcoin Cash Link
                    </Button>
                    </a>
                    </Link>

                    <Link href="https://coinworks.club/docs/eth">
                    <a target="_blank">
                    <Button colorScheme="teal" variant="outline">
                     Generate Ethereum Link
                    </Button>
                    </a>
                    </Link>

                    <Link href="https://coinworks.club/docs/ltc">
                    <a target="_blank">
                    <Button colorScheme="teal" variant="outline">
                     Generate Litecoin Link
                    </Button>
                    </a>
                    </Link>

                    <Link href="https://coinworks.club/docs/xmr">
                    <a target="_blank">
                    <Button colorScheme="teal" variant="outline">
                     Generate Monero Link
                    </Button>
                    </a>
                    </Link>

                    <Link href="https://coinworks.club/docs/doge">
                    <a target="_blank">
                    <Button colorScheme="teal" variant="outline">
                     Generate Dogecoin Link
                    </Button>
                    </a>
                    </Link>
                </Stack>
            </Center>
        </>
    );
}
