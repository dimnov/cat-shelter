const fs = require('fs/promises');
const { cats } = require('../data/cats.json');
const catTemp = require('../templates/catTemplate.js');

async function handleHome(req, res) {
  const homeView = await fs.readFile('./views/home/index.html', 'utf-8');
  const catsHtml = cats.map(cat => catTemp(cat)).join('');
  const homeHtml = homeView.replace('{{cats}}', catsHtml);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(homeHtml);
  res.end();
}

module.exports = { handleHome };
