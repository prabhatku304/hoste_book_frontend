import DOMPurify from 'dompurify';

export const getHtmlFromString = (data: string) => {
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(data),
  });
  return sanitizedData();
};

export const getStringFromHTMLUsingRegex = (data: string) => {
  return data.replace(/<[^>]*>/g, ' ');
};
