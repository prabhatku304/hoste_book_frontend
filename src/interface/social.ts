interface ISocialDiscord {
  _id: string;
  discord: IDiscord;
}

interface ISocialLink {
  _id: string;
  discord: IDiscord;
  twitter: ITwitter;
}
interface ISocialTwitter {
  _id: string;
  twitter: ITwitter;
}

interface ITwitter {
  is_linked: string;
  userid: string;
  username: string;
}
interface IDiscord {
  discord_userid: string;
  discord_username: string;
  is_linked: boolean;
}

export type { ISocialDiscord, ISocialTwitter, ISocialLink };
