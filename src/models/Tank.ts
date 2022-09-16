import mongoose from "mongoose";

const Tank = new mongoose.Schema(
	{
		heightInCm: {
			type: Number,
			required: true,
		},
		volumeInLiters: {
			type: Number,
			required: true,
		},
		segments: [
			{
				startHeightInCm: Number,
				endHeightInCm: Number,
				volumePerCmInLiters: Number,
			},
		],
	},

	{ timestamps: true }
);

export const TankModel = mongoose.model<mongoose.Document>("Tank", Tank);
