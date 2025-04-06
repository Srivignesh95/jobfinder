
# Job Finder Web App

This project is a responsive Node.js and Express-based web application that helps users find jobs based on **skills**, **resume URLs**, and **location**. The app fetches real-time job data (presumably from an external API like Adzuna) and visually displays matches along with embedded Google Maps.

---

## Features

- Search for jobs using **skills**, **location**, or a **resume URL**
- Extract and display **skills from resume**
- Embed **Google Maps** for job locations
- "Show More" toggle for detailed job descriptions
- Fully **responsive design** for mobile, tablet, and desktop
- Custom **styling with CSS** (hover effects, badges, grid layout)
- Supports Unicode with `UTF-8` charset

---

## Tech Stack

- **Node.js**
- **Express**
- **Pug (Jade)** for templating
- **CSS3**
- **Font Awesome** for icons
- **Adzuna API**, **Resume Parser API**, and **GoogleMap API**

---

## Setup Instructions

### 1. Clone the repo
```
git clone https://github.com/Srivignesh95/jobfinder.git
```

### 2. Install dependencies
```
npm install
```

### 3. Configure API Key

You need to manually set your Job API key (e.g., Adzuna API key) and optionally a Google Maps Embed API key.

Create a `.env` file in the root directory and add:

```
ADZUNA_API_URL=https://api.adzuna.com/v1/api/jobs/gb/search/1
ADZUNA_APP_ID=your_adzuna_app_id
ADZUNA_API_KEY=your_adzuna_api_key

RESUME_PARSER_API_URL=https://api.apilayer.com/resume_parser/url
RESUME_PARSER_API_KEY=your_resume_parser_api_key

```

---

## Workflow Overview

1. User visits the home page (`index.pug`) with a search form
2. Upon submission:
   - Skills or Resume URL are sent via POST
   - Location is included optionally
3. Backend parses the resume (if URL provided)
4. Job listings are fetched from an external API
5. Results are rendered on `results.pug` with:
   - Job title, location, description
   - Embedded Google Map
   - "Show More" toggle
   - Skills extracted from resume (if any)

---

## To Do / Future Enhancements

- Resume file upload (instead of URL only)
- Authentication for saved job tracking

---

## Author

**Srivignesh Kavle S**
