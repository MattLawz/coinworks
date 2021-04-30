import Head from "next/head";
import { Heading, Stack, Center, Text, List, ListItem, UnorderedList, Link, Code} from "@chakra-ui/react";
import Container from "../../components/Container";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Copy from "../../components/Copy";

export default function Docs() {
    return (
        <>
             <Head>
                <title>Donate BTC</title>
                <link rel="icon" href="/btc.svg" />
                <meta name="og:type" content="website" />
                <meta
                    name="description"
                    content="Custom Bitcoin Donation Page"
                />
                <meta
                    name="keywords"
                    content="donate bitcoin, coinbase, donation"
                />
                <meta
                    name="og:description"
                    content="Custom Bitcoin Donation Page"
                />
                <meta name="og:image" content="/btc.svg" />
                <meta name="theme-color" content="#f2a900" />
            </Head>
        <Container />
        <Center>
         <Stack spacing={8}>
        <Heading>Documentation</Heading>

        <Text fontSize="4xl">Why Us?</Text>
        <UnorderedList spacing={1}>
  <ListItem>There is no registration or logins, it is meant to be easy and fast</ListItem>
  <ListItem>A QR code is automatically generated for that Bitcoin Address</ListItem>
  <ListItem>A BTC address is validated to make sure your BTC isn't wasted</ListItem>
  <ListItem>Easy copy to clipboard button</ListItem>
  <ListItem>A Blockchain Explorer link is available for you if you click the QR code</ListItem>
  <ListItem>No Advertisements period</ListItem>
  <ListItem>Fast and up 24/7</ListItem>
  <ListItem>  <Link color="teal" href="https://github.com/MattLawz/bitcoin-donate">
Open Source  </Link>
</ListItem>
</UnorderedList>

<Text fontSize="4xl" id="help">How To Use Bitcoin Donate?</Text>
<List>
    <ListItem>First, you want to receive your Bitcoin Address</ListItem>
    <ListItem>Then, you want to follow the format below:</ListItem>
</List>
<Code>https://donatebtc.vercel.app/btc/yourbtcaddress</Code>
{
                        // @ts-ignore
                        <Copy btc="https://donatebtc.vercel.app/btc/yourbtcaddress" />
                    }
                    <Text>After you have done that, just share your link around and then you are done!</Text>


            </Stack>
            </Center>
        </>
    );
}
