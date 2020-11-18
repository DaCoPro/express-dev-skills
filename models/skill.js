//Here's our data
const skills = [
  {id: 1, skill: 'CSS'},
  {id: 2, skill: 'HTML'},
  {id: 3, skill: 'JavaScript'},
  {id: 4, skill: 'Express'},
  {id: 5, skill: 'Node'},
  {id: 6, skill: 'Markdown'},
];

// our exported function that translates these values into the controller
function getAll() {
  return skills;
}









//This is what we send out to controller file
module.exports = {
    getAll
};