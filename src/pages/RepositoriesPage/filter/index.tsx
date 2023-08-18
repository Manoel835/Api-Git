import React from 'react'
import { Container, Selector, Cleaner} from './styles'

export default function Filter() {
  const langs =[
    {name:'JavaScript', count: 5, color: '#FCC419'},
    {name:'TypeScript', count: 5, color: '#4263Eb'},
  ];
  const selectors = langs.map(({name, count, color}) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ))

  return (
    <Container>
      {selectors}
      <Cleaner>
        Limpar
      </Cleaner>
    </Container>
  )
}
