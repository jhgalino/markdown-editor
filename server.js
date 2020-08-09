let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('pad');
});

let port = process.env.PORT || 8000;
app.listen(port);
