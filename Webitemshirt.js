
class Webitemshirt {
  constructor(article,shirt) {
    this.name = shirt.name;
    this.type = shirt.type;
    this.size=shirt.size;
    this.color=shirt.color;
    article.append(`<div class="Termek">
  <p>${this.name}</p>
  <p>${this.type}</p>
  <p>${this.size}</p>
  <p>${this.color}</p>

  </div>
`
  )
  
}
}
export default Webitemshirt;
