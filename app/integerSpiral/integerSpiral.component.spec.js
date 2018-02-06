'use strict';
describe('integerSpiral', function () {
  describe('integerSpiralController', function () {

    beforeEach(module('myApp'));
    beforeEach(module('templates'));

    let $scope, $compile, tempCompiledElement, compiledElement;

    let template = '<integer-spiral></integer-spiral>';

    beforeEach(inject(function ($rootScope, _$compile_) {

      $scope = $rootScope.$new();
      $compile = _$compile_;

    }));

    function getCompiledElement(template) {

      tempCompiledElement = $compile(template)($scope);
      $scope.$digest();
      return tempCompiledElement;

    }

    describe('Initialization', function () {

      it('should define compiledElement ', function () {

        compiledElement = getCompiledElement(template);

        expect(compiledElement).to.be.exist;

      });

    });

  });
});