
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Appbar: DefineComponent<
  {
    
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

    inner: {
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
  
>;

export default Appbar;
  