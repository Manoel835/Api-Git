import { Button, Card, Form, Input, Logo, Title } from "./styles";
import {TfiSearch} from 'react-icons/tfi'
import github from '../../assets/github-logo.svg'

export function Box(){
  return(
    <Card>
      <Logo src={github} alt='Git'/>
      <Title> Api GitHub</Title>
      <Form>
        <Input placeholder="usuário"/>
        <Button>
          <TfiSearch size={42}/>
        </Button>
      </Form>
    </Card>
  )
}
