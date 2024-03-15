const fs = require('fs/promises');
const path = require('path');

async function handleStaticFile(req, res) {
  // const homeViewCss = await fs.readFile('./content/styles/site.css');
  let filePath = '';

  if (req.url === '/content/styles/site.css') {
    filePath = './content/styles/site.css';
  } else if (req.url === '/content/images/pawprint.ico') {
    filePath = './content/images/pawprint.ico';
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }

  try {
    const fileData = await fs.readFile(filePath);
    const contentType = getContentType(filePath);

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(fileData);
  } catch (error) {
    console.error('Error serving static file:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
}

function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.css':
      return 'text/css';
    case '.ico':
      return 'image/x-icon';
    default:
      return 'text/plain';
  }
}



module.exports = { handleStaticFile };
