This project template communicates with [Chatwoot](https://www.chatwoot.com/) and shows a window with the retrieved information using [Next.js](https://nextjs.org/). It comes Tailwind and DaisyUI (as a plugin) installed for styling.


## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## useChatwoot Hook

The core of the project is the `useChatwoot` hooks, which implements the communication between both, for localhost environmet, it will try to load `public/mocks/chatwoot.json` to populate the hook, otherwise, it will expect the message window event as described in its [documentation](https://www.chatwoot.com/docs/product/others/dashboard-apps).

## Typescript

In order to support properly *typescript*, the key names are returned in camel casing instead of the snake case described on Chatwoot documentation, *types* are provided in `types/index.ts`.

## Running as production locally

To test production, build and serve the project using:

```
NODE_ENV=production yarn start
```

You can use an external service like *ngrok* to tunnel your conecction as required from *Chatwoot*.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
