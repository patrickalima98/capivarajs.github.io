## Utilização

```js
capivara.component('simple-component', {
  template: ` <p cp-class="{className: }"></p>`,
});
```

## Descrição

Com a diretiva `cp-class` é possível modificar dinamicamente as classes dentro do seu componente, podem ser utilizadas operações aritméticas e lógicas para escolher classes, ou operações de negação. Para instanciar a classe basta apenas colocar no formato `{NomeClasse: Condição}`.<br>
A diretiva tem suporte para múltiplas classes, portanto, não é necessário utilizar uma diretiva para uma classe, basta apenas utilizar a vírgula para diferenciar uma classe de outra. Também não existem problemas em adicionar a diretiva `cp-class` em um elemento HTML que já possui uma `class` como atributo.

## Exemplos

A chamada HTML de todos os componentes é feita da seguinte forma:

```HTML
<simple-component></simple-component>
```

Exemplo de utilização com variável `bool`

```js
class simpleComponent {
  constructor() {
    this.visible = true;
  }
}

capivara.component('simple-component', {
  template: ` <p cp-class="{ 'myClass' : $ctrl.visible }">A Simple Example</p>`,
  controller: simpleComponent
});
```
Se quiser dar uma olhada, esse exemplo está no [JSFiddle](https://jsfiddle.net/zf8gqh0d/84/)

Exemplo de utilização com condicionais

```js
class simpleComponent {
  constructor() {
    this.firstValue = 10;
    this.secondValue = 90;
  }
}

capivara.component('simple-component', {
  template: ` 
        <p cp-class="{ 'myClass' : $ctrl.firstValue === $ctrl.secondValue }">
            A Simple Example
        </p>`,
  controller: simpleComponent
});
```
Se quiser dar uma olhada, esse exemplo está no [JSFiddle](https://jsfiddle.net/zf8gqh0d/83/)

Exemplo de utilização com condicionais e operações aritméticas

```js
class simpleComponent {
  constructor() {
    this.firstValue = 10;
    this.secondValue = 90;
  }
}

capivara.component('simple-component', {
  template: ` 
        <p cp-class="{ 'myClass' : $ctrl.firstValue + $ctrl.secondValue == 100 }">
            A Simple Example
        </p>`,
  controller: simpleComponent
});
```
Se quiser dar uma olhada, esse exemplo está no [JSFiddle](https://jsfiddle.net/zf8gqh0d/78/)