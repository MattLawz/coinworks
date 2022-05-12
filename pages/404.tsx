import Head from "next/head";
import {
    Heading,
    Stack,
    Center,
    Button,
    Skeleton,
    Spacer,
} from "@chakra-ui/react";
import Link from "next/link";

export default function error() {
    return (
        <>
            <Head>
                <title>404: Where Are You?</title>
                <link rel="icon" href="/btc.svg" />
                <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "fef3541e62cb41638edfcbc111e1bde8"}'></script>
            </Head>
            <Center>
                <Stack spacing={8}>
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Heading>Welcome to the void.</Heading>
                    <Link href="/">
                        <Button colorScheme="blue">
                            Go Home
                        </Button>
                    </Link>
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                </Stack>
            </Center>
        </>
    );
}
