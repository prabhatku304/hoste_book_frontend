import { IList, IListField } from './mailchimp';

interface IGameIntegration {
  mailchimp: IMailchimpIntegration;
  google_analytics: IGoogleAnalyticsIntegration;
  facebook: IFacebookIntegration;
  webhook: Array<IWebhook>;
  email_notification: IEmailNotificationIntegration;
}
interface IWebhook {
  url: string;
  is_active: boolean;
}

interface IGoogleAnalyticsIntegration {
  analytics_id: string;
  is_active: boolean;
}

interface IFacebookIntegration {
  pixel_id?: string;
  is_active: boolean;
}

interface IMailchimpIntegration {
  is_active: boolean;
  list_fields: Array<IListField>;
  list_id: string;
  list_name: string;
}
interface IEmailNotificationIntegration {
  is_active: boolean;
  email: string;
}
interface IGameIntegrationUpdateInput {
  game: string;
  is_active?: boolean;
  analyticsId?: string;
  pixelId?: string;
  listFields?: Array<IListField>;
  list?: IList;
  type: string;
  webhooks?: Array<IWebhook>;
  email?: string;
}
export type {
  IGameIntegration,
  IGoogleAnalyticsIntegration,
  IFacebookIntegration,
  IMailchimpIntegration,
  IGameIntegrationUpdateInput,
  IWebhook,
  IEmailNotificationIntegration,
};
