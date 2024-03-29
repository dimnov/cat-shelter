const catTemp = (cat) => `
<li>
<img src=${cat.image}
  alt=${cat.name}>
<h3>${cat.name}</h3>
<p><span>Breed: </span>${cat.breed}</p>
<p><span>Description: </span>${cat.description}</p>
<ul class="buttons">
  <li class="btn edit"><a href="/cats/edit-cat/${cat.id}">Change Info</a></li>
  <li class="btn delete"><a href="/cats/delete-cat/${cat.id}">New Home</a></li>
</ul>
</li>
`;

module.exports = catTemp;