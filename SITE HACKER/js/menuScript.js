async function init () {
  const node = document.querySelector("#type-text")
  
  await sleep(1000)
  node.innerText = ""
  
  
  while (true) {
    await node.type('Um simples website hacker!')
    await sleep(2000)
    await node.delete('Um simples website hacker!')
    await node.type('Aprenda conteúdos hackers!')
    await sleep(2000)
    await node.delete('Aprenda conteúdos hackers!')
  }
}


const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval () {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }
  
  async type (text) {
    for (let character of text) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }
  
  async delete (text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length -1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })


init()