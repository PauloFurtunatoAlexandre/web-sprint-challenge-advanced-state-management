1. What problem does the context API help solve?
   It helps us to share down the state preventing the prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Actions are objects that will help to describe how we are going to change the state, reducers are pure functions that will get at least two values and will return one, and store is an object that holds the state which will be passed to the entire application.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state is the state all application will consume, while the component state is more as "local" state the component will consume.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   Redux thunk is a middleware used to return a function instead of an action. That way you can pass some logic to the action.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
   Redux is my favorite, because it makes sense to me we need a single source of truth while our application is getting bigger, that helps us to keep the state centralized instead of using different state in different parent/child relationship. That is much more complicated.