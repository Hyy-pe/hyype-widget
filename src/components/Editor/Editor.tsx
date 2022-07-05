import EditorJS from '@editorjs/editorjs';
import React, { useEffect, useState } from 'react';

import { tools } from './tools';

const Editor = ({ editorRef, children, data, options }: any) => {
  const editorContainer = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // initialize
    const initEditorInstance = async () => {
      // cleanup
      if (editorRef.current) {
        await editorRef.current.isReady;
        editorRef.destroy();
      }

      // create instance
      editorRef.current = new EditorJS({
        holder: editorContainer.current,
        tools,
        data: data || {},
        initialBlock: 'paragraph',
        minHeight: 1,
        ...options,
      });
    };

    initEditorInstance();

    return () => {
      if (editorRef.current?.destroy) {
        editorRef.current?.destroy();
      }
    };
  }, []);

  return (
    <React.Fragment>
      <div
        className="container"
        ref={editorContainer}
        style={{
          width: '100%',
          padding: '0',
          minHeight: '400px',
          textAlign: 'left',
        }}
      ></div>
    </React.Fragment>
  );
};
export default Editor;
