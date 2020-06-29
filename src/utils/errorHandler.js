export const hasAuthError = (errors) => {
    for (let i = 0; i < errors.length; i++) {
        if (errors[i].extensions.category === 'authentication') {
            return true;
        }
    }

    return false;
};
