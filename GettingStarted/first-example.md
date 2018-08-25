# Exemplos Básicos

## Criação dos Componentes

Vamos aprender alguns exemplos básicos de como criar e configurar seus primeiros componentes
para que isso te ajude lá na frente, para simplificar algumas coisas, vamos criar pequenos componentes da forma mais simples mesmo, sem a utilização do CLI.

```js
class FirstExample{
  constructor(){
    console.log("Olá Mundo");
   }
}
capivara.component('simple-component', {
  template: `<p>Olá Mundo!</p>`,
  controller: FirstExample,
});
```

Vamos observar alguns pontos importantes dentro desse código em `JavaScript`:

* `simple-component`: Tag HTML que chamará o componente que acabou de ser criado.
* `template`: Aqui dentro estará todo código HTML que seu componente possui.
* `controller`: É o responsável por chamar todas as variáveis e funções existentes na `classe`.

Questões mais aprofundadas sobre cada elemento dentro do `capivara-component` podem ser encontrados
aqui.


```html
<body>
  <simple-component></simple-component>
</body>
```

!> É importante ressaltar que não precisamos fazer qualquer chamada ou construção do componente,
apenas lembre de adicionar um `script` que chama o arquivo que possui o código `JavaScript` escrito
acima.

## Utilizando Variáveis

Claro que o código da seção anterior não faz absolutamente nada de legal, mas com certeza podemos melhora-lo, vamos criar variáveis para serem exibidas na página web ao invés de apenas utilizar textos estáticos.


```js
class SecondExample{
  constructor(){
    this.text = 'Olá Mundo!';
   }
}
capivara.component('simple-component', {
  template: `<p>[[$ctrl.text]]</p>`,
  controller: SecondExample,
});
```

Alguns pontos que podemos ressaltar nesse código:

* `Variáveis`: Toda vez que formos utilizar variáveis para serem impressas no código HTML, elas 
devem estar na seguinte formatação `[[variável]]`.
* `$ctrl`: Assim como podemos utilizar o parâmetro `this` para referenciar variáveis de uma classe, 
dentro dos componentes do CapivaraJS, as variáveis devem **sempre** conter o prefixo `$ctrl.variavel`.

!> Vale lembrar que o código HTML fica exatamente o mesmo do exemplo anterior.

## Utilizando Condicionais

Neste exemplo iremos utilizar condicionais para mostrar texto dentro do HTML de forma dinâmica, alguns pontos serão destacados, mas um aprofundamento sobre todas as diretivas que o CapivaraJS tem suporte pode ser visualizado aqui.

```js
class ThirdExample{
  constructor(){
    this.text = 'Você está me vendo';
    this.otherTexto = "Você não está me vendo"
    this.isVisible = false;
   }

   this.Visibility = function(){
     this.isVisible = !this.isVisible;
   }
}
capivara.component('simple-component', {
  template: `
    <p cp-if="$ctrl.isVisible">[[$ctrl.text]]</p>
    <p cp-else>[[$ctrl.otherText]]</p>
    <button cp-click="$ctrl.Visibility()">Click!</button>
    `,
  controller: ThirdExample,
});
```
O que podemos observar com este exemplo:

* `cp-if` e `cp-else`: São condicionais como em qualquer linguagem de programação, através dessas diretivas podemos criar formas dinâmicas de apresentar código HTML.
* `cp-click`: Sempre utilizado quando se quer disparar eventos utilizando mouse.
* `$ctrl.Visibility()`: Tome cuidado quando for utilizar funções em diretivas, se elas não possuírem `()` o CapivaraJS entenderá como uma variável.


!> Vale lembrar que o código HTML fica exatamente o mesmo do exemplo anterior.

Esperamos que isso tenha dado uma pequena ideia de como o **CapivaraJS** funciona, e se você chegou até aqui, espero que tenha gostado. Nós ficamos muito felizes com isso.
