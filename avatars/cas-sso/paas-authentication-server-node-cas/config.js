module.exports = {
    port: 3300,
    sessionSecret: 'cas-session-secret',
    cookieSecret: 'cas-cookie-secret',
    cookieMaxAge: (1000 * 60 * 60 * 24 * 365),
    casConfig: {
    	foo: 'bar'
    }
};
