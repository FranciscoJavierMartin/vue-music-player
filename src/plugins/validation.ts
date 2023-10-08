import type { App } from 'vue';
import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
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
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('min_value', minVal);
    defineRule('max', max);
    defineRule('max_value', maxValue);
    defineRule('email', email);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('password_mismatch', confirmed);
    defineRule('excluded', excluded);
    defineRule('country_excluded', excluded);

    configure({
      generateMessage: (ctx) => {
        const fieldName = ctx.field[0].toUpperCase() + ctx.field.substring(1);

        const messages = {
          required: `${fieldName} is required`,
          min: `${fieldName} is too short`,
          max: `${fieldName} is too long`,
          alpha_spaces: `${fieldName} must contain only alphabetical characters and spaces`,
          email: `${fieldName} must be a valid email`,
          min_value: `${fieldName} is too low`,
          max_value: `${fieldName} is too high`,
          excluded: `You are not allowed to use this value for ${ctx.field}`,
          country_excluded: `Due to restrictions, we do not accept users from this location`,
          password_mismatch: "The passwords don't match",
          tos: `You must accept the Terms fo Service.`,
        } as { [key: string]: string };

        const message = messages[ctx.rule?.name ?? '']
          ? (messages[ctx.rule?.name ?? ''] as string)
          : `${fieldName} is invalid`;

        return message;
      },
    });
  },
};
