# Prismic & NextJS Multi-language website example
> [NextJS](https://nextjs.org/) example Multi-language website with content managed in [Prismic](https://prismic.io)

## Check out the dedicated article to get this project up and running
> [Prismic project guide](https://user-guides.prismic.io/en/articles/2933718-multi-language-website-with-prismic-and-next-js-10)


## 1. Install the prismic-cli
```
npm install -g prismic-cli
```

## 2. Run the theme command
This will create a new Prismic content repository, setup the custom types, and install the project code
```
prismic theme --theme-url https://github.com/prismicio/nextjs-multi-language-site --conf prismic-configuration.js

```
## 3. Run the project
```
npm run dev
```
Then you can access it at [http://localhost:3000](http://localhost:3000).


## Deploys made easy with Vercel
[Sign up to Vercel](https://vercel.com/login) and follow the [deployment documentation](https://vercel.com/docs/platform/deployments) to quickly deploy your project.

## Next.js Internationalized Routing 

This sample is compatible with Next 10, which introduces support for i18n. It implements the sub-path routing strategy allowing you to build routes like /blog, /fr/blog /nl-nl/blog 

To learn more about Next.js Internationalized Routing, [read the official Next.js documentation](https://nextjs.org/docs/advanced-features/i18n-routing).

### Learn more about using Prismic with Next.js

[Prismic + Next.js documentation](https://prismic.io/docs/technologies/getting-started-nextjs).

### License

This software is licensed under the Apache 2 license, quoted below.

Copyright 2021 [Prismic](https://prismic.io).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
