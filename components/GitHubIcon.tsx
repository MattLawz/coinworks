import { IconButton } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const GitHubIcon = () => {
    return (
        <Link href="https://github.com/MattLawz/coinworks">
            <IconButton aria-label="GitHub" icon={<AiFillGithub />} />
        </Link>
    );
};

export default GitHubIcon;
