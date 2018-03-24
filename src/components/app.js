angular.module('video-player')

.component('app', {
  // TODO
  controller: function(youTube) {

    this.videos = window.exampleVideoData;
    //this.searchResults('frog');
    this.currentVideo = this.videos[0];

    this.service = youTube.search;
  
    this.selectVideo = (index) => { 
      this.currentVideo = this.videos[index];
    };

    this.searchResults = (query) => {
      var successCallback = (response) =>{
        console.log('this is the server response: ', response);
        this.videos = response.data.items;
        this.currentVideo = this.videos[0];
      };
      //console.log(window.YOUTUBE_API_KEY);
      var params = {
                      part: 'snippet',
                      type: 'video',
                      videoEmbeddable: true,
                      q: query,
                      maxResults: 5,
                      key: window.YOUTUBE_API_KEY
                    };

      youTube.search(params, successCallback);
    };
    
    // this.$onInit = () => {
    //   this.searchResults('frog');
    // };
  
    // this.onClick= function(){
    // };

    // this.result= function(){
    // };

  },

  templateUrl: "src/templates/app.html"
});
