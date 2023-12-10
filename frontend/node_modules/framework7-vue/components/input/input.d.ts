
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const Input: DefineComponent<
  {
    
    type: {
      type: StringConstructor;
    },

    name: {
      type: StringConstructor;
    },

    inputmode: {
      type: StringConstructor;
    },

    placeholder: {
      type: StringConstructor;
    },

    inputId: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    size: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    accept: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    autocomplete: {
      type: PropType<StringConstructor>;
    },

    autocorrect: {
      type: PropType<StringConstructor>;
    },

    autocapitalize: {
      type: PropType<StringConstructor>;
    },

    spellcheck: {
      type: PropType<StringConstructor>;
    },

    autofocus: {
      type: BooleanConstructor;
    },

    autosave: {
      type: StringConstructor;
    },

    checked: {
      type: BooleanConstructor;
    },

    disabled: {
      type: BooleanConstructor;
    },

    max: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    min: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    step: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    maxlength: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    minlength: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    multiple: {
      type: BooleanConstructor;
    },

    readonly: {
      type: BooleanConstructor;
    },

    required: {
      type: BooleanConstructor;
    },

    inputStyle: {
      type: PropType<StringConstructor | ObjectConstructor>;
    },

    pattern: {
      type: StringConstructor;
    },

    validate: {
      type: PropType<BooleanConstructor | StringConstructor>;
    },

    validateOnBlur: {
      type: BooleanConstructor;
    },

    onValidate: {
      type: FunctionConstructor;
    },

    tabindex: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    resizable: {
      type: BooleanConstructor;
    },

    clearButton: {
      type: BooleanConstructor;
    },

    noFormStoreData: {
      type: BooleanConstructor;
    },

    noStoreData: {
      type: BooleanConstructor;
    },

    ignoreStoreData: {
      type: BooleanConstructor;
    },

    errorMessage: {
      type: StringConstructor;
    },

    errorMessageForce: {
      type: BooleanConstructor;
    },

    info: {
      type: StringConstructor;
    },

    outline: {
      type: BooleanConstructor;
    },

    calendarParams: {
      type: ObjectConstructor;
    },

    colorPickerParams: {
      type: ObjectConstructor;
    },

    textEditorParams: {
      type: ObjectConstructor;
    },

    value: {
      type: PropType<StringConstructor | NumberConstructor | ArrayConstructor | any | ObjectConstructor>;
      default: undefined;
    },

    wrap: {
      type: BooleanConstructor;
      default: boolean;
    },

    dropdown: {
      type: PropType<StringConstructor | BooleanConstructor>;
      default: string;
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
  ("input" | "focus" | "blur" | "change" | "textarea:resize" | "input:notempty" | "input:empty" | "input:clear" | "texteditor:change" | "calendar:change" | "colorpicker:change" | "update:value")[],
  "input" | "focus" | "blur" | "change" | "textarea:resize" | "input:notempty" | "input:empty" | "input:clear" | "texteditor:change" | "calendar:change" | "colorpicker:change" | "update:value"
>;

export default Input;
  