export const btnArr = [
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
];

export const heroShoe = {
  id: "2d4313be-189e-491e-9dfa-4404693882f3",
  brand: "Jordan",
  colorway: "Sail/Obsidian-University Blue",
  gender: "men",
  name: "Obsidian UNC",
  releaseDate: "2019-08-31",
  retailPrice: 160,
  shoe: "Jordan 1 Retro High",
  styleId: "555088-140",
  title: "Jordan 1 Retro High Obsidian UNC",
  year: 2019,
  shoeSize: "43",
  amount: 1,
  media: {
    imageUrl:
      "https://images.stockx.com/images/Air-Jordan-1-Retro-High-UNC-Leather.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606322077",
    smallImageUrl:
      "https://images.stockx.com/images/Air-Jordan-1-Retro-High-UNC-Leather.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606322077",
    thumbUrl:
      "https://images.stockx.com/images/Air-Jordan-1-Retro-High-UNC-Leather.jpg?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606322077",
  },
};

export function fauxName(lower) {
  if (lower === "Material.004") {
    return "midSole";
  }
  if (lower === "Material.003") {
    return "outerSole";
  }
  if (lower === "Material.002") {
    return "laceEdge";
  }
  if (lower === "Material.012") {
    return "lace";
  }
  if (lower === "Material.022") {
    return "sockLining";
  }
  if (lower === "WHITE_LEATHER") {
    return "toeboxAndQuater";
  }
  if (lower === "WHITE_LEATHER2") {
    return "tounge";
  }
  if (lower === "Material.013") {
    return "sole";
  }
  if (lower === "Material.001") {
    return "vamp";
  }
  if (lower === "Material.011") {
    return "heelAndLowVamp";
  }
  if (lower === "Material.021") {
    return "toeAndSwoosh";
  }
  if (lower === "Material.005") {
    return "colar";
  }
}

export function spaceNames(params) {
  let arr = [];
  for (let i = 0; i < params?.length; i++) {
    const element = params[i];
    if (i === 0) {
      arr.push(element.toUpperCase());
    } else if (element.charCodeAt(0) < 97) {
      arr.push(` ${element.toLowerCase()}`);
    } else {
      arr.push(element);
    }
  }
  return arr.join("");
}

export const colorPallate = {
  current: null,
  items: {
    midSole: "red",
    outerSole: "wheat",
    sole: "#ffffff",
    colar: "red",
    sockLining: "black",
    lace: "blue",
    laceEdge: "#ffffff",
    tounge: "#ffffff",
    toeboxAndQuater: "#ffffff",
    vamp: "red",
    heelAndLowVamp: "red",
    toeAndSwoosh: "black",
  },
};
