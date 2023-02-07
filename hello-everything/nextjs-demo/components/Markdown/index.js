import React from 'react';
import { marked } from 'marked';

const Markdown = ({ source }) => {
  const html = marked(source);
  console.log(html);

  return (
    <div
      className="p-4"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Markdown;
