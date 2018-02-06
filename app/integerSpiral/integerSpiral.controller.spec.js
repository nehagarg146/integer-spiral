'use strict';
describe('integerSpiralController', function () {

  beforeEach(module('myApp'));

  let $scope, $componentController, ctrl;
  let integerSpiralService;
  let createSpiralMatrixArrayStub;

  let model = {
    intSpiralArray: '',
    finalSpiralArray: '',
    input: '',
    direction: ''
  }

  beforeEach(inject(function (_$componentController_, $rootScope, _integerSpiralService_) {

    $scope = $rootScope.$new();
    $componentController = _$componentController_;
    integerSpiralService = _integerSpiralService_;

    integerSpiralService.model = model;

    createSpiralMatrixArrayStub = sinon.stub(integerSpiralService, 'createSpiralMatrixArray');

    ctrl = $componentController('integerSpiral', {
      $scope: $scope
    });

  }));

  describe('onSubmitCTA', function () {

    it('Should set intSpiralArray to empty array object', function () {

      ctrl.onSubmitCTA();

      expect(ctrl.model.intSpiralArray).to.deep.equal([]);

    });

    it('Should set model.input to 56', function () {

      ctrl.input = 56;

      ctrl.onSubmitCTA();

      expect(ctrl.model.input).to.equal(56);

    });

    it('Should set model.direction to `left`', function () {

      ctrl.direction = 'left';

      ctrl.onSubmitCTA();

      expect(ctrl.model.direction).to.equal('left');

    });

    describe('When input is 8', function () {

      it('Should invoke createSpiralMatrixArray of integerSpiralService with 3', function () {

        ctrl.input = 8;

        ctrl.onSubmitCTA();

        createSpiralMatrixArrayStub.should.have.been.calledWith(3)

      });

    });

    describe('When input is 24', function () {

      it('Should invoke createSpiralMatrixArray of integerSpiralService with 5', function () {

        ctrl.input = 24;

        ctrl.onSubmitCTA();

        createSpiralMatrixArrayStub.should.have.been.calledWith(5)

      });

    });

  });

});
