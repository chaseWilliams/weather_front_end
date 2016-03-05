var api_url = 'localhost:9295/?'
new Vue({
  el: '#app',
  data: {
    temp: '',
    cloudiness: '',
    humidity: '',
    windiness: '',
    condition_name: '',
    condition_description: '',
    wiki: '',
    wiki_title: '',
    city: '',
    zipcode: '30075',
    lat: '',
    lon: '',
    function(){
      return {pic_url: 'https://farm4.staticflickr.com/3933/14919486574_0f94bedf92_b.jpg'}
    }
  },

  computed: {
    background_style: function(){
    return {'background-image': 'url("'+this.pic_url+'")'}
  }
  },

  watch: {
    'zipcode': 'get_data',
    'lat': 'fetch_data'
  },

  methods: {
    get_data: function () {
      if (this.zipcode.length == 5) {
        var self = this;
        console.log('called')
        console.log('location method called');
        navigator.geolocation.getCurrentPosition(success, error, {maximumAge:60000, timeout:5000, enableHighAccuracy:true});
        console.log('got current position')
        function success(position) {
          console.log('entered success method')
          var latitude  = position.coords.latitude;
          var longitude = position.coords.longitude;
          console.log('latitude is ' + latitude)
          console.log("lat" + latitude + 'lon' + longitude);
          self.$set('lat', latitude);
          self.$set('lon', longitude);
          console.log('Set coordinates!' + self.lat + '   ' + self.lon);
          self.fetch_data(self.lat, self.lon);
        }
        function error(err) {
          console.log('errored: ' + err);
          if(err.code == 1) {
           console.log("Error: Access is denied!");
          }
          else if( err.code == 2) {
           console.log("Error: Position is unavailable!");
          }
        }
      }
    },

    fetch_data: function (lat, lon) {
      console.log('k we back')
      console.log(lat + ' ' + lon)
      var endpoint = api_url + "lat=" + lat + "&lon=" + lon
      console.log('endpoint is ' + endpoint)
      this.$http.get(endpoint).then(function(data) {
        console.log("Data  is");
        console.log(data.data)
        //set all of the data to updated weather stats
        var weather = data.data.weather.data
        this.$set('pic_url', data.data.pic.url)
        this.$set('temp', weather.temp)
        this.$set('cloudiness', weather.cloudiness)
        this.$set('humidity', weather.humidity)
        this.$set('windiness', weather.windiness)
        this.$set('condition_name', weather.condition_name)
        this.$set('condition_description', weather.condition_description)
        this.$set('wiki', data.data.article.extract)
        this.$set('wiki_title', data.data.article.title)
        this.$set('city', weather.city)
        this.$set('zipcode', ' ')
      }.bind(this));
    }
  }
});
