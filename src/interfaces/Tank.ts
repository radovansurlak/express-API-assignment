export interface CreateTankDTO {
	heightInCm: number;
	volumeInLiters: number;
}

export interface AddTankSegmentDTO {
	tankId: string;
	startHeightInCm: number;
	endHeightInCm: number;
	volumePerCmInLiters: number;
}
