## Utilização
```js
capivara.component('simple-component', {
    template: ` <input cp-model=""/>`,
});
```
## Descrição

A diretiva `cp-model` possibilita a interação do seu escopo com um elemento `<input>`, ou seja, todo valor digitado no elemento `<input>` será refletido na variável que o `cp-model` faz referência.

## Exemplos

```HTML
<simple-component></simple-component>
```

Exemplo de utilização do `cp-model`.

```js
class simpleComponent {
    constructor(){
        this.person = {
            name: ''
        }
    }
}

capivara.component('simple-component', {
  template: `
    <p>Choose a name</p>
	<input type="text" cp-model="$ctrl.person.name">
	<p> Your name: [[$ctrl.person.name]] </p>`,
  controller: simpleComponent
});
```
Se quiser dar uma olhada, esse exemplo está no [JSFiddle](https://jsfiddle.net/zf8gqh0d/109/)