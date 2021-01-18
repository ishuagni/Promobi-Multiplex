import React from 'react';

import promobi_logo from '../../assets/images/promobi_logo.png';
import scalefusion_logo from '../../assets/images/scalefusion_logo.png';
import './styles.scss';

/**
 * Description Component
 * @constructor
 */
function Description() {
  return (
    <div className="description-container">
      <img src={promobi_logo} alt="Promobi Logo" className="mb_logo" />
      <h2>An Enterprise SaaS products company</h2>
      <h3>We build SaaS Products</h3>
      <p>We are an Enterprise SaaS products company headquartered in Pune, India. Our portfolio includes products in Enterprise Mobility Management, Team Communication, Consumer Finance and Hardware as a service (HaaS) space.</p>
      <p>Across our product portfolio, we serve over 6000 customers across 120+ countries. Small and Midsize Business (SMB) to Enterprises across the diverse industry verticals use our products.</p>
      <h3>Our Products</h3>
      <ul>
        <li>Scalefusion</li>
        <li>NuovoPay</li>
        <li>Oneteam</li>
      </ul>
      <h2 className="scalefusion_title">Scalefusion</h2>
      <img src={scalefusion_logo} alt="scalefusion Logo" className="scalefusion_logo" />
    </div>
  );
}

export default Description;
