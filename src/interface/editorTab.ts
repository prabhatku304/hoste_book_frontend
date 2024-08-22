interface IEditorTabState {
  activeTab: ITab;
  tabsConfig?: Array<ITab>;
  previousBackgroundTab?: ITab;
}

interface ITab {
  type: ITabType;
  subType?: string;
  name?: string;
  subTab?: ISubTab;
}
interface ISubTab {
  type: ITabType;
  subType: string;
}
type ITabType =
  | 'MEDIA'
  | 'END_SCREEN'
  | 'START_SCREEN'
  | 'OBJECT'
  | 'BACKGROUND'
  | 'LAND'
  | string;

type IAssetTab = {
  name: string;
  type: string;
};
export type { IEditorTabState, ITabType, ITab, ISubTab, IAssetTab };
