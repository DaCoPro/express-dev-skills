//pull in the skills data
const Skill = require('../models/skill');

//function that will return ALL items in skills

function index(req, res) {
    res.render('../views/skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}











//This is the information we're pushing out to be used by routes
module.exports = {
    index,
    show,
}