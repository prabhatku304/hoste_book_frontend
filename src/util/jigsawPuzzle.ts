export const helper: any = {
  doc: (id: string) =>
    document.getElementById(id) || document.createElement('div'),

  shuffle: (id: string) => {
    const ul: any = document.getElementById(id);
    for (let i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[(Math.random() * i) | 0]);
    }
  },
};

export const gameOver = async (score: number) => {
  if (score <= 0) {
    score = 1;
  }
  window.postMessage(
    {
      type: 'game_over',
      score,
    },
    '*'
  );
  if (window && window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        type: 'game_over',
        score,
      })
    );
  }
};

export const isSorted = (arr: any) =>
  arr.every((elem: any, index: any) => {
    return elem == index;
  });
