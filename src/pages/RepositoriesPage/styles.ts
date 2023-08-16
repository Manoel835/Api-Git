import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(porps) => porps.theme.colors.gray800};
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: hidden;
`;

export const Main = styled.section`
  background: ${(porps) => porps.theme.colors.gray700};
  width: 100%;
  overflow-y: hidden;
  padding: 40px;

  @media screen and (max-width: 768px){
    height: 100%;
  }
  @media screen and (max-width: 576px){
    padding: 40px 20px;
  }
`;
