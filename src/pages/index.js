import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title="한글을 배우세요."
        content="무료로 한글 교육 자료를 보내드립니다."
        illustration={HeroIllustration}
      />
    </Layout>
  )
}

export default IndexPage;
