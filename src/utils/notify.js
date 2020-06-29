import { Notify } from 'quasar'

export const displayError = (message, options = {}) => Notify.create({
    message,
    position: 'bottom-right',
    type: 'negative',
    ...options,
});

export const displaySuccess = (message, options = {}) => Notify.create({
    message,
    position: 'bottom-right',
    type: 'positive',
    ...options,
});

export const displayWarning = (message, options = {}) => Notify.create({
    message,
    position: 'bottom-right',
    type: 'warning',
    ...options,
});
