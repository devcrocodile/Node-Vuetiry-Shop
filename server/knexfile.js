module.exports = {
    development: {
        client: 'pg',
        connection: 'postgress://localhost/kernel-shoppe'
    },
    test: {
        client: 'pg',
        connection: 'postgress://localhost/test-kernel-shoppe'
    }
};
