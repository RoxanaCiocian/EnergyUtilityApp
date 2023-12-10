
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Button: DefineComponent<
  {
    
    text: {
      type: StringConstructor;
    },

    tabLink: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    tabLinkActive: {
      type: BooleanConstructor;
    },

    type: {
      type: StringConstructor;
    },

    target: {
      type: StringConstructor;
    },

    round: {
      type: BooleanConstructor;
    },

    roundMd: {
      type: BooleanConstructor;
    },

    roundIos: {
      type: BooleanConstructor;
    },

    roundAurora: {
      type: BooleanConstructor;
    },

    fill: {
      type: BooleanConstructor;
    },

    fillMd: {
      type: BooleanConstructor;
    },

    fillIos: {
      type: BooleanConstructor;
    },

    fillAurora: {
      type: BooleanConstructor;
    },

    large: {
      type: BooleanConstructor;
    },

    largeMd: {
      type: BooleanConstructor;
    },

    largeIos: {
      type: BooleanConstructor;
    },

    largeAurora: {
      type: BooleanConstructor;
    },

    small: {
      type: BooleanConstructor;
    },

    smallMd: {
      type: BooleanConstructor;
    },

    smallIos: {
      type: BooleanConstructor;
    },

    smallAurora: {
      type: BooleanConstructor;
    },

    raised: {
      type: BooleanConstructor;
    },

    raisedMd: {
      type: BooleanConstructor;
    },

    raisedIos: {
      type: BooleanConstructor;
    },

    raisedAurora: {
      type: BooleanConstructor;
    },

    outline: {
      type: BooleanConstructor;
    },

    outlineMd: {
      type: BooleanConstructor;
    },

    outlineIos: {
      type: BooleanConstructor;
    },

    outlineAurora: {
      type: BooleanConstructor;
    },

    active: {
      type: BooleanConstructor;
    },

    disabled: {
      type: BooleanConstructor;
    },

    tooltip: {
      type: StringConstructor;
    },

    tooltipTrigger: {
      type: StringConstructor;
    },

    preloader: {
      type: BooleanConstructor;
    },

    preloaderSize: {
      type: PropType<NumberConstructor | StringConstructor>;
    },

    preloaderColor: {
      type: StringConstructor;
    },

    loading: {
      type: BooleanConstructor;
    },

    href: {
      type: PropType<StringConstructor | BooleanConstructor>;
      default: string;
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
  
>;

export default Button;
  