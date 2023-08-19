import React from 'react'
import { Container, Header, Avatar, Login, Name, Inner, Data  } from './styles'
import {MdGroup, MdLocationCity, MdWork, MdLink} from 'react-icons/md';



const Profile = ({ user }: ProfileProps) => (
    <Container>
      <Header>
        <Avatar src={user.avatar_url}/>
        <Login>{user.name}</Login>
        <Name>{user.login}</Name>
      </Header>
      <Inner>
        <Data><MdGroup size={20}/>
        {user.followers}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;{user.following}&nbsp;<i>seguindo</i></Data>
        {user.company && (<Data><MdWork size={20}/></Data>)}
        {user.location && (<Data><MdLocationCity size={20}/>{user.location}</Data>)}
        {user.blog && (<Data><MdLink size={20}/><a href={`\\${user.blog}`}>{user.blog}</a></Data>)}
      </Inner>
    </Container>
  );
  interface User {
    login: string;
    name: string;
    avatar_url: string;
    followers: number;
    following: number;
    company?: string | null;
    blog?: string | null;
    location?: string | null;
  }

  interface ProfileProps {
    user: User;
  }

export default Profile;
