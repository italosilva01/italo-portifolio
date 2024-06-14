import { Box } from "@mui/material";
import Image from "next/image";

export const MenuSocialMedia = () => {
  return (
    <Box className="flex justify-center gap-x-4 md:justify-start">
      <a href="https://github.com/italosilva01" target="_blank">
        <Image
          src="/github.svg"
          width={32}
          height={32}
          alt="GitHub Francisco Italo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/francisco-italo-silva/"
        target="_blank"
      >
        <Image
          src="/linkedin.svg"
          width={32}
          height={32}
          alt="Linkedin Francisco Italo"
        />
      </a>
    </Box>
  );
};
