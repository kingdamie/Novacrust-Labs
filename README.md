# Frontend Assessment – React / Next.js

This project is a frontend-only implementation built with Next.js and React, focused on clean UI, component structure, and client-side state handling.

## Setup Instructions

### Prerequisites
 - Node.js (v18 or later recommended)
 - npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kingdamie/Novacrust-Labs
cd <project-folder>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open the app in your browser:

```bash
http://localhost:3000
```

## Build for Production

```bash
npm run build
npm run start
```

## Assumptions & Trade-offs

### Assumptions
- This is a frontend-only assessment; no backend or API integration is required.

- All selectable data (e.g., banks, wallets, dropdown options) is handled using local static data (JSON/constants).

- Navigation and page transitions are handled using Next.js App Router.

- Form validation is lightweight and handled on the client side.

### Trade-offs
- No API calls: Real-world API integration (loading states, retries, error handling) is intentionally omitted to keep the scope focused on UI and state logic.

- Mock data: Static data is used instead of live endpoints, which limits real-time accuracy but improves predictability and simplicity.

- Minimal persistence: Form data is stored in component state only (no database or localStorage persistence unless explicitly required).

- Performance optimizations such as memoization and virtualization are kept minimal due to the project’s small scale.


## Tech Stack
- Next.js (App Router)

- React

- TypeScript

- Tailwind CSS

- shadcn/ui components

## Notes

This project prioritizes code clarity, component reuse, and UI accuracy over backend complexity. The structure is intentionally simple to allow easy extension if APIs or persistent storage are introduced
