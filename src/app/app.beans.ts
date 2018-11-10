import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface MenuItem {
  icon: IconDefinition;
  title: string;
  isCollapsed: boolean;
  children?: ChildMenuItem[];
}

export interface ChildMenuItem {
  icon: IconDefinition;
  title: string;
}
