## Utilização
```js
capivara.component('simple-component', {
    template: `<h1 cp-init=""></h1>`
});
```
## Descrição

A diretiva `cp-init` permite a execução de uma função quando o elemento que carrega a diretiva for renderizado.

## Exemplos

```HTML
<simple-component></simple-component>
```

Exemplo de utilização da diretiva `cp-init`.

```js
class simpleComponent {
  initialization() {
    console.log('Hello World!');
  }
}

capivara.component('simple-component', {
  template: `<h1 cp-init="$ctrl.initialization()">Hello World</h1>`,
  controller: simpleComponent
});
```

Se quiser dar uma olhada, esse exemplo está no [JSFiddle](https://jsfiddle.net/zf8gqh0d/94/)
