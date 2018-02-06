'use strict';
describe('integerSpiralService', function () {

  beforeEach(module('myApp'));

  let integerSpiralService;

  let model = {
    intSpiralArray: [],
    finalSpiralArray: [],
    input: '',
    direction: ''
  }

  beforeEach(inject(function (_integerSpiralService_) {

    integerSpiralService = _integerSpiralService_;

  }));

  describe('initialization', function () {

    it('Should set intSpiralArray to empty string', function () {

      expect(integerSpiralService.model.intSpiralArray).to.deep.equal(model.intSpiralArray);

    });

    it('Should set finalSpiralArray to empty string', function () {

      expect(integerSpiralService.model.finalSpiralArray).to.deep.equal(model.finalSpiralArray);

    });

    it('Should set input to empty string', function () {

      expect(integerSpiralService.model.input).to.equal(model.input);

    });

    it('Should set direction to empty string', function () {

      expect(integerSpiralService.model.direction).to.equal(model.direction);

    });

  });

  describe('createSpiralMatrixArray', function () {

    beforeEach(function () {
      integerSpiralService.model.intSpiralArray = [];
      integerSpiralService.model.finalSpiralArray = [];
    });

    describe('when direction is left and input is 7', function () {

      let n;
      beforeEach(function () {
        n = 3;
        integerSpiralService.model.input = 7;
        integerSpiralService.model.direction = 'left';
      });

      it('Should set intSpiralArray to expectedArray', function () {

        let expectedArray = [-1, 7, 6, 1, 0, 5, 2, 3, 4];

        integerSpiralService.createSpiralMatrixArray(n);

        expect(integerSpiralService.model.intSpiralArray).to.deep.equal(expectedArray);

      });

      it('Should set finalSpiralArray to expected2dArray', function () {

        let expected2dArray = [[-1, 7, 6], [1, 0, 5], [2, 3, 4]];

        integerSpiralService.createSpiralMatrixArray(n);

        expect(integerSpiralService.model.finalSpiralArray).to.deep.equal(expected2dArray);

      });

    });

    describe('when direction is right and input is 6', function () {

      let n;
      beforeEach(function () {
        n = 3;
        integerSpiralService.model.input = 6;
        integerSpiralService.model.direction = 'right';
      });

      it('Should set intSpiralArray to expectedArray', function () {

        let expectedArray = [6, -2, -3, 5, 0, 1, 4, 3, 2];

        integerSpiralService.createSpiralMatrixArray(n);

        expect(integerSpiralService.model.intSpiralArray).to.deep.equal(expectedArray);

      });

      it('Should set finalSpiralArray to expected2dArray', function () {

        let expected2dArray = [[6, -2, -3], [5, 0, 1], [4, 3, 2]];


        integerSpiralService.createSpiralMatrixArray(n);

        expect(integerSpiralService.model.finalSpiralArray).to.deep.equal(expected2dArray);

      });

    });

  });

});
