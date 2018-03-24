angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    result: '<',
    service: '<'
  },

  controller: function() {
    this.searchQuery = '';

    this.keyUpHandler = ($event) => {
      if ($event.key === 'Enter') {
        console.log(this.searchQuery);
        this.result(this.searchQuery);
      }
    };
  
    this.buttonHandler = ($event) => {
      console.log(this.searchQuery);
      this.result(this.searchQuery);
      // youTube.search();
    }

  },

  templateUrl: 'src/templates/search.html'
});
