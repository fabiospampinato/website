
/* IMPORT */

import React from 'react';
import Layout from '@layouts/layout';

/* THANKS */

//SCRIPT: $$('.pl-3 .f4').map ( ele => ele.textContent.trim ().replace ( /\s+Private/, ' (Private)' ) ).filter ( handle => !handle.includes ( '(Private)' ) ).reverse ().map ( handle => `<li><a href="https://github.com/${handle}">${handle}</a></li>` ).join ( '\n' )

const Thanks = () => (
  <Layout className="thanks" seo={{ title: 'Thanks' }}>
    <h1>Thanks ❤️</h1>
    <p>A big thank you to all the wonderful people listed in this page who decided to support me.</p>
    <p>You can support me, and have your name listed in this page, via <a href="https://github.com/sponsors/fabiospampinato" title="Sponsor me on GitHub">GitHub</a>. Alternatively I also accept direct one-time donations via <a href="https://www.paypal.me/fabiospampinato" title="Sponsor me on PayPal">PayPal</a>.</p>
    <h2>Super Supporters <span className="price">$25/month</span></h2>
    <ul>
      <li><a href="https://github.com/ramonza">Ramon Nogueira</a></li>
    </ul>
    <h2>Top Supporters <span className="price">$10/month</span></h2>
    <ul>
      <li><a href="https://github.com/bstinsonmhk">bstinsonmhk</a></li>
      <li><a href="https://github.com/jhconning">jhconning</a></li>
      <li><a href="https://github.com/nkaleidoskop">nkaleidoskop</a></li>
      <li><a href="https://github.com/sindresorhus">sindresorhus</a></li>
    </ul>
    <h2>Supporters <span className="price">$5/month</span></h2>
    <ul>
      <li><a href="https://github.com/BobMilli">BobMilli</a></li>
      <li><a href="https://github.com/vonnieda">vonnieda</a></li>
      <li><a href="https://github.com/kyldvs">kyldvs</a></li>
      <li><a href="https://github.com/epmoyer">epmoyer</a></li>
      <li><a href="https://github.com/mdombro">mdombro</a></li>
      <li><a href="https://github.com/wyudong">wyudong</a></li>
      <li><a href="https://github.com/tetafro">tetafro</a></li>
      <li><a href="https://github.com/highandmighty">highandmighty</a></li>
      <li><a href="https://github.com/nrgapple">nrgapple</a></li>
      <li><a href="https://github.com/da-moon">da-moon</a></li>
      <li><a href="https://github.com/sagar-chandarana">sagar-chandarana</a></li>
      <li><a href="https://github.com/simonrus">simonrus</a></li>
      <li><a href="https://github.com/paulofreitas">paulofreitas</a></li>
      <li><a href="https://github.com/ThelloD">ThelloD</a></li>
      <li><a href="https://github.com/stgarf">stgarf</a></li>
      <li><a href="https://github.com/gmazzola">gmazzola</a></li>
      <li><a href="https://github.com/maticzav">maticzav</a></li>
      <li><a href="https://github.com/ThierryRassat">ThierryRassat</a></li>
      <li><a href="https://github.com/djbreen7">djbreen7</a></li>
      <li><a href="https://github.com/ndakic">ndakic</a></li>
      <li><a href="https://github.com/cschlusche">cschlusche</a></li>
      <li><a href="https://github.com/captn3m0">captn3m0</a></li>
      <li><a href="https://github.com/dkutsanov">dkutsanov</a></li>
    </ul>
  </Layout>
);

/* EXPORT */

export default Thanks;
