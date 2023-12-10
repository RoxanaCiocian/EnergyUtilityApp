
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const ListItem: DefineComponent<
  {
    
    title: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    text: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    media: {
      type: StringConstructor;
    },

    subtitle: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    header: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    footer: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    tooltip: {
      type: StringConstructor;
    },

    tooltipTrigger: {
      type: StringConstructor;
    },

    link: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    target: {
      type: StringConstructor;
    },

    tabLink: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    tabLinkActive: {
      type: BooleanConstructor;
    },

    selected: {
      type: BooleanConstructor;
    },

    after: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    badge: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    badgeColor: {
      type: StringConstructor;
    },

    mediaItem: {
      type: BooleanConstructor;
    },

    mediaList: {
      type: BooleanConstructor;
    },

    divider: {
      type: BooleanConstructor;
    },

    groupTitle: {
      type: BooleanConstructor;
    },

    swipeout: {
      type: BooleanConstructor;
    },

    swipeoutOpened: {
      type: BooleanConstructor;
    },

    accordionItem: {
      type: BooleanConstructor;
    },

    accordionItemOpened: {
      type: BooleanConstructor;
    },

    smartSelect: {
      type: BooleanConstructor;
    },

    smartSelectParams: {
      type: ObjectConstructor;
    },

    noChevron: {
      type: BooleanConstructor;
    },

    chevronCenter: {
      type: BooleanConstructor;
    },

    checkbox: {
      type: BooleanConstructor;
    },

    radio: {
      type: BooleanConstructor;
    },

    radioIcon: {
      type: StringConstructor;
    },

    checked: {
      type: BooleanConstructor;
    },

    indeterminate: {
      type: BooleanConstructor;
    },

    name: {
      type: StringConstructor;
    },

    readonly: {
      type: BooleanConstructor;
    },

    required: {
      type: BooleanConstructor;
    },

    disabled: {
      type: BooleanConstructor;
    },

    virtualListIndex: {
      type: NumberConstructor;
    },

    sortable: {
      type: BooleanConstructor;
      default: undefined;
    },

    sortableOpposite: {
      type: BooleanConstructor;
      default: undefined;
    },

    value: {
      type: PropType<StringConstructor | NumberConstructor | ArrayConstructor>;
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
  ("click" | "swipeout" | "swipeout:overswipeenter" | "swipeout:overswipeexit" | "swipeout:deleted" | "swipeout:delete" | "swipeout:close" | "swipeout:closed" | "swipeout:open" | "swipeout:opened" | "accordion:beforeclose" | "accordion:close" | "accordion:closed" | "accordion:beforeopen" | "accordion:open" | "accordion:opened" | "change" | "update:checked")[],
  "click" | "swipeout" | "swipeout:overswipeenter" | "swipeout:overswipeexit" | "swipeout:deleted" | "swipeout:delete" | "swipeout:close" | "swipeout:closed" | "swipeout:open" | "swipeout:opened" | "accordion:beforeclose" | "accordion:close" | "accordion:closed" | "accordion:beforeopen" | "accordion:open" | "accordion:opened" | "change" | "update:checked"
>;

export default ListItem;
  