export const gameOver = (score: number) => {
  if (typeof window.postMessage === 'function') {
    window.postMessage({ type: 'game_over', score });
  }
};

export const lanPostMessage = (ln: string) => {
  const iframe: any = document.getElementById('custom_game_iframe');
  iframe?.contentWindow?.postMessage({ type: 'ln', ln }, '*');
};

export const getRank = (rank: number) => {
  switch (rank) {
    case 1:
      return '1st';
    case 2:
      return '2nd';
    case 3:
      return '3rd';
    default:
      return rank + 'th';
  }
};
