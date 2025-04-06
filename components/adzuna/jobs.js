const axios = require('axios');
require('dotenv').config();

async function getJobs(skill, location) {
  try {
    const response = await axios.get(`${process.env.ADZUNA_API_URL}`, {
      params: {
        app_id: process.env.ADZUNA_APP_ID,
        app_key: process.env.ADZUNA_API_KEY,
        what_or: skill,
        where: location
      }
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}

module.exports = { getJobs };
