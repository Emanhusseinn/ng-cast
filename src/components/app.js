angular.module('video-player')

.component('app', {
  // TODO
  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = function() {

    };

    this.searchResults = function() {

    };

    this.onClick= function(){
    };

    this.result= function(){
    };

  },

  templateUrl: "src/templates/app.html"
});
