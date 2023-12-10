
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Searchbar: DefineComponent<
  {
    
    noShadow: {
      type: BooleanConstructor;
    },

    noHairline: {
      type: BooleanConstructor;
    },

    value: {
      type: PropType<StringConstructor | NumberConstructor | ArrayConstructor>;
    },

    expandable: {
      type: BooleanConstructor;
    },

    inline: {
      type: BooleanConstructor;
    },

    searchContainer: {
      type: PropType<StringConstructor | ObjectConstructor>;
    },

    backdropEl: {
      type: PropType<StringConstructor | ObjectConstructor>;
    },

    form: {
      type: BooleanConstructor;
      default: boolean;
    },

    placeholder: {
      type: StringConstructor;
      default: string;
    },

    spellcheck: {
      type: BooleanConstructor;
      default: undefined;
    },

    disableButton: {
      type: BooleanConstructor;
      default: boolean;
    },

    disableButtonText: {
      type: StringConstructor;
      default: string;
    },

    clearButton: {
      type: BooleanConstructor;
      default: boolean;
    },

    inputEvents: {
      type: StringConstructor;
      default: string;
    },

    searchIn: {
      type: StringConstructor;
      default: string;
    },

    searchItem: {
      type: StringConstructor;
      default: string;
    },

    searchGroup: {
      type: StringConstructor;
      default: string;
    },

    searchGroupTitle: {
      type: StringConstructor;
      default: string;
    },

    foundEl: {
      type: PropType<StringConstructor | ObjectConstructor>;
      default: string;
    },

    notFoundEl: {
      type: PropType<StringConstructor | ObjectConstructor>;
      default: string;
    },

    backdrop: {
      type: BooleanConstructor;
      default: undefined;
    },

    hideOnEnableEl: {
      type: PropType<StringConstructor | ObjectConstructor>;
      default: string;
    },

    hideOnSearchEl: {
      type: PropType<StringConstructor | ObjectConstructor>;
      default: string;
    },

    ignore: {
      type: StringConstructor;
      default: string;
    },

    customSearch: {
      type: BooleanConstructor;
      default: boolean;
    },

    removeDiacritics: {
      type: BooleanConstructor;
      default: boolean;
    },

    hideDividers: {
      type: BooleanConstructor;
      default: boolean;
    },

    hideGroups: {
      type: BooleanConstructor;
      default: boolean;
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
  ("change" | "input" | "focus" | "blur" | "submit" | "click:clear" | "click:disable" | "searchbar:search" | "searchbar:clear" | "searchbar:enable" | "searchbar:disable" | "update:value")[],
  "change" | "input" | "focus" | "blur" | "submit" | "click:clear" | "click:disable" | "searchbar:search" | "searchbar:clear" | "searchbar:enable" | "searchbar:disable" | "update:value"
>;

export default Searchbar;
  