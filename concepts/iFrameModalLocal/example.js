angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);

angular.module('ui.bootstrap.demo')
  .controller('ModalDemoController', ['$scope', '$uibModal', '$log', '$timeout',
    function ($scope, $uibModal, $log, $timeout) {

      //$log.debug('ModalDemoController');
      var SF_FREE_TEXT = 'sf_free_text';
      var START_GROOVE = '{{GrooveTab';
      var END_GROOVE = '}}';
      var GROOVE_EDIT_STRING = '|HasEditData=';
      var GROOVE_SCRIBE_URL = '../../dist/index.html';  // This will be different in production - this needs to point to the local Groove Scribe

      $scope.open = open;

      // allow time for the DOM to compile to allow textarea to populate
      $timeout(function(){
        $scope.grooves = parseGrooves();
      },0);

      // TEST ONLY values
      $scope.singleEditTestValue = '{{GrooveTab\n|HasTempo=80\n|HasSwingPercent=0\n|HasDivision=16\n|HasMeasures=1\n|HasNotesPerMeasure=32\n|HasTimeSignature=4/4\n|HasHiHatTab=x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-\n|HasSnareAccentTab=--------O---------------O-------\n|HasSnareOtherTab=--------------------------------\n|HasKickTab=o---------------o---------------\n|HasFootOtherTab=--------------------------------\n|HasTom1Tab=--------------------------------\n|HasTom4Tab=--------------------------------\n|HasEditData=?TimeSig=4/4&Div=16&Title=Two%20Princes%20-%20Verse&Author=Spin%20Doctors&Comments=GrooveDB%20Test&Tempo=104&Measures=8&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|o-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|o-x-x-x-x---x-x-|x-x-x-x-x-x-x-x-|o-x-x-x-x-x-x-x-|x-x-x-x-x-x-x---|&S=|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-o-go---|&K=|o-o---oo-oo-----|o-o----o-o------|o-o---oo-oo-----|o-o----o-o------|o-o---oo-oo-----|o-o----o-o------|o-o---oo-oo-----|o-o----o--o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|-------------x--|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|--------------xx|&Stickings=|cccccccccccccccc|----------------|----------------|----------------|----------------|----------------|----------------|----------------|\n}}';
      $scope.multiEditTestValue = 'Intro:\n{{GrooveTab\n|HasTempo=104\n|HasSwingPercent=0\n|HasDivision=16\n|HasMeasures=8\n|HasNotesPerMeasure=32\n|HasTimeSignature=4/4\n|HasHiHatTab=c---x---x---x---x---x---x---x---x---x---x---x---x---x---x---x---o---x---x---x---x---x---x---x---x---x---x---x---x---x---x---x---o---x---x---x---x-------x---x---x---x---x---x---x---x---x---x---o---x---x---x---x---x---x---x---x---x---x---x---x---x---x-------\n|HasSnareAccentTab=--------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------o-----o-------\n|HasSnareOtherTab=--g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g-------g---------\n|HasKickTab=o---o-------o-o---o-o-----------o---o---------o---o-------------o---o-------o-o---o-o-----------o---o---------o---o-------------o---o-------o-o---o-o-----------o---o---------o---o-------------o---o-------o-o---o-o-----------o---o---------o-----o-----------\n|HasFootOtherTab=----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n|HasTom1Tab=----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------o-----\n|HasTom4Tab=------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------o-o-\n|HasEditData=?TimeSig=4/4&Div=16&Title=Two%20Princes%20-%20Intro&Author=Spin%20Doctors&Comments=GrooveDB%20Test&Tempo=104&Measures=8&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|o-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|o-x-x-x-x---x-x-|x-x-x-x-x-x-x-x-|o-x-x-x-x-x-x-x-|x-x-x-x-x-x-x---|&S=|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-o-go---|&K=|o-o---oo-oo-----|o-o----o-o------|o-o---oo-oo-----|o-o----o-o------|o-o---oo-oo-----|o-o----o-o------|o-o---oo-oo-----|o-o----o--o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|-------------x--|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|--------------xx|\n}}\n\nVerse:\n{{GrooveTab\n|HasTempo=104\n|HasSwingPercent=0\n|HasDivision=16\n|HasMeasures=8\n|HasNotesPerMeasure=32\n|HasTimeSignature=4/4\n|HasHiHatTab=c---x---x---x---x---x---x---x---x---x---x---x---x---x---x---x---o---x---x---x---x---x---x---x---x---x---x---x---x---x---x---x---o---x---x---x---x-------x---x---x---x---x---x---x---x---x---x---o---x---x---x---x---x---x---x---x---x---x---x---x---x---x-------\n|HasSnareAccentTab=--------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------------o---------o-----o-------\n|HasSnareOtherTab=--g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g---g-g-----g---g-------g---------\n|HasKickTab=o---o-------o-o---o-o-----------o---o---------o---o-------------o---o-------o-o---o-o-----------o---o---------o---o-------------o---o-------o-o---o-o-----------o---o---------o---o-------------o---o-------o-o---o-o-----------o---o---------o-----o-----------\n|HasFootOtherTab=----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n|HasTom1Tab=----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------o-----\n|HasTom4Tab=------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------o-o-\n|HasEditData=?TimeSig=4/4&Div=16&Title=Two%20Princes%20-%20Verse&Author=Spin%20Doctors&Tempo=104&Measures=8&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|o-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|o-x-x-x-x---x-x-|x-x-x-x-x-x-x-x-|o-x-x-x-x-x-x-x-|x-x-x-x-x-x-x--s|&S=|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-gg-og-g|-gg-og-g-o-go---|&K=|o-o---oo-oo-----|o-o----o-o------|o-o---oo-oo-----|o-o----o-o------|o-o---oo-oo-----|o-o----o-o------|o-o---oo-oo-----|o-o----o--o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|-------------x--|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|--------------xx|\n}}'

      /**
       * Opens Bootstrap Modal
       */
      function open(groove) {
        //$log.debug('open groove:', groove);
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceController',
          windowClass: 'center-modal',
          //size: size,
          resolve: {
            grooveUrl: function() {
              if(groove) {
                return GROOVE_SCRIBE_URL.concat(groove.editUrl);
              }
              return GROOVE_SCRIBE_URL;
            }
          }
        });

        modalInstance.result
          // Promise success case
          .then(function (grooveUrl) {
            //$log.debug('modal resolve:', grooveUrl);
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

            var textArea = document.getElementById(SF_FREE_TEXT);

            // if the grooveUrl is the base url, we're adding a groove
            if(GROOVE_SCRIBE_URL === grooveUrl) {
              textArea.value = textArea.value.concat(grooveSrc.value);
            }
            // Editing a Groove - replace it with the update
            else {
              var groove = getGroove(grooveUrl); $log.debug('resolve groove:', groove);
              // TODO: LBF 12/28/15 - add some defensive programming?
              if(groove) {
                $scope.grooves[$scope.grooves.indexOf(groove)].groove = grooveSrc.value;
                textArea.value = '';
                $scope.grooves.forEach(function(groove) {
                  // TODO: LBF 12/28/15 - parseout Groove Scribe 'comments' for song section - then the text area can be hidden
                  textArea.value = textArea.value.concat(groove.groove);
                });
              }
            }

          }, function () {
            // Promise error/cancel case
            $log.info('Modal dismissed at: ' + new Date());
          });
      }

      /**
       * Parses grooves from SF_FREE_TEXT textarea box and pushes them into a key-value JavaScript array
       * @returns {Array}
       */
      function parseGrooves() {
        var grooves = [];
        var textArea = document.getElementById(SF_FREE_TEXT);

        if(textArea.value && textArea.value.indexOf(START_GROOVE) > -1) {
          var sections = textArea.value.split(START_GROOVE);
          //$log.debug('sections:', sections);

          // TODO: LBF 12/28/15 - try/catch?
          sections.forEach(function(section) {
            if(section.indexOf(GROOVE_EDIT_STRING) > - 1) {
              section = section.substring(0, (section.indexOf(END_GROOVE) + END_GROOVE.length));
              section = START_GROOVE.concat(section);
              grooves.push({groove:section, editUrl:parseGrooveEditUrl(section), name: 'Groove ' + (grooves.length + 1)});
            }
          });
        }

        //$log.debug('grooves:', grooves);
        return grooves;
      }

      /**
       * Returns a groove's EditData
       * @param groove
       * @returns {string}
       */
      function parseGrooveEditUrl(groove) {
        var returnValue = '';
        var lines = groove.split('\n');

        lines.forEach(function(line) {
          if(line.indexOf(GROOVE_EDIT_STRING) > - 1) {
            returnValue = line.substring(GROOVE_EDIT_STRING.length);

            // breaking a JavaScript forEach loop requires returning false
            // return true or return continue the loop
            return false;
          }
        });

        //$log.debug('parseGrooveEditUrl:', returnValue);
        return returnValue;
      }

      /**
       *
       * @param editUrl
       * @returns {*}
       */
      function getGroove(editUrl) {
        var returnValue = null;

        // strip base URL if it's present
        if(editUrl.indexOf(GROOVE_SCRIBE_URL) > -1) {
          editUrl = editUrl.substring(GROOVE_SCRIBE_URL.length);
        }
        $log.debug('getGroove editUrl', editUrl);

        $scope.grooves.forEach(function(groove) {
          if (groove.editUrl === editUrl) {
            returnValue = groove;
            // breaking a JavaScript forEach loop requires returning false
            // return true or return continue the loop
            return false;
          }
        });

        return returnValue;
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
      /*$log.debug('window height:', $window.innerHeight);
      $log.debug('window width:', $window.innerWidth);
      $log.debug('window outerHeight:', $window.outerHeight);
      $log.debug('window outerWidth:', $window.outerWidth);*/

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
        $uibModalInstance.close(grooveUrl);
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
