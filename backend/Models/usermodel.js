const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email");
            }
        }
    },
    mobile: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    messages: [{
        message: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]
});

userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

userSchema.methods.isPasswordMatch = async function(password) {
    return await bcrypt.compare(password, this.password);
};


userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id.toString() }, 'your_jwt_secret', { expiresIn: '1h' });
    return token;
};

userSchema.methods.addMessage = async function(message) {
    try {
        this.messages.push({ message });
        await this.save();
        return message;
    } catch (error) {
        throw new Error('Failed to save message: ' + error.message);
    }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
