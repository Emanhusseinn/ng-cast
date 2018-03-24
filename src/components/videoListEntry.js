angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<',
    index: '<',
    onClick: '<'
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
