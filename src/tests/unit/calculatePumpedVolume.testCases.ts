import { Tank } from '../../interfaces/Tank';

const tank1 = {
  heightInCm: 100,
  volumeInLiters: 100,
  segments: [
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
  ],
};

const tank2 = {
  heightInCm: 100,
  volumeInLiters: 220,
  segments: [
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
  ],
};

//  test label, start height in cm, end height in cm, amount of liters pumped, tank object
type PumpCalculationTestCase = [string, number, number, number, Tank];

export const pumpCalculationTestCases: PumpCalculationTestCase[] = [
  ['100cm tank with volume of 100 liters', 100, 0, 100, tank1],
  ['100cm tank with volume of 220 liters', 100, 0, 220, tank2],
];
