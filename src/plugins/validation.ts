import type { App } from 'vue';
import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
} from 'vee-validate';
import {
  required,
  min,
  min_value as minVal,
  max,
  max_value as maxValue,
  email,
  confirmed,
  alpha_spaces as alphaSpaces,
  not_one_of as excluded,
} from '@vee-validate/rules';

export default {
  install: (app: App) => {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('min_value', minVal);
    defineRule('max', max);
    defineRule('max_value', maxValue);
    defineRule('email', email);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('confirmed', confirmed);
    defineRule('excluded', excluded);
  },
};
