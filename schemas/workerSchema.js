const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    secondName: {type: String, required: true},
    office: 'Riga' | 'Tallinn' | 'Vilnius',
    birthDate: {type: Date, required: true},
    phoneNumber: {type: String, required: true},
    tags: {type: [String], required: false}
})

module.exports = UserSchema;
/*
*
* first name, last name
- office employee works in
- birth date
- phone number
- tags (tags are not hardcoded, need to be able to edit the list of tags)
* */
