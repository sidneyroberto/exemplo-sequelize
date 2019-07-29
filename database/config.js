const config = {
    'development': {
        db: 'agenda_dev',
        user: 'dev',
        password: 'senha123',
        host: 'localhost',
        dialect: 'postgres'
    },
    'test': {
        db: 'agenda_test',
        user: 'dev',
        password: 'senha123',
        host: 'localhost',
        dialect: 'postgres'
    },
    'production': {
        db: 'agenda_prod',
        user: 'dev',
        password: 'senha123',
        host: 'localhost',
        dialect: 'postgres'
    }
};

module.exports = config;