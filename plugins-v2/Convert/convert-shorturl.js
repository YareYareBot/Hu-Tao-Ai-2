const axios = require('axios');

module.exports = {
    type: 'convert',
    command: ['shorten', 'shortlink', 'shorturl', 'shortenlink'],
    operate: async (context) => {
        const { Kyyhst, m, text, prefix, command, reply } = context;

        if (!text) {
            await reply(`Add input, Example: *${prefix + command} https://example.com*`);
            return;
        }

        try {
            const { data: tinyUrlShortUrl } = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`);
            await reply(`Shortened Succes\n\n*TinyURL: ${tinyUrlShortUrl}*`);
        } catch (error) {
            console.error('Error shortening URL:', error);
            await reply('Failed to shorten URL. Please try again later.');
        }
    }
};