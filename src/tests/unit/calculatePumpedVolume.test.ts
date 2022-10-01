/* eslint-disable import/no-extraneous-dependencies */
import 'jest';
import { PumpRecordService } from '../../services/pumpRecordService';
import { pumpCalculationTestCases } from './calculatePumpedVolume.testCases';

describe('Pumped volume calculator', () => {
  test.each(pumpCalculationTestCases)(
    'Given %p arguments, starting from %p cm and finishing at %p cm, pumped amount should be %p liters',
    async (label, startHeightInCm, endHeightInCm, result, tank) => {
      const pumpRecordService = new PumpRecordService();
      const pumpedValue = await pumpRecordService.calculatePumpedVolume({
        tank,
        startHeightInCm,
        endHeightInCm,
      });
      expect(pumpedValue).toEqual(result);
    },
  );
});
