import { canvasElementType } from '../constants';
import { ICanvas, ICanvasElement } from '../interface/canvas';
import { jsonStringify } from './stringify';
import { getUuid } from './uuid';

export const getCanvasUrl = (canvasState: ICanvas) => {
  const canvas = document.createElement('canvas');
  canvas.width = 350;
  canvas.height = 700;
  const context = canvas.getContext('2d');
  const backgroundImage = new Image();
  backgroundImage.src = canvasState.background_src || '';
  backgroundImage.crossOrigin = 'anonymous';
  backgroundImage.onload = () => {
    if (context) {
      context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      canvasState.elements.forEach(element => {
        const { width, height, src, position, rotation, opacity } = element;
        const { x: canvasX, y: canvasY } = position;
        const image = new Image();
        image.src = src;
        image.crossOrigin = 'anonymous';

        image.onload = () => {
          context.save();
          context.globalAlpha = opacity;
          context.translate(canvasX, canvasY);
          context.rotate((rotation * Math.PI) / 180);
          context.drawImage(image, -width / 2, -height / 2, width, height);
          context.restore();
        };
      });
    }
  };
  return canvas.toDataURL();
};

export const getElementStyle = (
  element: ICanvasElement,
  defaultStyle: ICanvasElement,
  canvasHeight: number,
  canvasWidth: number
) => {
  const height =
    element?.height != undefined ? element?.height : defaultStyle.height || 50;
  const width =
    element?.width != undefined ? element?.width : defaultStyle.width || 300;
  const rotation = element?.rotation ? element?.rotation : 0;
  const x = element?.x != undefined ? element?.x : defaultStyle.x || 40;
  const y = element?.y != undefined ? element?.y : defaultStyle.y || 520;
  const borderRadius =
    element?.borderRadius != undefined
      ? element?.borderRadius
      : defaultStyle.borderRadius || '10px';
  const backgroundColor =
    element?.backgroundColor != undefined
      ? element?.backgroundColor
      : defaultStyle.backgroundColor || '#000000';
  const style: any = {
    ...element,
    position: 'absolute',
    top: `${(y / canvasHeight) * 100}%`,
    left: `${(x / canvasWidth) * 100}%`,
    transform: `rotate(${rotation}deg)`,
    height: `${(height / canvasHeight) * 100}%`,
    width: `${(width / canvasWidth) * 100}%`,
    backgroundColor,
    borderRadius,
  };
  return style;
};

export const getBtnKeyValue = (newStyle: any, oldStyle: any) => {
  let key = '';
  let data = '';
  if (newStyle?.text) {
    key = 'label';
    data = newStyle.text;
  } else {
    key = 'style';
    data = jsonStringify({ ...oldStyle, ...newStyle });
  }
  return { key, value: data };
};

export const shiftOrPushCanvasElement = (
  arr: Array<ICanvasElement>,
  obj: ICanvasElement,
  removeBg = false
) => {
  let newArr = [...(arr || [])];
  const elementType = obj?.type;
  if (
    [canvasElementType.BACKGROUND, canvasElementType.BACKGROUND_COLOR].includes(
      elementType || ''
    )
  ) {
    const bgIndex = newArr.findIndex(
      ele => ele.type === canvasElementType.BACKGROUND
    );
    const bgColorIndex = newArr.findIndex(
      ele => ele.type === canvasElementType.BACKGROUND_COLOR
    );
    const bg = bgIndex >= 0 ? true : false;
    const bgColor = bgColorIndex >= 0 ? true : false;
    if (bg && bgColor) {
      if (elementType === canvasElementType.BACKGROUND) {
        newArr[bgIndex] = { ...newArr[bgIndex], src: obj?.src };
      } else {
        newArr[bgColorIndex] = {
          ...newArr[bgColorIndex],
          backgroundColor: obj?.backgroundColor,
        };
      }
    } else if (!bg && bgColor) {
      if (elementType === canvasElementType.BACKGROUND) {
        newArr.splice(1, 0, obj);
      } else {
        newArr[bgColorIndex] = {
          ...newArr[bgColorIndex],
          backgroundColor: obj?.backgroundColor,
        };
      }
    } else if (bg && !bgColor) {
      if (elementType === canvasElementType.BACKGROUND) {
        newArr[bgIndex] = { ...newArr[bgIndex], src: obj?.src };
      } else {
        newArr.unshift(obj);
      }
    } else if (!bg && !bgColor) {
      newArr.unshift(obj);
    }
  } else {
    newArr.push(obj);
  }
  if (removeBg == true && obj.type === canvasElementType.BACKGROUND_COLOR) {
    newArr = newArr.filter(ele => ele.type !== canvasElementType.BACKGROUND);
  }
  return newArr;
};

export const appendIdIntoElements = (
  arr: Array<ICanvasElement>,
  canvasHeight: number,
  canvasWidth: number
) => {
  let newArr = [...(arr || [])];
  const bgColor = arr.find(
    ele => ele.type === canvasElementType.BACKGROUND_COLOR
  );
  newArr = newArr.map(ele => {
    return {
      ...ele,
      id: getUuid(),
    };
  });
  if (!bgColor) {
    newArr.unshift({
      x: 0,
      y: 0,
      id: getUuid(),
      height: canvasHeight,
      width: canvasWidth,
      backgroundColor: '#ffffff',
      type: canvasElementType.BACKGROUND_COLOR,
    });
  }

  return newArr;
};

export const isInputFocus = () => {
  const inputs: any = document.querySelectorAll('input, .ql-editor');
  if (inputs && inputs.length > 0) {
    for (const input of inputs) {
      if (input === document.activeElement) {
        return true;
      }
    }
  }
  return false;
};
