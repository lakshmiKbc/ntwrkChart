var app = new Vue({
  el: '#chart'
  // data: {
  //   message: 'Hello Vue!'
  // }
})
fetch('http://alukafoundation.org/api/GetSongsList').then(res => res.json()).then(data => {
  new Vue({
    el: '#song_select',
    data: {
      selected: 1,
      data: data
    },
    methods: {
      update_chart() {
        var songFile;
        songFile = $(this.$el).val();
        return d3.json("http://alukafoundation.org/api/GetSongsByParent?id=" + songFile, function (json) {
          return myNetwork.updateData(json);
        });
      }
    }
  })
})