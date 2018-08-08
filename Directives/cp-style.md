## Utilização
```js
capivara.component('simple-component', {
    template: `<h1 cp-style="{CSSAttribute: }"></h1>`
});
```
## Descrição

Podemos utilizar a diretiva `cp-style` para modificar dinamicamente o `style` do seu componente, eles podem ser ativados ou desativados, através de variáveis `booleanas`, condicionais e até utilizando outras diretivas em conjunto, como `cp-click` e `cp-mouse`, ou `<input>` de texto.<br>
A diretiva possui superte a múltiplos atributos, basta apenas utilizar vírgula para separá-los.

## Exemplos

```HTML
<simple-component></simple-component>
```

Exemplo de utilização com valor direto.

```js
class simpleComponent {
  constructor() {
    this.color = 'blue';
  }
}

capivara.component('simple-component', {
  template: `
   <p cp-style="{background: $ctrl.color}">Example</p>
  `,
  controller: simpleComponent
});
```
Se quiser dar uma olhada, esse exemplo está no [JSFiddle](https://jsfiddle.net/zf8gqh0d/110/)

Exemplo de utilização com comparação.

```js
class simpleComponent {
  constructor() {
    this.firstValue = 50;
    this.secondValue = 80;
  }
}

capivara.component('simple-component', {
  template: `
   <h1 cp-style="{color: $ctrl.firstValue == 70 ? 'red' : 'green'}"> 
     [[ $ctrl.firstValue + $ctrl.secondValue ]] 
   </h1>
  `,
  controller: simpleComponent
});
```
Se quiser dar uma olhada, esse exemplo está no [JSFiddle](https://jsfiddle.net/zf8gqh0d/74/)