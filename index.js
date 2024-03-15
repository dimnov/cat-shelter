const http = require('http');
const { handleHome } = require('./handlers/home');
const { notFound } = require('./handlers/not-found');
const { handleAddBreed, handleAddCat } = require('./handlers/cat');
const { handleStaticFile } = require('./handlers/static-files');
const { handleEditCat } = require('./handlers/editCat');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    handleHome(req, res);
  } else if (url === '/cats/add-breed') {
    handleAddBreed(req, res);
  } else if (url === '/cats/add-cat') {
    handleAddCat(req, res);
  } else if (url.startsWith('/cats/edit-cat/')) {
    const catId = url.substring('/cats/edit-cat/'.length);
    handleEditCat(req, res, catId);
  } else if (url.startsWith('/content/')) {
    handleStaticFile(req, res);
  } else {
    notFound(req, res);
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`This server is running on port ${port}.`);
});
