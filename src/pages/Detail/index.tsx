import React from 'react';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { TopSection, ContentSection } from '../../styles/global.style';

interface DetailProps {
  url: string;
}

const Detail: React.FC<DetailProps> = (props) => {

  



  return (
    <>
      <TopSection >
          <Header />
        </TopSection>
        <ContentSection>
          <Menu />
          <section>
            <h1>Detail</h1>
          </section>
        </ContentSection>
    </>

  );
}

export default Detail;