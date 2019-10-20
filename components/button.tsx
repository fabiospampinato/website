
/* IMPORT */

import * as React from 'react';

/* BUTTON */

const Button = ({ className, href, icon, title }: { className?: string, href: string, icon: string, title: string }) => (
  <a className={`button ${className || ''}`} href={href} title={title}>
    <img src={`/static/icons/${icon}.svg`} alt={icon} width="24" />
  </a>
);

/* EXPORT */

export default Button;
