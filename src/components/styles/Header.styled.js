import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #ebfbff;
  padding: 40px 0;
`;

// vamos a hacer todos los comp que se usen solo en el Header en este archivo, mientras todos los archivos sean exportados los puedo hacer todos juntos aca

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  } ;
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  } ;
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  } ;
`;
