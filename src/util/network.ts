export const getNetworkError = (error: any) => {
  if (error?.networkError?.result?.errors[0]?.message) {
    const msg: string = error?.networkError?.result?.errors[0]?.message || '';
    if (msg.includes('Mongo Service: No')) {
      const msgArray = msg.split(' ');
      return `${msgArray?.[3]} does not exist`;
    }
    if (msg.includes('Error:')) {
      return msg.split('Error:')?.[1];
    }
    return msg;
  } else if (error) {
    return error;
  } else {
    return 'server error';
  }
};
