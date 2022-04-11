# My Google Books API in React JS

## Introduction

This application allows the user to search for books and returns results from the Google Books API. It was built entirely using the React JS library for added efficiency. It fetches data from a public API and formats the JSON payload to a grid of search results.

## Implementation

I enjoyed creating this program as it was my first project that utilized React JS and fetching data from an API. I started by the layout of the website and separating each component to its own file to adhere to React protocols. I also used the online palette generator Coolors to achieve a minimalist look with pastel colours.

As this was my first time working with the Google Books API, I used the provided Google Books Docs to become familiar with the different ways to interact and retrieve data from it. After creating functions to successfully extract the required information, I familiarised myself with the layout of the returned objects to format the output for the user. Once I had a functioning app, I then looked to implement some bonus features. The biggest feature I added was the modal which displays extra information after the user clicks on a result.

## Requirements

### MVP

1. Create a page that allows users to search for books using the Google Books API
1. The page should include the following:
    - Header section introducing the page
    - Form containing a text input and a search button
    - A grid of returned book results

#### Instructions

-   [x] When the submit button is clicked, a request for books needs to be sent to the Google books API using the input value as the query string
-   [x] The books that are returned should be rendered in the books grid
-   [x] Each book in the grid should have an image, author, title and description
-   [x] The grid should be responsive on different screen sizes
-   [x] Async / await should be used for the fetch code, NOT .then

#### Styling

-   [x] The application should have a clean palette and design
-   [x] Styling must use BEM and each block should have its own SCSS file
-   [x] The palette should use variables

#### Application Design

-   [x] DOM functions and non-DOM functions should be separated in different modules
-   [x] Functions should do one thing and be pure/reusable
-   [x] Must parametrize and abstract large pieces of duplicate code
-   [x] Must use iterators over loops

#### Bonus Features

-   [x] Give feedback to the user when no book results can be found for the query
-   [x] When a user clicks on a book in the grid, render a modal with more book information e.g publish date, country, languages, etc.
-   [x] Added animation to modal box
-   [x] Custom Scrollbars

## Future of the Project

If given more time with this application, I would like to add more ways for users to search such as by author, publisher etc. I could add more animations to the website, like when results are returned to the user. Also I could implement a bookmark feature so the user can favourite searched books and view a list of their bookmarks.

## Resources

[Google Books Docs](https://developers.google.com/books/docs/overview)

[Coolors](https://coolors.co/)
