# Repositório para o curso Construindo Páginas Web com Bootstrap da DIO

## Utilizando Bootstrap na sua página
  * head:    
    * Título da página, que vai aparecer na guia do navegador: <title> título </title>
    * Link para o arquivo com os estilos do bootstrap:
    * Link para a folha de estilos do CSS:
    
  * body
    * Navbar: barra de navegação
    * Sections: seções que estão na barra de navegação
      * Containers: em containers podemos dividir a tela em linhas e colunas, e especificar em quantas partes uma coluna será dividida, são 12 as divisões, então se quelo posicionar 3 containers, devemos usar um fator 4; se quisermos 4 containers, então usamos um fator 3;
      
      ```
      <div class="container"> 
            <div class="row"> 
              <div class="col-lg-3"> 
              <p> SEU CONTEÚDO AQUI, pode ser parágrafo, imagens, links, subtítulos... </p> 
              </div>
           </div>
        </div>
      ```

      * Classes: serão definidas na stylesheet em CSS ou do arquivo do Bootstrap em uso, facilita na hora de estilizar, pois só chamando a classe tudo fica com o mesmo estilo;
      
      ``` <a class=" classe1 classe2 classe3">```

      * Imagens: 
      
      ```<img src="endereço/nomearquivo.formato" width="100%">```
      
      * paragrafos: 
      
      ```<p class="aqui separadamente você chama as suas classes do bootstrap ou da stylesheet">seu parágrafo aqui bem bonito</p>```
      
      * Responsividade: os containers automaticamente se rearranjar dependendo do tamanho da tela;
    
    *Footer: rodapé, créditos; 

## Resultado:

<img src="../master/img/maismulherTI.gif" width="800" height="500">
