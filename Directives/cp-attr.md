## Utilização

```js
capivara.component('simple-component', {
    template: '<img cp-attr.src="">'
});
```

## Descrição

A diretiva `cp-attr` é utilizada para modificação de diversos atributos, basta apenas concatenar o atributo que deseja ser modificado com o nome da diretiva, utilizando um ponto para ligar as duas, segue uma lista de atributos que podem ser modificados com essa diretiva.

| Atributos        | Descrição |
| -------------    | |
| cp-attr.max      | Define o valor máximo de um elemento `<input>` |
| cp-attr.min      | Define o valor mínimo de um elemento `<input>` |
| cp-attr.maxlength | Define o número máximo de caracteres permitidos em um elemento `<input>` |
| cp-attr.placeholder | Especifica uma frase curta que define o valor esperado em um elemento `<input>` |
| cp-attr.step | Determina um intervalo de avanço para um elemento `<input>` |
| cp-attr.src | Requer um URL de uma imagem em um elemento `<img>` |
| cp-attr.title | Especifica uma informação extra sobre um elemento `HTML` |
| cp-attr.alt | Determina um breve texto para um elemento `<img>`, quando a imagem não pode ser representada |
| cp-attr.id | Determina um identificador único a qualquer elemento `HTML` |
| cp-attr.href| Requer um URL de uma página web a onde o link gerado leva |

## Exemplos

A chamada HTML de todos os componentes é feita da seguinte forma:

```HTML
<simple-component></simple-component>
```

Exemplo de utilização do atributo `max`.

```js
class simpleComponent {
  constructor() {
    this.maxRange = 20;
  }
}

capivara.component('simple-component', {
  template: `
   <input type="range" cp-model="$ctrl.value" cp-attr.max="$ctrl.maxRange">
  `,
  controller: simpleComponent
});
```

Exemplo de utilização do atributo `placeholder`

```js
class simpleComponent {
  constructor() {
    this.placeHolder = 'Type some Text here...';
  }
}

capivara.component('simple-component', {
  template: `
   <input type="text" cp-attr.placeholder="$ctrl.placeHolder">
  `,
  controller: simpleComponent
});
```

Exemplo de utilização do atributo `title`

```js
class simpleComponent {
  constructor() {
    this.WHO = 'World Health Organization';
  }
}

capivara.component('simple-component', {
  template: `
    <p><abbr title="$ctrl.WHO">WHO</abbr> was founded in 1948.</p>
  `,
  controller: simpleComponent
});
```

