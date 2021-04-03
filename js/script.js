
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

  // COLORIAMO LE Icons
  const coloredIcons = colorIcons(icons,types,colors);
  console.log (coloredIcons);

  // 2. MOSTRIAMO GLI ELEMENTI NELLA PAGINA
  print(coloredIcons);

  // 3. AGGIUNGIAMO LE OPZIONI AL SELECT
  addOptions(types);

  // 4. LISTENER AL SELECT PER FILTRARE
  const select = $("#type");
  select.change(function(event){
    const currentType = $(this).val();

    if (types.includes(currentType)) {

    // filter array attivo
    const filteredIcons = filterArray(coloredIcons,currentType);
    console.log(filteredIcons);
    print(filteredIcons);
  } else {
    print(coloredIcons);
  }
  });
}


function print(array) {
  // MOSTRIAMO GLI ELEMENTI NELLA PAGINA
  const container = $(".icons");
  container.html("");
  array.forEach((item) => {
    const iconHtml = `
    <div>
    <i class="${item.family} ${item.prefix}${item.name}" style="color:${item.color}"></i>
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


function colorIcons(array,types,colors) {
  const newArray = array.map(item => {
    // preliamo tipologia
    const iconType = item.type;
    // preleviamo index
    const indexType = types.indexOf(iconType);
    // aggiungiamo color all'item in base all'indice
    const color = colors[indexType];
    item.color = color;
    return item;
  });
  return newArray;
}


function addOptions(types) {
  const select = $('#type');
  types.forEach(item => {
    const optionHtml = `
    <option value="${item}">${item}</option>
    `;
    select.append(optionHtml);
  });
}


function filterArray(array, key) {
  const filteredArray = array.filter(item =>{
    if(item.type == key) {
      return item;
    }
  });
  return filteredArray;
}



$(init);
