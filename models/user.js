const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const COST = 6;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
    }, {
        timestamps: true,
        toJSON: {
            transform: function(doc, ret) {
                delete ret.password;
                return ret;
            }
        }
    }
    
);

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    // update the password with hash whenever its changed
    this.password = await bcrypt.hash(this.password, COST);
    return next();
})

module.exports = mongoose.model('User', userSchema);