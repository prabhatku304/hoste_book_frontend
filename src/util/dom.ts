export const loadScript = async (src: string) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = src;
  return new Promise((resolve, reject) => {
    document.body.appendChild(script);
    script.onload = () => resolve(script);
    script.onerror = e => reject(e);
  });
};
