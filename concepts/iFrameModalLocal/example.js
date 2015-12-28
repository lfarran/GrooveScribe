angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);

angular.module('ui.bootstrap.demo')
  .controller('ModalDemoController', ['$scope', '$uibModal', '$log',
    function ($scope, $uibModal, $log) {

      //$log.debug('ModalDemoController');
      $scope.open = open;

      $scope.testValue = '{{GrooveTab\n|HasTempo=80\n|HasSwingPercent=0\n|HasDivision=16\n|HasMeasures=1\n|HasNotesPerMeasure=32\n|HasTimeSignature=4/4\n|HasHiHatTab=x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-\n|HasSnareAccentTab=--------O---------------O-------\n|HasSnareOtherTab=--------------------------------\n|HasKickTab=o---------------o---------------\n|HasFootOtherTab=--------------------------------\n|HasTom1Tab=--------------------------------\n|HasTom4Tab=--------------------------------\n|HasEditData=?TimeSig=4/4&Div=16&Title=Two%20Princes%20-%20Verse&Author=Spin%20Doctors&Comments=GrooveDB%20Test&Tempo=104&Measures=8&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|o-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|o-x-x-x-x---x-x-|x-x-x-x-x-x-x-x-|o-x-x-x-x-x-x-x-|x-x-x-x-x-x-x---|&S=|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-o-go---|&K=|o-o---oo-oo-----|o-o----o-o------|o-o---oo-oo-----|o-o----o-o------|o-o---oo-oo-----|o-o----o-o------|o-o---oo-oo-----|o-o----o--o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|-------------x--|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|--------------xx|&Stickings=|cccccccccccccccc|----------------|----------------|----------------|----------------|----------------|----------------|----------------|\n}}';

      /**
       * Opens Bootstrap Modal
       */
      function open(/*size*/) {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceController',
          windowClass: 'center-modal',
          //size: size,
          resolve: {
            grooveUrl: function() {
              var baseUrl = '../../dist/index.html';
              var textArea = document.getElementById('sf_free_text');
              //$log.debug('textArea.value:', textArea.value);

              // Groove Data is available
              if(textArea.value && textArea.value.indexOf('GrooveTab') > -1) {
                var lines = textArea.value.split('\n');

                lines.forEach(function(line) {
                  if(line.indexOf('|HasEditData=') > - 1) {
                    var editData = line.substring('|HasEditData='.length);
                    //$log.debug('editData:', editData);
                    baseUrl = baseUrl.concat(editData);

                    // breaking a JavaScript forEach loop requires returning false
                    // return true or return continue the loop
                    return false;
                  }
                })
              }

              return baseUrl;
            }
          }
        });

        modalInstance.result
          // Promise success case
          .then(function (/*selectedItem*/) {
            var iFrame = document.getElementById('groove-scribe');
            //var win = document.getElementById('groove-scribe').contentWindow;
            var doc = iFrame.contentDocument? iFrame.contentDocument: iFrame.contentWindow.document;
            var grooveSrc = doc.getElementById('GrooveDB_source');
            //var abcSrc = doc.getElementById('ABCsource');
            //$log.debug('iFrame:', iFrame);
            //$log.debug('win:', win);
            //$log.debug('doc', doc);
            //$log.debug('GrooveDB_source:', grooveSrc);

            //$log.debug('grooveSrc.value:', grooveSrc.value);  // drop this into text box

            //$log.debug('abcSrc:', abcSrc);
            //$log.debug('abcSrc.value:', abcSrc.value);

            var textArea = document.getElementById('sf_free_text');
            textArea.value = grooveSrc.value;

          }, function () {
            // Promise error/cancel case
            $log.info('Modal dismissed at: ' + new Date());
          });
      }

      $scope.$on('$destroy', function () {
        $log.debug('ModalDemoController destroy');
      });

    }]);

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
angular.module('ui.bootstrap.demo')
  .controller('ModalInstanceController', ['$scope', '$uibModalInstance', '$log', 'grooveUrl', '$window',
    function ($scope, $uibModalInstance, $log, grooveUrl, $window) {

      //$log.debug('ModalInstanceController url:', grooveUrl);
      $log.debug('window height:', $window.innerHeight);
      $log.debug('window width:', $window.innerWidth);
      $log.debug('window outerHeight:', $window.outerHeight);
      $log.debug('window outerWidth:', $window.outerWidth);

      $scope.ok = ok;
      $scope.cancel = cancel;
      $scope.grooveScribeUrl = grooveUrl;
      $scope.windowHeight = $window.innerHeight - 40;
      //$scope.windowHeight = 650;
      $scope.windowWidth = $window.innerWidth;

      /**
       * Bootstrap Modal <OK> button click handler
       */
      function ok() {
        $uibModalInstance.close();
      }

      /**
       * Bootstrap Modal <CANCEL> button click handler
       */
      function cancel() {
        $uibModalInstance.dismiss('cancel');
      }

      $scope.$on('$destroy', function () {
        $log.debug('ModalInstanceController destroy');
      });
    }]);
