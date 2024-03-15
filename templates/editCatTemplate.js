const editCatTemp = (cat) => `
<h2>Edit Cat</h2>
<label for="name">Name</label>
<input type="text" id="name" value="${cat.name}">
<label for="description">Description</label>
<textarea id="description">${cat.description}</textarea>
<label for="image">Image</label>
<input type="text" id="name" value="${cat.image}">
<label for="group">Breed</label>

`;

module.exports = editCatTemp;