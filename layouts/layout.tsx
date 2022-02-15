
/* IMPORT */

import React from 'react';
import {DefaultSeo, NextSeo, NextSeoProps} from 'next-seo';

/* LAYOUT */

const Layout = ({ className, seo, children }: { className?: string, seo?: NextSeoProps, children: React.ReactNode }) => (
  <div className={`layout ${className || ''}`}>
    <DefaultSeo title="Fabio Spampinato" titleTemplate="%s | Fabio Spampinato" description="The personal website of Fabio Spampinato." />
    <NextSeo {...seo} />
    {children}
  </div>
);

/* EXPORT */

export default Layout;
