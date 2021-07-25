function initMap(){
    var options = {
        zoom:3,
        center:{lat:20.5937,lng:78.9629}
    }
    var map = new google.maps.Map(document.getElementById('map'),options)
 var markers = [
        {
            coords: {lat:37.5665,lng:126.9780},
            content: '<h1>Seoul</h1>'
        },
        {
            coords: {lat:36.2048,lng:138.2529},
            content: '<h1>Japan</h1>'
        },
        {
            coords: {lat:46.2276,lng:2.2137},
            content: '<h1>France</h1>'
        }
    ]
 for(var i=0; i<markers.length; i++){
        addMarker(markers[i])
    }
    function addMarker(props){
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        })
        if(props.content){
            var infowindow = new google.maps.InfoWindow({
                content: props.content
            })
            marker.addListener('click',function(){
                infowindow.open(map,marker)
            })
        }
    }
}