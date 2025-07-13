
# CONCERN - NGO Website

![CONCERN Logo](https://cijik.com/uploads/rehabs/1273.jpg)

This repository contains the source code for the official website of **CONCERN**, a Non-Governmental Organisation (NGO) dedicated to addiction treatment and rehabilitation. The website serves as an informational hub for patients, families, and the community, providing details about the organization's mission, services, team, and impact.

## ✨ Features

- **Fully Responsive Design**: A seamless experience across desktops, tablets, and mobile devices.
- **Modern UI/UX**: Built with ShadCN UI and Tailwind CSS for a clean, accessible, and professional interface.
- **Informational Pages**: Detailed sections for:
  - **Home**: Introduction, mission, vision, and facilities.
  - **Our Team**: Meet the dedicated management, medical, and technical staff.
  - **Therapy**: Descriptions of the various therapies offered.
  - **Training**: Information on training programs and workshops.
  - **MoSJE Scheme**: Details on the partnership with the Ministry of Social Justice and Empowerment.
- **Interactive Photo Gallery**: Dynamically organized albums by year and event categories.
- **Annual Reports**: A dedicated page for downloading official reports in PDF format.
- **Self-Assessments**: Confidential questionnaires (SADD & Self-Diagnosis) for users to evaluate their relationship with alcohol.
- **Functional Contact Form**: A secure, server-side contact form using Nodemailer and Gmail SMTP for enquiries.
- **Smooth Page Transitions**: Animated transitions for a fluid user experience.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Emailing**: [Nodemailer](https://nodemailer.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

Install the required packages using npm:

```bash
npm install
```

### 3. Set Up Environment Variables

The contact form requires SMTP credentials to send emails. Create a `.env.local` file in the root of the project and add the following variables.

For using Gmail, you must generate an **App Password**.

```bash
# .env.local

# Your Gmail address
SMTP_USER=your-email@gmail.com

# Your 16-character Gmail App Password
SMTP_PASSWORD=xxxx-xxxx-xxxx-xxxx

# The email address where you want to receive enquiries
SMTP_TO_EMAIL=your-receiving-email@example.com
```

### 4. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

The application will be available at [http://localhost:9002](http://localhost:9002).

## 📂 Project Structure

The project follows the standard Next.js App Router structure:

```
.
├── src
│   ├── app/                    # Main application routes
│   │   ├── (page-routes)/      # Folders for each page
│   │   ├── globals.css         # Global styles and theme variables
│   │   └── layout.tsx          # Root layout
│   ├── components/             # Reusable components
│   │   ├── ui/                 # ShadCN UI components
│   │   └── ...                 # Custom components (Header, Footer, Navbar, etc.)
│   ├── hooks/                  # Custom React hooks (e.g., use-toast)
│   └── lib/                    # Utility functions
├── public/                     # Static assets (images, fonts)
├── .env.local                  # Local environment variables (DO NOT COMMIT)
├── next.config.ts              # Next.js configuration
└── tailwind.config.ts          # Tailwind CSS configuration
```
