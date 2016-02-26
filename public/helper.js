// JavaScript File
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
  methods: { myFunction: function() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
})
}