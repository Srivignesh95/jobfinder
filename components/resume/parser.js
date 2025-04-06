const axios = require('axios');
require('dotenv').config();

async function analyzeResumeFromURL(resumeUrl) {
  try {
    const encodedUrl = encodeURIComponent(resumeUrl);
    const apiUrl = `${process.env.RESUME_PARSER_API_URL}?url=${encodedUrl}`;

    const response = await axios.get(apiUrl, {
      headers: {
        apikey: process.env.RESUME_PARSER_API_KEY
      }
    });

    return response.data;

  } catch (error) {
    console.error("Resume Parser API Error:", error.response?.data || error.message);
    return { score: 0, suggestions: ["Error analyzing resume."] };
  }
}

module.exports = { analyzeResumeFromURL };
