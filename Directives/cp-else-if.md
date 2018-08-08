## Utilização
```js
capivara.component('simple-component', {
    template: `
        <h1 cp-if=""></h1>
        <h1 cp-else-if=""></h1>`
});
```
## Descrição

O `cp-else-if` deve ser utilizado logo após a diretiva `cp-if`, ela é visível quando a condição do `cp-if` for falsa e sua condição for verdadeira. Podem ser utilizados vários `cp-else-if` em sequência, desde que a primeira chamada seja um `cp-if`, não é possível chamar a diretiva com condições vazias, portanto, junto a ela deve estar sempre atrelado um variável ou função.

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
}

capivara.component('simple-component', {
  template: `
	<h1 cp-if="$ctrl.showText">A simple text</h1>
    <h1 cp-else-if="!$ctrl.showText">Other simple text</h1>
  `,
  controller: simpleComponent
});
```
Se quiser dar uma olhada, esse exemplo está no [JSFiddle](https://jsfiddle.net/zf8gqh0d/108/)

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
	<h1 cp-if="$ctrl.firstValue > $ctrl.secondValue">A simple text</h1>
    <h1 cp-else-if="$ctrl.firstValue < $ctrl.secondValue">Other simple text</h1>
  `,
  controller: simpleComponent
});
```

Se quiser dar uma olhada, esse exemplo está no [JSFiddle](https://jsfiddle.net/zf8gqh0d/60/)