interface IMailchimpLists {
  data: Array<IList>;
  status: string;
}

interface IList {
  id: string;
  name: string;
}
interface IMailchimpListFields {
  data: Array<IListField>;
  status: string;
}
interface IListField {
  name: string;
  rhym_input_tag?: string;
  required: boolean;
  tag: string;
  type: string;
}
interface IIntegrateMailchimp {
  game: string;
  is_active: boolean;
  list: IList;
  listFields: Array<IListField>;
}
export type {
  IMailchimpLists,
  IList,
  IMailchimpListFields,
  IListField,
  IIntegrateMailchimp,
};
