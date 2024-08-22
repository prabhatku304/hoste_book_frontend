export const createImage = (url: any) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.alt = 'image';
    image.src = url;

    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error: any) => {
      reject(error);
    });
  });

export const getCroppedImg = async (
  imageSrc: any,
  crop: any,
  imgWidth?: number,
  imgHeight?: number,
  fileType = 'image/png'
) => {
  const image: any = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = imgWidth || image.width;
  canvas.height = imgHeight || image.height;

  ctx?.drawImage(
    image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    canvas.width,
    canvas.height
  );
  return new Promise(resolve => {
    canvas.toBlob(blob => {
      resolve(blob);
    }, fileType);
  });
};

export const getResizeImg = async (
  url: string,
  height: number,
  width: number,
  type: 'BLOB' | 'URL'
) => {
  const img: any = await createImage(url);
  const canvas = document.createElement('canvas');
  canvas.height = height;
  canvas.width = width;
  const ctx: any = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, height, width);
  if (type === 'BLOB') {
    return new Promise(resolve => {
      canvas.toBlob(blob => {
        resolve(blob);
      }, 'image/png');
    });
  }
  const imgUrl = await canvas.toDataURL(img.type);
  return imgUrl;
};
