import { canvasElementType, elementLayerType } from '../constants';
import { ICanvasDimension, ICanvasElement } from '../interface/canvas';
import { toastAction } from '../redux/action/toastAction';

const moveElementFormard = (arr: Array<any>, index: number) => {
  const newArr = [...arr];
  if (index < arr.length - 1) {
    const element = newArr[index];
    newArr.splice(index, 1);
    newArr.splice(index + 1, 0, element);
  }
  return newArr;
};

const moveElementFront = (arr: Array<any>, index: number) => {
  const newArr = [...arr];
  if (index >= 0) {
    const element = newArr.splice(index, 1)[0];
    newArr.push(element);
  }
  return newArr;
};

const moveElementBackard = (arr: Array<any>, index: number) => {
  const newArr = [...arr];

  if (index > 0) {
    const element = newArr[index];
    const bgIndex = arr.findIndex(
      ele => ele.type === canvasElementType.BACKGROUND
    );
    const bgColorIndex = arr.findIndex(
      ele => ele.type === canvasElementType.BACKGROUND_COLOR
    );
    const bg = bgIndex >= 0 ? true : false;
    const bgColor = bgColorIndex >= 0 ? true : false;
    if (
      (bg && bgColor && index - 1 !== bgIndex) ||
      (!bg && bgColor && index - 1 !== bgColorIndex) ||
      (bg && !bgColor && index - 1 !== bgIndex)
    ) {
      newArr.splice(index, 1);
      newArr.splice(index - 1, 0, element);
    }
  }
  return newArr;
};
const moveElementBack = (
  arr: Array<any>,
  index: number,
  isBackground = false,
  canvasDimension?: ICanvasDimension
) => {
  const newArr = [...arr];
  if (index < arr.length) {
    let element = newArr.splice(index, 1)[0];
    if (isBackground) {
      element = {
        ...element,
        type: canvasElementType.BACKGROUND,
        x: 0,
        y: 0,
        height: canvasDimension?.HEIGHT || 640,
        width: canvasDimension?.WIDTH || 360,
      };
    }
    const bg = arr.find(ele => ele.type === canvasElementType.BACKGROUND);
    const bgColor = arr.find(
      ele => ele.type === canvasElementType.BACKGROUND_COLOR
    );
    if (isBackground) {
      if (!bgColor) {
        newArr.unshift(element);
      } else {
        newArr.splice(1, 0, element);
      }
    } else {
      if (bg && bgColor) {
        newArr.splice(2, 0, element);
      } else if ((bg && !bgColor) || (!bg && bgColor)) {
        newArr.splice(1, 0, element);
      } else {
        newArr.unshift(element);
      }
    }
  }
  return newArr;
};

const moveElementBackground = (
  arr: Array<any>,
  index: number,
  canvasDimension?: ICanvasDimension
) => {
  let newArr = [...arr];
  const bg = newArr.find(ele => ele.type === canvasElementType.BACKGROUND);
  const bgIndex = newArr.findIndex(
    ele => ele.type === canvasElementType.BACKGROUND
  );
  if (bg) {
    const src = arr[index]?.src;
    newArr[bgIndex] = { ...bg, src };
    newArr.splice(index, 1);
  } else {
    newArr = moveElementBack(newArr, index, true, canvasDimension);
  }

  return newArr;
};

export const elementMove = (
  elements: Array<ICanvasElement>,
  elementId?: string,
  type = '',
  canvasDimension?: ICanvasDimension
) => {
  let newElements = [...elements];
  if (!elementId) {
    toastAction.error('Element Id not found');
    return;
  }
  if (elements && elements.length > 0) {
    const index = elements.findIndex(e => e.id === elementId);
    if (index < 0) {
      toastAction.error('Element Id not found');
      return;
    }
    switch (type) {
      case elementLayerType.MOVE_FORWARD:
        newElements = moveElementFormard(newElements, index);
        break;
      case elementLayerType.MOVE_FRONT:
        newElements = moveElementFront(newElements, index);
        break;
      case elementLayerType.MOVE_BACKWARD:
        newElements = moveElementBackard(newElements, index);
        break;
      case elementLayerType.MOVE_BACK:
        newElements = moveElementBack(
          newElements,
          index,
          false,
          canvasDimension
        );
        break;
      case elementLayerType.MOVE_BACKGROUND:
        newElements = moveElementBackground(newElements, index);
        break;
    }
    return newElements;
  }
};
