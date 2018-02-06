'use strict';

angular.module('myApp')
  .service('integerSpiralService', function () {

    let model = {
      intSpiralArray: [],
      finalSpiralArray: [],
      input: '',
      direction: ''
    }

    function createSpiralMatrixArray(n) {

      for (let i = 0; i < n; i++) {
        if (model.direction === 'left') {
          for (let j = 0; j < n; j++) {
            createSpiralIntegerArray(n, i, j)
          }
        } else {
          for (let j = n - 1; j >= 0; j--) {
            createSpiralIntegerArray(n, i, j)
          }
        }
      }

      removeIntGreaterThanInputValue(n);
    }

    function createSpiralIntegerArray(n, i, j) {

      //(i, j)th element position in matrix
      let x = Math.min(Math.min(i, j), Math.min(n - 1 - i, n - 1 - j));

      // created upper half of the matrix
      if (i <= j) {
        model.intSpiralArray.push((n - 2 * x) * (n - 2 * x) - (i - x) - (j - x));
      }
      // created lower half of the matrix
      else {
        model.intSpiralArray.push((n - 2 * x - 2) * (n - 2 * x - 2) + (i - x) + (j - x));
      }

    }

    function removeIntGreaterThanInputValue(n) {
      for (let i = 0; i < model.intSpiralArray.length; i++) {
        model.intSpiralArray[i] = model.intSpiralArray[i] - 1;
        if (model.intSpiralArray[i] > model.input) {
          model.intSpiralArray[i] = -1 * (i + 1);
        }
      }

      createFinalArray(n);
    }

    function createFinalArray(n) {
      model.finalSpiralArray = new Array(n);
      for (let i = 0; i < n; i++) {
        model.finalSpiralArray[i] = [];
        for (let j = 0; j < n; j++) {
          model.finalSpiralArray[i][j] = model.intSpiralArray[(n * i) + j];

        }
      }
    }


    return {
      model: model,
      createSpiralMatrixArray: createSpiralMatrixArray
    };
  });
