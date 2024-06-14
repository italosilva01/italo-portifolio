"use client";

import { Box, MenuItem, MenuList } from "@mui/material";
import { ContainerMenu } from "./style";
import Image from "next/image";
import { MenuSocialMedia } from "@components/Menu/MenuSocialMedia";

export const Menu = () => {
  return (
    <ContainerMenu className="mt-5 ">
      <Box className="md:hidden">
        <MenuSocialMedia />
      </Box>
      <Box
        className="hidden	 md:flex bg-purple-dark/[.05] rounded-2xl   justify-between shadow-lg	container"
        sx={{ paddingX: 3, paddingY: 0.5 }}
      >
        <Image src="/Logo.svg" width={36} height={40} alt="logo" />
        <MenuList className="flex">
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
