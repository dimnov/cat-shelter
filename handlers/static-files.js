const fs = require('fs/promises');

async function handleCss(req, res) {
  const homeViewCss = await fs.readFile('./content/styles/site.css');

  res.writeHead(200, {
    'Content-Type': 'text/css'
  });
  res.write(homeViewCss);
  res.end();
}

async function handleIcon(req, res) {
  const image = await fs.readFile('./content/images/pawprint.ico');

  res.writeHead(200, {
    'Content-Type': 'image'
  });
  res.write(image);
  res.end();
}


module.exports = { handleCss, handleIcon };
