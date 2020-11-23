const Project = require('../models/project');

module.exports = {
    index,
    //show,
}

function index(req, res) {
    res.render('../views/projects/index', {
        projects: Project.getAll()
    });
}
// function show(req, res) {
//     const skill = Skill.getOne(req.params.id);
//     res.render('skills/show', { skill });
// }