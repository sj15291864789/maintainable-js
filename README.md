<<<<<<< HEAD
# maintainable-js
=======
### Maintainable JavaScript

#### Setup
If you have already got `node` & `npm` installed locally, goto step 2.

1. Install `npm` along with `Node.js`

	    brew update
	    brew install node

2. Install `Bower` globally

		npm install -g bower

3. Install `Gulp` globally

		npm install -g gulp

3. Install `npm` packages this project depends on

		npm install

4. Install `bower` packages this project depends on

		bower install

5. To run tests, execute the following command in terminal

		gulp test

6. To run JSHint, execute the following command in terminal

		gulp js

=======

#### Working with location backend service

1. Get all locations

		http://location-backend-service.herokuapp.com/locations

2. Filter locations by name

		http://location-backend-service.herokuapp.com/locations?name=Melbourne

	`name` is case insensitive, and could be partial.

		http://location-backend-service.herokuapp.com/locations?name=mel
