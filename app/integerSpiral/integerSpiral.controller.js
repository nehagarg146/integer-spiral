'use strict';

angular.module('myApp')
  .controller('IntegerSpiralController', function (integerSpiralService, integerSpiralConstants) {

    let vm = this;

    let n; //n is the value of nxn matrix
    vm.model = integerSpiralService.model;
    vm.direction = 'right';
    let maxMatixNumber = integerSpiralConstants.maxMatixNumber;

    function onSubmitCTA() {

      vm.model.intSpiralArray = [];
      vm.model.input = vm.input;
      vm.model.direction = vm.direction;
      createSizeOfMatrix();
      integerSpiralService.createSpiralMatrixArray(n);

    }

    /*
      Since we have to  create a spiral around the ‘0’ value so we can not take even number matrix.
      ,so created odd matrix using below loop
      Since we have to show spiral max for 3 digit number so we are checking matrix for 32*32 max because
      3 digit matrix size fix in 32*32 matrix.
    */
    function createSizeOfMatrix() {
      for (let i = 1; i < maxMatixNumber; i += 2) {
        if (vm.model.input >= i * i) {
          n = i + 2;
        }
      }
    }

    vm.onSubmitCTA = onSubmitCTA;

  });
