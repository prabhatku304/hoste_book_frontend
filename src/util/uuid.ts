import { v4 as uuidv4 } from 'uuid';
import { localStorage_ } from './';

export const getUserUuid = async (userId?: string, isNew?: boolean) => {
  if (isNew === true) {
    const uid = uuidv4();
    await localStorage_.setItem('@userUid', uid.toString());
    return uid;
  }
  if (userId) {
    return userId;
  }
  let userUid: any = await localStorage_.getItem('@userUid');
  if (!userUid) {
    userUid = uuidv4();
    await localStorage_.setItem('@userUid', userUid.toString());
  }
  return userUid;
};

export const getSessionUuid = () => {
  const userUid = uuidv4();
  return userUid;
};

export const getUuid = () => {
  return uuidv4();
};

export const resetUuid = async () => {
  const userUid = uuidv4();
  await localStorage_.setItem('@userUid', userUid.toString());
};
