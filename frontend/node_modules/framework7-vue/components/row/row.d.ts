
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Row: DefineComponent<
  {
    
    noGap: {
      type: BooleanConstructor;
    },

    resizable: {
      type: BooleanConstructor;
    },

    resizableFixed: {
      type: BooleanConstructor;
    },

    resizableAbsolute: {
      type: BooleanConstructor;
    },

    tag: {
      type: StringConstructor;
      default: string;
    },

    resizableHandler: {
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
  ("grid:resize")[],
  "grid:resize"
>;

export default Row;
  