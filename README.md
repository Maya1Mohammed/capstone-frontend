# PrecisionAI — Front-End

Front-end for the PrecisionAI platform. Built with React + Vite.

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — build tool and dev server
- **React Router v7** — client-side routing
- **CSS Modules** — scoped component styling
- **Google Fonts** — Manrope (headlines), Inter (body & labels)

## Getting Started

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## Project Structure

```
src/
├── index.css                              # Global design tokens & reset
├── App.jsx                                # Router setup
│
├── components/
│   ├── layout/
│   │   ├── AuthLayout.jsx                 # Shared auth page shell
│   │   └── styles/
│   │       └── AuthLayout.module.css
│   └── ui/
│       ├── AuthInput.jsx                  # Labelled input with icon + password toggle
│       ├── AuthButton.jsx                 # Primary CTA button
│       ├── AuthDivider.jsx                # OR divider
│       ├── ForgotPasswordModal.jsx        # Two-step password reset modal
│       └── styles/
│           ├── AuthInput.module.css
│           ├── AuthButton.module.css
│           ├── AuthDivider.module.css
│           └── ForgotPasswordModal.module.css
│
└── pages/
    └── auth/
        ├── SignUpPage.jsx                 # /sign-up
        ├── LoginPage.jsx                  # /login
        └── styles/
            ├── SignUpPage.module.css
            └── LoginPage.module.css
```

## Design System

| Token | Value |
|---|---|
| Primary | `#00F0FF` |
| Secondary | `#10B981` |
| Tertiary | `#6366F1` |
| Neutral | `#0F172A` |
| Headline font | Manrope |
| Body / Label font | Inter |

## Pages

| Route | Page |
|---|---|
| `/sign-up` | Create Account |
| `/login` | Sign In |
| `/*` | Redirects to `/sign-up` |
