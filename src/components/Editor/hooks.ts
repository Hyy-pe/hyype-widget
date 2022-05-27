import { useCallback, useState, useEffect } from "react";
import initialData from './data.json';

export const dataKey = 'editorData';

export const useSaveCallback = async(editor:any,loreType:string,selectedNft:any) => {
  // return useCallback(async () => {
    if (!editor) return;
    try {
      const out = await editor.save();
      // console.group('EDITOR onSave');
      // console.dir(out);
      // console.log(out.blocks.length)
      out.loreType = loreType;
      out.loreForNft = selectedNft;
      // console.dir(out,"out modified")
      // if(out.blocks.length > 0) setIsContentAdded(true);
      // localStorage.setItem(dataKey, JSON.stringify(out));
      // console.info('Saved in localStorage');
      // console.groupEnd();
    } catch (e) {
      console.error('SAVE RESULT failed', e);
    }
  // }, [editor])
};

// Set editor data after initializing
export const useSetData = (editor:any, data:any) => {
  useEffect(() => {
    if (!editor || !data) {
      return;
    }

    editor.isReady.then(() => {
      // fixing an annoying warning in Chrome `addRange(): The given range isn't in document.`
      setTimeout(() => {
        editor.render(data);
      }, 100)
    })
  }, [editor, data])
}

export const useClearDataCallback = (editor:any) => {
  // return useCallback((ev) => {
  //   ev.preventDefault();
  //   if (!editor) {
  //     return;
  //   }
  //   editor.isReady.then(() => {
  //     // fixing an annoying warning in Chrome `addRange(): The given range isn't in document.`
  //     setTimeout(() => {
  //       editor.clear();
  //     }, 100)
  //   })
  // }, [editor])
  return useCallback(() => {
    if (!editor) {
      return;
    }
    editor.isReady.then(() => {
      // fixing an annoying warning in Chrome `addRange(): The given range isn't in document.`
      setTimeout(() => {
        editor.clear();
      }, 100)
    })
  }, [editor])
}

// load saved data
export const useLoadData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mimic async data load
  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
      // console.group('EDITOR load data');
      const saved = localStorage.getItem(dataKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        setData(parsed);
        console.dir(parsed);
      } else {
        // console.info('No saved data, using initial');
        // console.dir(initialData);
        // setData(initialData);
        setData(null);
      }
      // console.groupEnd();
      setLoading(false);
    }, 200);

    return () => {
      setLoading(false);
      clearTimeout(id);
    }
  }, []);

  return { data, loading };
};

export const useChangeCallback = (editor:any,setIsContentAdded:any) => {
  useEffect(() => {
    if (!editor) {
      return;
    }

    editor.isReady.then(async() => {
      // fixing an annoying warning in Chrome `addRange(): The given range isn't in document.`
      // setTimeout(async() => {
        try {
          const out = await editor.save();
          // console.group('EDITOR onchange');
          // console.dir(out);
          // console.log(out.blocks.length)
          if(out.blocks.length > 0) setIsContentAdded(true);
          // localStorage.setItem(dataKey, JSON.stringify(out));
          // console.info('Saved in localStorage');
          // console.groupEnd();
        } catch (e) {
          console.error('SAVE RESULT failed', e);
        }        
      // }, 100)
    })
  }, [editor])
};