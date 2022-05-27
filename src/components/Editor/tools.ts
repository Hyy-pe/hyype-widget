import Cookies from 'js-cookie';
import Header from '@editorjs/header';
// @ts-ignore
import List from '@editorjs/list';
// @ts-ignore
import Paragraph from '@editorjs/paragraph';
// @ts-ignore
import Embed from '@editorjs/embed'
// @ts-ignore
import Table from '@editorjs/table'
// @ts-ignore
import Warning from '@editorjs/warning'
// @ts-ignore
import Code from '@editorjs/code'
// @ts-ignore
import LinkTool from '@editorjs/link'
// import Image from '@editorjs/image'
// @ts-ignore
import Raw from '@editorjs/raw'
// @ts-ignore
import Quote from '@editorjs/quote'
// @ts-ignore
import Marker from '@editorjs/marker'
// @ts-ignore
import CheckList from '@editorjs/checklist'
// @ts-ignore
import Delimiter from '@editorjs/delimiter'
// @ts-ignore
import InlineCode from '@editorjs/inline-code'
// @ts-ignore
import SimpleImage from '@editorjs/simple-image'
// @ts-ignore
import ImageTool from '@editorjs/image';
// @ts-ignore
import SimpleVideo from 'simple-video-editorjs';


const dataURItoBlob = (dataURI: any, fileType: string) => {
  try{
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: fileType});
  }catch(err){
    return dataURI;
  }
}

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const readUploadedFileAsText = (file:any) => {
  const fileReader = new FileReader();

  return new Promise((resolve, reject) => {
    fileReader.onerror = () => {
      fileReader.abort();
      reject(new DOMException("Problem parsing input file."));
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

export const tools = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true
  },
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        instagram: true,
        facebook: true,
        vimeo: true,
      }
    }    
  },
  linkTool: LinkTool,
  quote: Quote,
  image: {
    class: ImageTool,
    config: {    
        uploader: {
          async uploadByFile(file:any){
            try {
                const inputImage = await readUploadedFileAsText(file);
                let imageToUpload = dataURItoBlob(inputImage, file.type);
                // get image width, height
                const { width, height }: any = await getImgResolution(inputImage);

                let head = 'data:image/png;base64,';

                let headers: any = {
                  "Authorization": Cookies.get('User'),
                  "Content-Type": "application/json"
                };

                let signedURL = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/user/lore/request-signed`, {
                  method: 'POST',
                  headers,
                  body: JSON.stringify({
                    fileType: imageToUpload.type,
                    fileWidth: width,
                    fileHeight: height,
                  })
                });

                let signedUrlResult = await signedURL.json();
                if(signedURL.status !== 200 || !signedUrlResult.valid){
                  return {valid: false};
                }

                let signedURLValue = signedUrlResult.response;

                let uploadHeaders: any = {
                  'Content-Type': "fileType",
                };

                let formData = new FormData();
                formData.append('Content-Type', imageToUpload.type);
                formData.append("key", signedURLValue.fields.Key);
                formData.append("Policy", signedURLValue.fields.Policy);
                formData.append("X-Amz-Algorithm", signedURLValue.fields['X-Amz-Algorithm']);
                formData.append("X-Amz-Credential", signedURLValue.fields['X-Amz-Credential']);
                formData.append("X-Amz-Date", signedURLValue.fields['X-Amz-Date']);
                formData.append("X-Amz-Signature", signedURLValue.fields['X-Amz-Signature']);
                formData.append("bucket", signedURLValue.fields.bucket);
                formData.append("file", imageToUpload, "test-1.png");

                let result = await fetch(signedURLValue.url, {
                  method: 'POST',
                  body: formData,
                });

                if(result.status == 200 || result.status == 204) {
                  return {
                    success: 1,
                    file: {
                      url: signedURLValue.fileLocation
                    }
                  }
                }
                           
            } catch(err) {
              console.log(err)
              return {success: 0};
            }
          },
          async uploadByUrl(url:any){
            let headers: any = {
              "Authorization": Cookies.get('User'),
              "Content-Type": "application/json"
            };
            const uniqueKey = new Date().getTime(); 
            let fileType = '';             
            try {
            let inputImage = await fetch(url).then(r => r.blob());
            let imageToUpload = dataURItoBlob(inputImage, fileType);
            // get image width, height
            const { width, height }: any = await getImgResolution(inputImage);

            let headers: any = {
              "Authorization": Cookies.get('User'),
              "Content-Type": "application/json"
            };
            
            let signedURL = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/user/lore/request-signed`, {
              method: 'POST',
              headers,
              body: JSON.stringify({
                fileType,
                fileWidth: width,
                fileHeight: height,
              })
            });

            let signedUrlResult = await signedURL.json(); 
            if(signedURL.status !== 200 || !signedUrlResult.valid){
              return {valid: false};
            }
            
            let signedURLValue = signedUrlResult.response;

            let uploadHeaders: any = {
              'Content-Type': "fileType", 
            };
            let formData = new FormData();
            formData.append('Content-Type', imageToUpload.type);
            formData.append("key", signedURLValue.fields.Key);
            formData.append("Policy", signedURLValue.fields.Policy);
            formData.append("X-Amz-Algorithm", signedURLValue.fields['X-Amz-Algorithm']);
            formData.append("X-Amz-Credential", signedURLValue.fields['X-Amz-Credential']);
            formData.append("X-Amz-Date", signedURLValue.fields['X-Amz-Date']);
            formData.append("X-Amz-Signature", signedURLValue.fields['X-Amz-Signature']);
            formData.append("file", imageToUpload, "test-1.png");
            formData.append("bucket", signedURLValue.fields.bucket);
      
            let result = await fetch(signedURLValue.url, {
              method: 'POST',
              //headers: uploadHeaders,
              body: formData,
            });
            // console.log('result', result)

            if(result.status != 200 && result.status != 204){
              return {success: 0};
            }  
            return {
              success: 1,
              file: {
                url: ''
              }
            };             
            } catch (err) {
              return {success: 0};
            }
          }              
        }
    }
  },
  // image: {
  //   class: ImageTool,
    // config: {
    //   endpoints: {
    //     byFile: 'http://localhost:3000/uploadFile', // Your backend file uploader endpoint
    //     byUrl: 'http://localhost:3000/fetchUrl', // Your endpoint that provides uploading by Url
    //   }
    // }
  // },
  // video: {
  //   class: SimpleVideo,
  //   inlineToolbar: true,
  // }
  video: SimpleVideo,
}
