export const localStorage_ = {
  getItem: async (key: string) => {
    let value: string | null = '';
    try {
      value = await localStorage.getItem(key);
    } catch (err) {
      value = '';
    }
    return value;
  },
  setItem: async (key: string, data: string) => {
    try {
      await localStorage.setItem(key, data);
      // eslint-disable-next-line no-empty
    } catch {}
  },
};
