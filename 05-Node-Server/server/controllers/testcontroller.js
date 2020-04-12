var express = require(`express`); //1
var router = express.Router(); //2
var sequelize = require(`../db`);
var TestModel = sequelize.import(`../models/test`); //1


//CONTROLLER METHOD #1: SIMPLE RESPONSE
      //1      //2
router.post(`/one`, function(req, res) {
    //3
    res.send(`Test 1 went through!`)
});


//2 CONTROLLER METHOD #2: PERSISTING DATA 
router.post(`/two`, function (req, res) {
    let testData = `Test data for endpoint two`; //2

    TestModel //3
    .create({ //4
        //6
        testdata: testData //5
    }).then(dataFromDatabase => {
        res.send(`Test 2 went through!!`)
})
})


//CONTROLLER METHOD #3: REQ.BODY
router.post(`/three`, function (req, res) {

    var testData = req.body.testdata.item;

    TestModel
    .create({ //2
        testdata: testData
    })
    res.send(`Test three went through!!`)
    console.log(`Test three went through!!`)
});

//STEP #4 - USE THIS WITH POSTMAN
router.post(`/four`, function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
    .create({
        testData: testData
    })
    .then( //1
        function message() { //2
        res.send(`Test 4 went through!!`);
    });
});

//Route #5: return data in a promise

router.post(`/five`, function (req, res) {
    var testData = req.body.testdata.item;
    TestModel.create({
        testdata: testData 
    })
    .then(    //1
        function messgage(data) {
            res.send(data);   //2

        });
});

//6 ROUTE #6: RETURN RESPONSE AS JSON

router.post(`/six`, function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
    .create({
       testdata: testData 
    })
    .then(
        function message(testdata) {
            res.json({  //1
            testdata: testdata  //2
        });
        }
    );
});

//7 ROUTE #7: HANDLE ERRORS

router.post(`/seven`, function (req, res) {
    var testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    .then(
        function createSuccess(testdata) {
            res.json({
                testdata: testdata
            });
        },
        function createError(err) {  //1
        res.send(500, err.message);
    }
    );
})


///GET SIMPLE SERVER MESSAGE
router.get(`/helloclient`, function (req, res) {
    res.send(`This is a message from the server to the client.`)
})


router.get(`/one`, function(req, res) {

    TestModel
    .findAll({
        attributes: [`id`, `testdata`]
    })
    .then(
        function findAllSuccess(data) {
            console.log("Controller data:", data);
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err.message);
        }

    );
});


module.exports = router;

/*//3    //4  //5          //6
router.get(`/`, function(req, res){
    //7
    res.send(`Hey!!! This is a test route!`);

});
//1         //2        //3
router.get(`/about`, function (req, res) {
    res.send(`This is an about route`)//4
});

//1 Pass in an object
router.get(`/contact`, function (req, res) {
    res.send({user: `Kenn`, email: `kenn@beastmode.com`});
});

//2 Paas in an array
router.get(`projects`, function (req, res) {
    res.send([`Project 1`, `Project 2`]);
});

//3 Pass in an array of objects
router.get(`/myCOntacts`, function (req, res) {
    res.send([
        {user: `quincy`, email: `kenn@beastmode.com`},
        {user: `aaron`, email: `aaron@beastmode.com`},
        {user: `quincy`, email: `quincy@beastmode.com`},
        {user: `tom`, email: `tom@beastmode.com`}
    ]);
});

//8*/


