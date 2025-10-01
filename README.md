# JEE Practice - Exam Question Practice App

A modern, interactive web application built with Next.js for practicing JEE (Joint Entrance Examination) questions with instant feedback.

## Overview

This is a 2-page Next.js application designed to help students practice JEE exam questions across Physics, Chemistry, and Mathematics. Users can test their knowledge with multiple-choice questions and receive immediate feedback on their answers.

## Features

### Homepage

- **Hero Section**: Eye-catching landing page with clear value proposition
- **Feature Cards**: Highlights three key benefits:
  - Focused Practice across all subjects
  - Instant Feedback on answers
  - Progress Tracking capabilities
- **Call-to-Action**: Multiple CTAs to guide users to start practicing
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views

### Dashboard (Practice Page)

- **10 Mock Questions**: Hardcoded questions covering Physics, Chemistry, and Mathematics
- **Multiple Choice Interface**: Each question has 4 options (A, B, C, D)
- **Instant Feedback**:
  - Visual indicators (green for correct, red for incorrect)
  - Correct answer is highlighted after selection
  - User's selected answer is clearly marked
- **Progress Tracking**:
  - Real-time counter of attempted questions
  - Number of correct and incorrect answers
  - Overall accuracy percentage
- **Subject Badges**: Color-coded badges for easy subject identification
  - Physics: Blue
  - Chemistry: Green
  - Mathematics: Amber
- **Completion Summary**: Final score card with retry option

## Tech Stack

- **Framework**: Next.js 13.5.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage/Landing page
│   ├── globals.css          # Global styles and Tailwind config
│   └── dashboard/
│       └── page.tsx         # Dashboard with practice questions
├── lib/
│   ├── questions.ts         # Hardcoded question data
│   └── utils.ts             # Utility functions
├── components/
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
└── hooks/
    └── use-toast.ts         # Toast notification hook
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd project
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Question Data Structure

Questions are stored in `lib/questions.ts` with the following structure:

```typescript
interface Question {
  id: number;
  subject: "Physics" | "Chemistry" | "Mathematics";
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option (0-3)
}
```

### Current Questions

- **3 Physics questions**: Circular motion, electric field, dimensional formula, projectile motion
- **3 Chemistry questions**: Electronegativity, hybridization, organic reactions
- **4 Mathematics questions**: Differentiation, trigonometry, absolute value equations

## Key Components

### Homepage (`app/page.tsx`)

- Server-side rendered landing page
- Navigation bar with branding
- Hero section with gradient text
- Feature showcase grid
- Footer section

### Dashboard (`app/dashboard/page.tsx`)

- Client-side component (`'use client'`)
- State management for:
  - Selected answers per question
  - Result visibility per question
- Real-time progress calculation
- Interactive question cards with option buttons
- Disabled state after answer submission
- Retry functionality to reset all answers

## Styling

The app uses a professional slate color scheme:

- Primary: Slate/Black tones
- Accent colors: Subject-specific (Blue, Green, Amber)
- Background: Gradient from slate-50 to white
- Cards: White with subtle shadows and hover effects

## Responsive Design

- **Mobile**: Single column layout, stacked navigation
- **Tablet**: Optimized spacing and font sizes
- **Desktop**: Full-width hero, 3-column feature grid

## Future Enhancements

Potential features to add:

- User authentication
- Database integration for storing progress
- More questions across difficulty levels
- Timer for timed practice
- Detailed explanations for answers
- Performance analytics and weak area identification
- Question filtering by subject/difficulty
- Bookmark/save questions for later

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Check TypeScript types

## License

This project is private and for educational purposes.

## Author

Built with Next.js, TypeScript, and Tailwind CSS.

@arjunchavhan024

## Thank You !
