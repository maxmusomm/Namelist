const express = require('express');
const addUserController = require('../controllers/addUserController');
const router = express.Router();
const db = require('../db/queries');

router.get('/', async (req, res) => {
    const usernames = await db.getAllUsernames();
    const { search } = req.query;
    const searchUsernames = await db.dbSearchUsername(search);
    // const deleteUsernames = await db.dbDeleteUsernames();


    res.render('index', { usernames, /*deleteUsernames,*/ searchUsernames, search });
});

router.post('/', async (req, res) => {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
});


router.get('/delete', async (req, res) => {
    try {
        await db.dbDeleteUsernames();
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// router.get("/", async (req, res) => {
//     try {
//         await db.dbDeleteUsernames();
//         res.redirect("/");
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Server error');
//     }
// });

module.exports = router;