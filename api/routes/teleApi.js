const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const router = express.Router();
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: false }); // Set polling to false if using webhooks

// Route to fetch channel messages
router.get('/channel-messages', async (req, res) => {
    try {
        const channelUsername = '@godfather1277'; // Replace with your channel username
        const chat = await bot.getChat(channelUsername);
        const chatId = chat.id;

        // Fetch recent updates from the channel (for public channels)
        const messages = [];
        const updates = await bot.getUpdates({ limit: 10 });

        for (let update of updates) {
            if (update.channel_post && update.channel_post.chat.id === chatId) {
                const message = update.channel_post;
                const photo = message.photo 
                    ? await bot.getFileLink(message.photo[message.photo.length - 1].file_id) // Get highest resolution
                    : null;

                messages.push({
                    id: message.message_id,
                    text: message.text || '',
                    caption: message.caption || '',
                    photo: photo || null
                });
            }
        }

        if (messages.length === 0) {
            return res.json({
                message: 'No messages found!',
                data: messages
            });
        }

        res.json({
            message: 'Successfully fetched channel messages!',
            data: messages,
        });
    } catch (error) {
        console.error('Error fetching channel messages:', error);
        res.status(500).json({ error: 'Failed to fetch messages. Please try again.' });
    }
});

module.exports = router;
