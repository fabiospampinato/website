
/* IMPORT */

import React from 'react';
import Button from '@components/button';
import Layout from '@layouts/layout';

/* INDEX */

const Index = () => (
  <Layout className="home" seo={{ title: 'Fabio Spampinato', titleTemplate: '%s' }}>
    <img className="logo" src="/static/images/avatar.png" title="Avatar" />
    <p className="name">Fabio Spampinato</p>
    <p className="description">Full-stack developer passionate about open source and empowering people.</p>
    <div className="buttons">
      <Button icon="github" href="https://github.com/fabiospampinato" title="GitHub Profile" />
      <Button icon="twitter" href="https://twitter.com/fabiospampinato" title="Twitter Profile" />
      <Button icon="email" href="mailto:spampinabio@gmail.com" title="Email" />
      <Button icon="ama" href="https://github.com/fabiospampinato/ama" title="Ask Me Anything" />
      <Button icon="heart" href="/thanks" title="Thanks" />
    </div>
  </Layout>
);

/* EXPORT */

export default Index;
