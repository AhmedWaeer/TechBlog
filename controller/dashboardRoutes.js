/* eslint-disable prettier/prettier */
const router = require('express').Router();
const { Post } = require('../models');


router.get('/edit/:id', async(req, res) => {
    try {
        if (req.session.loggedIn && req.session.user) {
            const requiredPost = await Post.find({ _id: req.params.id }).lean();
            const post = requiredPost[0];
            res.render('Edit-post', { post, layout: 'Dashboard' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/new', async(req, res) => {

    res.render('new-post', { layout: 'Dashboard' });

});



router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
