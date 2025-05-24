const aiService = require('../services/ai.service'); // ✅ require the service

module.exports.getResponse = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    try {
        const response = await aiService(code); // ✅ now aiService is a function
        res.send(response);
    } catch (error) {
        res.status(500).send("AI Service Error: " + error.message);
    }
};
