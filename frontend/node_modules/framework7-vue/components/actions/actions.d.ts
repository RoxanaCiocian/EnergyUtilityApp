
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Actions: DefineComponent<
  {
    
    tabletFullscreen: {
      type: BooleanConstructor;
    },

    opened: {
      type: BooleanConstructor;
    },

    grid: {
      type: BooleanConstructor;
    },

    animate: {
      type: BooleanConstructor;
      default: undefined;
    },

    target: {
      type: PropType<StringConstructor | ObjectConstructor>;
      default: undefined;
    },

    convertToPopover: {
      type: BooleanConstructor;
      default: undefined;
    },

    forceToPopover: {
      type: BooleanConstructor;
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
  ("actions:open" | "actions:opened" | "actions:close" | "actions:closed" | "update:opened")[],
  "actions:open" | "actions:opened" | "actions:close" | "actions:closed" | "update:opened"
>;

export default Actions;
  