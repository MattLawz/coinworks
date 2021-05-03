import Head from "next/head";
import {
    Heading,
    Stack,
    Center,
    Text,
    List,
    ListItem,
    UnorderedList,
    Link,
    Code,
} from "@chakra-ui/react";
import Container from "../../components/Container";
import Copy from "../../components/Copy";

export default function Docs() {
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
                <script async data-api="/_hive" src="/bee.js"></script>
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
                            Bitcoin Address
                        </ListItem>
                        <ListItem>
                            A BTC address is validated to make sure your BTC
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
                            <Link
                                color="lightblue"
                                href="https://github.com/MattLawz/coinworks"
                            >
                                Open-source{" "}
                            </Link>
                        </ListItem>
                    </UnorderedList>

                    <Text fontSize="4xl" id="help">
                        How to use?
                    </Text>
                    <List>
                        <ListItem>
                            Use our{" "}
                            <Link color="lightblue" href="/create">
                                link generator
                            </Link>
                            .
                            <br />
                            <br />
                        </ListItem>
                        <Text fontSize="3xl" id="help">
                            Alternatively:
                        </Text>
                        <List>
                            <ListItem>
                                Firstly, get your Bitcoin address.
                            </ListItem>
                            <ListItem>Then, follow the format below:</ListItem>
                        </List>
                    </List>
                    <Code>https://coinworks.club/btc/yourbtcaddress</Code>
                    {
                        // @ts-ignore
                        <Copy btc="https://coinworks.club/btc/yourbtcaddress" />
                    }
                    <Text>
                        After you have done that, just share your link around
                        and then you are done!
                    </Text>
                </Stack>
            </Center>
        </>
    );
}
