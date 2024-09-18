"use client";

import { Box, MenuItem, MenuList } from "@mui/material";
import { ContainerMenu } from "./style";
import Image from "next/image";
import { MenuSocialMedia } from "@components/Menu/MenuSocialMedia";

export const Menu = () => {
  return (
    <ContainerMenu className="mt-5">
      <Box className="md:hidden">
        <MenuSocialMedia />
      </Box>
      <Box
        className="hidden	 md:flex w-full  bg-purple-dark/[.05] rounded-2xl mx-auto justify-between shadow-lg 	"
        sx={{ paddingX: 3, paddingY: 0.5 }}
      >
        <Image src="/Logo.svg" width={36} height={40} alt="logo" />
        <MenuList className="flex" sx={{ color: "#fff" }}>
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
