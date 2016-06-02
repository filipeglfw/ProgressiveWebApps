self.addEventListener('fetch', function(event) {
 alert("navigate!");
 console.log(event.request.url);
});
