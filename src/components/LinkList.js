// src/components/LinkList.js
import React from 'react';
import LinkBox from './LinkBox';

const links = [
  {
    name: 'Example',
    url: 'https://example.com',
    logo: 'https://via.placeholder.com/64', // Beispiel-Logo
    description: 'Eine kurze Beschreibung der Website.',
  },
  // Weitere Links hinzufügen
];

const LinkList = () => (
  <div className="flex flex-wrap justify-center">
    {links.map((link, index) => (
      <LinkBox key={index} {...link} />
    ))}
  </div>
);

export default LinkList;