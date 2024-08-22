export const scrollToElementView = (elementId: string) => {
  const element = document.querySelector(`#${elementId}`);
  if (element) {
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }
};
