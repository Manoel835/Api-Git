import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns:auto;
  gap: 0.2rem;
  margin: 1rem auto;
  @media screen and (max-width: 768px){
  grid-template-columns:auto auto;
  gap: 0.8rem;
  padding: 0 1rem;
  }
`

export const  Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.gray800};
  color: ${(props) => props.color || props.theme.colors.white};
  width: 97%;
  min-height: 2rem;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.3s, transform 0.3s;
  padding: 0 1rem;

  &:hover,
  &.select{
    background: ${(props) => props.color || props.theme.colors.gray300};
    color: ${(props) => props.color ? props.theme.colors.white : props.theme.colors.black};
    transform: translateX(5px) scale(1.02);
  }
  @media screen and (max-width: 768px){
    border-radius: 20px;
    &:hover,
    &.select{
      transform: translateX(0) scale(1.02);
    }
  }
`;

export const Cleaner = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.white};
  border: none;
  text-align: left;
  padding: 1rem;
  &:hover{
    color: ${(props) => props.theme.colors.gray400};
  }
  @media screen and (max-width: 768px){
  text-align: center;
  padding: 0 1rem;

  }
`
