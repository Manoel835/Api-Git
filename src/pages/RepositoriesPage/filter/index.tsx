import React from 'react'
import { Container, Selector, Cleaner} from './styles'

export default function Filter({languages} : FilterProps) {

  const selectors = languages.map(({name, count, color}) => (
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
interface Languages {
  name: string;
  count: number;
  color: string;
}
interface FilterProps{
  languages: Languages[];
}
