Parte 5 - Comparação com Sistema Didático
Aqui estão as principais diferenças entre os dois modelos avaliados:


Arquitetura: O Sistema Real é dividido de forma clara em camadas (como front-end e back-end separados). Em contraste, o Sistema Didático apresenta uma estrutura misturada, sem divisões bem definidas.


Coesão: No Sistema Real, a coesão é alta, o que significa que cada parte do código cuida de apenas uma tarefa específica. Já no Didático, a coesão costuma ser baixa, com um único arquivo lidando com a tela e o banco de dados ao mesmo tempo.


Acoplamento: O Sistema Real possui baixo acoplamento, permitindo que as partes funcionem de forma mais independente. O Sistema Didático sofre com alto acoplamento, onde a alteração em uma funcionalidade frequentemente quebra outras.


Organização: A organização do Sistema Real é eficiente, separando a área de uso do cliente da área administrativa. O Sistema Didático peca pela desorganização, agrupando arquivos e responsabilidades de forma confusa.


Flexibilidade: O Sistema Real apresenta alta flexibilidade, tornando a adição de novos produtos ou telas um processo simples. O Sistema Didático é engessado e de difícil manutenção.

Explicação das principais diferenças:
A grande diferença é que o sistema real, por estar em uso, precisa ser seguro e escalável. Ele alcança isso aplicando fortemente a separação de responsabilidades, isolando a interface (o que o cliente vê), as regras do negócio e o armazenamento de dados. O sistema didático (com problemas estruturais) não faz essa separação, o que gera um código centralizado e difícil de consertar.
