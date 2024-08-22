export const getMetaTagsObj = (
  title: string,
  description: string,
  thumbnail: string,
  favicon: string
) => {
  const ttle = title || 'Rhym';
  const desc =
    description || 'One stop platform for interactive & playable marketing';
  const thumb =
    thumbnail || 'https://cdn.rhym.io/website_assets/meta_tags/meta-image.jpg';
  const icon = favicon || '/rhym-icon.png';
  return {
    title: ttle,
    description: desc,
    icons: {
      icon: icon,
    },
    openGraph: {
      title: ttle,
      description: desc,
      images: [
        {
          url: thumb,
          width: 800,
          height: 600,
        },
      ],
      type: 'website',
    },
    twitter: {
      title: ttle,
      description: desc,
      images: {
        url: thumb,
        alt: '',
      },
      card: 'summary',
    },
  };
};
