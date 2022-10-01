/* eslint-disable import/no-extraneous-dependencies */
import 'jest';
import { PumpRecordService } from '../../services/pumpRecordService';
import { pumpCalculationTestCases } from './calculatePumpedVolume.testCases';

describe('Pumped volume calculator', () => {
  test.each(pumpCalculationTestCases)(
    'Given %p arguments, starting from %p cm and finishing at %p cm, pumped amount should be %p liters',
    async (label, startLevelInCm, endLevelInCm, result, segments) => {
      const pumpRecordService = new PumpRecordService();
      const pumpedValue = await pumpRecordService.calculatePumpedVolume({
        segments,
        startLevelInCm,
        endLevelInCm,
      });
      expect(pumpedValue).toEqual(result);
    },
  );
});
