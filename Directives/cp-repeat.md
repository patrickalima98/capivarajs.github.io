## Utilização
```js
capivara.component('simple-component', {
    template: `<li cp-repeat=""></li>`,
});
```
## Descrição

Podemos usar a diretiva `cp-repeat` para renderizar uma lista de itens. A diretiva `cp-repeat` requer uma sintaxe especial na forma de `item em itens`, em que `itens` é a lista que contém os dados de origem e `item` é um **alias** para o elemento da lista que está sendo iterado.

## Exemplos

```HTML
<simple-component></simple-component>
```

Exemplo de utilização do `cp-repeat`.

```js
class simpleComponent {
  constructor() {
    this.persons = [
      {name: 'João'},
      {name: 'Maria'},
      {name: 'Bob'},
      {name: 'Carlos'},
    ];
  }
}

capivara.component('simple-component', {
  template: `
   <ul>
     <li cp-repeat="person in $ctrl.persons">
      [[persons.name]]
     </li>
   </ul>
  `,
  controller: simpleComponent
});
```