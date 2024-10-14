// src/components/LinkBox.js
import React from 'react';

const LinkBox = ({ logo, name, description, url }) => (
  <div className="bg-white rounded-lg shadow-md p-4 m-2 w-64">
    <img src={logo} alt={`${name} logo`} className="h-16 mx-auto" />
    <h2 className="text-xl font-bold mt-2">{name}</h2>
    <p className="text-gray-600">{description}</p>
    <a href={url} className="text-blue-500 hover:underline mt-4 block text-center">
      Besuchen
    </a>
  </div>
);

export default LinkBox;