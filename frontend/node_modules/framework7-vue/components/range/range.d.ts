
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Range: DefineComponent<
  {
    
    formatLabel: {
      type: FunctionConstructor;
    },

    formatScaleLabel: {
      type: FunctionConstructor;
    },

    name: {
      type: StringConstructor;
    },

    input: {
      type: BooleanConstructor;
    },

    inputId: {
      type: StringConstructor;
    },

    disabled: {
      type: BooleanConstructor;
    },

    init: {
      type: BooleanConstructor;
      default: boolean;
    },

    value: {
      type: PropType<NumberConstructor | ArrayConstructor | StringConstructor>;
      default: number;
    },

    min: {
      type: PropType<NumberConstructor | StringConstructor>;
      default: number;
    },

    max: {
      type: PropType<NumberConstructor | StringConstructor>;
      default: number;
    },

    step: {
      type: PropType<NumberConstructor | StringConstructor>;
      default: number;
    },

    label: {
      type: BooleanConstructor;
      default: boolean;
    },

    dual: {
      type: BooleanConstructor;
      default: boolean;
    },

    vertical: {
      type: BooleanConstructor;
      default: boolean;
    },

    verticalReversed: {
      type: BooleanConstructor;
      default: boolean;
    },

    draggableBar: {
      type: BooleanConstructor;
      default: boolean;
    },

    scale: {
      type: BooleanConstructor;
      default: boolean;
    },

    scaleSteps: {
      type: NumberConstructor;
      default: number;
    },

    scaleSubSteps: {
      type: NumberConstructor;
      default: number;
    },

    limitKnobPosition: {
      type: BooleanConstructor;
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
  ("range:change" | "range:changed" | "rangeChange" | "rangeChanged" | "update:value")[],
  "range:change" | "range:changed" | "rangeChange" | "rangeChanged" | "update:value"
>;

export default Range;
  