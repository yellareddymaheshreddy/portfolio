# 🚀 Portfolio Setup & Deployment Guide

This guide will walk you through cloning, customizing, and deploying this portfolio project.

## 1. Local Repository Setup

To get started, you'll need to clone the repository and set up your own version on GitHub.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yellareddymaheshreddy/portfolio.git
    cd portfolio
    ```

2.  **Create your own repository on GitHub:**
    - Go to [GitHub](https://github.com/new) and create a new repository.
    - Do **not** initialize it with a README or License.

3.  **Update the remote URL:**
    Replace `<your-github-username>` and `<your-repo-name>` with your own details.
    ```bash
    git remote set-url origin https://github.com/<your-github-username>/<your-repo-name>.git
    ```

---

## 2. Configuration & Customization

### Update Personal Information
The primary configuration file is `src/config/portfolioConfig.ts`. Open it and update:
- **Contact Details**: Name, email, LinkedIn, GitHub, etc.
- **Projects**: Update the description, tech stack, and links for your projects.
- **Skills**: Add or remove categories to match your expertise.

### Replace Media Assets
Replace the default files in the `public/` directory with your own:
- **Profile Picture**: Replace `Mahesh.webp` (or update the path in `portfolioConfig.ts`).
- **Resume**: Replace `Mahesh-Resume.pdf` with your own PDF.
- **Project Images**: Place screenshots in `public/projects/`.

---

## 3. Environment Variables

The project requires some environment variables for features like the contact form and chatbot.

1.  **Rename the sample file:**
    ```bash
    mv env.sample .env
    ```
2.  **Configure `.env`:**
    Open `.env` and fill in the values:
    - `EMAIL_USER`: Your email address.
    - `EMAIL_APP_PASSWORD`: Your email app-specific password (search "Google App Passwords" for Gmail).
    - `GROQ_API_KEY`: Your API key from Groq (for the AI chatbot).

---

## 4. Push Your Changes

Once you've customized the code, commit and push it to your GitHub repository:

```bash
git add .
git commit -m "Initialize my customized portfolio"
git push -u origin main
```

---

## 5. Deployment on Vercel

1.  **Import Project:**
    - Go to [Vercel](https://vercel.com/new) and log in.
    - Import your new GitHub repository.

2.  **Add Environment Variables:**
    - During the setup, look for the **Environment Variables** section.
    - Add the same keys and values from your `.env` file (`EMAIL_USER`, `EMAIL_APP_PASSWORD`, `GROQ_API_KEY`).

3.  **Deploy:**
    - Click **Deploy**. Vercel will build and host your portfolio.

4.  **Custom Domain (Optional):**
    - In your Vercel project dashboard, go to **Settings > Domains**.
    - Add your custom domain and follow the instructions to update your DNS records.

Your portfolio is now live! 🚀

