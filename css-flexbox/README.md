# DIO CSS flexbox - Profa. Karen Santos

* Fundamentos e aplicações da propriedade flexbox na criação de layouts responsivos, sem a necessidade da definição de valores fixos;

Construir páginas que vao se adaptar as mais variadas resoluções de tela sem precisar configurar/calcular cada valor para se adaptar;

## Aula 1- Introdução ao flexbox;

Flexbox foi projetado como um modelo de layout unidimensional e como um método que pode oferecer:

* Distribuição de espaço entre itens em uma interface e;

* Recursos de alinhamento.

### Estrutura básica: Diferença entre Flex container e Flex item
        
####  Flex container: 

Tag que envolve os itens, será nela que iremos aplicar a propriedade "display: flex". Transforma todos os seus filhos em flex itens;

Essa inicialização de container pode ser feita em qualquer tipo de tag: div, span, h1, h2,..., a, por exemplo; 
    
##### Algumas propriedades do flex container

* *display:* inicializa o container

* *flex-direction:* faz o direcionamento desses itens (seja em linha ou coluna)

* *flex-wrap:* quebra de linha ou não;

* *flex-flow:* abreviação para direction e wrap

* *justify-content:* alinha itens do container de acordo com a sua direção

* *align-items:* alinha os itens de acordo com o eixo do container

* *align-content:* alinha as linha desse container

#### Flex Item: 

São os elementos filhos (dependencias?) diretos do Flex Container. E também podem se tornar Flex Container.

Não é incomum que flex items também sejam containers, visto que um container pode ter filhos que podem ter filhos e esses tambem podem ter filhos.
        
##### Algumas propriedades do flex Item

* *flex-grow:* definir fator de crescimento;

* *flex-basis:* tamanho inicial antes da distribuição do espaço restante dentro do container;

* *flex-shrink:* definir a capacidade de redução;

* *flex:* abreviação para as três propriedades anteriores: grow, basis e shrink;

* *order:* relacionado a ordem de distribuição e o estágio desses itens; e

* *align-self:* definir o alinhamento de um item específico do nosso container.
