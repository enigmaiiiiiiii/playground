import React, { useState } from 'react';
import marked from 'marked';

function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState('# Markdown Example\n\nThis is a paragraph in markdown.\n\n## List\n\n- item 1\n- item 2\n- item 3');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea id="editor" onChange={handleChange} value={markdown} />
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </div>
  );
}

export default MarkdownPreviewer;
