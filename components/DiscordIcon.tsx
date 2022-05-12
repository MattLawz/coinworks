import { IconButton, useToast } from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";

const DiscordIcon = () => {
    const toast = useToast()

    function copy() {
        navigator.clipboard.writeText('mattdeere#6907');
    }

    function success() {
        toast({
            title: 'Copied Discord Tag to Clipboard',
            description: "Want to talk to me? Add me on Discord!",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'bottom-left',
          })
    }

    return (
            <IconButton aria-label="Discord" icon={<FaDiscord />} onClick={() => {copy();success();}} />
    );
};

export default DiscordIcon;
