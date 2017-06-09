/* eslint-disable no-trailing-spaces */
/**
 * Created by elporfirio on 07/04/2016.
 */

angular.module('simpleUtil', [])
  .controller('simpleImageUploadCtrl', ['$scope', simpleImageUploadCtrlFn])
  .directive('simpleImageUpload', [simpleImageUploadFn])

function simpleImageUploadCtrlFn ($scope) {
  var vm = this
  /** Binding Properties:
   *  vm.imageFile
   */

  vm.getImagesFromEvent = function (event) {
    var files = event.originalEvent.target.files || event.originalEvent.dataTransfer.files
    var count = 1
    var image = null
    angular.forEach(files, function (file) {
      if (file.type.match('image.*') !== null && count === 1) {
        image = file
        count += 1
      } else if (count > 1) {
        console.warn('This directive will only process 1 image every time')
      }
    })
    displayImage(image)
  }

  var displayImage = function (imagen) {
    var lector = generateReader(imagen)
    lector.readAsDataURL(imagen)
  }

  var generateReader = function (img) {
    var reader = new FileReader()
    reader.onload = (function (file) {
      return function (e) {
        vm.imageFile = {
          source: e.target.result,
          name: file.name
        }
        $scope.$apply()
      }
    })(img)

    return reader
  }
}

function simpleImageUploadFn () {
  function linkFn (scope, element, attrs, controller, ngModel) {
    var input = element.find('input')
    var $div = element.find('div')

    input.on('change', function (e) {
      controller.getImagesFromEvent(e)
    })

    $div.on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
      e.preventDefault()
      e.stopPropagation()
    })
      .on('dragover dragenter', function () {
        $div.addClass('is-dragover')
      })
      .on('dragleave dragend drop', function () {
        $div.removeClass('is-dragover')
      })
      .on('drop', function (e) {
        controller.getImagesFromEvent(e)
      })
      .on('click', function () {
        input.trigger('click')
      })
  }

  return {
    restrict: 'E',
    replace: false,
    template: '<input type="file" style="display:none;"><div class="imgUpload"></div>',
    scope: {},
    bindToController: {
      imageFile: '=',
      options: '='
    },
    controller: 'simpleImageUploadCtrl',
    link: linkFn
  }
}
