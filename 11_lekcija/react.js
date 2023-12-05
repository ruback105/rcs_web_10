async function getRandomBeer() {
  const apiKey = "https://api.punkapi.com/v2/beers/random";

  return fetch(apiKey)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data[0];
    });
}

const root = document.getElementById("root");

class BeerCard {
  constructor(src, title, description) {
    this.src = src;
    this.title = title;
    this.description = description;

    this.init();
  }

  init() {
    // Create card wrapper element
    const beerCard = new BaseElement({
      tagName: "div",
      className: "beer-card",
    });
    beerCard.appendTo(root);

    // Create card image element
    const image = new Image({
      src: this.src || "not found",
      alt: this.src ? "Beer image" : "Beer image not found",
    });
    image.appendTo(beerCard.htmlElement);

    // Create card title element
    const h3 = new BaseElement({
      tagName: "h3",
      text: this.title,
    });
    h3.appendTo(beerCard.htmlElement);

    // Create card description element
    const p = new BaseElement({
      tagName: "p",
      text: this.description,
    });
    p.appendTo(beerCard.htmlElement);
  }
}

class BaseElement {
  constructor(options) {
    const { tagName, id, className, text } = options;

    this.tagName = tagName;
    this.id = id;
    this.className = className;
    this.text = text;
    this.htmlElement = undefined;

    this.createElement();
  }

  createElement() {
    this.htmlElement = document.createElement(this.tagName);

    if (this.id) {
      this.htmlElement.id = this.id;
    }

    if (this.className) {
      this.htmlElement.classList.add(this.className);
    }

    if (this.text) {
      this.htmlElement.textContent = this.text;
    }
  }

  appendTo(to) {
    to.appendChild(this.htmlElement);
  }
}

class Image extends BaseElement {
  constructor(options) {
    super({ ...options, tagName: "img" });

    const { src, alt, text } = options;

    if (text) {
      throw new Error("text property is not allowed in Image class");
    }

    if (!src || !alt) {
      throw new Error("src and alt are required in Image class");
    }

    this.src = src;
    this.alt = alt;

    this.setAttributes();
  }

  setAttributes() {
    this.htmlElement.src = this.src;
    this.htmlElement.alt = this.alt;
  }
}

const addButton = document.querySelector("button[type='button']");
addButton.addEventListener("click", async () => {
  const beerData = await getRandomBeer();
  new BeerCard(beerData.image_url, beerData.name, beerData.description);
});
