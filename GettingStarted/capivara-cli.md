# Capivara CLI

O CapivaraJS também fornece um [CLI](https://www.npmjs.com/package/capivara-cli) oficial para agilizar a criação de componentes, sem perder
tempo com configurações de cada componente que precisa ser criado. A criação da estrutura básica dos componentes leva apenas alguns minutos para ficar pronto. 

## NPM

Para a instalação do CLI, basta executar o comando a seguir.

``` bash
npm install -g capivara-cli
```
Recomendamos a instalação do `capivara-cli` globalmente, que ajuda a inicializar novos componentes.

## Novo Componente
Depois de tudo instalado, basta apenas executar o seguinte comando.

``` bash
capivara init my-component
```

## Execução do CLI

A etapa anterior pode levar alguns minutos, mas agora já está tudo pronto, agora basta apenas 
escrever seu código sem preocupações de arquitetura. O comando a seguir é utilizado para executar o
seu componente.

``` bash
cd cp-my-component
npm run dev
```

!> O CLI vai gerar todos os componentes com o prefixo **cp**
antes do nome do componente, apenas para um questão de ajuda na organização.
