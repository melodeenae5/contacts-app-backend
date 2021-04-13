const mongoose = require('mongoose');
const router = require('express').Router();
const User = mongoose.model('User');
const Contact = mongoose.model('Contact');
const passport = require('passport');

//test route
router.get('/test', (req, res) => res.send('contacts route testing!'));

//get all contacts for specific user
router.get(
	'/',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		Contact.find({ user_id: req.body.user_id })
			.then((contacts) => res.json(contacts))
			.catch((err) =>
				res.status(404).json({ success: false, msg: 'Error finding contacts' })
			);
	}
);

//get contact by id
router.get(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		Contact.findById(req.params.id)
			.then((contact) => res.json(contact))
			.catch((err) =>
				res.status(404).json({ success: false, msg: 'No Contact Found' })
			);
	}
);

//add new contact
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		Contact.create(req.body)
			.then((contact) =>
				res
					.status(201)
					.json({ success: true, msg: 'Contact added successfully' })
			)
			.catch((err) =>
				res.status(400).json({ success: false, msg: 'Unable to add contact' })
			);
	}
);

//find contact by id and update
router.put(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		Contact.findByIdAndUpdate(req.params.id, req.body)
			.then((contact) =>
				res
					.status(200)
					.json({ success: true, msg: 'Contact updated successfully' })
			)
			.catch((err) =>
				res
					.status(400)
					.json({ success: false, msg: 'Unable to update contact' })
			);
	}
);

//find contact by id and delete
router.delete(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		Contact.findByIdAndRemove(req.params.id, req.body)
			.then((contact) =>
				res
					.status(200)
					.json({ success: true, msg: 'Contact deleted successfully' })
			)
			.catch((err) =>
				res.status(400).json({ success: false, msg: 'No contact found' })
			);
	}
);

module.exports = router;
