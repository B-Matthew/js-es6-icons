
function getIconsDb() {
  return [
    {
      name: "cat",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "crow",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dog",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dove",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dragon",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "horse",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "hippo",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "fish",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "carrot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "apple-alt",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "lemon",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "pepper-hot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "user-astronaut",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-graduate",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-ninja",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-secret",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
  ];
}

function getColors() {
  return ["blue","orange", "purple"];
}

function init() {
  // 0. Preleviamo i dati
  const icons = getIconsDb();
  const colors = getColors();
  const types = getTypes(icons);
  console.log(types);

  console.log(colors);
  // 1. MOSTRIAMO GLI ELEMENTI NELLA PAGINA
  print(icons);
}

function print(array) {
  // MOSTRIAMO GLI ELEMENTI NELLA PAGINA
  const container = $(".icons");
  array.forEach((item) => {
    const iconHtml = `
    <div>
    <i class="${item.family} ${item.prefix}${item.name}" style="color:blue"></i>
    <div class="title">${item.name.toUpperCase()}</div>
    </div>
    `;
    container.append(iconHtml);
  });
}

function getTypes(array) {

  const types =[];
  array.forEach((item) => {
    if(!types.includes(item.type)) {
    types.push(item.type);
  }
  });
  return types;
}

$(init);
