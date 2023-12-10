
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Popover: DefineComponent<
  {
    
    opened: {
      type: BooleanConstructor;
    },

    animate: {
      type: BooleanConstructor;
      default: undefined;
    },

    targetEl: {
      type: PropType<StringConstructor | ObjectConstructor>;
      default: undefined;
    },

    backdrop: {
      type: BooleanConstructor;
      default: undefined;
    },

    backdropEl: {
      type: PropType<StringConstructor | ObjectConstructor>;
      default: undefined;
    },

    closeByBackdropClick: {
      type: BooleanConstructor;
      default: undefined;
    },

    closeByOutsideClick: {
      type: BooleanConstructor;
      default: undefined;
    },

    closeOnEscape: {
      type: BooleanConstructor;
      default: undefined;
    },

    containerEl: {
      type: PropType<StringConstructor | ObjectConstructor>;
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
    }
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  ("popover:open" | "popover:opened" | "popover:close" | "popover:closed" | "update:opened")[],
  "popover:open" | "popover:opened" | "popover:close" | "popover:closed" | "update:opened"
>;

export default Popover;
  