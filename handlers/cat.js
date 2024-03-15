const fs = require('fs/promises');
const formidable = require('formidable');
const uniqid = require('uniqid');
const { breeds } = require('../data/breeds.json');
const { cats } = require('../data/cats.json');
const breedTemp = require('../templates/breedTemplate.js');

async function handleAddBreed(req, res) {
  const addBreedView = await fs.readFile('./views/addBreed.html');

  if (req.method === 'POST') {
    handleBreedForm(req, res);
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(addBreedView);
  res.end();
}

async function handleAddCat(req, res) {
  const addCatView = await fs.readFile('./views/addCat.html', 'utf-8');
  const breedsHtml = breeds.map(breed => breedTemp(breed));
  const addCatHtml = addCatView.replace('{{breeds}}', breedsHtml);

  if (req.method === 'POST') {
    handleCatForm(req, res);
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(addCatHtml);
  res.end();
}

async function handleBreedForm(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields) => {
    const breedName = fields.breed[0];

    breeds.push({ name: breedName });

    res.writeHead(302, {
      'Location': '/add-breed'
    });
    res.end();
  });
}

async function handleCatForm(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields) => {
    const catForm = {
      id: uniqid(),
      name: fields.name[0],
      description: fields.description[0],
      image: fields.image[0],
      breed: fields.breed[0],
    };

    cats.push(catForm);
    res.writeHead(302, {
      'Location': '/add-cats'
    });
    res.end();
  });
}

module.exports = { handleAddBreed, handleAddCat };
