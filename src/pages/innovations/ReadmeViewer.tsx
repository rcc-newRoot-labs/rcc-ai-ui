import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Import remark-gfm for GitHub Flavored Markdown

const ReadmeViewer = () => {
  const [markdownContent, setMarkdownContent] = useState('');


  useEffect(() => {

    // Dynamically import the README.md file
    // This approach works well with Create React App and similar build setups
   // import('./README.md')
     fetch(`./README.md`)
     // .then(res => {
     //   return fetch(res.default); // Fetch the content of the imported file
      //})
      .then(response => response.text())
      .then(text => {
        setMarkdownContent(text);
      })
      .catch(error => {
        console.error("Error fetching README.md:", error);
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="readme-container">
      <Markdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </Markdown>
    </div>
  );
};

export default ReadmeViewer;