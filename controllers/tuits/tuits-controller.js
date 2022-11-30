// import posts from "./tuits.js";
// let tuits = posts;

import * as tuitsDao from "./tuits-dao.js"; // import the dao

const createTuit = async(req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+''; // ID created by database instead
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.liked = false;
    newTuit.handle = "@nasa";
    newTuit.time= "Just now";
    newTuit.image= "nasa.jpeg";
    console.log(newTuit);
    // not using array anymore
// actual tuit inserted in database
// with DAO's createTuit
// respond with actual inserted tuit

    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);

    // res.json(newTuit);
}

const findTuits = async(req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}   // now it's asynchronous function
// retrieve tuits from database



const updateTuit = async(req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex(
    //     (t) => t._id === tuitdIdToUpdate)
    // tuits[tuitIndex] =
    //     {...tuits[tuitIndex], ...updates};
    // res.sendStatus(200);

    // status reports success or failure
// to update document in database

    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
                    updates);
    res.json(status);

}



const deleteTuit = async(req, res) => {
    const tuitdIdToDelete = req.params.tid;
    // status reports success or failure
// to delete record from database
// no longer using array

    const status = await tuitsDao
        .deleteTuit(tuitdIdToDelete);
    // tuits = tuits.filter((t) =>
    //                          t._id !== tuitdIdToDelete);
    // res.sendStatus(200);
    res.json(status);

}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}