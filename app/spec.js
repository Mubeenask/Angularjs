describe('mycontrollertest', function(){
 'use strict';
 var myController = null;
 var $httpBankend = null;
  beforeEach(angular.mock.module('ui.router'));

    beforeEach(inject(function($rootscope, $controller) {
      myController = $rootscope.$new;
        $controller('myController', { $scope: myController });
    }));

     beforeEach(inject(function(_$httpBakend_) { 
      $httpBankend = _$httpBakend_;
     }));

    it ("test data", function(){
      $httpBankend.expect.GET('data.json').respond({
        "name" : "Mubeena",
        "designation" : "Developer"
      });
      myController.loadJson();
      $httpBankend.flush();
      it ('test load json', function(){
        $httpBankend.expect.GET('data.json').respond({
          "name" : "Mubeena",
          "designation" : "Developer"
      });
      myController.loadJson();
      $httpBankend.flush();
      expect(myController.data.name).toEqual("Mubeena");
    });
  });
});