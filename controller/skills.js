const Skill = require('../models/skill');

module.exports = {
    index,
    show,
}

function index(req, res) {
    res.render('../views/skills/index', {
        skills: Skill.getAll()
    });
}
function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render(`skills/${skill.skill}`, { skill });
}