export const loadChatBoat = (isLoad?: boolean) => {
  if (isLoad == false) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = '//in.fw-cdn.com/31352342/645600.js';
  document.body.appendChild(script);
};
