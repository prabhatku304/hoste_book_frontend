import { SPECIAL_QUIZ_IDS } from '../constants/constants';

export const isSpecialQuiz = (quizId: string) => {
  const specialQuizIds = SPECIAL_QUIZ_IDS.split(',');
  if (specialQuizIds.includes(quizId)) {
    return true;
  }
  return false;
};
