function isiOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

const ancHrefRedirectUrl = (url: string) => {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  a.click();
};
export const validateUrl = (url: string) => {
  const pattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  return pattern.test(url);
};

export const redirectUrl = (url: string, parentDomain?: string) => {
  if (parentDomain) {
    parent.postMessage({ type: 'rhym_cta_redirect', url }, '*');
    return;
  }
  const isFacebookBrowser = /FBAN|FBAV/i.test(navigator.userAgent);
  const isInstagramBrowser = /Instagram/i.test(navigator.userAgent);
  const isIos = isiOS();
  if (isFacebookBrowser) {
    if (isIos) {
      window.location.href = url;
    } else {
      ancHrefRedirectUrl(url);
    }
  } else if (isInstagramBrowser) {
    window.location.href = url;
  } else if (isIos) {
    window.location.assign(url);
  } else {
    if (!url.includes('https://')) {
      url = 'https://' + url;
    }
    ancHrefRedirectUrl(url);
  }
};

export const replaceWindowUrl = (url: string) => {
  try {
    new URL(url);
    window.location.replace(url);
  } catch (e) {
    //
  }
};
export const replaceS3ToCDNUrl = (url: string) => {
  let url_ = url || '';
  if (url_) {
    url_ = url.replace('rhym.s3.ap-south-1.amazonaws.com', 'cdn.rhym.io');
  }
  return url_;
};

export const isValidUrl = (url: string) => {
  const exp =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(exp);
  if (url.match(regex)) {
    return true;
  }
  return false;
};

export const appendHttpsDomain = (url: string) => {
  const regex = /^(http:\/\/|https:\/\/)/;
  if (regex.test(url)) {
    return url;
  }
  return 'https://' + url;
};
