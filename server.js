let express = require('express');
let path = require('path');

let app = express();

let data = {
	phrases: [
		{
			id: '1',
			content: 'yo1'
		},
		{
			id: '2',
			content: 'hey'
		},
		{
			id: '3',
			content: 'now'
		}
	],
 	actors: [
	    { id: 1, name: "Ben", age: 27, information: "G" },
	    { id: 2, name: "Dave", age: 22, information: "D" },
	    { id: 3, name: "Sam", age: 23, information: "D" },
	    { id: 4, name: "Matt", age: 34, information: "M" },
	    { id: 5, name: "William", age: 19, information: "M" },
	    { id: 6, name: "Fillipe", age: 20, information: "F" }
  	]
}

app.get('/', function(req, res){
	res.send(JSON.stringify(data.phrases));
})

app.get('/getActors', function(req, res){
	res.send(JSON.stringify(data.actors));
})

app.get('/getActor/:id', function(req, res){
	let isPlayer = (item) => {
		return item.id == req.params.id;
	}
	
	let record = data.actors.find(isPlayer);
	res.send(JSON.stringify(record));
})

app.listen(3001, function(){
	console.log('API started');
})