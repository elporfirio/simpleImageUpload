/**
 * Created by elporfirio on 07/04/2016.
 */
angular.module('pruebas', ['simpleUtil'])
.controller('Main', function(){
  'use strict';

  var self = this;

  self.archivos = null;
  self.imagenes = [];

  self.guardar = function(){
    //Asi identificamos si el archivo cambio
    if(self.archivos != null){
      self.imagenes = self.archivos;
    }
  };
});