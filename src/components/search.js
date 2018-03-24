angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    result: '<'
  },

  controller: function() {
    this.searchQuery = '';

    this.keyUpHandler = ($event) => {
      if ($event.key === 'Enter') {
        //console.log(this.searchQuery);
        this.result(this.searchQuery);
      }
    };
  
    this.buttonHandler = ($event) => {
      console.log(this.searchQuery);
      this.result(this.searchQuery);
    }

  },

  templateUrl: 'src/templates/search.html'
});
