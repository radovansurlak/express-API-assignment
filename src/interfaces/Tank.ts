export interface CreateTankDTO {
  heightInCm: number;
  volumeInLiters: number;
}

export interface AddTankSegmentDTO {
  startHeightInCm: number;
  endHeightInCm: number;
  volumePerCmInLiters: number;
}

export interface GetTankByIdDTO {
  tankId: string;
}

export interface TankSegment {
  startHeightInCm: number;
  endHeightInCm: number;
  volumePerCmInLiters: number;
}

export interface Tank {
  heightInCm: number;
  volumeInLiters: number;
  segments: TankSegment[];
}
