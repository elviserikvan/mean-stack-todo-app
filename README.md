# MEAN Stack Todo List

I built this project for learning the MEAN Stack. This proyect has all the CRUD functionalities.

## About this Branch
If I'm not mistaking it should be the `Portfolio` branch. The reason why I created this branch is because I need a different versio of this project to publish on my portfolio, publishing a app connected to a database doesn't seem like a good idea, It doesn't matter how many verifycation and constrains I put, there always will be vulnerabilities and something to tweak, it's easier to just keep the Front-End working and let the Back-End do the minimun.

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
