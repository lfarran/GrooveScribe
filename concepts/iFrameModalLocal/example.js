angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo')
  .controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

  //$scope.items = ['item1', 'item2', 'item3'];

  //$scope.animationsEnabled = true;

  $scope.open = function (/*size*/) {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      windowClass: 'center-modal',
      //size: size,
      resolve: {
        /*items: function () {
          return $scope.items;
        }*/
      }
    });

    modalInstance.result.then(function (/*selectedItem*/) {
      //$scope.selected = selectedItem;

      var iFrame = document.getElementById('groove-scribe');
      var win = document.getElementById('groove-scribe').contentWindow;
      var doc = iFrame.contentDocument? iFrame.contentDocument: iFrame.contentWindow.document;
      var grooveSrc = doc.getElementById('GrooveDB_source');
      //var abcSrc = doc.getElementById('ABCsource');
      //$log.debug('iFrame:', iFrame);
      $log.debug('win:', win);
      $log.debug('doc', doc);
      $log.debug('GrooveDB_source:', grooveSrc);
      $log.debug('grooveSrc.value:', grooveSrc.value);  // drop this into text box
      //$log.debug('abcSrc:', abcSrc);
      //$log.debug('abcSrc.value:', abcSrc.value);

      var textArea = document.getElementById('sf_free_text');
      textArea.value = grooveSrc.value;

    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('ui.bootstrap.demo')
  .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance /*, items*/) {

  /*$scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };*/

  $scope.ok = function () {
    //$uibModalInstance.close($scope.selected.item);
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
