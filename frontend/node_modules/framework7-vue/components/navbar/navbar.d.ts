
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Navbar: DefineComponent<
  {
    
    backLink: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    backLinkUrl: {
      type: StringConstructor;
    },

    backLinkForce: {
      type: BooleanConstructor;
    },

    title: {
      type: StringConstructor;
    },

    subtitle: {
      type: StringConstructor;
    },

    hidden: {
      type: BooleanConstructor;
    },

    noShadow: {
      type: BooleanConstructor;
    },

    noHairline: {
      type: BooleanConstructor;
    },

    innerClass: {
      type: StringConstructor;
    },

    innerClassName: {
      type: StringConstructor;
    },

    large: {
      type: BooleanConstructor;
    },

    largeTransparent: {
      type: BooleanConstructor;
    },

    transparent: {
      type: BooleanConstructor;
    },

    titleLarge: {
      type: StringConstructor;
    },

    backLinkShowText: {
      type: BooleanConstructor;
      default: undefined;
    },

    sliding: {
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
  ("navbar:hide" | "navbar:show" | "navbar:expand" | "navbar:collapse" | "navbar:transparentshow" | "navbar:transparenthide" | "click:back" | "back:click")[],
  "navbar:hide" | "navbar:show" | "navbar:expand" | "navbar:collapse" | "navbar:transparentshow" | "navbar:transparenthide" | "click:back" | "back:click"
>;

export default Navbar;
  