export const subdomain = () => {
    const host = window.location.host;

    return host.split('.').shift();
};
