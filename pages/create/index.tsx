import { Heading, Stack, Center, Button, Input } from "@chakra-ui/react";
import Container from "../../components/Container";
import React from "react";
import { CreateProps, CreateState } from "../../interfaces";
import copy from "copy-to-clipboard";

export default class Create extends React.Component<CreateProps, CreateState> {
    constructor(props: CreateProps) {
        super(props);
        this.state = {
            output: null,
            text: "📋 Copy To Clipboard",
        };
        this.handleChange = this.handleChange.bind(this);
        this.run = this.run.bind(this);
    }

    run() {
        copy(this.state.output);
        this.setState({
            text: "✅ Copied!",
        });
    }

    handleChange(element) {
        if (element.target.value == "") {
            this.setState({
                output: null,
            });
        } else {
            this.setState({
                output:
                    "https://coinworks.club/btc/" + element.target.value,
            });
        }
    }

    render() {
        return (
            <>
                <Container />
                <Center>
                    <Stack spacing={8}>
                        <Heading>Link Generator</Heading>
                        <Input
                            placeholder="Bitcoin Address"
                            onChange={this.handleChange}
                        />
                        {this.state.output ? (
                            <>
                                <Heading>Your link:</Heading>
                                <code>{this.state.output}</code>
                                <Button
                                    colorScheme="teal"
                                    variant="ghost"
                                    onClick={this.run}
                                >
                                    {this.state.text}
                                </Button>
                            </>
                        ) : null}
                    </Stack>
                </Center>
            </>
        );
    }
}
