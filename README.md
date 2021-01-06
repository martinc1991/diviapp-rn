# DiviApp

Money-splitting app using MERnN stack (MongoDB, ExpressJS, React-Native and NodeJS). Future releases coming.

## The project

DiviApp was born as practice to test my JavaScript programming capabilities, but ended being my first pet project, meaning that **I'm not thinking about letting the current release be the last one!**

By now, the project is planned to have 3 releases:

#### First one: Moonlanding

It consists of setting the bases of the project to accelerate future growth (that is scalable) in addition to providing a minimum of utility.

#### Second one: Moonbasing

More advanced features will be implemented in it. Although new modes of use will be added, the goal is to make it more user-friendly.

#### Third one: Moongrowing

Although it is still poorly defined, here the functionalities of the previous phases will be complete and new, more innovative features will be under construction.

## Technologies

### Front-End

1. React-Native (w/ Expo)
2. Redux
3. React-Navigation
4. Axios

### Back-End

1. MongoDB (w/ Mongoose)
2. ExpressJS

## How to run the project

If you're here I'm assuming you know your way around the basics of JavaScript and you have Git, NodeJS and a code editor (VSC recommended) on your PC. If you don't, here are videos you can watch to solve that:

- [Git](https://www.youtube.com/watch?v=nbFwejIsHlY)
- [NodeJS](https://www.youtube.com/watch?v=1US-P13yKVs)
- [Visual Studio Code](https://www.youtube.com/watch?v=MlIzFUI1QGA)

To run this proyect properly, you need an Android (or iOS) emulator, like [Android Studio](https://developer.android.com/studio) (if your PC doesn't have the requirements to run that, I recommend [BlueStacks](https://www.bluestacks.com/)). Also, you should install MongoDB on your PC. In [this video](https://www.youtube.com/watch?v=FwMwO8pXfq0) you can learn how to do that.

### First Step

1. Create a folder so you can clone the project into it (you can do it directly on your desktop too).
2. Open the console of your preference and go to the folder you created in the previous step and run the command:

```js
git clone https://github.com/martinc1991/diviapp-rn.git
```

3. When the download is finished, in the same console as before, go the _client_ folder and run the `npm install`:

```js
cd client // (this is to navigate to the 'client' folder)
npm install
```

4. Next, go the _server_ folder and run `npm install`:

```js
cd .. // (going back to the root folder)
cd client // (this is to navigate to the 'server' folder)
npm install
```

By now, you have the full project installed.

### Second Step

1. Create a Mongo cluster by following [this video](https://www.youtube.com/watch?v=1duX6Nfevhc). From this video, you should get the **_connection string and the user and password credentials_** to connect to the DB.
2. Once you have created the Cluster and obtained the credentials and the [connection string](https://docs.mongodb.com/manual/reference/connection-string/#connection-string-formats), go to the `index.js` file on the _server_ folder and create a file called `env.js`. Inside that file copy the following code and replace _user, password,_ and _cluster:_

```js
const env = {
	PORT_NUMBER: 5000, // (5000 is standard, but you can change it if you want to)
	DB_USER: 'user', // String containing you cluster user ('user2' in the video above)
	DB_PASSWORD: 'password', // String containing you cluster password
	DB_CLUSTER: 'cluster', // String containing you cluster (everything after de @ in the connection string)
};
export default env;
```

> Why would someone go through all this when you can type the connection string directly into the index.js file? [Here's why.](https://www.freecodecamp.org/news/what-are-environment-variables-and-how-can-i-use-them-with-gatsby-and-netlify/#what-are-environment-variables)

By now, you have the project installed in your PC and the cluster properly configured.

### Third (and last) Step

To (finally) ron the project you should run `npm start` both from the _client_ folder and the _server_ folder.

##### Client folder

```js
// from the root folder
cd client
npm start
```

You should get a message saying:

```js
Starting project at C:\...
```

and a QR code. Also a new tab should open on your browser showing the same QR code and other stuff. Now you can run the project on an Andorid or iOS emulator or even in your phone downloading the Expo app (if you only want to see the project, I would recommend this last option). To do the latter, you should only scan the QR code and see the magic happen!

##### Server folder

To fully run the project you should run de backend too (you can navigate the app without doing this but you won't be able to run calculations). This step is easier, you should only run `npm start` on the _server_ folder:

```js
// from the root folder
cd server
npm start
```

Once you do that, you should get a message like:

```node
[nodemon] starting `node index.js`
(node:2280) ExperimentalWarning: The ESM module loader is experimental.
Server running on port: 5000
```

Getting that means that the backend is properly running and you can start using the app!

## Screenshots

### HomeScreen

<img width="250" src="/screenshots/Home.jpeg">
<img width="250" src="/screenshots/Home_dark.jpeg">

### BasicCalculationScreen

<img width="250" src="/screenshots/BasicCalc.jpeg">
<img width="250" src="/screenshots/BasicCalc_dark.jpeg">

### AboutScreen

<img width="250" src="/screenshots/About.jpeg">
<img width="250" src="/screenshots/About_dark.jpeg">

### AboutScreen (bottom)

<img width="250" src="/screenshots/Personal.jpeg">
<img width="250" src="/screenshots/Personal_dark.jpeg">
