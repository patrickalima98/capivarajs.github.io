# Funções

O CapivaraJS já disponibiliza funções para facilitar o desenvolvimento de algumas validações necessárias. As seções abaixo mostram quem são elas e como elas devem ser utilizadas.

## isArray

Determina se uma instância é do tipo `Array`, para que isso ocorra basta chamar a função passando a instância por parâmetro. A função irá retornar um valor `booleano` da verificação.

```js
let person = [{ nome: 'João' }];
let result = capivara.isArray(person);

console.log(result);
```

## isObject

Determina se uma instância é do tipo `Object`, basta apenas chamar a função passando a instância por parâmetro. A função irá retornar um valor `booleano` da verificação.

```js
let person = { nome: 'Maria' };
let result = capivara.isObject(person);

console.log(result);
```

## isDate

Determina se uma instância é do tipo `Date`, basta apenas chamar a função passando a instância por parâmetro. A função irá retornar um valor `booleano` da verificação

```js
let person = {
    nome: 'Maria',
    aniversario: new Date('1996-11-13T23:00:00Z')
};
let result = capivara.isDate(person.aniversario);

console.log(result);
```

!> Observe que neste caso a instância `person` é um objeto, no entanto, passamos apenas variável que contém o tipo `Date` e não o objeto inteiro.

## isElement

Determina se uma instância é do tipo `NodeElement`, basta apenas chamar a função passando a instância por parâmetro. A função irá retornar um valor `booleano` da verificação.

```js
let result = capivara.isElement(document.body);
        
console.log(result);
```

## isFunction

Determina se uma instância é do tipo `Function`, basta apenas chamar a função passando a instância por parâmetro. A função irá retornar um valor `booleano` da verificação.

```js
let someFunction = function(){
    console.log('Hello World!')
};
let result = capivara.isFunction(someFunction);

console.log(result)
```

## isNumber

Determina se uma instância é do tipo `Number`, basta apenas chamar a função passando a instância por parâmetro. A função irá retornar um valor `booleano` da verificação.

```js
let value = 10;
let result = capivara.isNumber(value);

console.log(result);
```

## isString

Determina se uma instância é do tipo `String`, basta apenas chamar a função passando a instância por parâmetro. A função irá retornar um valor `booleano` da verificação.

```js
let name = 'CapivaraJS';
let result = capivara.isString(name);

console.log(result);
```

## Merge

É possível faz o merge de duas instâncias de tipo `Object` com o CapivaraJS, passe os objetos que serão mesclados por parâmetro. O resultado da função é `Object` que possui os dois objetos em um.

``` js
let firstObject = { 
    name: 'Maria'
};

let secondObject = {
    age: 25 
};

let result = capivara.merge(firstObject, secondObject);

console.log(result);
```

## Copy
Com essa função você pode fazer a cópia de um objeto para que seja criado uma nova referência. O retorno da função é do tipo `Object`, não existe problemas de perder a referência do primeiro objeto.

``` js
let person = {
    name: 'Maria'
};
let result = capivara.copy(person);

console.log(result);
```

## ReplaceAll
Essa função permite trocar uma substring por outra em todas as ocorrências do texto. O retorno da função é do tipo `String`, e são necessários passar o texto, a `substring` que será substituída e `substring` que substituirá.

```js
let str = 'Eu amo capivara. Capivara é demais.';
let result = capivara.replaceAll(str, 'capivara', 'CapivaraJS');

console.log(result);
```