
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Col: DefineComponent<
  {
    
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

    width: {
      type: PropType<NumberConstructor | StringConstructor>;
      default: string;
    },

    xsmall: {
      type: PropType<NumberConstructor | any>;
    },

    small: {
      type: PropType<NumberConstructor | any>;
    },

    medium: {
      type: PropType<NumberConstructor | any>;
    },

    large: {
      type: PropType<NumberConstructor | any>;
    },

    xlarge: {
      type: PropType<NumberConstructor | any>;
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

export default Col;
  