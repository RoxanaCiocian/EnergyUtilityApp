
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Gauge: DefineComponent<
  {
    
    valueText: {
      type: PropType<NumberConstructor | StringConstructor>;
    },

    labelText: {
      type: StringConstructor;
    },

    type: {
      type: StringConstructor;
      default: string;
    },

    value: {
      type: PropType<NumberConstructor | StringConstructor>;
      default: number;
    },

    size: {
      type: PropType<NumberConstructor | StringConstructor>;
      default: number;
    },

    bgColor: {
      type: StringConstructor;
      default: string;
    },

    borderBgColor: {
      type: StringConstructor;
      default: string;
    },

    borderColor: {
      type: StringConstructor;
      default: string;
    },

    borderWidth: {
      type: PropType<NumberConstructor | StringConstructor>;
      default: number;
    },

    valueTextColor: {
      type: StringConstructor;
      default: string;
    },

    valueFontSize: {
      type: PropType<NumberConstructor | StringConstructor>;
      default: number;
    },

    valueFontWeight: {
      type: PropType<NumberConstructor | StringConstructor>;
      default: number;
    },

    labelTextColor: {
      type: StringConstructor;
      default: string;
    },

    labelFontSize: {
      type: PropType<NumberConstructor | StringConstructor>;
      default: number;
    },

    labelFontWeight: {
      type: PropType<NumberConstructor | StringConstructor>;
      default: number;
    }
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  
>;

export default Gauge;
  