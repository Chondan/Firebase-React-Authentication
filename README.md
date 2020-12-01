# Firebae React Authentication

Tutorial From: [React Authentication Crash Course With Firebase And Routing](https://www.youtube.com/watch?v=PKwu15ldZ7k)

## Docs
- firebase document -> https://firebase.google.com/docs/auth/web/manage-users
- react-router-dom -> https://reactrouter.com/web/api/Router

## Package to be installed
- firebase -> `npm install firebase`
	- `import firebase from 'firebase/app'`
	- `import 'firebase/auth'`
- bootsrap -> `npm install bootstrap react-bootstrap`

## Revise
- React Context 
	- `useContext()` -> Accepts a context object (the value returned form `React.createContext)` and returns the current context value for that context.
	- The current context value is determined by the `value` prop of the nearest `<MyContext.Provider>` above the calling component in the tree.
- Render
	- React re-render the component wheneve its state changed line by line of code.
- `defaultValue` props to set the default value of input element.
- `Promise.all(promises).then(() => {}).catch(e => {});` (promises = array of promise)

## Tricks
- use `.env.local` to use all variables inside locally.
- rename the property

```JavaScript
export default function PrivateRoute({ componet: Component, ...rest }) {
	return ( <div><div> );
}
```

- create `Temporary Email`: https://temp-mail.org/en/

## Lesson Learned
- Different types of routers in react router -> https://learnwithparam.com/blog/different-types-of-router-in-react-router/
	- MemoryRouter
		- A router which doesn't change the URL in your browser instead it keeps the URL changes in memory.
		- It is very useful for testing and non browser environments.
		- But in browser, it doesn't have history. So you can't go back or forward using browser history.
	- HashRouter 
		- Hashed routes, you can go in history -> `https://example.com/#/`, `https://example.com/#/about`
		- A router which uses client side hash routing.
		- Whenever, there is a new route get rendered, it updated the browser URL with hash routes. (e.g., `/#/about`)
		- Hash portion of the URL won't be handled by server, server will always send the `index.html` for every request and ignore hash value. Hash value will be handled by react router.
		- It is used to support legacy browsers which usually doesn't support HTML pushState API
		- As this technique is only intended to support legacy browsers, we encourage you to configure your server to work with `BrowserHistory` instead.
	- BrowserRouter
		- The widely popular router and a router for modern browsers which use HTML5 pushState API. (i.e., `pushState`, `replaceState` and `popState` API).
- Legacy Browser Support (BrowserSwitcher internally)
	- BrowserSwitcher is a Chrome module that listens to navigations, and automatically switches to another browser (typically IE) for a predefined set of URLs.

## Note & Keywords
- Legacy browser

## Work Flow
- Setup firebase
