    // MyReadmeComponent.tsx
    import React from 'react';
    import Markdown from 'react-markdown';
   // import readmeContent from '../innovations/README.md'; // Adjust path as needed

    const readmeContent = "Read me content";
    const ReadMeComponent: React.FC = () => {
      return (
        <div>
          <Markdown>{readmeContent}</Markdown>
        </div>
      );
     
    };
 export default ReadMeComponent;