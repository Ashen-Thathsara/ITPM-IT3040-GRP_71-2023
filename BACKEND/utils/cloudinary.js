const cloudinary = require('cloudinary').v2;

cloudinary.config ({
    cloud_name : process.env.CLOUDE_NAME,
    api_key: process.env.CLOUDE_KEY,
    api_secret: process.env.CLOUDE_KEY_SECRET
});

module.exports = cloudinary;