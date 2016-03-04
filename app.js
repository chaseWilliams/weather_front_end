var api_url = 'http://jsonplaceholder.typicode.com/users'
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
    city: [],
    zipcode: '30075',
    pic_url: 'https://farm4.staticflickr.com/3933/14919486574_0f94bedf92_b.jpg'
    

  },

  watch: {
    'zipcode': 'get_data'
  },

  ready: function () {
    this.get_data();
  },

  methods: {
    get_data: function () {
      if (this.zipcode.length === 5) {
      console.log('called')
      this.$http.get(api_url, function (data) {
          console.log("Data  is");
          console.log(data);
          this.$set('city', 'Roswell');
      });
  }
}
}
})
