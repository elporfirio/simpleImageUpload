/**
 * Created by elporfirio on 07/04/2016.
 */

angular.module('UtilFirio', [])
    .controller('simpleImageUploaderCtrl', ['$scope', simpleImageUploaderCtrlFn])
    .directive('simpleImageUploader', [simpleImageUploaderFn]);

function simpleImageUploaderCtrlFn($scope) {
  'use strict';
  var self = this;
  //self.imagen = [];

  self.manipularArchivos = function (event, element) {
    /* Sin JQUERY */
    //var files = e.target.files || e.dataTransfer.files;
    var files = event.originalEvent.target.files || event.originalEvent.dataTransfer.files;
    var contador = 1;
    angular.forEach(files, function (archivo, index) {
      if (archivo.type.match('image.*') !== null && contador === 1) {
        mostrarImagen(archivo);
        contador += 1;
      }
    });
  };

  var mostrarImagen = function (imagen) {
    var lector = generarReader(imagen);
    lector.readAsDataURL(imagen);
  };

  var generarReader = function (img) {
    var reader = new FileReader();
    reader.onload = (function (archivo) {
      return function (evento) {
        self.imagen = {
          source: evento.target.result,
          name: archivo.name
        };
        $scope.$apply();
      }
    })(img);

    return reader;
  };
}

function simpleImageUploaderFn() {
  'use strict';

  function linkFn(scope, element, attrs, controller, ngModel) {
    var input = element.find('input');
    input.on('change', function (e) { controller.manipularArchivos(e); });

    element.find('div').on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
          e.preventDefault();
          e.stopPropagation();
        })
        .on('dragover dragenter', function () {
          element.find('div').addClass('is-dragover');
        })
        .on('dragleave dragend drop', function () {
          element.find('div').removeClass('is-dragover');
        })
        .on('drop', function (e) {
          controller.manipularArchivos(e, element.find('div'));
        })
        .on('click', function (e) {
          input.trigger('click');
        });
  }

  return {
    restrict: 'E',
    replace: false,
    template: '' +
    '<input type="file" style="display:none;"> ' +
    '<div class="imgUpload"></div>',
    scope: {},
    bindToController: {
      imagen: '=',
      options: '='
    },
    controller: 'simpleImageUploaderCtrl',
    controllerAs: 'ImgUploadCtrl',
    link: linkFn
  };
}