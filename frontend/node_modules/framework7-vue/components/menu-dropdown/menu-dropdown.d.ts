
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const MenuDropdown: DefineComponent<
  {
    
    contentHeight: {
      type: StringConstructor;
    },

    position: {
      type: StringConstructor;
    },

    left: {
      type: BooleanConstructor;
    },

    center: {
      type: BooleanConstructor;
    },

    right: {
      type: BooleanConstructor;
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

export default MenuDropdown;
  