const fs = require('fs/promises');
const formidable = require('formidable');
const { cats } = require('../data/cats.json');
const { breeds } = require('../data/breeds.json');
const breedTemp = require('../templates/breedTemplate.js');
const editCatTemp = require('../templates/editCatTemplate.js');

async function handleEditCat(req, res, catId) {
  const editCatView = await fs.readFile('./views/editCat.html', 'utf-8');
  const editCatsHtml = cats.map(cat => String(cat.id) === String(catId) ? editCatTemp(cat) : null).join('');
  const editCatHtml = editCatView.replace('{{editCat}}', editCatsHtml);

  const breedsHtml = breeds.map(breed => breedTemp(breed));
  const editCatsHtmlFinal = editCatHtml.replace('{{breeds}}', breedsHtml);

  if (req.method === 'POST') {
    handleEditCatForm(req, res);
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(editCatsHtmlFinal);
  res.end();
}

async function handleEditCatForm(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields) => {
    const catForm = fields;
    console.log(catForm)
    res.writeHead(302, {
      'Location': '/add-breed'
    });
    res.end();
  });
}

module.exports = { handleEditCat };
