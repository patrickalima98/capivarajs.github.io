O CapivaraJS possui funções que trabalham com o ciclo de vida de uma página `HTML`, essas funções podem detectar o estado atual de cada componente e ações que devem ser tomadas quando determinados eventos acontecem.

## $onInit

Esse é o estado que será executado apenas quando o controlador do componente for criado, não é possível executar essa ação mais de uma vez com o mesmo componente.

```js
class simpleComponent{
    $onInit(){
    	console.log('Controller started!');
    }
}

capivara.component('simple-component', { 
    template: '<h1>Hello</h1>',
    controller: simpleComponent
});
```

## $onViewInit
Ações definidas no escopo do `onViewInit` serão executados quando o componente for renderizado na tela, na maioria dos casos, existe uma diferença de tempo de execução das funções do `onViewInit`, visto que os componentes levam um certo tempo para serem visíveis.

```js
class simpleComponent{
    $onInit(){
    	console.log('Rendered view!');
    }
}

capivara.component('simple-component', { 
    template: '<h1>Hello</h1>',
    controller: simpleComponent
});
```

## $onChanges

A função `$onChanges` será executada quando for identificado alguma mudança de valores no componente que a mesmas instância. Também é possível detectar quais foram as mudanças executadas.

```js
class simpleComponent{
    $onChanges(changes){
    	console.log('Changes Detected: ', changes);
    }
}

capivara.component('simple-component', { 
    template: '<h1>Hello</h1>',
    controller: simpleComponent
});
```

## $destroy

A função é encarregada de executar todas as ações de seu escopo assim que o componente for destruído.

```js
class simpleComponent{
    $destroy(){
    	console.log('Component destroyed');
    }
}

capivara.component('simple-component', { 
    template: '<h1>Hello</h1>',
    controller: simpleComponent
});
```

!> É importante ressaltar que essas funções precisam acompanhar o prefixo **$** antes de seus nomes, para que o CapivaraJS possa identificar que são funções especiais.