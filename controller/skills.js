//pull in the skills data
const Skill = require('../models/skill');

//This is the information we're pushing out to be used by routes
module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo
}

//delete function
function deleteTodo(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

//This is the function that adds form contents to the list
function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

//create new todo function
function newTodo(req, res) {
    //renders the new skill page when link clicked
    res.render('skills/new');
}

//function that will return ALL items in skills
function index(req, res) {
    res.render('../views/skills/index', {
        skills: Skill.getAll()
    });
}
//function that will return a single item
function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}