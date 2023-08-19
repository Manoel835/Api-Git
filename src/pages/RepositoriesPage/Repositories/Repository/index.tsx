import React from 'react'
import { Container, Name, Description, Footer, Lang, Link  } from './styles'
export default function Repository() {
  return (
    <Container>
      <Name> Repositorio Name</Name>
      <Description>Repositorio Descrição</Description>
      <Footer color='#FE8C00'>
        <Lang>Repositorio Lang</Lang>
        <Link href='https://github.com/' target='_blank'>Ver</Link>
      </Footer>
    </Container>
  )
}
