// src/components/LinkItem.js
import React from 'react';

const LinkItem = ({ url, title }) => (
  <div className="p-4 border-b">
    <a href={url} className="text-blue-500 hover:underline">
      {title}
    </a>
  </div>
);

export default LinkItem;