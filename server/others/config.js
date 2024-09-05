module.exports = {
    dbUri: process.env.DB_URI,
    port: process.env.PORT || 3001,
    clientUrl: process.env.CLIENT_URL,
    secretKey: process.env.SECRET_KEY || 'SECRET_KEY_FOR_JWT'
};