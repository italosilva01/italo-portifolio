import styled from '@emotion/styled';
import { MenuItem } from '@mui/material';
import { Box } from '@mui/system';

export const ContainerMenu = styled(Box)`
  width: 100%;
`;

export const MenuItemStyled = styled(MenuItem)`
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
