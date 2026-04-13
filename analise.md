Parte 1 - Análise do Sistema Real 

1. Qual é o objetivo do sistema? 
Funcionar como um cardápio digital para a "Tropykaly Pizzas e Lanches", permitindo que os clientes vejam os produtos e montem seus pedidos online.

2. Quais funcionalidades ele oferece? 

Navegação pelo cardápio separado por abas.

Carrinho de compras para registrar os itens escolhidos.

Um "Painel Sistema" (link no rodapé) para a gestão da loja pelos funcionários.

3. Como o usuário interage com o sistema? 
O cliente acessa o site, escolhe a categoria (como pizzas ou hambúrgueres), seleciona os produtos, adiciona ao carrinho e prossegue para a finalização do pedido.

4. Como os produtos estão organizados? 
Eles são divididos em três grupos principais no topo: Categorias, Combos e Promoções. Dentro das Categorias, os itens são separados por tipo (ex: Pizza - P, Sanduíches, Sucos, etc.).

Parte 2 - Análise de Arquitetura 

Tipo de arquitetura e divisão em camadas:
O sistema usa uma arquitetura Cliente-Servidor. Ele é provavelmente dividido em:

Front-end (Apresentação): A tela no navegador (cardápio e carrinho).

Back-end e Banco de Dados: O servidor por trás dos panos, que calcula preços e salva as informações.

Existência de separação de responsabilidades:
Sim, há uma divisão clara. A tela principal serve apenas para o cliente comprar, enquanto o "Painel Sistema" é uma área restrita e isolada para o dono gerenciar os pedidos e produtos.

Parte 3 - Análise de Design 

Coesão:
A coesão parece alta. As partes do sistema são focadas: o carrinho só cuida de somar os itens, o menu superior só cuida da navegação, sem misturar as coisas.

Acoplamento:
Aparenta ser baixo. A interface visual (front-end) não parece estar "amarrada" ao servidor; eles apenas trocam informações essenciais.

Separação de responsabilidades:
Muito boa. A parte visual do cardápio está bem separada da lógica de controle (área administrativa).
