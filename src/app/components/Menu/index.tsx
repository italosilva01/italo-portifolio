"use client";

import { Box, MenuItem, MenuList } from "@mui/material";
import { ContainerMenu } from "./style";
import Image from "next/image";

export const Menu = () => {
  return (
    <ContainerMenu className="md:px-7.30%">
      <Box className="flex justify-center gap-x-4 md:invisible">
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
      <Box className="hidden md:flex bg-purple-dark/[.05] rounded-2xl   justify-between">
        <Image src="/Logo.svg" width={36} height={40} alt="logo" />
        <MenuList className="flex ">
          <MenuItem>Home</MenuItem>
          <MenuItem>Sobre mim</MenuItem>
          <MenuItem>Portfólio</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Carreira</MenuItem>
          <MenuItem>Recomendações</MenuItem>
          <MenuItem>Contato</MenuItem>
        </MenuList>
      </Box>
    </ContainerMenu>
  );
};
