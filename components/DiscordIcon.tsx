import { IconButton } from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

const DiscordIcon = () => {
    return (
        <Link href="https://discord.gg/h2NcyEt8NJ">
            <IconButton aria-label="Discord" icon={<FaDiscord />} />
        </Link>
    );
};

export default DiscordIcon;
