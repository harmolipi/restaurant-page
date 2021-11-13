# Restaurant Page
Created as part of [The Odin Project](https://www.theodinproject.com) curriculum.

View on [Github](https://github.com/harmolipi/restaurant-page).

## Functionality
This is the [Restaurant Page](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/restaurant-page) project, where I create a multi-tab webpage that's entirely dynamically generated via javascript.

## Thoughts
This was a cool project. It involved first creating a simple webpage, fully hardcoded in HTML, and then taking that and transferring it so all of the content is generated via javascript. It was a great opportunity to get used to using Webpack, and to learn how to separate pieces of the site into different modules that are all exported and imported in. By the end, even the `index.html` file was generated dynamically by [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/). It was cool to be able to create such a snappy website, since all the elements were built by the javascript as the page loaded, and clicking links simply hid and revealed different parts of the same page, so they appeared instantly.

The part that stood out to me, especially, was the packaging of discrete parts of the webpage into separate modules. I was initially just going to use a module for each of the 3 tabs on the page, but then also realized how useful they could be for creating many iterations of more complex components. In this case, because I was using so many cards with pictures and names of food on them, it was the perfect chance to refactor those cards into a separate module. That allowed me to very easily pass a picture and a caption into that module's function, and get out the card, styled and ready to go. That's really useful, and I look forward to using that for aspects of other websites in the future.

God bless.

-Niko Birbilis