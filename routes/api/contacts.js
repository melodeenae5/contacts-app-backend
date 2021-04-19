const mongoose = require('mongoose');
const router = require('express').Router();
const User = mongoose.model('User');
const Contact = mongoose.model('Contact');
const passport = require('passport');

//test route
router.get('/test', (req, res) => res.send('contacts route testing!'));

//another test route
router.get(
	'/working',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		res.json({ user: req.user._id });
	}
);

//get all contacts for specific user
router.get(
	'/',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		Contact.find({ user_id: req.user._id })
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
		Contact.create({
			user_id: req.body.user_id,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			nickName: req.body.nickName,
			phone: [
				{ phoneType: req.body.phoneType1, phoneNumber: req.body.phoneNumber1 },
				{ phoneType: req.body.phoneType2, phoneNumber: req.body.phoneNumber2 },
			],
			email: [
				{
					emailType: req.body.emailType1,
					emailAddress: req.body.emailAddress1,
				},
				{
					emailType: req.body.emailType2,
					emailAddress: req.body.emailAddress2,
				},
			],
			category: req.body.category,
			workInfo: { jobTitle: req.body.jobTitle, company: req.body.company },
			addresses: [
				{ addressType: req.body.addressType1, address: req.body.address1 },
				{ addressType: req.body.addressType2, address: req.body.address2 },
			],
			importantDates: [
				{ label: req.body.label1, date: req.body.date1 },
				{ label: req.body.label2, date: req.body.date2 },
			],
			website: req.body.website,
			whereWeMet: req.body.whereWeMet,
			whatWeTalkedAbout: req.body.whatWeTalkedAbout,
			likes: [req.body.like1, req.body.like2, req.body.like3, req.body.like4],
			disikes: [
				req.body.dislike1,
				req.body.dislike2,
				req.body.dislike3,
				req.body.dislike4,
			],
			passions: [
				req.body.passion1,
				req.body.passion2,
				req.body.passion3,
				req.body.passion4,
			],
			notes: req.body.notes,
		})
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
		Contact.findByIdAndUpdate(req.params.id, {
			user_id: req.body.user_id,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			nickName: req.body.nickName,
			phone: [
				{ phoneType: req.body.phoneType1, phoneNumber: req.body.phoneNumber1 },
				{ phoneType: req.body.phoneType2, phoneNumber: req.body.phoneNumber2 },
			],
			email: [
				{
					emailType: req.body.emailType1,
					emailAddress: req.body.emailAddress1,
				},
				{
					emailType: req.body.emailType2,
					emailAddress: req.body.emailAddress2,
				},
			],
			category: req.body.category,
			workInfo: { jobTitle: req.body.jobTitle, company: req.body.company },
			addresses: [
				{ addressType: req.body.addressType1, address: req.body.address1 },
				{ addressType: req.body.addressType2, address: req.body.address2 },
			],
			importantDates: [
				{ label: req.body.label1, date: req.body.date1 },
				{ label: req.body.label2, date: req.body.date2 },
			],
			website: req.body.website,
			whereWeMet: req.body.whereWeMet,
			whatWeTalkedAbout: req.body.whatWeTalkedAbout,
			likes: [req.body.like1, req.body.like2, req.body.like3, req.body.like4],
			disikes: [
				req.body.dislike1,
				req.body.dislike2,
				req.body.dislike3,
				req.body.dislike4,
			],
			passions: [
				req.body.passion1,
				req.body.passion2,
				req.body.passion3,
				req.body.passion4,
			],
			notes: req.body.notes,
		})
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
