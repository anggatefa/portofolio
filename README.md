# Angga Tefa Portfolio

Personal portfolio website built with HTML, CSS, and JavaScript.

## Features

- Modern dark cinematic design
- Fully responsive (desktop, tablet, mobile)
- Project showcase with detail modals
- Smooth scroll animations
- Contact section with social links
- No backend required — static website

## Technologies

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript
- Bootstrap Icons
- Google Fonts (Inter, JetBrains Mono)

## Deployment to GitHub Pages

1. Create a new repository on GitHub.
2. Clone or upload this project to the repository.
3. Push all files to the `main` branch.
4. Go to repository **Settings**.
5. Open **Pages** in the sidebar.
6. Under **Source**, select **Deploy from a branch**.
7. Select `main` branch and `/root` folder.
8. Click **Save**.
9. Your site will be available at `https://GITHUB_USERNAME.github.io/REPO_NAME/`.

## Customization

### Replace Profile Photo

1. Place your photo at `assets/images/profile.jpeg`.
2. The website will automatically display it in the hero section.

### Update Personal Data

Open `index.html` and replace the following placeholders:

| Placeholder | Replace With |
|---|---|
| `EMAIL_ADDRESS` | Your email address |
| `WHATSAPP_NUMBER` | Your WhatsApp number (with country code, e.g. `628123456789`) |
| `GITHUB_USERNAME` | Your GitHub username |
| `LINKEDIN_USERNAME` | Your LinkedIn username |

### Add New Projects

Add a new project card inside the `.projects-grid` div in `index.html`. Follow the existing project card structure and create a corresponding modal section.

### Update CV

Replace the file at `assets/cv/CV_ ANGGA TEFA.pdf` with your actual CV.

## Project Structure

```
portfolio/
├── index.html
├── README.md
├── assets/
│   ├── images/
│   │   ├── profile.jpeg
│   │   ├── Evoting.png
│   │   ├── NTT-mart.png
│   │   ├── project-paus.jpg
│   │   └── project-pertanian.jpg
│   ├── cv/
│   │   └── CV_ ANGGA TEFA.pdf
│   └── icons/
├── css/
│   └── style.css
└── js/
    └── script.js
```

## License

This project is for personal use only.
