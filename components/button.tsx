
/* IMPORT */

import * as React from 'react';

/* BUTTON */

const Button = ({ className, href, icon }: { className?: string, href: string, icon: string }) => (
  <a className={`button ${className || ''}`} href={href}>
    <img src={`/static/icons/${icon}.svg`} alt={icon} width="24" />
  </a>
);

/* EXPORT */

export default Button;
