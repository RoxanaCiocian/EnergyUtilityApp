
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const TreeviewItem: DefineComponent<
  {
    
    itemToggle: {
      type: BooleanConstructor;
    },

    selectable: {
      type: BooleanConstructor;
    },

    selected: {
      type: BooleanConstructor;
    },

    opened: {
      type: BooleanConstructor;
    },

    label: {
      type: StringConstructor;
    },

    loadChildren: {
      type: BooleanConstructor;
    },

    toggle: {
      type: BooleanConstructor;
      default: undefined;
    },

    link: {
      type: PropType<BooleanConstructor | StringConstructor>;
      default: undefined;
    },

    color: {
      type: StringConstructor;
    },

    colorTheme: {
      type: StringConstructor;
    },

    textColor: {
      type: StringConstructor;
    },

    bgColor: {
      type: StringConstructor;
    },

    borderColor: {
      type: StringConstructor;
    },

    rippleColor: {
      type: StringConstructor;
    },

    themeDark: {
      type: BooleanConstructor;
    },

    searchbarEnable: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    searchbarDisable: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    searchbarClear: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    searchbarToggle: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    panelOpen: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    panelClose: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    panelToggle: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    popupOpen: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    popupClose: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    actionsOpen: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    actionsClose: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    popoverOpen: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    popoverClose: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    loginScreenOpen: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    loginScreenClose: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    sheetOpen: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    sheetClose: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    sortableEnable: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    sortableDisable: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    sortableToggle: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    cardOpen: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    cardPreventOpen: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    cardClose: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    menuClose: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    icon: {
      type: StringConstructor;
    },

    iconMaterial: {
      type: StringConstructor;
    },

    iconF7: {
      type: StringConstructor;
    },

    iconIos: {
      type: StringConstructor;
    },

    iconMd: {
      type: StringConstructor;
    },

    iconAurora: {
      type: StringConstructor;
    },

    iconColor: {
      type: StringConstructor;
    },

    iconSize: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    back: {
      type: BooleanConstructor;
    },

    external: {
      type: BooleanConstructor;
    },

    force: {
      type: BooleanConstructor;
    },

    animate: {
      type: BooleanConstructor;
    },

    ignoreCache: {
      type: BooleanConstructor;
    },

    reloadCurrent: {
      type: BooleanConstructor;
    },

    reloadAll: {
      type: BooleanConstructor;
    },

    reloadPrevious: {
      type: BooleanConstructor;
    },

    reloadDetail: {
      type: BooleanConstructor;
    },

    routeTabId: {
      type: StringConstructor;
    },

    view: {
      type: StringConstructor;
    },

    routeProps: {
      type: ObjectConstructor;
    },

    preventRouter: {
      type: BooleanConstructor;
    },

    transition: {
      type: StringConstructor;
    },

    openIn: {
      type: StringConstructor;
    }
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  ("click" | "treeview:open" | "treeview:close" | "treeview:loadchildren")[],
  "click" | "treeview:open" | "treeview:close" | "treeview:loadchildren"
>;

export default TreeviewItem;
  