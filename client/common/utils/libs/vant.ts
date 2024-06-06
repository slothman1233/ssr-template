import type { App } from 'vue';
import {
  Tabbar as VanTabbar,
  TabbarItem as VanTabbarItem,
  Swipe as VanSwipe,
  SwipeItem as VanSwipeItem,
  NavBar as VanNavBar,
  Tab as VanTab,
  Tabs as VanTabs,
  Toast as VanToast,
  Cell as VanCell,
  CellGroup as VanCellGroup,
  Image as VanImage,
  Col as VanCol,
  Row as VanRow,
  Grid as VanGrid,
  GridItem as VanGridItem,
  Icon as VanIcon,
  Sidebar as VanSidebar,
  SidebarItem as VanSidebarItem,
  Card as VanCard,
  Tag as VanTag,
  List as VanList,
  Sticky as VanSticky,
  Button as VanButton,
  TreeSelect as VanTreeSelect,
  Picker as VanPicker,
  Form as VanForm,
  Field as VanField,
  Popup as VanPopup,
} from 'vant';

const components = [
  VanTabbar,
  VanTabbarItem,
  VanSwipe,
  VanSwipeItem,
  VanNavBar,
  VanTab,
  VanTabs,
  VanToast,
  VanCell,
  VanCellGroup,
  VanImage,
  VanCol,
  VanRow,
  VanGrid,
  VanGridItem,
  VanIcon,
  VanSidebar,
  VanSidebarItem,
  VanCard,
  VanTag,
  VanList,
  VanSticky,
  VanButton,
  VanTreeSelect,
  VanPicker,
  VanForm,
  VanField,
  VanPopup,
];

// import vant from 'vant';

export function setupVant(app: App<Element>): void {
  // 设置语言
  // locale.use(lang)
  components.forEach((component: any) => {
    app.use(component);
  });

  // app.use(vant);
}
