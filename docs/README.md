# Prismic + Next.js Multi-Lang Starter

This page covers how to use **Prismic + Next.js Multi-Lang Starter** with Prismic.

- **Demo**: [Open live demo][live-demo]
- **Learn more about Prismic and Next.js**: [Prismic Next.js Documentation][prismic-docs]

&nbsp;

<img src="https://user-images.githubusercontent.com/8601064/163303418-e72d7138-1bbd-4e2c-bc26-d8674a464438.png" alt="Screenshots of the site seen on deskop and mobile browsers" />

&nbsp;

## 🚀 Quick Start

To start a new project using this starter, run the following commands in your terminal:

```sh
npx degit prismicio-community/nextjs-starter-prismic-multi-language your-project-name
cd your-project-name
npx @slicemachine/init
```

The commands will do the following:

1. Start a new Next.js project using this starter.
2. Ask you to log in to Prismic or [create an account][prismic-sign-up].
3. Create a new Prismic content repository with sample content.

When you're ready to start your project, run the following command:

```sh
npm run dev
```

To learn more about working with Prismic, [**see the Prismic docs**](https://prismic.io/docs/technologies/nextjs).

## Using and customizing your project

To get started after creating your new project, go to [prismic.io/dashboard](https://prismic.io/dashboard), click on the repository for this website, and start editing.

### Create a page

To create a page, click on the green pencil icon, then select **Page**.

Your new page will be accessible by its URL, but it won't appear on the website automatically. To let users discover it, add it to the navigation.

### Update the navigation

To add a page to your navigation menu, go to the document list and open the **Navigation** document. In the **Links** group, click **Add a new element in Links**. Select the page to add and fill in a label.

### Preview documents

In your repository, go to *Settings > Previews*. Under *Create a New Preview*, fill in the three fields:

- a name (like **Development** or **Production**)
- the domain where your app is running (like <http://localhost:3000> or <https://www.yoursite.com>)
- `/api/preview` for the Link Resolver

Now, go to a draft document and click the eye icon in the top-right corner.

To learn more about how to configure previews, read [Preview Drafts in Next.js](https://prismic.io/docs/technologies/preview-content-nextjs) in the Prismic documentation.

### Customize this website

This website is preconfigured with Prismic. It has three Prismic packages installed:

- `@prismicio/client` provides helpers for fetching content from Prismic
- `@prismicio/react` provides React components for rendering content from Prismic
- `@prismicio/next` provides a wrapper component to configure Prismic previews

These packages are already integrated and employed in this app. Take a look at the code to see how they're used.

### Edit the code

There are two steps to rendering content from Prismic in your Next.js project:

1. Fetch content from the Prismic API using `@prismicio/client`.
2. Template the content using components from `@prismicio/react`.

Here are some of the files in your project that you can edit:

- `prismicio.js` - This file includes configuration for `@prismicio/client` and exports useful API helpers.
- `app/\layout.js` - This is your layout component, which includes configuration for `@prismicio/next`.
- `app/[lang]/page.js` - This is the app homepage. It queries and renders a page document with the UID (unique identifier) "home" from the Prismic API.
- `app/[lang]/[uid]/page.js` - This is the page component, which queries and renders a page document from your Prismic repository based on the UID.
- `app/api/sign-up/route.js` - This is the API endpoint for your form. To use the form, send a POST request to a back end from this endpoint.
- `slices/\*/index.js` - Each Slice in your project has an index.js file that renders the Slice component. Edit this file to customize your Slices.

These are important files that you should leave as-is:

- `app/api/exit-preview/route.js` - Do not edit or delete this file. This is the API endpoint to close a Prismic preview session.
- `app/api/preview/route.js` - Do not edit or delete this file. This is the API endpoint to launch a Prismic preview session.
- `app/slice-simulator/page.js` - Do not edit or delete this file. This file simulates your Slice components in development.
- `slices/` - This directory contains Slice components, which are generated programmatically by Slice Machine. To customize a Slice template, you can edit the Slice's index.js file. To add Slices, delete Slices, or edit Slice models, use Slice Machine (more info below).

Learn more about how to edit your components with [Fetch Data in Next.js](https://prismic.io/docs/technologies/fetch-data-nextjs) and [Template Content in Next.js](https://prismic.io/docs/technologies/template-content-nextjs).

Styling in this project is implemented with Tailwind CSS. See the [Tailwind docs](https://tailwindcss.com/docs) for more info.

### Deploy to the web

To put your project online, see [Deploy your Next.js App](https://prismic.io/docs/technologies/deploy-nextjs).

### Edit content models with Slice Machine

This project includes an application called Slice Machine, which generates models for your Custom Types and Slices. Slice Machine stores the models locally in your codebase, so you can save and version them. It also syncs your models to Prismic. To learn how to use Slice Machine, read [Model Content in Next.js](https://prismic.io/docs/technologies/model-content-nextjs).

If you change or add to your Custom Types, you'll need to update your route handling to match. To learn how to do that, read [Define Paths in Next.js](https://prismic.io/docs/technologies/define-paths-nextjs).

### Handle form submissions

The newsletter form sends requests to an active API endpoint. The endpoint does not do anything with the data that it receives.

To make the form functional, add a POST request to an appropriate service. For instance, you could send the newsletter form data to Mailchimp.

## Learn more

For the official Prismic documentation, see [Prismic's guide for Next.js](https://prismic.io/docs/technologies/nextjs) or the [technical references for the installed Prismic packages](https://prismic.io/docs/technologies/technical-references).

[prismic]: https://prismic.io/
[prismic-docs]: https://prismic.io/docs/technologies/nextjs
[prismic-sign-up]: https://prismic.io/dashboard/signup
[nextjs]: https://nextjs.org/
[live-demo]: https://nextjs-starter-prismic-multi-language.vercel.app/
