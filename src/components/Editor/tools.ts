// @ts-ignore
import Embed from '@editorjs/embed';
// @ts-ignore
import ImageTool from '@editorjs/image';
// @ts-ignore
import LinkTool from '@editorjs/link';
// @ts-ignore
import Paragraph from '@editorjs/paragraph';
// @ts-ignore
import Quote from '@editorjs/quote';
import { getImgSign } from 'api/lore';
// @ts-ignore
import SimpleVideo from 'simple-video-editorjs';
import { globalOb } from 'containers/Widget';

const dataURItoBlob = (dataURI: any, fileType: string) => {
  try {
    const binary = atob(dataURI.split(',')[1]);
    const array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: fileType });
  } catch (err) {
    return dataURI;
  }
};

const readUploadedFileAsText = (file: any) => {
  const fileReader = new FileReader();

  return new Promise((resolve, reject) => {
    fileReader.onerror = () => {
      fileReader.abort();
      reject(new DOMException('Problem parsing input file.'));
    };

    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  });
};

const getImgResolution = async (inputImage: any) => {
  return new Promise((resolve) => {
    try {
      const imgOb: any = new Image();
      imgOb.src = inputImage;

      imgOb.onload = () => {
        resolve({ width: imgOb.width, height: imgOb.height });
      };

      imgOb.onerror = () => {
        resolve({ width: 0, height: 0 });
      };
    } catch (error) {
      resolve({ width: 0, height: 0 });
    }
  });
};

const uploadImgOnS3 = async (imageToUpload: any, imgSign: any) => {
  try {
    const imgSignFields = imgSign?.fields;

    const formData: any = new FormData();
    formData.append('Content-Type', imageToUpload.type);

    Object.keys(imgSignFields).forEach((field) => {
      formData.append(field, imgSignFields[field]);
    });

    formData.append('file', imageToUpload, 'test-1.png');

    const result = await fetch(imgSign.url, {
      method: 'POST',
      body: formData,
    });

    if ([200, 204].includes(result.status)) {
      return {
        success: 1,
        file: {
          url: imgSign.fileLocation,
        },
      };
    } else {
      throw result;
    }
  } catch (error) {
    console.log('error uploadImgOnS3: ', uploadImgOnS3);
    return { success: 0 };
  }
};

export const tools = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        instagram: true,
        facebook: true,
        vimeo: true,
      },
    },
  },
  linkTool: LinkTool,
  quote: Quote,
  image: {
    class: ImageTool,
    config: {
      uploader: {
        async uploadByFile(file: any) {
          try {
            const inputImage = await readUploadedFileAsText(file);
            const imageToUpload = dataURItoBlob(inputImage, file.type);
            // get image width, height
            const { width, height }: any = await getImgResolution(inputImage);

            let imgSign = await getImgSign({
              fileType: imageToUpload.type,
              fileWidth: width,
              fileHeight: height,
              env: globalOb?.env,
            });

            if (!imgSign.valid) {
              throw imgSign;
            }

            imgSign = imgSign?.response;
            return await uploadImgOnS3(imageToUpload, imgSign);
          } catch (err) {
            console.log('error uploadByFile: ', err);
            return { success: 0 };
          }
        },
        async uploadByUrl(url: any) {
          const fileType = '';
          try {
            const inputImage = await fetch(url).then((r) => r.blob());
            const imageToUpload = dataURItoBlob(inputImage, fileType);
            // get image width, height
            const { width, height }: any = await getImgResolution(inputImage);

            let imgSign = await getImgSign({
              fileType: imageToUpload.type,
              fileWidth: width,
              fileHeight: height,
              env: globalOb?.env,
            });

            if (!imgSign.valid) {
              throw imgSign;
            }

            imgSign = imgSign?.response;
            return await uploadImgOnS3(imageToUpload, imgSign);
          } catch (err) {
            console.log('error uploadByUrl: ', err);
            return { success: 0 };
          }
        },
      },
    },
  },
  video: SimpleVideo,
};
