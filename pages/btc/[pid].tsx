import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Code, Stack, Center, Heading, Tooltip, Image } from "@chakra-ui/react";
import Container from "../../components/Container";
import Copy from "../../components/Copy";
import cryptaddress from "cryptaddress-validator";
import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";

export default function btc() {
    const router = useRouter();
    const { pid } = router.query;
    const valid = cryptaddress("btc").test(pid);

    return (
        <>
            <Head>
                <title>Donate BTC To {pid}</title>
                <link rel="icon" href="/btc.svg" />
                <meta name="og:type" content="website" />
                <meta name="description" content={"Donate BTC To" + pid} />
                <meta
                    name="keywords"
                    content="donate bitcoin, coinbase, donation"
                />
                <meta name="og:description" content={"Donate BTC To" + pid} />
                <meta name="og:image" content="/btc.svg" />
            </Head>
            <Container />
            <Center>
                <Stack spacing={8}>
                    <Heading>Donate Bitcoin To</Heading>
                    <Code>{pid}</Code>
                    {valid ? null : (
                        <Alert status="error">
                            <AlertIcon />
                            <AlertTitle mr={7}>
                                This address might be invalid.
                            </AlertTitle>
                            <CloseButton
                                position="absolute"
                                right="8px"
                                top="8px"
                            />
                        </Alert>
                    )}
                    {
                        // @ts-ignore
                        <Copy btc={pid} />
                    }
                    <Link
                        href={"https://www.blockchain.com/btc/address/" + pid}
                    >
                        <a target="_blank" rel="noreferer">
                            <Tooltip
                                label="Click for Blockchain Explorer"
                                fontSize="md"
                            >
                                <Image
                                    boxSize="150px"
                                    objectFit="cover"
                                    src={
                                        "https://apimon.de/qr/L/bitcoin%3A" +
                                        pid
                                    }
                                    alt="QRCode"
                                />
                            </Tooltip>
                        </a>
                    </Link>
                </Stack>
            </Center>
        </>
    );
}
