const fs = require('fs/promises');

async function handleAddBreed(req, res) {
  const addBreedView = await fs.readFile('./views/addBreed.html');

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(addBreedView);
  res.end();
}

async function handleAddCat(req, res) {
  const addCatView = await fs.readFile('./views/addCat.html');

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(addCatView);
  res.end();
}

module.exports = { handleAddBreed, handleAddCat };
