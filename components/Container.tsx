import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import Link from "next/link";
import styled from "@emotion/styled";
import { ContainerProps } from "../interfaces";

import DarkModeSwitch from "../components/DarkModeSwitch";
import GitHubIcon from "../components/GitHubIcon";

const Container = ({ children }: ContainerProps) => {
    const { colorMode } = useColorMode();

    const bgColor = {
        light: "white",
        dark: "#1A202C",
    };

    const color = {
        light: "black",
        dark: "white",
    };

    const navHoverBg = {
        light: "gray.600",
        dark: "gray.300",
    };

    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height 0.5s, line-height 0.5s;
    `;

    return (
        
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="800px"
                minWidth="356px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[2, 6, 6]}
                py={2}
                mt={8}
                mb={[0, 0, 8]}
                mx="auto"
            >
                <Box>
                    <Link href="/" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            p={[1, 2, 4]}
                            _hover={{ backgroundColor: navHoverBg[colorMode] }}
                        >
                            Home
                        </Button>
                    </Link>
                    <Link
                        href="https://app.archbee.io/doc/9vcLAEz22e8v64S5Y2Ck3/78sRUU71EiCZ4NHolJYqN"
                        passHref
                    >
                        <Button
                            as="a"
                            variant="ghost"
                            p={[1, 2, 4]}
                            _hover={{ backgroundColor: navHoverBg[colorMode] }}
                        >
                            Documentation
                        </Button>
                    </Link>
                    <Link
                        href="https://app.archbee.io/doc/ByB0SITocaEpKZ1Y6QzTf/JLZfnLzWITtp3tqRXEOaK"
                        passHref
                    >
                        <Button
                            as="a"
                            variant="ghost"
                            p={[1, 2, 4]}
                            _hover={{ backgroundColor: navHoverBg[colorMode] }}
                        >
                            Why Us
                        </Button>
                    </Link>
                </Box>
                <div>
                    <p>
                        <DarkModeSwitch />
                             
                        <GitHubIcon />
                    </p>
                </div>
            </StickyNav>
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    );
};

export default Container;
