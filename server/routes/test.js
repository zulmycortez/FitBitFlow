const express = require("express");
const app = express();
const keys = require('../config/keys');

// initialize the Fitbit API client
const FitbitApiClient = require("fitbit-node");
const client = new FitbitApiClient({
	clientId: keys.CLIENT_ID,
	clientSecret: keys.CLIENT_SECRET,
	apiVersion: '1.2'
});

//SLEEP DATA//
// redirect the user to the Fitbit authorization page
app.get("/authorize/sleep", (req, res) => {
	// request access to the user's activity, heartrate, profile, sleep  scopes
	res.redirect(client.getAuthorizeUrl('activity heartrate profile sleep', 'http://localhost:3000/auth/callback/sleep'));
});

// handle the callback from the Fitbit authorization flow
app.get("/auth/callback/sleep", (req, res) => {
	// exchange the authorization code we just received for an access token
	client.getAccessToken(req.query.code, 'http://localhost:3000/auth/callback/sleep').then(result => {
		// use the access token to fetch the user's profile information
		client.get("/sleep/date/2018-09-01/2018-10-01.json", result.access_token).then(results => {
			res.send(results[0]);
		}).catch(err => {
			res.status(err.status).send(err);
		});
	}).catch(err => {
		res.status(err.status).send(err);
	});
});

//PROFILE DATA//
app.get("/authorize/profile", (req, res) => {
	// request access to the user's activity, heartrate, profile, sleep  scopes
	res.redirect(client.getAuthorizeUrl('activity heartrate profile sleep', 'http://localhost:3000/auth/callback/profile'));
});

// handle the callback from the Fitbit authorization flow
app.get("/auth/callback/profile", (req, res) => {
	// exchange the authorization code we just received for an access token
	client.getAccessToken(req.query.code, 'http://localhost:3000/auth/callback/profile').then(result => {
		// use the access token to fetch the user's profile information
		client.get("/profile.json", result.access_token).then(results => {
			res.send(results[0]);
		}).catch(err => {
			res.status(err.status).send(err);
		});
	}).catch(err => {
		res.status(err.status).send(err);
	});
});

//HEARTRATE DATA//
app.get("/authorize/heartrate", (req, res) => {
	// request access to the user's activity, heartrate, profile, sleep  scopes
	res.redirect(client.getAuthorizeUrl('activity heartrate profile sleep', 'http://localhost:3000/auth/callback/heartrate'));
});

// handle the callback from the Fitbit authorization flow
app.get("/auth/callback/heartrate", (req, res) => {
	// exchange the authorization code we just received for an access token
	client.getAccessToken(req.query.code, 'http://localhost:3000/auth/callback/heartrate').then(result => {
		// use the access token to fetch the user's profile information
		client.get("/activities/heart/date/today/1m.json", result.access_token).then(results => {
			res.send(results[0]);
		}).catch(err => {
			res.status(err.status).send(err);
		});
	}).catch(err => {
		res.status(err.status).send(err);
	});
});

//ACTIVITY DATA//
app.get("/authorize/activity", (req, res) => {
	// request access to the user's activity, heartrate, profile, sleep  scopes
	res.redirect(client.getAuthorizeUrl('activity heartrate profile sleep', 'http://localhost:3000/auth/callback/activity'));
});

// handle the callback from the Fitbit authorization flow
app.get("/auth/callback/activity", (req, res) => {
	// exchange the authorization code we just received for an access token
	client.getAccessToken(req.query.code, 'http://localhost:3000/auth/callback/activity').then(result => {
		// use the access token to fetch the user's profile information
		client.get("/activities/calories/date/today/1m.json", result.access_token).then(results => {
			res.send(results[0]);
		}).catch(err => {
			res.status(err.status).send(err);
		});
	}).catch(err => {
		res.status(err.status).send(err);
	});
});

// launch the server
app.listen(3000);