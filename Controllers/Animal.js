const axios = require('axios').default;
const APIURL = 'http://127.0.0.1:3000/api';

module.exports.getAnimal = (req, res) => {
    var values = axios.get(APIURL);
    values.then((result) => {
        console.log(result);

        res.render('index', { model: result.data })
    }).catch((err) => {
        console.log(err);
    });

}


module.exports.PostAnimal = (req, res) => {

    axios.post(APIURL, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        createdAt: Date.now(),
        updatedAt: Date.now()
    })
        .then((response) => {
            console.log(response.status);
            return res.redirect('/');
        }).catch((err) => {
            console.log(err);
        });
}


module.exports.DeleteAnimal = (req, res) => {
    var deleteId = req.params.id;
    axios.delete(APIURL.concat(`/${deleteId}`));
    res.redirect('/')
}


module.exports.GetByAnimal = (req, res) => {
    const getById = req.params.id;
    var values = axios.get(APIURL.concat(`/${getById}`));

    values.then((result) => {

        console.log(result);
        res.render('update', { model: result.data[0] });
    }).catch((err) => {
        console.log(err);
    });
}


module.exports.PutAnimal = (req, res) => {
    const getById = req.params.id;
    axios.put(APIURL.concat(`/${getById}`), {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        updatedAt: Date.now()
    })
        .then((result) => {
            console.log(result.data);
            console.log(result.status);
            res.redirect('/');
        }).catch((err) => {
            console.log(err);
        });


}