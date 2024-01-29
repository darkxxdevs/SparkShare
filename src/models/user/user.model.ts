import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	isVerified: {
		type: Boolean,
		default: false,
	},
	forgotPasswordToken: String,
	forgotPasswordTokenExpirey: Date,
	verifyToken: String,
	verifyTokenExpiry: String,
	AccessToken: String,
	RefreshToken: String,
}, { timestamps: true })


const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User

