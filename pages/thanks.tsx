
/* IMPORT */

import React from 'react';
import Layout from '@layouts/layout';

/* THANKS */

//SCRIPT: console.log ( $$('.sponsor-cell:nth-child(2)').map ( ele => ele.textContent.trim ().replace ( /\s+Private/, ' (Private)' ) ).filter ( handle => !handle.includes ( '(Private)' ) ).reverse ().map ( handle => `<li><a href="https://github.com/${handle}">${handle}</a></li>` ).join ( '\n' ) )

const Thanks = () => (
  <Layout className="thanks" seo={{ title: 'Thanks' }}>
    <h1>Thanks ❤️</h1>
    <p>A big thank you to all the wonderful people listed in this page who decided to support me.</p>
    <p>You can support me, and have your name listed in this page, via <a href="https://github.com/sponsors/fabiospampinato" title="Sponsor me on GitHub">GitHub</a>. Alternatively I also accept direct one-time donations via <a href="https://www.paypal.me/fabiospampinato" title="Sponsor me on PayPal">PayPal</a>.</p>
    <h2>Super Supporters <span className="price">$25/month</span></h2>
    <ul>
      <li><a href="https://github.com/jhconning">jhconning</a></li>
    </ul>
    <h2>Top Supporters <span className="price">$10/month</span></h2>
    <ul>
      <li><a href="https://github.com/epmoyer">epmoyer</a></li>
      <li><a href="https://github.com/nkaleidoskop">nkaleidoskop</a></li>
      <li><a href="https://github.com/bjornhauge">bjornhauge</a></li>
      <li><a href="https://github.com/Senth">Senth</a></li>
      <li><a href="https://github.com/bluebirch">bluebirch</a></li>
      <li><a href="https://github.com/aecea">aecea</a></li>
    </ul>
    <h2>Supporters <span className="price">$5/month</span></h2>
    <ul>
      <li><a href="https://github.com/BobMilli">BobMilli</a></li>
      <li><a href="https://github.com/vonnieda">vonnieda</a></li>
      <li><a href="https://github.com/wyudong">wyudong</a></li>
      <li><a href="https://github.com/sagar-chandarana">sagar-chandarana</a></li>
      <li><a href="https://github.com/simonrus">simonrus</a></li>
      <li><a href="https://github.com/ThelloD">ThelloD</a></li>
      <li><a href="https://github.com/gmazzola">gmazzola</a></li>
      <li><a href="https://github.com/cschlusche">cschlusche</a></li>
      <li><a href="https://github.com/gorhack">gorhack</a></li>
      <li><a href="https://github.com/satiowadahc">satiowadahc</a></li>
      <li><a href="https://github.com/carondolet">carondolet</a></li>
      <li><a href="https://github.com/freisatz">freisatz</a></li>
      <li><a href="https://github.com/atlessenger">atlessenger</a></li>
      <li><a href="https://github.com/genericmoniker">genericmoniker</a></li>
      <li><a href="https://github.com/Alexhuszagh">Alexhuszagh</a></li>
      <li><a href="https://github.com/marcusyoung">marcusyoung</a></li>
    </ul>
  </Layout>
);

/* EXPORT */

export default Thanks;
