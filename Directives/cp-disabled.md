## Utilização

```js
capivara.component('simple-component', {
  template: `<button cp-disabled=""></button>`,
});
```

## Descrição

Quando ativada, a diretiva `cp-disabled` indica que o elemento está desativado, ou seja, o elemento não irá responder qualquer tipo de ação, seja por clique ou por entradas de teclado, e todos os comandos do seu escopo não serão executados até que o atributo seja desativado. Quando o elemento encontra-se desativado, sua cor torna-se ligeiramente mais cinza para que seja sinalizado.<br>
A ativação pode ser feita utilizando valores diretos do tipo `booleanos` ou também pode ser utilizada comparações aritméticas e lógicas.


## Exemplos

A chamada HTML de todos os componentes é feita da seguinte forma:

```HTML
<simple-component></simple-component>
```

Exemplo de utilização em um elemento `<button>` com valor direto.

```js
class simpleComponent {
  constructor() {
    this.isDisabled = true;
  }
}

capivara.component('simple-component', {
  template: `<button cp-disabled="$ctrl.isDisabled">Click me</button>`,
  controller: simpleComponent
});
```
Se quiser dar uma olhada, esse exemplo está no [JSFiddle](https://jsfiddle.net/zf8gqh0d/85/)

Exemplo de utilização em um elemento `<button>` com operação lógica.

```js
class simpleComponent {
  constructor() {
    this.person = {
        name: ''
    }
  }
}

capivara.component('simple-component', {
  template: `
    <input type="text" cp-model="$ctrl.person.name">
    <button cp-disabled="$ctrl.person.name.length > 5">
        Click me
    </button>`,
  controller: simpleComponent
});
```

Se quiser dar uma olhada, esse exemplo está no [JSFiddle](https://jsfiddle.net/zf8gqh0d/58/)