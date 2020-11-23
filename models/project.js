const projects = [
    {id: 1, project: 'MineSweeper'},
];

function getAll() {
    return projects;
}
  function getOne(id) {
    id = parseInt(id);
    return projects.find(p => p.id === id);
  }
  
  module.exports = {
      getAll,
      getOne,
  };