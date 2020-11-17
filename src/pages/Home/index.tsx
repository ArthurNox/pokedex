import React from 'react';

import { TopSection, ContentSection } from './styles';
import api from '../../services/api';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import List from '../../components/List';


const Home: React.FC = () => {



  return (
    <>
      <TopSection >
        <Header />
      </TopSection>
      <ContentSection>
        <Menu />
        <List />
      </ContentSection>
    </>

  );
}

export default Home;