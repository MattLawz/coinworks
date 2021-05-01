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
                <title>404 Error</title>
                <link rel="icon" href="/btc.svg" />
            </Head>
            <Center>
                <Stack spacing={8}>
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Heading>404 Error</Heading>
                    <Heading>Seems Like You Are Lost...</Heading>
                    <Link href="https://donatebtc.vercel.app">
                        <Button colorScheme="teal" variant="ghost">
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
