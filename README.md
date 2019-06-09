[![CircleCI](https://circleci.com/gh/gangadharsagi/reviews-component.svg?style=svg)](https://circleci.com/gh/gangadharsagi/reviews-component)

# InfiniteScrollReview Component (React, Redux)

### Set Up
Below are the steps to get it running.

 - Install all the dependencies in the application by using the command ``` yarn ```
 - Then start the application in another terminal by using command ``` yarn start ```
 - Run the tests using command ``` yarn test ```

## Summary

1. Reviews can be grouped by day, week, or month. Make sure you show the time interval for
which reviews are shown (i.e. “05.02”, “05.02 - 11.02” or “January”)
2. Reviews can be filtered by number of stars. The default state should show 5 star reviews only.
3. Reviews should be sortable by time. Users should be able to toggle between showing most
recent reviews first, or last.
4. Infinite scrolling. As you scroll, more reviews will be loaded.

#### Approach
I have created the application with create react app, and below is the pattern followed in the implementation

##### Components 
- complete app is divided in to multiple reusable components/views to maintain the code re usability, 
each component is independent of each other and can be reused wherever it require with custom data .
- I have used material UI as a wrapper and customised according to the mock up.

#####Containers
- Components are wrapped with containers to get the redux state and actions as props.
- Followed the styled components pattern.

#####Actions
- Actions are plain javascript objects with TYPE property in it, actions will be dispatched based on user interactions with application.

#####Reducers 
- Reducers are pure functions which will take action object as input parameters and will update the redux state accordingly.
- I created the individual reducers for each action to make TDD approach and to make it more readable.

#####Selectors
- Selectors can compute derived data, allowing Redux to store the minimal possible state.
- Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
- Selectors are composable. They can be used as input to other selectors

#####Helpers 
- Helpers are pure functions, which will calculate the new value and returns it based on input parameters.

#####Constants 
- Constants are used to define the STATIC DATA in your application.

##### Custom Middleware
Created the custom middleware to handle the all API requests in the application with common action, instead of creating different API calls in action creators.
 
- This will allow us to handle loading spinner/loader globally across the application when handling with different API calls.
- Action creators can be easily tested as all async calls will be handled in custom middleware.
- Code in the action creator is clean and uniform.
- When application is becoming bigger, we can handle all API calls across the application easily with clean code.

### Sample screens

![sample](docs/sample.png)

