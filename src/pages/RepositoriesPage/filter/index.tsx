import React from 'react'
import { Container, Selector, Cleaner} from './styles'

export default function Filter({languages, currentLanguage, onClick} : FilterProps) {

  const selectors = languages.map(({name, count, color}) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
      className={currentLanguage === name ? 'select' : ''}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ))

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}>
        Limpar
      </Cleaner>
    </Container>
  )
}
interface Languages {
  name: string;
  count: number;
  color: string

}
interface FilterProps{
  languages: Languages[];
  currentLanguage: string | undefined;
  onClick: (name:string | undefined) => void;
}
