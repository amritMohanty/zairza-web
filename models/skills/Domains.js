const mongoose = require("mongoose");

const DomainSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		weekZero: {
			description: String,
			resources: [String],
		},
		tasks: [
			{
				weekNo: Number,
				description: String,
				resources: [String],
			},
		],
		additionalResources: [String],
		mentors: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
		discussionLink: String,
		submissionDescription: String,
	},
	{ strict: true, versionKey: false }
);

module.exports = Domains = mongoose.model("domains", DomainSchema);
