
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
      <Button icon="github" href="https://github.com/fabiospampinato" />
      <Button icon="twitter" href="https://twitter.com/fabiospampinato" />
      <Button icon="email" href="mailto:spampinabio@gmail.com" />
      <Button icon="ama" href="https://github.com/fabiospampinato/ama" />
    </div>
  </Layout>
);

/* EXPORT */

export default Index;
