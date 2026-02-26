# Petra Kovač — Personal Trainer Website
## Setup & Deployment Guide

---

## Prerequisites

- **Node.js** 18+ — [nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js) or **pnpm** / **bun**
- A [Formspree](https://formspree.io) account (free tier works fine)
- A [Vercel](https://vercel.com) account for deployment

---

## 1. Install Dependencies

```bash
cd PersonalTrainerWebsite
npm install
```

---

## 2. Environment Variables

Copy the example file:
```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in your Formspree endpoint IDs:

```env
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id
NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID=your_newsletter_form_id
```

### Getting Formspree IDs
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a **New Form** → name it "Contact Form" → copy the ID from the endpoint URL
   - e.g., `https://formspree.io/f/abcd1234` → ID is `abcd1234`
3. Create a second form → "Newsletter" → copy that ID too

---

## 3. Add Your Images

Place your images in the `public/images/` folder with these exact filenames:

### Required Images

| File path | Description | Recommended size |
|---|---|---|
| `public/images/hero.jpg` | Hero background (full screen) | 1920×1080px or larger |
| `public/images/trainer.jpg` | Your professional photo (portrait) | 800×1000px |
| `public/images/og-image.jpg` | Open Graph social preview | 1200×630px |

### Transformation Images (optional — section hides gracefully without them)

| File path | Description |
|---|---|
| `public/images/transforms/t1-before.jpg` | Client 1 before |
| `public/images/transforms/t1-after.jpg` | Client 1 after |
| `public/images/transforms/t2-before.jpg` | Client 2 before |
| `public/images/transforms/t2-after.jpg` | Client 2 after |
| `public/images/transforms/t3-before.jpg` | Client 3 before |
| `public/images/transforms/t3-after.jpg` | Client 3 after |
| `public/images/transforms/t4-before.jpg` | Client 4 before |
| `public/images/transforms/t4-after.jpg` | Client 4 after |

### Client Avatars (optional)

| File path |
|---|
| `public/images/clients/client-1.jpg` |
| `public/images/clients/client-2.jpg` |
| `public/images/clients/client-3.jpg` |
| `public/images/clients/client-4.jpg` |
| `public/images/clients/client-5.jpg` |

> **Tip:** All images fail silently — the site looks great without them. Add real photos when you have them.

---

## 4. Customise Content

All text content is defined as constants inside each component file. Quick guide:

| What to change | Where |
|---|---|
| Trainer name, location | `components/Hero.tsx`, `components/About.tsx`, `components/Footer.tsx` |
| Bio & certifications | `components/About.tsx` |
| Programme details & pricing | `components/Programs.tsx` |
| Client transformations | `components/Transformations.tsx` |
| Testimonials | `components/Testimonials.tsx` |
| Social links, email | `components/Contact.tsx`, `components/Footer.tsx` |
| SEO metadata | `app/layout.tsx` |
| Brand name | Search and replace `PETRA KOVAČ` across all files |

---

## 5. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 6. Build for Production

```bash
npm run build
npm run start
```

---

## 7. Deploy to Vercel

### Option A — Vercel CLI (recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts. On first deploy, Vercel will auto-detect Next.js.

### Option B — GitHub + Vercel Dashboard

1. Push your code to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings — click **Deploy**

### Setting Environment Variables on Vercel

After deployment, go to your project in the Vercel dashboard:
- **Settings** → **Environment Variables**
- Add both `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` and `NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID`
- Redeploy for the changes to take effect

---

## 8. Custom Domain

In Vercel dashboard:
1. Go to **Settings** → **Domains**
2. Add your domain (e.g., `petrakovac.com`)
3. Update DNS records at your domain registrar as instructed

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 14 | Framework (App Router) |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| TailwindCSS | 3 | Styling |
| Framer Motion | 11 | Animations |
| React Hook Form | 7 | Form handling |
| Lucide React | latest | Icons |
| Formspree | — | Form backend (no database) |

---

## Folder Structure

```
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata + fonts
│   ├── page.tsx            # Homepage — assembles all sections
│   ├── globals.css         # Global styles, CSS variables, grain
│   └── privacy/
│       └── page.tsx        # Privacy policy page
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   ├── Hero.tsx            # Full-screen hero section
│   ├── About.tsx           # About / bio section
│   ├── Programs.tsx        # Coaching programme cards
│   ├── Transformations.tsx # Before/after gallery
│   ├── Testimonials.tsx    # Client testimonials
│   ├── Newsletter.tsx      # Email subscription
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Site footer
├── public/
│   └── images/             # Add your photos here
├── .env.local.example      # Environment variable template
├── tailwind.config.ts      # Tailwind theme (colours, fonts)
├── next.config.js          # Next.js config
└── tsconfig.json           # TypeScript config
```

---

## Performance Tips

- **Images**: Use `.webp` format for smaller file sizes. You can convert JPGs at [squoosh.app](https://squoosh.app)
- **Hero image**: Keep below 300KB for fast initial load
- **Fonts**: Already optimised via `next/font/google` (no layout shift)

---

## Support

For issues, refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Formspree Docs](https://help.formspree.io)
