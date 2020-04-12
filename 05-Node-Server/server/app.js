require(`dotenv`).config(); //1 ADDED FOR ENCRYPTION

var express = require(`express`); //1
var app = express(); //2
var test = require(`./controllers/testcontroller`);
var authTest = require(`./controllers/authtestcontroller`);

var user = require(`./controllers/usercontroller`); //1
var sequelize = require(`./db`);

/*app.use(`/api/test`, function (req, res) {
 res.send("This is data from the /api/test endpoint. It's from the server.");
});*/
sequelize.sync(); // tip: pass in {force: true} for resetting tables

app.use(express.json());

app.use(require(`./middleware/headers`)); ///activate headers to declare what is allowed to pass
//2            //3


///EXPOSED ROUTES
app.use(`/test`, test);

app.use(`/api/user`, user); //2

//PROTECTED ROUTES
app.use(require(`./middleware/validate-session`));

app.use(`/authtest`, authTest);




app.listen(3000, function () {
    console.log(`App is listening on 3000`); //5
});
