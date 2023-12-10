
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Checkbox: DefineComponent<
  {
    
    checked: {
      type: BooleanConstructor;
    },

    indeterminate: {
      type: BooleanConstructor;
    },

    name: {
      type: PropType<NumberConstructor | StringConstructor>;
    },

    disabled: {
      type: BooleanConstructor;
    },

    readonly: {
      type: BooleanConstructor;
    },

    value: {
      type: PropType<NumberConstructor | StringConstructor | BooleanConstructor>;
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
  ("update:checked" | "change")[],
  "update:checked" | "change"
>;

export default Checkbox;
  