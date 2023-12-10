
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const ListIndex: DefineComponent<
  {
    
    listEl: {
      type: PropType<StringConstructor | ObjectConstructor>;
    },

    init: {
      type: BooleanConstructor;
      default: boolean;
    },

    indexes: {
      type: PropType<StringConstructor | ArrayConstructor>;
      default: string;
    },

    scrollList: {
      type: BooleanConstructor;
      default: boolean;
    },

    label: {
      type: BooleanConstructor;
      default: boolean;
    },

    iosItemHeight: {
      type: NumberConstructor;
      default: number;
    },

    mdItemHeight: {
      type: NumberConstructor;
      default: number;
    },

    auroraItemHeight: {
      type: NumberConstructor;
      default: number;
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
  ("listindex:select")[],
  "listindex:select"
>;

export default ListIndex;
  