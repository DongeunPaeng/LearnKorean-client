import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title="매일 한글을 공부하세요. 무료입니다."
        illustration={HeroIllustration}
      />
    </Layout>
  )
}

export default IndexPage;
