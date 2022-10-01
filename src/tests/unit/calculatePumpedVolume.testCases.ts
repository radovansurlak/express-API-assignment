import { TankSegment } from '../../interfaces/Tank';

const segments1 = [
  {
    startHeightInCm: 100,
    endHeightInCm: 50,
    volumePerCmInLiters: 1.5,
  },
  {
    startHeightInCm: 50,
    endHeightInCm: 0,
    volumePerCmInLiters: 0.5,
  },
];

const segments2 = [
  {
    startHeightInCm: 100,
    endHeightInCm: 90,
    volumePerCmInLiters: 2,
  },
  {
    startHeightInCm: 90,
    endHeightInCm: 80,
    volumePerCmInLiters: 2,
  },
  {
    startHeightInCm: 80,
    endHeightInCm: 30,
    volumePerCmInLiters: 3,
  },
  {
    startHeightInCm: 30,
    endHeightInCm: 0,
    volumePerCmInLiters: 1,
  },
];

//  test label, start height in cm, end height in cm, amount of liters pumped, tank segment
type PumpCalculationTestCase = [string, number, number, number, TankSegment[]];

export const pumpCalculationTestCases: PumpCalculationTestCase[] = [
  ['100cm tank with volume of 100 liters', 100, 0, 100, segments1],
  ['100cm tank with volume of 220 liters', 100, 0, 220, segments2],
  ['100cm tank with volume of 100 liters', 2, 0, 1, segments1],
  ['100cm tank with volume of 220 liters', 91, 41, 139, segments2],
];
