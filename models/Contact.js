const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
	user_id: String,
	firstName: { type: String, required: true },
	lastName: String,
	nickName: String,
	phone: [{ phoneType: { type: String }, phoneNumber: { type: String } }],
	email: [{ emailType: { type: String }, emailAddress: { type: String } }],
	category: String,
	workInfo: { jobTitle: { type: String }, company: { type: String } },
	addresses: [{ addressType: { type: String }, address: { type: String } }],
	importantDates: [{ label: { type: String }, date: { type: Date } }],
	website: String,
	whereWeMet: String,
	whatWeTalkedAbout: String,
	likes: [{ type: String }],
	dislikes: [{ type: String }],
	passions: [{ type: String }],
	notes: String,
});

mongoose.model('Contact', ContactSchema);
