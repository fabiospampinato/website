
/* IMPORT */

import '@static/scss/index.scss';

import React from 'react';
import {DefaultSeo, NextSeo, NextSeoProps} from 'next-seo';

/* LAYOUT */

const Layout = ({ className, seo, children }: { className?: string, seo?: NextSeoProps, children: React.ReactNode }) => (
  <div className={`layout ${className || ''}`}>
    <DefaultSeo title="Fabio Spampinato" description="My personal website." />
    <NextSeo {...seo} />
    {children}
  </div>
);

/* EXPORT */

export default Layout;
