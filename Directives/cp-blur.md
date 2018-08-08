## Utilização

```js
capivara.component('simple-component', {
    template: `<input type="text" cp-blur="">`,
});
```

## Descrição

A diretiva `cp-blur` é acionada para executar funções ou ações quando um determinado `input` perder o foco.

## Exemplo

A chamada HTML do componente é feita da seguinte forma:

```HTML
<simple-component></simple-component>
```

Exemplo de utilização do atributo `blur`.

```js
class simpleComponent {
  onBlur() {
    alert('Blur input.');
  }
}

capivara.component('simple-component', {
  template: `<input type="text" cp-blur="$ctrl.onBlur()"">`,
  controller: simpleComponent
});
```
Se quiser dar uma olhada, esse exemplo está no [JSFiddle](https://jsfiddle.net/zf8gqh0d/53/)
