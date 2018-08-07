## Utilização
```js
capivara.component('simple-component', {
    template: `<h1 cp-show=""></h1>`
});
```
## Descrição

Podemos utilizar a diretiva `cp-show` para mostrar ou ocultar elementos de acordo com uma condição ou valores `booleanos`, nessa diretiva os elementos **não** são removidos do documento e construídos toda vez que a diretiva for chamada.


## Exemplos

```HTML
<simple-component></simple-component>
```

Exemplo de utilização de valor direto.

```js
class simpleComponent {
    constructor(){
        this.showText = false;
    }

    change() {
        this.showText = !this.showText;
    }
}

capivara.component('simple-component', {
  template: `
	<h1 cp-show="$ctrl.showText">A simple text</h1>
	<button cp-click="$ctrl.change()">Click me</button>
  `,
  controller: simpleComponent
});
```

Exemplo de utilização de operações lógicas.

```js
class simpleComponent {
    constructor(){
        this.firstValue = 10;
        this.secondValue = 20;
    }
}

capivara.component('simple-component', {
  template: `
	<h1 cp-show="$ctrl.firstValue <= $ctrl.secondValue">A simple text</h1>
  `,
  controller: simpleComponent
});
```