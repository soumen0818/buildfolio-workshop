## ✨ Features

### 🎨 Design & UI
- **Cosmic Theme**: Space-inspired design with animated particles, orbital rings, and neon gradients
- **Glassmorphism Effects**: Modern glass-blur cards throughout the interface
- **Smooth Animations**: Entrance animations, hover effects, and scroll-triggered interactions
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Custom Scrollbar**: Gradient-styled scrollbar matching the cosmic theme

### 🧩 Sections

#### 1. **Hero Section**
- Two-column layout with profile image
- Animated orbital rings around profile photo
- Floating tech icons (React, Blockchain, Code, Web3)
- Glassmorphic skill badges
- Social media links with glow effects
- Parallax mouse tracking on background elements

#### 2. **Skills Section**
- Interactive glassmorphism skill cards
- 12 technology icons with hover animations
- Neon glow borders on hover
- 3D depth effects with rotation
- Particle effects on active cards
- Technologies: JavaScript, Python, C, React, Next.js, TypeScript, MongoDB, Node.js, Express.js, MySQL, Solidity, Web3

#### 3. **Projects Section**
- Detailed project cards with descriptions
- GitHub and live demo links
- Hover effects with gradient glows
- 4 featured projects:
  - **HerbalTrace**: Blockchain supply chain platform
  - **SkillChain**: NFT credentials platform
  - **TechVerse Connect**: AI-powered tech news platform
  - **College Companion**: Mobile education app

#### 4. **Articles Section**
- Blog post cards with summaries
- Date labels and read more links
- Smooth hover transitions
- 3 featured articles on MERN, Web3, and WebSockets

#### 5. **Contact Section**
- Functional contact form with EmailJS integration
- Real-time form validation
- Success/error notifications
- Contact information display
- Professional status indicator

### 🎯 Technical Highlights

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom animations
- **Custom SVG Icons** for all tech stacks
- **EmailJS** for contact form functionality
- **Intersection Observer API** for scroll animations
- **Smooth scroll behavior** for navigation
- **Loading screen** with progress indicator
- **Floating navbar** with section tracking

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Custom CSS keyframes + Tailwind animate
- **Icons**: Custom SVG components

### Features & Libraries
- **Email Service**: EmailJS
- **Analytics**: Vercel Analytics
- **Image Optimization**: Next.js Image component
- **Fonts**: Geist & Geist Mono

### Deployment
- **Platform**: Vercel
- **Domain**: [Your Vercel URL]

## 📦 Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Clone the Repository
```bash
git clone https://github.com/soumen0818/buildfolio-workshop.git
cd buildfolio-workshop
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Environment Variables
Create a `.env.local` file in the root directory:
```env
# Add your environment variables here if needed
```

### Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization Guide

### Update Personal Information

#### 1. **Hero Section** (`components/sections/hero.tsx`)
```tsx
// Update name
<span>SOUMEN</span> // Change to your name

// Update titles
<span>Full-Stack (MERN)</span>
<span>Web3 Enthusiast</span>

// Update location
<span>📍</span> Kolkata, West Bengal

// Update bio
<p>Your bio here...</p>

// Update social links
href="https://github.com/your-username"
href="https://linkedin.com/in/your-profile"
href="mailto:your@email.com"
```

#### 2. **Skills** (`components/sections/skills.tsx`)
```tsx
const skills = [
  { name: "Your Skill", icon: YourIcon, category: "category" },
  // Add or remove skills
]
```

#### 3. **Projects** (`components/sections/projects.tsx`)
```tsx
const projects = [
  {
    id: 1,
    name: "Project Name",
    subtitle: "Project Type",
    description: ["Feature 1", "Feature 2"],
    github: "github-url",
    live: "live-url"
  }
]
```

#### 4. **Contact Form** (`components/sections/contact.tsx`)
Update EmailJS credentials:
```tsx
emailjs.init("your-public-key")
emailjs.sendForm("your-service-id", "your-template-id", formRef.current)
```

### Update Profile Image
Replace the image URL in `components/sections/hero.tsx`:
```tsx
src="https://your-image-url.com/profile.jpg"
```

Or add to `next.config.ts`:
```ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-domain.com',
      pathname: '/images/**',
    },
  ],
}
```

### Customize Colors
Edit `app/globals.css` for theme colors:
```css
/* Change gradient colors */
--color-primary: /* Your color */;
--color-secondary: /* Your color */;
```

## 📁 Project Structure

```text
buildfolio-workshop/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles & animations
├── components/
│   ├── sections/
│   │   ├── hero.tsx        # Hero section with profile
│   │   ├── skills.tsx      # Skills grid section
│   │   ├── projects.tsx    # Projects showcase
│   │   ├── articles.tsx    # Blog articles
│   │   └── contact.tsx     # Contact form
│   ├── floating-navbar.tsx # Fixed navigation bar
│   ├── loading-screen.tsx  # Initial loading animation
│   └── icons.tsx           # All SVG icon components
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

```