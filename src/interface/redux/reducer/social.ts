import { ISocialDiscord, ISocialLink, ISocialTwitter } from '../../social';

interface ISocialState {
  isDiscordLinkingPending: boolean;
  isSocialLinkPending: boolean;
  isTwitterLinkPending: boolean;
  discord?: ISocialDiscord;
  socialLink?: ISocialLink;
  twitter?: ISocialTwitter;
}
export type { ISocialState };
