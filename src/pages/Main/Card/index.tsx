import {Button, Card, Form, Input, Logo, Title } from "./styles";
import {TfiSearch} from 'react-icons/tfi'
import React,{useState} from 'react'
import github from '../../../assets/github-logo.svg'

export function Box(){
  const [login, setLogin] = useState('');
  return(
    <Card>
      <Logo src={github} alt='Git'/>
      <Title>Api GitHub</Title>
      <Form>
        <Input placeholder="Usuário" value={login} onChange={(event) => setLogin(event.target.value)}/>
        <Button to={`/${login}/repositories`}>
          <TfiSearch size={42}/>
        </Button>
      </Form>
    </Card>
  )
}
