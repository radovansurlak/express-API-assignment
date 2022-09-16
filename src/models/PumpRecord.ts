import mongoose from "mongoose";

const PumpRecord = new mongoose.Schema(
	{
		tankId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		startLevelInCm: {
			type: Number,
			required: true,
		},
		endLevelInCm: {
			type: Number,
			required: true,
		},
		volumePumpedInLiters: {
			type: Number,
			required: true,
		},
	},
);

export const PumpRecordModel = mongoose.model<mongoose.Document>(
	"PumpRecord",
	PumpRecord
);
