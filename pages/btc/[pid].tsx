import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import {
    Code,
    Stack,
    Center,
    Heading,
    Tooltip,
    Image,
    Alert,
    AlertIcon,
    AlertTitle,
} from "@chakra-ui/react";
import Container from "../../components/Container";
import Copy from "../../components/Copy";
import cryptaddress from "cryptaddress-validator";

export default function btc() {
    const router = useRouter();
    const { pid } = router.query;
    const valid = cryptaddress("btc").test(pid);

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
                <script
                    defer
                    src="https://static.cloudflareinsights.com/beacon.min.js"
                    data-cf-beacon='{"token": "fef3541e62cb41638edfcbc111e1bde8"}'
                ></script>
            </Head>
            <Container />
            <Center>
                <Stack spacing={5}>
                    <Heading>Donate Bitcoin To</Heading>
                    <Code>{pid}</Code>
                    {valid ? null : (
                        <Alert status="error">
                            <AlertIcon />
                            <AlertTitle textAlign="center" mr={5}>
                                This address might be invalid.
                            </AlertTitle>
                        </Alert>
                    )}
                    {
                        // @ts-ignore
                        <Copy btc={pid} />
                    }
                    <Center>
                        <Link
                            href={
                                "https://www.blockchain.com/btc/address/" + pid
                            }
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
                                            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=bitcoin:" +
                                            pid
                                        }
                                        alt="QRCode"
                                    />
                                </Tooltip>
                            </a>
                        </Link>
                    </Center>
                </Stack>
            </Center>
        </>
    );
}
