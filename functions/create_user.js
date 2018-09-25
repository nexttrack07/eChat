const admin = require('firebase-admin');

module.exports = function(req, res) {
	// verify that the user provided a phone
	if (!req.body.phone) {
		return res.status(422).send({ error: 'Bad Input' });
	}

	//format the phone number
	const phone = String(req.body.phone).replace(/[^\d]/g, '');

	// create a new user account using the phone number provided
	admin
		.auth()
		.createUser({ uid: phone })
		.then(user => res.send(user))
		.catch(error => res.status(422).send({ error }));

	//respond to user request - account made
};
