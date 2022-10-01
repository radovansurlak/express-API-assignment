/* eslint-disable import/no-extraneous-dependencies */
import 'jest';
import { PumpRecordService } from '../../services/pumpRecordService';

describe('Pumped volume calculator', () => {
  it('should return 2', async () => {
    const pumpRecordService = new PumpRecordService();
    const pumpedValue = await pumpRecordService.calculatePumpedVolume();
    expect(pumpedValue).toEqual(2);
  });
});
