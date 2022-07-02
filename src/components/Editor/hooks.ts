import { useCallback, useState, useEffect } from 'react';

export const dataKey = 'editorData';

export const useSaveCallback = async (editor: any, loreType: string, selectedNft: any) => {
  if (!editor) return;
  try {
    const out = await editor.save();
    out.loreType = loreType;
    out.loreForNft = selectedNft;
  } catch (e) {
    console.error('SAVE RESULT failed', e);
  }
};

// Set editor data after initializing
export const useSetData = (editor: any, data: any) => {
  useEffect(() => {
    if (!editor || !data) {
      return;
    }

    editor.isReady.then(() => {
      setTimeout(() => {
        editor.render(data);
      }, 100);
    });
  }, [editor, data]);
};

export const useClearDataCallback = (editor: any) => {
  return useCallback(() => {
    if (!editor) {
      return;
    }
    editor.isReady.then(() => {
      setTimeout(() => {
        editor.clear();
      }, 100);
    });
  }, [editor]);
};

// load saved data
export const useLoadData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mimic async data load
  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
      const saved = localStorage.getItem(dataKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        setData(parsed);
        console.dir(parsed);
      } else {
        setData(null);
      }
      setLoading(false);
    }, 200);

    return () => {
      setLoading(false);
      clearTimeout(id);
    };
  }, []);

  return { data, loading };
};

export const useChangeCallback = (editor: any, setIsContentAdded: any) => {
  useEffect(() => {
    if (!editor) {
      return;
    }

    editor.isReady.then(async () => {
      try {
        const out = await editor.save();
        if (out.blocks.length > 0) setIsContentAdded(true);
      } catch (e) {
        console.error('SAVE RESULT failed', e);
      }
    });
  }, [editor]);
};
