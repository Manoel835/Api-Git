import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  width: 50rem;
  height: 50rem;
  background-color: ${(props) => props.theme.colors.gray800};
`
export const Logo = styled.img`
  margin-top: 1rem;
`
export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.white};
`
export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
;
`
export const Input = styled.input`
  background: ${(props) => props.theme.colors.black};
  width: 50%;
  height: 64px;
  line-height:64px;
  border: none;
  margin-right: 24px;
  padding: 10 2px;
  color: ${(props) => props.theme.colors.white};
  &::placeholder{
    color: ${(props) => props.theme.colors.white};
    padding: 10px;
  }
`
export const Button = styled(Link)`
  display:flex;
  align-items: center;
  justify-content:center;
  background: transparent;
  width: 80px;
  height: 64px;
  color: ${(props) => props.theme.colors.black};
  border: 3px solid ${(props) => props.theme.colors.white};
  transition: background 0.3s;
  &:hover{
  background: ${(props) => props.theme.colors.gray300};

  }
`
