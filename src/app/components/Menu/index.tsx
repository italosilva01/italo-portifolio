'use client';

import { Box, MenuList } from '@mui/material';
import { MenuSocialMedia } from '@components/Menu/MenuSocialMedia';
import Image from 'next/image';

import { ContainerMenu, MenuItemStyled } from './style';

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
        <MenuList className="flex" sx={{ color: '#fff' }}>
          <MenuItemStyled>Home</MenuItemStyled>
          <MenuItemStyled><a href='#about'>Sobre mim</a></MenuItemStyled>
          <MenuItemStyled><a href="#portfolio">Portfólio</a></MenuItemStyled>
          <MenuItemStyled>Skills</MenuItemStyled>
          <MenuItemStyled>Carreira</MenuItemStyled>
          <MenuItemStyled>Recomendações</MenuItemStyled>
          <MenuItemStyled>Contato</MenuItemStyled>
        </MenuList>
      </Box>
    </ContainerMenu>
  );
};
