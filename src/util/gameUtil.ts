import {
  BRAND_DOMAINS,
  BRAND_GAMES,
  BRAND_PAGE_TITLES,
} from '../constants/constants';
import { localStorage_ } from './localstorage';

export const getConstructGameObject = (name: string) => {
  const iframe: any = document.getElementById('i_frame');
  const iDocument = iframe.contentDocument || iframe.contentWindow.document;
  const ctx: any = iDocument.getElementById('c2canvas');

  const runtime: any = ctx?.c2runtime;
  for (const p in runtime) {
    if (Object.prototype.hasOwnProperty.call(runtime, p)) {
      const prop = runtime[p];

      if (prop === undefined) continue;
      if (prop === null) continue;
      if (typeof prop !== 'object') continue;
      if (prop.length === undefined) continue;

      for (let i = 0; i < prop.length; i++) {
        if (
          prop[i]?.parent !== undefined &&
          prop[i]?.data !== undefined &&
          prop[i]?.sheet !== undefined &&
          prop[i]?.name !== undefined
        ) {
          // probably the global var array
          if (prop[i].name === name) {
            // that one!
            return prop[i];
          }
        } else {
          // no need to loop if not global var array
          break;
        }
      }
    }
  }
  return null;
};

export const getBrandGameByDomain = (currentDomain: string) => {
  let gameId = undefined;
  if (BRAND_DOMAINS) {
    const domains = BRAND_DOMAINS.split(',');
    const games = BRAND_GAMES.split(',');
    const pageTitles = BRAND_PAGE_TITLES?.split(',');
    const index = domains.findIndex(
      (domain: string) => domain === currentDomain
    );
    if (index >= 0) {
      if (games && games.length > index) {
        gameId = games[index];
        if (pageTitles && pageTitles.length > index) {
          document.title = pageTitles[index];
        }
      }
    }
  }

  return gameId;
};

export const setUserGamePlayLimit = async (gameId: string, limit?: number) => {
  let totalGamePlay = 1;
  if (!limit) {
    const gamePlay: any = await localStorage.getItem(
      `@gameplaylimit-${gameId}`
    );

    if (gamePlay) {
      totalGamePlay = JSON.parse(gamePlay) + 1;
    }
  } else {
    totalGamePlay = limit;
  }
  await localStorage.setItem(
    `@gameplaylimit-${gameId}`,
    JSON.stringify(totalGamePlay)
  );
  return totalGamePlay;
};

export const resetUserGamePlay = async (gameId: string) => {
  await localStorage_.setItem(`@gameplaylimit-${gameId}`, JSON.stringify(0));
};
export const getUserGamePlayLimit = async (gameId: string) => {
  const gamePlay: any = await localStorage.getItem(`@gameplaylimit-${gameId}`);
  if (!gamePlay) {
    return 0;
  }
  return JSON.parse(gamePlay);
};

export const setUserResetHours = async (gameId: string) => {
  await localStorage_.setItem(
    `@gameresettime-${gameId}`,
    JSON.stringify(Date.now())
  );
  return Date.now();
};

export const getUserResetHours = async (gameId: string) => {
  const gamePlay: any = await localStorage_.getItem(`@gameresettime-${gameId}`);
  if (!gamePlay) {
    return undefined;
  }
  return JSON.parse(gamePlay);
};

export const getGameBestScore = async (gameId: string) => {
  const score: any = await localStorage_.getItem(`@bestscore-${gameId}`);
  if (!score) return 0;
  return JSON.parse(score);
};

export const setGameBestScore = async (gameId: string, score: number) => {
  const bestscore = await getGameBestScore(gameId);
  if (bestscore < score)
    await localStorage_.setItem(`@bestscore-${gameId}`, JSON.stringify(score));
  return bestscore;
};
