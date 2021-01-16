# MEAN Stack Todo List

I built this project for learning the MEAN Stack. This proyect has all the CRUD functionalities.

## Technologies

Front-End
	- Angular
	- Bootstrap


Back-End
	- NodeJS
	- Express
	- Mongoose

Database
	- MongoDB

## Use from source

First rename the file `config/keys.js.exemple` to `config/keys.js` and add your MongoDB connection URL to the `mongooseURI` key.
Make sure to have a collection called `todos` in your mongodb database.

A todo should have the following fields in the database
```
{
	id: <Object id>,
	title: <string>,
	completed: <boolean>
}
```

Now, compile the angular typescript code. `npm run build`


now, all you gotta do is start the server
```
node app.js
```

## Screenshot

![Screenshot](https://github.com/elviserikvan/mean-stack-todo-app/blob/main/screenshots/screenshot.jpg "Screenshot")
