This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## My approach and structure

This is a real estate website for the 15th arrondissement of Paris.
I built it using React, Next.js, TypeScript, Prismic, GSAP, and Tailwind CSS.

I created 5 slices in Prismic:

-Hero : The main section with a title, image, short description, and call-to-action button.
-ScrollText : A GSAP animation that progressively displays a description of the 15th district.
-AveragePrice : Shows average prices for apartments and houses using a table from Prismic.
-Neighborhoods : A list of 4 well-known places, each with an image and a short description.
-FAQ : An accordion-style FAQ section with expandable questions and answers.

Components

I also created a navbar and a footer.
In the components folder, I added :

Bounded: to control content width
FadeIn & RevealText: for smooth GSAP animations
Navbar & Footer: for layout structure

I also add 2 fonts, 1 font in GoogleFont (Raleway) and 1 local who is Gambarino

🔧 Tools & Learning

To complete the project, I briefly watched a tutorial from Prismic’s official YouTube channel, used my knowledge of React, Tailwind, and GSAP, and got help from AI tools for debugging and text generation.

ScreenShot of my project : (./public/screenshot.png)(./public/screenshot2.png)(./public/faq.png)