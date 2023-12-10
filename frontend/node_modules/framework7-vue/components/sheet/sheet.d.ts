
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Sheet: DefineComponent<
  {
    
    opened: {
      type: BooleanConstructor;
    },

    top: {
      type: BooleanConstructor;
    },

    bottom: {
      type: BooleanConstructor;
    },

    position: {
      type: StringConstructor;
    },

    push: {
      type: BooleanConstructor;
    },

    animate: {
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

    swipeToClose: {
      type: BooleanConstructor;
      default: undefined;
    },

    swipeToStep: {
      type: BooleanConstructor;
      default: undefined;
    },

    swipeHandler: {
      type: PropType<StringConstructor | ObjectConstructor>;
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
  ("sheet:stepprogress" | "sheet:stepopen" | "sheet:stepclose" | "sheet:open" | "sheet:opened" | "sheet:close" | "sheet:closed" | "update:opened")[],
  "sheet:stepprogress" | "sheet:stepopen" | "sheet:stepclose" | "sheet:open" | "sheet:opened" | "sheet:close" | "sheet:closed" | "update:opened"
>;

export default Sheet;
  