import Head from "next/head";
import { Heading, Stack, Center, Button, Input, } from "@chakra-ui/react";
import Container from "../components/Container";

export default function Create() {
    return (
        <>
            <Container />
            <Center>
<Stack spacing={8}>
<Heading>Link Generator</Heading>
<Input placeholder="Insert Bitcoin Address" id="insert" />
<Input placeholder="Output" id="output" />
<Button colorScheme="blue" variant="outline">Generate</Button>

</Stack>
</Center>
        </>
    );
}
