import { IList, IListField } from './mailchimp';

interface IIntegrationState {
  mailchimpLists?: Array<IList>;
  mailchimpListFields?: Array<IListField>;
  isMailchimpOAuthUriGetPending?: boolean;
  isMailchimpListsGetPending?: boolean;
  isMailchimpListFieldsGetPending?: boolean;
  isWebhookSendDataPending: boolean;
}

export type { IIntegrationState };
