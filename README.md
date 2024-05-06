# Welcome

Please take the time to read through all of the sections below; we want you to do great! :rocket:

Feel free to reach out to your recruiting contact with any questions or concerns.

## Goal

Modify the provided Vue 3 app to match [this mock](https://www.figma.com/file/swzJVL624G434CVdWi3FLv/Core-UI-Team-Project) as closely as possible while utilizing best-practices to improve the codebase and implement the functional requirements outlined below.

- The provided exercise files are a starting point and they have room for improvement; feel free to modify
- Don't treat the mock as gospel -- if you see things that don't make sense, ask questions or implement what you think is right
- In the exercise you are utilizing a local API; however, code your submission as if you are using a production API, accounting for typical issues that can occur

### Links

- Figma Mock: <https://www.figma.com/file/swzJVL624G434CVdWi3FLv/Core-UI-Team-Project>

## Functional Requirements

- [Vue 3](https://vuejs.org/) and TypeScript
- User should be able to view the name, a brief description, versions available, and other info shown in the mock for services
- User should be able to search for services ([See search endpoint details below](#searching-the-services-endpoint))
- User should be able to click on a service to view more details
- User should be able to paginate through services (client-side implementation)
- The create Service Package button doesn't have to be operable -- interacting with this elements could do nothing, could be fully implemented (stretch goal), or something in between
- Please update the `README` in the project with a section to describe your design considerations, assumptions, and trade-offs made during this exercise. Also feel free to include any notes about your submission

## Additional Considerations (if applicable)

- The UI should be responsive and look great at different browser viewport sizes
- Pixel-perfect implementation
- Routing and views (e.g. navigating to a given service from its card)
- State management with [Pinia](https://pinia.vuejs.org/)
- [Component Tests and/or Unit Tests](#run-component-and-unit-tests-with-vitest-and-optionally-vue-test-utils)
- Other items covered in your Panel 1 interview

## Evaluation

We will review your code for quality and your ability to talk through it, how you approach the UI, and what tradeoffs you make. Specifically we'll be looking at the following:

- How closely your implementation matches the design along with the other [Functional Requirements](#functional-requirements)
- Code quality, including appropriate componentization and modularity
- TypeScript usage
- Coding (and Vue) best-practices
- The project should pass type checking and build successfully
- How you dedicate the allotted time to focus on your strengths
- Test coverage, if applicable

## How to submit the project

You have up to a week to complete the exercise, but we don't expect you to spend more than a few hours on it.

When it's ready, please send your recruiter a link to the source code in a GitHub repository (no Pull Requests).

---

## Project Setup

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

### Clone the repository

```sh
git clone git@github.com:Kong/konnect-team-interview-frontend-exercise.git
```

### Env variables

Copy the `.env.dist` for local development by running: 

```sh
cp  .env.dist .env
```

### pnpm

This repository uses [`pnpm`](https://pnpm.io) rather than `npm` or `yarn`. [See here for instructions on installing pnpm](https://pnpm.io/installation).

### Install dependencies

```sh
pnpm install
```

### Compile and Hot-Reload for Development

You can now start both services by running :

```sh
pnpm dev
```

## Searching the services endpoint

The local API is available at `http://localhost:4001` after running `pnpm dev:server`.

Searching this endpoint is supported by passing a query string with a value to search with (case-insensitive): `/api/services?q={value}`

**Note**: The search endpoint evaluates all property values as a `string` to determine a match.

### Searchable properties

The search endpoint is configured to search the following fields for each service within the JSON response:

```ts
{
  id: string;
  name: string;
  description: string;
  type: string;
}
```

### Search example

If I wanted to search for a service with "dogs" in the service name, I would pass the name in the query string:

```sh
GET: /api/services?q=dogs
```

### Linting and fixing the code

#### ESLint

```sh
# Run the linter
pnpm lint

# Fix linting errors
pnpm lint:fix
```

#### Stylelint

```sh
# Run stylelint
pnpm stylelint

# Fix stylelint errors
pnpm stylelint:fix
```

### Run Component and Unit Tests with [Vitest](https://vitest.dev/) and optionally [Vue Test Utils](https://test-utils.vuejs.org/)

Component and unit test files must be located in the `/src/` directory and have a filename format of `*.spec.ts`. In the starter project, see `src/components/ServiceCatalog.spec.ts` for an example.

```sh
# Run tests
pnpm test

# or run the tests in the Vitest UI
pnpm test:open
```

### Build and Minify for Production

```sh
pnpm build
```

### Preview your built application

First, you'll need to build the app

```sh
pnpm build
```

You can now run the `preview` command (but don't forget to change your environments variables in your `.env` file first) :

```sh
pnpm preview
```

### Committing Changes

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

At Kong, we utilize [Conventional Commits](https://www.conventionalcommits.org/) in all of our repositories. [Commitizen](https://github.com/commitizen/cz-cli) can be used to to help build and enforce commit messages.

If you're unfamiliar with conventional commits, it is **recommended** to use the following command in order to create your commits:

```sh
# Stage your changes
git add -A

# Trigger the commitizen CLI to help compose your commit message
pnpm commit
```

This will trigger the Commitizen interactive prompt for building your commit message.

## Submission recap

Please consider this as a "report" for this submission for this exercise. I spent approximately 14 hours over the weekend the provided Figma with Vue 3. I apologise if this is beyond what you have anticipated for this project.

Please see the following sections for a quick summary of all the changes I implemented.

### API + Typescript

The first thing I did was to provide some typings for the API mocks and return payloads. Having worked with Typescript for a while now (even if mostly on the frontend side), I have become quite acclimated to Typescript suggestions and validation in my IDE.

I added basic types at first after a first read, and then added some Zod interfaces for some "security" (even if locally there was no reason to be worried thanks to faker) and to strengthen the types. I added enums and needed interfaces to be compliant with what was `faker` already doing.

I also added some error codes and returns, `try` and `catch` around API interactions and calls, but basically changed nothing major about how the API was already working and returning data. Although it took me some time (and I wanted very much to tackle on the design as soon as I could), it definitely saved some time on the long run.

On the frontend side, everything was started with Typescript and having the return types made on the API side definitely helped.

### Design (Figma/CSS/SCSS)

On the design side of this exercise, there are some key points about what has been done :

- The Figma wasn't really "easy" to work with, but I've implemented the design as best as I could, filling up the blanks when needed (for bad spacing, alignments, etc) and completing things when needed. Please let me know if I did some major mistakes aside from the ones written in here, but the implemented design is pretty close to what's displayed on the Figma file.
- I didn't had to install any librairies, except `@kong/icons` for the icons (and that's why they might differ from the icons already present on the provided Figma). I've seen the [`kongponents-alpha`](https://alpha--kongponents.netlify.app/) library and wanted to use it for the icons (which seems to match the icons used) and some components, but it seemed a bit over the top. I thought about installing third party librairies like `tailwind` to speed up the prototyping, but having SCSS already set up, I tried my best to make it work.

Regarding the SCSS part of the implementation :

- Despite the fact that I've not being coding in SCSS at all the past few years, I tried my best to split my files correctly and take advantage of the SCSS syntax (using `mixins`, `functions`, `@use`, etc.).
- Even if I used a lot of variables and lots of nesting in my scoped styles, I didn't make the most use of SCSS (haven't had enough time sadly), as it is missing some `mixins` for recurrent classes like :

```css
align-items: center;
display: flex;
justify-content: center;
```

- To compensate for the spacing and font-sizes issues on the original Figma file, I've added several functions and variables to correct them.

### Advanced functionalities

- Teleport & Routing : I failed to implement the modal opening on a certain route without reloading the page. Then I decided to do a simple Modal component based on official Vue examples and using Teleport to add it to the `body`. It shares similarities to React portals and it has been working flawlessly
Note: it was written earlier in the `README` that clicking on a a service should open the modal, but the Figma prototype wasn't showing the modal on a service click, but on the "versions" button click, so I favored the Figma design in this case. 

- Pagination : I think it could have done with Pinia, but I encountered some difficulties getting getters communicating with properties and othe getters simutanously, so I did a simple composable instead. It allowed me to do a reusable client side pagination.
I also did a few composables for filtering, debouncing and data fetching.

### Misc

- Changed some scripts for better developer experience in the `package.json` and modified this README when needed.
- Added environment variables for front and API URLs and solved some CORS errors.
- Testing : I didn't have enough time to introduce some specs for the few interactions implemented. I did a few for interesting interactions (like testing the modal itself, for example), but I wanted to have a solid base for design even if it meant not writing as much tests.

### Conclusion

Overall, it was a very fun project and it has been a blast discovering Vue 3 and using SCSS again. Thanks for reading all the way to the end.