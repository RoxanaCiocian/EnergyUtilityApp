
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Popup: DefineComponent<
  {
    
    tabletFullscreen: {
      type: BooleanConstructor;
    },

    opened: {
      type: BooleanConstructor;
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

    closeOnEscape: {
      type: BooleanConstructor;
      default: undefined;
    },

    swipeToClose: {
      type: PropType<BooleanConstructor | StringConstructor>;
      default: boolean;
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
  ("popup:swipestart" | "popup:swipemove" | "popup:swipeend" | "popup:swipeclose" | "popup:open" | "popup:opened" | "popup:close" | "popup:closed" | "update:opened")[],
  "popup:swipestart" | "popup:swipemove" | "popup:swipeend" | "popup:swipeclose" | "popup:open" | "popup:opened" | "popup:close" | "popup:closed" | "update:opened"
>;

export default Popup;
  