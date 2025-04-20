import { Test, TestingModule } from '@nestjs/testing';
import { FixErrorController } from './fix-error.controller';
import { FixErrorService } from './fix-error.service';

describe('FixErrorController', () => {
  let fixErrorController: FixErrorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FixErrorController],
      providers: [FixErrorService],
    }).compile();

    fixErrorController = app.get<FixErrorController>(FixErrorController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(fixErrorController.getHello()).toBe('Hello World!');
    });
  });
});
