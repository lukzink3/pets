import { styled } from "@mui/material";

export const HeaderContainer = styled("header")`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f0f0f0;
`;

export const HeaderLogo = styled("img")`
  width: 230px;
  padding: ${({ theme }) => theme.spacing(6)};
`;
