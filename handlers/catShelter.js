const fs = require('fs/promises');
// const { cats } = require('../data/cats.json');
// const catTemp = require('../templates/catTemplate.js');

async function handleCatShelter(req, res) {
  const homeView = await fs.readFile('./views/catShelter.html', 'utf-8');
  // const catsHtml = cats.map(cat => catTemp(cat)).join('');
  // const homeHtml = homeView.replace('{{cats}}', catsHtml);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(homeView);
  res.end();
}

module.exports = { handleCatShelter };
