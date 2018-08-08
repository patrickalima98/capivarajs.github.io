## Utilização

```js
capivara.component('simple-component', {
  template: `<button cp-dblclick=""></button>`,
});
```

## Descrição

A diretiva `cp-dblclick` faz com que seja possível executar funções do seu escopo através do disparo de eventos de clique duplo em locais específicos da sua página `HTML`, usualmente utilizando o botão primário do mouse.

## Exemplos

A chamada HTML de todos os componentes é feita da seguinte forma:

```HTML
<simple-component></simple-component>
```

Exemplo de utilização em um elemento `<button>`

```js
class simpleComponent {
  dblclickFunction() {
    alert('Double Click Fired');
  }
}

capivara.component('simple-component', {
  template: `<button cp-dblclick="$ctrl.dblclickFunction()">Double Click me</button>`,
  controller: simpleComponent
});
```
Se quiser dar uma olhada, esse exemplo está no [JSFiddle](https://jsfiddle.net/zf8gqh0d/106/)

Exemplo de utilização da mesma função em mais de um elemento

```js
class simpleComponent {
  dblclickFunction() {
    alert('Double Click Fired');
  }
}

capivara.component('simple-component', {
  template: `
    <button cp-dblclick="$ctrl.dblclickFunction()">
        Double Click me
    </button>
    <p>Some random Text</p>
    <button cp-dblclick="$ctrl.dblclickFunction()">
        Double Click me Too
    </button>
    `,
  controller: simpleComponent
});
```
Se quiser dar uma olhada, esse exemplo está no [JSFiddle](https://jsfiddle.net/zf8gqh0d/57/)
