const fs = require('fs/promises');

async function notFound(req, res) {
  // const homeView = await fs.readFile('./views/home/index.html', 'utf-8');
  // const catsHtml = cats.map(cat => catTemp(cat)).join('');
  // const homeHtml = homeView.replace('{{cats}}', catsHtml);

  res.writeHead(404, { 'Content-Type': 'text/html' });
  // res.write(homeHtml);
  res.end();
}

module.exports = { notFound };
