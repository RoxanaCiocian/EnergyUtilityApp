
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const View: DefineComponent<
  {
    
    tab: {
      type: BooleanConstructor;
    },

    tabActive: {
      type: BooleanConstructor;
    },

    name: {
      type: StringConstructor;
    },

    linksView: {
      type: PropType<ObjectConstructor | StringConstructor>;
    },

    url: {
      type: StringConstructor;
    },

    xhrCacheIgnore: {
      type: ArrayConstructor;
    },

    xhrCacheDuration: {
      type: NumberConstructor;
    },

    masterDetailBreakpoint: {
      type: NumberConstructor;
    },

    removeElementsTimeout: {
      type: NumberConstructor;
    },

    iosSwipeBackActiveArea: {
      type: NumberConstructor;
    },

    iosSwipeBackThreshold: {
      type: NumberConstructor;
    },

    mdSwipeBackActiveArea: {
      type: NumberConstructor;
    },

    mdSwipeBackThreshold: {
      type: NumberConstructor;
    },

    auroraSwipeBackActiveArea: {
      type: NumberConstructor;
    },

    auroraSwipeBackThreshold: {
      type: NumberConstructor;
    },

    browserHistoryRoot: {
      type: StringConstructor;
    },

    browserHistorySeparator: {
      type: StringConstructor;
    },

    transition: {
      type: StringConstructor;
    },

    materialPageLoadDelay: {
      type: NumberConstructor;
    },

    routes: {
      type: ArrayConstructor;
    },

    routesAdd: {
      type: ArrayConstructor;
    },

    routesBeforeEnter: {
      type: PropType<FunctionConstructor | ArrayConstructor>;
    },

    routesBeforeLeave: {
      type: PropType<FunctionConstructor | ArrayConstructor>;
    },

    router: {
      type: BooleanConstructor;
      default: boolean;
    },

    main: {
      type: BooleanConstructor;
      default: undefined;
    },

    stackPages: {
      type: BooleanConstructor;
      default: undefined;
    },

    xhrCache: {
      type: BooleanConstructor;
      default: undefined;
    },

    xhrCacheIgnoreGetParameters: {
      type: BooleanConstructor;
      default: undefined;
    },

    preloadPreviousPage: {
      type: BooleanConstructor;
      default: undefined;
    },

    allowDuplicateUrls: {
      type: BooleanConstructor;
      default: undefined;
    },

    reloadPages: {
      type: BooleanConstructor;
      default: undefined;
    },

    reloadDetail: {
      type: BooleanConstructor;
      default: undefined;
    },

    masterDetailResizable: {
      type: BooleanConstructor;
      default: undefined;
    },

    removeElements: {
      type: BooleanConstructor;
      default: undefined;
    },

    removeElementsWithTimeout: {
      type: BooleanConstructor;
      default: undefined;
    },

    restoreScrollTopOnBack: {
      type: BooleanConstructor;
      default: undefined;
    },

    loadInitialPage: {
      type: BooleanConstructor;
      default: undefined;
    },

    iosSwipeBack: {
      type: BooleanConstructor;
      default: undefined;
    },

    iosSwipeBackAnimateShadow: {
      type: BooleanConstructor;
      default: undefined;
    },

    iosSwipeBackAnimateOpacity: {
      type: BooleanConstructor;
      default: undefined;
    },

    mdSwipeBack: {
      type: BooleanConstructor;
      default: undefined;
    },

    mdSwipeBackAnimateShadow: {
      type: BooleanConstructor;
      default: undefined;
    },

    mdSwipeBackAnimateOpacity: {
      type: BooleanConstructor;
      default: undefined;
    },

    auroraSwipeBack: {
      type: BooleanConstructor;
      default: undefined;
    },

    auroraSwipeBackAnimateShadow: {
      type: BooleanConstructor;
      default: undefined;
    },

    auroraSwipeBackAnimateOpacity: {
      type: BooleanConstructor;
      default: undefined;
    },

    browserHistory: {
      type: BooleanConstructor;
      default: undefined;
    },

    browserHistoryAnimate: {
      type: BooleanConstructor;
      default: undefined;
    },

    browserHistoryAnimateOnLoad: {
      type: BooleanConstructor;
      default: undefined;
    },

    browserHistoryOnLoad: {
      type: BooleanConstructor;
      default: undefined;
    },

    browserHistoryInitialMatch: {
      type: BooleanConstructor;
      default: boolean;
    },

    browserHistoryStoreHistory: {
      type: BooleanConstructor;
      default: undefined;
    },

    animate: {
      type: BooleanConstructor;
      default: undefined;
    },

    iosDynamicNavbar: {
      type: BooleanConstructor;
      default: undefined;
    },

    iosAnimateNavbarBackIcon: {
      type: BooleanConstructor;
      default: undefined;
    },

    passRouteQueryToRequest: {
      type: BooleanConstructor;
      default: undefined;
    },

    passRouteParamsToRequest: {
      type: BooleanConstructor;
      default: undefined;
    },

    init: {
      type: BooleanConstructor;
      default: boolean;
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
    }
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  ("view:init" | "view:resize" | "swipeback:move" | "swipeback:beforechange" | "swipeback:afterchange" | "swipeback:beforereset" | "swipeback:afterreset" | "tab:hide" | "tab:show")[],
  "view:init" | "view:resize" | "swipeback:move" | "swipeback:beforechange" | "swipeback:afterchange" | "swipeback:beforereset" | "swipeback:afterreset" | "tab:hide" | "tab:show"
>;

export default View;
  