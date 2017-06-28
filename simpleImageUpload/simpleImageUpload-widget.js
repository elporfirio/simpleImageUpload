/**
 * Created by porfirio.chavez on 28/06/17.
 */
(function ($) {
    $.fn.simpleImageUpload = function (options) {
      var settings = $.extend({
        onAfterRead: ''
      }, options)
      var self = this
      var _imageFile = {}
      var _input;

      // Private Methods
      var getImagesFromEvent = function (event) {
        var files = event.originalEvent.target.files || event.originalEvent.dataTransfer.files
        var count = 1
        var image = null
        $.each(files, function (idx, file) {
          if (file.type.match('image.*') !== null && count === 1) {
            image = file
            count += 1
          } else if (count > 1) {
            console.warn('This widget will only process 1 image every time')
          }
        })
        if(image !== null){
          displayImage(image)
        }
      }

      var displayImage = function (imagen) {
        var lector = generateReader(imagen)
        lector.readAsDataURL(imagen)
      }

      var generateReader = function (img) {
        var reader = new FileReader()
        reader.onload = (function (file) {
          return function (e) {
            _imageFile = {
              source: e.target.result,
              file: file,
              name: file.name
            }
            if ($.isFunction(settings.onAfterRead)) settings.onAfterRead(_imageFile);
          }
        })(img)

        return reader
      }

      // Public Methods
      self.getImageFile = function () {
        return _imageFile
      }

      self.deleteImageFile = function (){
        _imageFile = {}
        _input.val('')
      }

      return this.each(function () {
        var $element = $(this)
        $element.html('<input type="file" style="display:none;"><div class="simpleImageUpload"></div>')
        _input = $element.find('input')
        var $div = $element.find('div')

        _input.on('change', function (e) {
          getImagesFromEvent(e)
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
            getImagesFromEvent(e)
          })
          .on('click', function () {
            _input.trigger('click')
          })
      })
    }
  }(jQuery)
)