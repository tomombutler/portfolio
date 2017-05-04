// mapbox js
// mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlZGNvbGxlY3RpdmUiLCJhIjoiY2l2ZHhkb2p3MDA0dDJvb3cxcTQzejVpciJ9.UU1ZjmINIzrmLrquetNrjg';
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/shedcollective/cj1ywavy500162sp7tnhb0szl'
// });

// tweets
$('.card--tweet').twittie({
    username: 'shedcollective',
    dateFormat: '%b. %d, %Y',
    template: '{{tweet}} <div class="date">{{date}}</div> <a href="{{url}}" target="_blank">Details</a>',
    count: 1,
    hideReplies: true,
    apiPath: '/user/themes/welsh-homestead/bower_components/Tweetie/api/tweet.php'
});