import React from 'react'
import { Container, Header, Avatar, Login, Name, Inner, Data  } from './styles'
import {MdGroup, MdLocationCity, MdWork, MdLink} from 'react-icons/md';

export default function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/89036370?v=4'/>
        <Login>Manoel835</Login>
        <Name>Manoel Felipe</Name>
      </Header>
      <Inner>
        <Data><MdGroup size={20}/>
        30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i></Data>
        <Data><MdWork size={20}/>Universidade De Brasília</Data>
        <Data><MdLocationCity size={20}/> Brasília</Data>
        <Data>
        <MdLink size={20}/>
        <a href='https://www.linkedin.com/in/manoel-felipe-84194b231/'>Linkedin</a>
        </Data>
      </Inner>
    </Container>
  )
}
