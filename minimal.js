/*
Minimal application with javascript and syncano
*/

//Connect to Syncano

var syncano = SyncanoConnector.getInstance();
syncano.connect(relevant_data, function(auth){
    console.log("Connected")
});

//Save Data

syncano.Data.new( [Project-ID], 'Default', {title: "My title"} , function() { console.log("Saved!") });

//explain all of this - none of it makes any sense
syncano.Data.get( [Project-ID], 'Default', {order: 'DESC'}, function(list) {
    if (list.length) {
	console.log('Last object: ' + list[0].title);
    } else {
	console.log("No stored objects!");
	});
    
//Subscribe to Real-Time Updates

syncano.connect( relevant_data, function(auth) {
    syncano.Subscription.subscribeProject([Project-ID], function(result) { 
	console.log("Suscribed");
    })
});
syncano.on('syncano:newdata:project-PROJECT-ID', function(data) {
    if (data) {
	console.log('Data: ' + data);
	}
    });
