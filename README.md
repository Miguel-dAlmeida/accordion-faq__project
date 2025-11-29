# Accordion FAQ | Exercício DevQuest

## **Sumário**

- [Visualização do Projeto](#visualização-do-projeto)
- [Apresentação](#apresentação)
- [Explicação do Projeto](#explicação-do-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Utilizar o Código do Projeto](#como-utilizar-o-código-do-projeto)
- [Ferramentas e Tecnologias Utilizadas](#ferramentas-e-tecnologias-utilizadas)
- [Principais Recursos e Abordagens](#principais-recursos-e-abordagens)
- [Desafios Enfrentados](#desafios-enfrentados)
- [Aprendizado Adquirido](#aprendizado-adquirido)
- [Desenvolvimento Contínuo e Autossuperação](#desenvolvimento-contínuo-e-autossuperação)
- [Agradecimentos e Conclusão](#agradecimentos-e-conclusão)
- [Contato](#contato)
- [Licença de Uso](#licença-de-uso)

## **Visualização do projeto**

### **🖥️ Desktop**

<div align="center">
  <img src="https://raw.githubusercontent.com/Miguel-dAlmeida/accordion-faq__project/main/src/images/gif_desktopPreview.gif" alt="Gif do resultado final da página">
</div>

### **📱 Mobile**

<div align="center">
  <img src="https://raw.githubusercontent.com/Miguel-dAlmeida/accordion-faq__project/main/src/images/gif_mobilePreview.gif" alt="Gif do resultado final da página">
</div>

### [Acesse a página clicando aqui!](https://miguel-dalmeida.github.io/accordion-faq__project/) 

## **Apresentação**

Olá! Meu nome é Mário Miguel e sou estudante de Desenvolvimento Web. Atualmente, sou aluno do curso **DevQuest**, da plataforma *Dev em Dobro*, focado na formação de desenvolvedores Fullstack.

Como parte da minha jornada de aprendizado, recriei o desafio **Accordion FAQ**. Esse projeto integra o módulo [**Exercícios JS Intermediário**](https://gigantic-chef-a6f.notion.site/Exerc-cios-JavaScript-Intermedi-rio-222cd10b93ab80e088c8c9613499c79d?source=copy_link) do curso *DevQuest* e figura como o sexto e último desafio dessa etapa.

## **Explicação do Projeto**

Este projeto consiste num FAQ com efeito de acordeão, pensado para ser simples, direto e funcional. A proposta é simular uma seção de perguntas e respostas bastante comum em sites modernos, utilizando uma paleta de cores neutra que ajuda a destacar o conteúdo.

A interação é intuitiva: ao clicar em uma pergunta, a resposta correspondente aparece, enquanto as demais se fecham automaticamente. Isso garante uma navegação mais limpa e organizada para o usuário.

Apesar da simplicidade, a construção desse FAQ serve como um ótimo exercício prático. Ele reforça conceitos importantes de HTML, CSS e JavaScript, além de reproduzir um recurso que é amplamente utilizado em projetos reais de desenvolvimento web.

## **Estrutura do Projeto**

```plaintext
├── src/
│   ├── css/
│   │   ├── reset.css
│   │   ├── responsive.css
│   │   ├── style.css
│   ├── js/
│   │   ├── index.js
│   ├── images/
│   │   ├── ...
├── index.html
├── README.md
```

## **Como Utilizar o Código do Projeto**

**Para rodar este projeto em sua máquina local, siga os passos abaixo:**

### 1️⃣ Crie um diretório para o projeto  
Escolha um local no seu computador e crie uma pasta para armazenar os arquivos do projeto.

### 2️⃣ Acesse o terminal  
Clique com o botão direito sobre a pasta criada e selecione a opção para abrir o terminal.  

### 3️⃣ Clone o repositório  
No terminal, execute o seguinte comando para clonar o repositório:  
```sh
git clone https://github.com/Miguel-dAlmeida/accordion-faq__project.git
```
### 4️⃣ Acesse o diretório do projeto
Após a clonagem, entre na pasta do projeto executando o comando abaixo em seu terminal:

```sh
cd accordion-faq__project
```

### 5️⃣ Abra o projeto no editor de código
Ainda no terminal, caso esteja utilizando o VS Code, basta rodar o comando:

```sh
code .
```
Se estiver utilizando outro editor, abra a pasta `accordion-faq__project` manualmente no programa de sua escolha.

**Pronto! Agora você pode explorar e editar o código do projeto.** 

## **Ferramentas e Tecnologias Utilizadas**

<div style="display: inline_block" align="center"><br>
  <img align="center" alt="HTML" height="60" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="60" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="CSS" height="55" width="65" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg">
  <img align="center" alt="Markdown" height="80" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg"/>
</div>

## **Principais Recursos e Abordagens**

*Este projeto foi desenvolvido considerando boas práticas em front-end, com foco em acessibilidade, estrutura semântica, responsividade, interatividade, escalabilidade e desempenho. **A seguir, compartilho um resumo dos principais recursos e estratégias adotadas:***

### HTML

- **Tags Semânticas:**  
  A estrutura do projeto foi cuidadosamente montada com tags semânticas como `<main>`, `<section>`, `<article>` e `<footer>`. Essa escolha não apenas organiza e torna o código mais legível, mas também melhora a acessibilidade e a indexação pelo SEO.

- **Atributos Avançados:**  
  Utilizei atributos HTML para aprimorar a acessibilidade do site, como o `aria-hidden`, e também para estruturar melhor a lógica em JavaScript, com o uso dos atributos `id` e `data-target`.

### CSS

- **CSS Flexbox:** O Flexbox foi utilizado como principal mecanismo de layout, permitindo alinhar e distribuir os elementos da página de forma eficiente e responsiva.

- **Prefixos `-webkit-`, `-ms-` e `-o-`:** Inclusão de prefixos em propriedades CSS para garantir compatibilidade com versões antigas de navegadores.  
***Nota:** Utilizei o site [Autoprefixer CSS online](https://autoprefixer.github.io/) para incluir os prefixos automaticamente.*

- **Favicon Personalizado:**  
  Utilizei um favicon para reforçar a identidade visual da aplicação.

- **Reset CSS:**  
  Utilizei um arquivo de reset para eliminar inconsistências entre navegadores, criando uma base uniforme para os estilos aplicados.

- **Uso Estratégico de REM:**  
  Utilizei a estratégia `html { font-size: 62.5%; }` em conjunto da unidade de medida `rem` para definir o tamanho e a dimensão dos elementos, garantindo escalabilidade ao aumentar ou diminuir a tela.

- **CSS Nesting:**  
  A técnica de CSS Nesting foi empregada para estruturar os estilos de forma hierárquica, o que minimiza a repetição de regras e torna o código mais legível e organizado, criando uma estrutura semelhante à encontrada no código HTML.

- **Nomenclatura de Classes com BEM (Block, Element, Modifier):**  
  Todas as classes seguem a metodologia BEM, o que proporciona clareza, modularidade e escalabilidade ao CSS. Essa padronização também facilita a manutenção e me prepara tanto para, futuramente, trabalhar em equipe, quanto para projetos mais complexos.

- **Abordagem Desktop First:**  
  Iniciei o desenvolvimento com foco em telas desktops e fui adaptando progressivamente para dispositivos mobile, como tablets e celulares.

- **Media Queries:**  
  O uso de media queries permitiu ajustar o layout conforme o tamanho da tela, garantindo uma experiência consistente em todos os dispositivos.

- **Posicionamento Avançado:**  
  Utilizando os valores `relative` e `absolute` da propriedade `position`, pude criar contextos de empilhamento e controlar sobreposições, replicando fielmente o design.

- **Dinamismo entre CSS e JS**:  
  A lógica do acordeão foi construída a partir da classe `.active`, adicionada e removida via JavaScript. Essa classe funciona como um gatilho para o CSS, permitindo modificar propriedades como `max-height` e `display` apenas quando o(s) elemento(s) está ativo. Essa integração entre HTML, CSS e JS garante a transição da abertura e fechamento dos conteúdos, resultando na interação simples que o desafio estipula.

### JavaScript

* **Seleção de Elementos com `querySelectorAll()`:**
  A lógica começa com a seleção dos cabeçalhos do acordeão por meio de `document.querySelectorAll()`. Isso possibilitou capturar todos os elementos com a mesma classe e prepará-los para manipulação.

* **Iteração com `forEach()` (uso passivo):**
  O primeiro uso de `forEach()` serviu para percorrer esses elementos e adicionar ouvintes de eventos a cada um deles. Chamo esse passo de “passivo” porque aqui apenas configuramos a reação ao clique, mas nenhuma alteração é feita de imediato.

* **Eventos de Clique com `addEventListener()`:**
  Cada cabeçalho recebeu um `addEventListener("click", ...)`, que dispara a função responsável por abrir ou fechar o item correspondente do acordeão.

- **Uso do `getAttribute()`:**
  Para determinar qual conteúdo deveria ser exibido, utilizei o `getAttribute()` sobre o atributo `data-target` de cada cabeçalho. O valor desse atributo corresponde ao `id` do bloco de resposta relacionado, criando um vínculo direto entre pergunta e resposta. Esse mecanismo tornou possível ativar apenas o conteúdo correspondente ao item clicado, garantindo a lógica do acordeão.

* **Manipulação de Classes com `classList`:**
  O objeto `classList` foi usado para adicionar ou remover a classe `.active`. Além disso, o método `contains()` ajudou a verificar se um item já estava aberto, permitindo alternar entre os estados ativo e inativo de forma controlada.

* **Iteração com `forEach()` (uso ativo):**
  Dentro da lógica acionada pelo clique, outro `forEach()` percorre todos os itens do acordeão para remover a classe `.active`. Essa “limpeza” garante que apenas uma resposta permaneça aberta por vez. Esse passo é chamado de “ativo”, pois modifica diretamente o estado dos elementos na tela.

* **Condicionais em JS:**
  A alternância entre abrir ou fechar um item foi controlada por uma condicional que verificava o estado atual do cabeçalho. Dessa forma, caso o item estivesse fechado, ele era ativado.

### Padronização
- **Organização Lógica das Propriedades CSS:**  
  Agrupei as propriedades CSS de forma lógica (box model, tipografia, layout etc.), de modo a manter o código previsível e fácil de ler.

- **Nomenclatura Descritiva do Código:** Busquei utilizar nomes claros e significativos para funções, variáveis e classes. Essa prática torna o código mais autoexplicativo e reduz a necessidade de comentários excessivos, além de facilitar revisões e colaborações futuras.

- **Uso de *Header Comments*:** Implementei comentários padronizados no topo dos arquivos CSS e JS com informações como o propósito do arquivo, autor, data da última modificação e dependências envolvidas. 
Mesmo o projeto sendo pequeno, decidi usar essa padronização para ir me acostumando com boas práticas de código limpo — afinal, logo serei um desenvolvedor contratado, atuando numa equipe de desenvolvimento real.


### Extra: Inteligência Artificial

Durante o desenvolvimento deste projeto, contei com o apoio das IAs, como **ChatGPT**, **Claude** e **Microsoft Copilot**. Elas funcionaram como verdadeiras assistentes, ajudando a esclarecer dúvidas técnicas, resolver desafios complexos e refinar o código (estrutura, semântica, coesão, escalabilidade etc.).

Além disso, as IAs contribuíram para a organização das minhas anotações e para o aprimoramento deste README, elevando a clareza e a qualidade da documentação. Vale destacar que, embora essas ferramentas tenham sido primordiais, o projeto é majoritariamente autoral, resultado da minha criatividade e esforço, com os quais consegui produzir uma solução única e original.

## **Desafios Enfrentados**

Este exercício não me trouxe grandes dificuldades técnicas em si. Claro, todo desafio de programação carrega seus próprios obstáculos: codar cansado depois do trabalho, lidar com estresse, perder horas de sono, abrir mão de momentos de lazer, pensar na lógica do JavaScript enquanto tenta dormir ou se frustrar com mensagens de erro no console. Isso faz parte do pacote.

Mas, ao contrário do exercício anterior ([**5° Exercício - Slider Image**](https://github.com/Miguel-dAlmeida/slider-image_project)), aqui não enfrentei travamentos profundos no código nem passei por tentativas frustradas. Desde o início, consegui avançar de forma mais fluida, sem aqueles “paredões” que assustam. Atribuo isso, em grande parte, ao meu amadurecimento técnico (especialmente em HTML e CSS), à minha organização antes de codar (planejando classes, containers, divisões de layout, posicionamento etc.) e, sobretudo, à estratégia que escolhi desta vez: pedi ao Claude.IA que me gerasse um código de Accordion genérico para estudo.

Mesmo sendo bem diferente do que o curso propunha, o código me deu uma referência inicial. Eu o analisei, extraí conceitos e pequenos trechos como insights, e usei isso como um norte para estruturar meu próprio projeto. Esse ponto de partida me ajudou a enxergar o caminho.

Confesso, no entanto, que minha voz interna — aquela crítica, dura e implacável e que eu reconheço como um grande dom — não deixou barato. Em vários momentos ela dizia coisas como:

* “Como você vai chegar a algum lugar se precisa se basear em outros códigos para construir o seu?”
* “Cadê a originalidade nisso?”
* “Você está se tornando um desenvolvedor medíocre. Só faria sentido se tivesse feito tudo sozinho.”

Sei que esse tipo de pensamento é cruel, mas inevitável. No fim, percebi que orgulho, prepotência e inseguranças me rodeiam. Como eu poderia criar uma aplicação sólida, usando uma lógica que nunca tinha visto nem praticado no curso, sem buscar referências? Precisei refletir e decidir ressignificar essa voz, aceitando que usar um ponto de apoio não me torna menos capaz — pelo contrário, me ajuda a evoluir.

Se me arrependo? Não sei responder ainda. Talvez em alguns dias eu diga que sim, talvez que não. A verdade é que ainda estou construindo maturidade para lidar com a minha insegurança, que extrapola as barreiras do profissional e representa uma grande ferida, que busco entender e cicatrizar todos os dias.

O que tiro de tudo isso é que aprender programação vai muito além de melhorar tecnicamente. É também um exercício de comportamento, de paciência e até de autoconhecimento. A cada desafio, reforço a ideia de que minha jornada não é só para me tornar um bom desenvolvedor web, mas também uma pessoa mais resiliente. Ser um profissional de excelência é apenas a ponta do iceberg. O resto — o que está submerso — é um trabalho contínuo de desenvolvimento pessoal.

> 🎶 " _Lá vamos nós de novo. A mesma merda outra vez. Marchando ao longo da avenida. Só mais um dia e vamos passar._" 🎶  
Isso significa o fim? Ou será que não?  
É uma contagem regressiva dos militares, que os cadetes sempre usam para manter a moral alta. Quando você está tentando melhorar na vida, o trabalho árduo é para sempre. Não há fim. Não há contagem regressiva. Enquanto estiver respirando, você tem que continuar tentando ser melhor. A geladeira nunca está cheia.  
_Não há linha de chegada na vida. Mantenha-se firme._  
**David Goggins** 

## **Aprendizado Adquirido**

### Aprimoramento do raciocínio para códigos responsivos

No projeto anterior ([**5° Exercício - Slider Image**](https://github.com/Miguel-dAlmeida/slider-image_project)), meu maior desafio foi a responsividade. Como foi minha primeira aplicação unindo HTML, CSS e JS, sofri bastante para adaptar a página a diferentes resoluções, especialmente em telas com altura reduzida, onde os elementos frequentemente se sobrepunham.

No Accordion FAQ, percebi logo de início que o layout tenderia a ter os mesmos problemas — como o `footer` invadindo o conteúdo principal em alturas menores. Mas, dessa vez, carregava a experiência anterior comigo. Antes de implementar, já testei diferentes contextos de altura reduzida e experimentei ajustes de espaçamento e posicionamento para evitar esses conflitos.

A solução envolveu o uso de margens verticais automáticas, a troca do `position: absolute` para `static` em determinados casos e o ajuste de margens e espaçamentos específicos em breakpoints. Essa bagagem prática me permitiu avançar de forma mais rápida e fluida, sem os travamentos ou frustrações que tive antes.


### Utilização de atributos específicos para a lógica JS + `getAttribute()`

Um ponto essencial que aprendi foi planejar a marcação HTML já pensando na futura lógica em JavaScript. No caso do acordeão, eu precisava que a classe `.active` fosse aplicada a elementos irmãos (a pergunta e a resposta), mas apenas um deles estava diretamente ligado à interação do usuário.

Para resolver isso, utilizei um sistema de atributos: cada cabeçalho recebeu um `data-target` e cada bloco de resposta recebeu um `id` correspondente. Assim, com o método `getAttribute()`, eu recuperava o valor do `data-target` e o usava para selecionar o `id` correto via `getElementById()`. Esse mecanismo garantiu a ligação dinâmica entre pergunta e resposta, tornando a lógica funcional.

### Refino do meu entendimento sobre o método `forEach()`

Consolidei meu entendimento sobre como aplicar o `forEach()` em contextos interativos. Quando precisamos que vários elementos compartilhem o mesmo comportamento, essa função se torna uma ferramenta poderosa.

No projeto, usei o `forEach()` de duas formas distintas:

* **Passiva:** percorrendo os cabeçalhos apenas para adicionar escutadores de eventos (sem modificar nada diretamente).
* **Ativa:** percorrendo novamente os elementos dentro da função de clique para limpar as classes `.active`, garantindo que apenas um item permanecesse aberto.

Esse discernimento entre usos passivos e ativos do `forEach()` ampliou minha visão sobre o papel desse método dentro de uma lógica JS.

### Uso de seletores complexos unindo classes HTML e classes JS

Aprofundei minha prática com seletores CSS que dependem de classes adicionadas dinamicamente via JS. Houve momentos em que eu precisava alterar a estética de elementos que não recebiam diretamente a classe `.active`. A solução foi usar a hierarquia: quando um elemento superior recebia `.active`, os estilos eram propagados para os elementos internos.

Exemplo:

```css
.faq__accordion-header {
  &.active .faq__accordion-trigger .faq__accordion-icon {
    & .faq__icon-image--default {
      display: none;
    }
    & .faq__icon-image--active {
      display: block;
    }
  }
}
```


### Insights da aula de resolução do Curso Dev Quest

Após finalizar minha versão, assisti à aula de resolução do exercício com o professor Beto (Desenvolvedor Web Sênior). Notei uma diferença de abordagem interessante: no código dele, apenas o cabeçalho recebia a classe `.ativo`, simplificando a lógica do JS. Na minha versão, tanto cabeçalho quanto conteúdo recebiam a classe `.active`, o que exigiu a estratégia com `data-target` + `getAttribute()`.

Essa diferença trouxe prós e contras: minha versão manteve maior semântica no HTML, enquanto a versão do professor simplificou a lógica. No fim, percebi que não existe apenas uma forma “certa” de resolver, e conhecer múltiplos padrões enriquece muito meu repertório como desenvolvedor.

### Revisão do uso de `overflow: hidden;`

Ao pensar na animação do acordeão, percebi que alternar apenas a propriedade `display` resultaria em uma transição brusca. Pesquisando alternativas, encontrei uma solução mais profissional: controlar o `max-height` (`0` para fechado e um valor específico para aberto) em conjunto com `overflow: hidden;`.

Sem esse `overflow`, o conteúdo extrapolaria os limites do container, comprometendo a estética.

## **Desenvolvimento Contínuo e Autossuperação**

Essa é, sem dúvidas, a seção que mais gosto de escrever. De alguns projetos para cá, ela se tornou um verdadeiro diário pessoal — o espaço em que exponho não apenas o desenvolvimento técnico, mas também o emocional que o sustenta.

Quando iniciei o FAQ Accordion, havia expandido minhas responsabilidades acadêmicas: matriculei-me em dois cursos extras — um de neurociência e outro de inglês.

No curso de neurociência, aprendi a importância de equilibrar a vida em dois momentos:

1. **Sprint** — grandes esforços cognitivos, como o desenvolvimento de um projeto.
2. **Polimento** — esforços médios, como a escrita deste README.

Por isso, reservo tempo de qualidade para atividades como essa escrita, mesmo quando minha autocrítica insiste em gritar: *“Vamos, cara, você está perdendo tempo. Volte a produzir imediatamente.”*

A verdade é que nunca me enxerguei verdadeiramente como alguém equilibrado. Sobrevivo graças à disciplina, às sessões exaustivas de estudo, à renúncia aos prazeres e ao confronto com tarefas difíceis. Mas hoje consigo ser mais flexível: aceito parar para organizar, preparar o terreno, **afiar o machado** — sem me obrigar a estar em produção constante.

Uma metáfora que me marcou e inspirou essa mudança veio do vídeo [*Não ignore a manutenção da sua vida*](https://www.youtube.com/watch?v=_piJ_68V1B8), do canal **Pinho**.

> Num dia ensolarado, um homem observou um trabalhador tentando cortar uma árvore. O esforço era intenso, mas o machado estava cego, e os golpes mal arranhavam a madeira. Ao sugerir que ele parasse para afiá-lo, o trabalhador respondeu:
> *“Não tenho tempo para isso. Preciso trabalhar.”*
>
> Essa cena ilustra uma verdade profunda: quando negligenciamos a manutenção em nome da pressa, conquistamos apenas o efêmero. A constância, e não a urgência, é o que gera estabilidade. Afie-se. Cuide-se. Só então conquiste — com propósito, coração e desapego do imediato.

Ainda assim, reconheço: não há momentos de maior identificação pessoal do que quando me reencontro com minha voz interna desequilibrada e implacável. Ela aparece quando penso em desistir, quando sinto medo, preguiça, raiva ou angústia. É nesses instantes — quando orgulho, vaidade, inseguranças e mediocridade me esmagam — que escuto aquela voz brutal:

*“O que você está pensando? Como assim não vai fazer? Como assim não vai mandar tudo àquele lugar e continuar? Como assim não vai engolir tudo isso e passar por cima da dor?”*

E então respondo:

*“Eu conheço a verdade. Já estive na zona do arrependimento. Eu sei o que é a dor de não ter tentado. Eu já passei por isso inúmeras vezes e sobrevivi. Hoje é o dia que eu esperava. Convido todos vocês — medo, preguiça, inseguranças — a se sentarem comigo e me acompanharem na dança. Mergulhem comigo no fogo, testem sua criatividade para me travar, tentem me derrubar… Eu estive esperando por esse dia.*

É nesse momento que escrevo no meu caderno: **“Eu renuncio!”**
Renuncio ao conforto, à covardia e à mediocridade. Aceito a dor no peito e sigo adiante. Esse é o meu verdadeiro dom: a capacidade de mergulhar no sofrimento e ouvir a voz implacável que não me deixa desistir.

**Nota importante:** Não confundam minhas palavras: não considero que cada dia de estudo, trabalho ou treino seja sofrimento. Pelo contrário, gosto da disciplina e até encontro prazer nas tarefas difíceis. O que quero dizer é que assumir responsabilidades diariamente inevitavelmente traz dor. Não há como escapar — existirão dias ruins, contratempos e frustrações. Minha forma de seguir em frente nesses momentos é peculiar: enfrento a dor com a própria dor. Foi assim, com essa estratégia um pouco melancólica, que consegui construir consistência.

> *As pessoas me perguntam: **“Como você correu com os pés quebrados, com as canelas fraturadas?”** Minha mente sabia: é assim que operamos. Estamos no treinamento dos SEALs da Marinha. É o que somos. Isso se tornou a minha nova norma. Não dei a mim mesmo nenhuma saída. Não havia nada fora daquelas paredes do inferno. Nada.  
Eu amo Deus, mas, por um curto período de tempo, eu me tornei o diabo — porque aquilo era o inferno. Eu me tornei o SEAL dentro do treinamento dos SEALs da Marinha. Essa era a minha mentalidade. Você se coloca, se emerge seja lá onde for, e se torna aquilo, sem se dar nenhuma saída.  
Eu encontrei paz do outro lado, ao me encontrar. E ninguém realmente se encontra sem passar por provações, tribulações, sofrimento e responsabilidade. **E responsabilidade é sofrimento. Ser responsável todos os dias — por fazer a coisa certa, por você mesmo, pelas pessoas ao seu redor — é difícil, é miserável.*** — **David Goggins**

> *Nunca se esqueça: a conquista de si mesmo é um processo permanente. Nunca é hora de parar.* — **David Goggins**

Voltando à parte acadêmica, meu próximo desafio será a etapa **“Quest HTML + CSS + JS Intermediário”** do curso _DevQuest_. Nela, colocarei em prática os aprendizados dos módulos de **HTML** e **CSS Avançados** junto ao **JavaScript Intermediário**, desenvolvendo um formulário com validação de dados.

## **Agradecimentos e Conclusão**

Se você chegou até aqui, meu sincero obrigado por dedicar seu tempo a explorar este projeto e acompanhar minha jornada. Completar esse desafio foi uma grande conquista e cada passo reforça minha certeza de que estou no caminho certo para conquistar minha primeira vaga como desenvolvedor web júnior.

Também não posso deixar de agradecer ao [**DevQuest**](https://www.youtube.com/@DevemDobro), curso do qual sou aluno, por todo o suporte e conhecimento ensinado ao longo da minha jornada. 

<div align="center">
      <a href="https://www.youtube.com/@DevemDobro">
        <img src="https://raw.githubusercontent.com/Miguel-dAlmeida/accordion-faq_project/main/src/images/devQuest_logo.jpg" width="155px" alt="Logo da empresa DevQuest - Dev em Dobro"/>
      </a>
</div>
<br>

Um grande abraço e até o próximo projeto. **Bora codar!**

## **Contato**

 <div style="margin-bottom: 20px;">
    <a style="padding-right: 3px;" href="https://www.linkedin.com/in/mariomigueldealmeida/"><img
        src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
    <a href="mailto:mariomigueldealmeida@gmail.com"><img
        src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white"></a>
  </div>

## **Licença de Uso**  

Este código está disponível exclusivamente para fins educacionais. Qualquer outro tipo de utilização não está autorizada.   

<br>
<div align="center">
  <img src="https://raw.githubusercontent.com/Miguel-dAlmeida/accordion-faq_project/main/src/images/closingImage.gif" alt="Imagem representando união e parceria" width="80%">
</div>