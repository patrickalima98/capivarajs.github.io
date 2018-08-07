# Instalação

Para instalar o CapivaraJS é muito simples, pode ser feito utilizando **NPM**. O comando a seguir
instala a versão mais recente.

```bash
npm install --save capivarajs
```

O parâmetro `--save` é totalmente opcional, ele é utilizado apenas para que você veja todas as 
dependências que o CapivaraJS utiliza.

## Importando no Projeto

Depois de instalado é necessário importar o CapivaraJS no seu projeto.

#### HTML

Caso você queira importar utilizado HTML, pode ser feito da seguinte forma.

```html
<script src="node_modules/capivarajs/dist/capivara.min.js"></script> 
```

#### Webpack

Se estiver utilizando Webpack para importar o CapivaraJS o comando é o seguinte.

```js
 import capivara from 'capivarajs';
```

!> Caso você queira ver exemplos do CapivaraJS clique [aqui](/GettingStarted/first-example), no entanto, se você quer aprender a criar novos componentes utilizando CapivaraJS clique [aqui](/GettingStarted/Components).