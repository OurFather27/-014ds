const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const router = express.Router();
const token = process.env.TELEGRAM_BOT_TOKEN;
const webhookUrl = process.env.WEBHOOK_URL; // Your public server URL
const bot = new TelegramBot(token, { polling: false }); // Disable polling, use webhook

// Set the webhook for real-time updates
bot.setWebHook(`${webhookUrl}/bot${token}`);

// Handle incoming webhook updates
router.post(`/bot${token}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200); // Respond with 200 OK to Telegram
});

// Fetch channel messages
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

// Handle new channel posts in real-time using webhook
bot.on('channel_post', async (msg) => {
    const chatId = msg.chat.id;
    const messageId = msg.message_id;
    const photo = msg.photo 
        ? await bot.getFileLink(msg.photo[msg.photo.length - 1].file_id) 
        : null;

    console.log('New post in channel:', {
        id: messageId,
        text: msg.text || '',
        caption: msg.caption || '',
        photo: photo
    });

    // You can store or update your database with this message
});

// Handle edited channel posts in real-time
bot.on('edited_channel_post', async (msg) => {
    console.log('Edited post in channel:', msg);

    // Handle edited post, update in your database if needed
});

// Handle deleted posts in real-time
bot.on('deleteMessage', async (msg) => {
    console.log('Deleted post in channel:', msg);

    // Handle message deletion logic if needed
});

module.exports = router;
