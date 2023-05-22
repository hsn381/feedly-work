## Please note that if you are working on your feature/component. First clone the master repository then shift to your branch using `git checkout yourBranchName` and then push the code in that branch and open pull request for that. Then we will merge it with master branch if there is no conflict otherwise you will have to resolve the conflict first. P.S if you dont run this command `git checkout yourBranchName` after cloning repo your work will not be tracked in your branch.

# Installation
To run the project Install dependencies by: `npm install` To start `npm run dev`

# Notes for folder structure.
## layout
Nav, Footer, Side menu etc all should be defined in layout folder which can be used to wrap routes

## pages, component
1. Use the folder page for creating pages of app.
2. Create the page name folder in Components folder and define all components in that folder.

## utils
1. everything that help with the web app is included in this folder like, constants, helper function, static data, etc.

## images,icons
1. store images that are being used by react components in /src/assets.

## favicons
1. store faviocons in /public.

## libraries
1. React router dom v6 for routing.
2. Tailwind for styling.
3. React-query for state management and fetching with axios.
4. React-icons if same icon is available in react icons library.
5. Yup for form validation schema.
6. Formik for form validation schema implementation.
7. tensorflow/tfjs and tensorflow/tfjs-converter for Machine Learning Implementation