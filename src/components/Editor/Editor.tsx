import EditorJS from '@editorjs/editorjs';
import React, { useEffect, useState } from 'react';

import { tools } from './tools';

const Editor = ({ setEditor, editorRef, children, data, options }: any) => {
  // useEditor(tools, { data, setEditor }, options);

  const [editorInstance, setEditorInstance] = useState<any>(null);
  const editorContainer = React.useRef<HTMLDivElement>(null);
  // const { data: ignoreData, tools: ignoreTools, holder: ignoreHolder, ...editorOptions } = options;

  // initialize
  useEffect(() => {
    // if (editor) return;

    const initEditorInstance = async () => {
      // cleanup;
      console.log('>>> editorContainer.current: ', editorContainer.current);
      debugger;

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

    if (editorRef.current?.destroy) {
      editorRef.current.destroy();
    }

    initEditorInstance();
    // setEditorInstance(editorJs);

    // if (editorJs && setEditor) {
    //   setEditor(editorJs);
    // }

    // cleanup
    return () => {
      // @ts-ignore
      if (editorRef.current?.destroy) {
        editorRef.current?.destroy();
      }

      console.log('11111 cleanup editorJs !!!!: ');
      // setEditorInstance(null);

      // editorJs?.destroy();

      // editorJs.isReady
      //   .then(() => {
      //     console.log('555555');
      //   })
      //   .catch((e) => console.error('ERROR editor cleanup', e));
    };
  }, []);

  return (
    <React.Fragment>
      <div
        className="container"
        ref={editorContainer}
        id="hyype-editor"
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
