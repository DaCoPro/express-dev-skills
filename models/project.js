const projects = [
    {id: 1, skill: 'CSS'},
    {id: 2, skill: 'HTML'},
    {id: 3, skill: 'JavaScript'},
    {id: 4, skill: 'Express'},
    {id: 5, skill: 'Node'},
    {id: 6, skill: 'Markdown'},
];

function getAll() {
    return projects;
}
//   function getOne(id) {
//     id = parseInt(id);
//     return skills.find(t => t.id === id);
//   }
  
  module.exports = {
      getAll,
      //getOne,
  };