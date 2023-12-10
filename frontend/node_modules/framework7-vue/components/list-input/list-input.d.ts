
import { ComponentOptionsMixin, DefineComponent, PropType } from 'vue';


declare const ListInput: DefineComponent<
  {
    
    media: {
      type: StringConstructor;
    },

    name: {
      type: StringConstructor;
    },

    inputmode: {
      type: StringConstructor;
    },

    readonly: {
      type: BooleanConstructor;
    },

    required: {
      type: BooleanConstructor;
    },

    disabled: {
      type: BooleanConstructor;
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

    label: {
      type: PropType<StringConstructor | NumberConstructor>;
    },

    inlineLabel: {
      type: BooleanConstructor;
    },

    floatingLabel: {
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

    sortable: {
      type: BooleanConstructor;
      default: undefined;
    },

    dropdown: {
      type: PropType<StringConstructor | BooleanConstructor>;
      default: string;
    },

    wrap: {
      type: BooleanConstructor;
      default: boolean;
    },

    input: {
      type: BooleanConstructor;
      default: boolean;
    },

    type: {
      type: StringConstructor;
      default: string;
    },

    value: {
      type: PropType<StringConstructor | NumberConstructor | ArrayConstructor | any | ObjectConstructor>;
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
  ("textarea:resize" | "input:notempty" | "input:empty" | "input:clear" | "texteditor:change" | "calendar:change" | "colorpicker:change" | "change" | "focus" | "blur" | "input" | "update:value")[],
  "textarea:resize" | "input:notempty" | "input:empty" | "input:clear" | "texteditor:change" | "calendar:change" | "colorpicker:change" | "change" | "focus" | "blur" | "input" | "update:value"
>;

export default ListInput;
  