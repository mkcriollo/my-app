# Brainscape Take Home Project

This page offers users the opportunity to swiftly and intuitively curate a photo album by browsing and selecting from a collection of stock images.

## Assumptions

1. Users can add images to an album folder either by dragging them one at a time (on the Web Platform) or by clicking a button (on mobile).
2. Users have the flexibility to add images to the folder multiple times.
3. The album includes sections for selected images and displays image names in sequential order.
4. Users can select and delete images from the album as required.

## Solution formulation

Steps I thought of and excuted for solving the save image to ablum folder problem.

### Planning

1. Create a left side populated with images from a 100-image API.
2. Develop a right side featuring an album generator.
3. Design the album generator to display images and titles in a 1x1 grid format (200px x 200px).
4. Enable users to drag and drop images into the album.
5. Ensure mobile design compatibility.
6. Enhance Google Lighthouse performance for the mobile version.
7. Implement a semantic structure and metadata for optimal SEO impact.
8. Provide an intuitive method for users to remove images from the repository.

### Steps

1. Initiate a React app using the TypeScript template.
2. Design a layout featuring a header, a scrollable gallery, and fixed-positioned albums.
3. Utilize React Query to connect to the photo API for result caching.
4. Employ Chakra UI for flexible and responsive components, displaying images in a grid format (CSS grid/flex) with mobile responsiveness.
5. Implement HTML drag-and-drop features for both the gallery and album.
6. Structure the album in a grid format with pictures on the left and corresponding titles on the right.
7. Integrate a select mode option enabling users to choose and remove multiple images from the album, applicable only in select mode.
8. Optimize mobile SEO by incorporating semantic structure and metadata designed for maximum SEO impact. Develop reusable components and format layouts according to best SEO practices.
9. Establish tests using the React Testing Library.


## Libraries/Tools used

* React: Used to build the core of the application. I would use Next.js to better enhance project using server side rendering for the API.
* TypeScript: To Type functions and props using interface etc.
* ChakraUI: Can easily customize and adjust design. Easy manual manipulation in Css Classes.
* React-testing: Use for Testing

## How to setup

Run the following commands to setup, `node` and `npm` is required:

1) git clone git@github.com:mkcriollo/my-app.git
2) cd my-app
3) npm install
4) npm start 

## Running tests

* To run the tests run `npm test` on the project root.

## Decisions and tradeoffs

1) Utilize ES6 Lambda Functions for improved code structure and readability; arrow functions, being nameless and not bound by an identifier, are perfect for crafting anonymous functions, especially beneficial in constructing state update functions.
2) Opted to pass props from parent to child components instead of relying on React.context, a decision influenced by the limited usage of props among no more than three parent-child components. Context creation would have been considered for a multi-component application involving shared data across various pages, such as modals or recently deleted photos.
3) Opt for React Query over the traditional fetch/useEffect approach, as React Query excels in managing query state, making it ideal for applications requiring caching, pagination, and real-time updates. useEffect encounters performance issues with APIs, triggering a UI re-render after rendering the entire interface.
4) Implement a Select Mode to facilitate the deletion of multiple photos from the album, choosing this approach over a modal view with a delete button for better compatibility with mobile formats. Modal sheets are preferred for mobile applications to optimize screen real estate.
5) Build an Instructions UI panel on load of web and mobile (On mobile it takes 100% of real estate). From a UI/UX point of view, viewing an instruction panel upon load allows the user to understand and get familiarized with the functionality of the application, creating a great user experience from the start. From a developer point of view, after reviewing the google lighthouse reports, I came to a realization that the lack of performance was coming from LCP (reasonL: large image files) causing a bit of layout shift when loaded. Having a instruction preload and lazy loading the image can allow the application to be prepared for further user interaction. In the future I would have optimized and resize or provided multiple image file sizes on the backend photo api, providing the frontend with a photo api with more optimize images.
6) Decided to keep with the blue theme for Brainscape !

## If it was a bigger project

1) Develop a modal for mobile that facilitates album viewing and deletion, and implement a mobile sheet.
2) Introduce multiple buckets (albums) where users can effortlessly drag and drop images into specific categories.
3) Implement tests using `jest` to validate drag-and-drop functionality, image gallery loading, activation of Select Mode upon clicking the select button, image deletion from albums, etc.
4) Incorporate `Optimizely` for A/B testing, evaluating the popularity of adding to albums via drag-and-drop versus button click functionality.
5) Enable the saving, printing, and downloading of albums, supporting single photo downloads as well as entire album downloads.
6) Integrate a "Last Added" button for quickly adding the most recently uploaded photo back to its corresponding album.
7) Provide a filter for recently deleted items and implement sorting based on album names for enhanced functionality.
8) Enable drag-and-drop functionality directly from the computer file system.
9) Optimize image loading times by implementing an image compression library like `browser-image-compression`.
10) Utilize a minifier such as `uglify-js` to compress and minimize the JavaScript code.
11) Foster collaboration by seeking feedback and exploring alternative approaches to code implementation with the team.

