import { PedidoService } from '../services/PedidoService.js';
import { PedidoView } from '../views/PedidoView.js';

export class PedidoController {
    constructor() {
        this.service = new PedidoService();
        this.view = new PedidoView();

        // Inscreve a View para observar as mudanças no Service (Padrão Observer)
        this.service.inscrever((pedidoAtualizado) => {
            this.view.atualizar(pedidoAtualizado);
        });
    }

    adicionarItem() {
        const produtoEl = document.getElementById("produto");
        const qtdEl = document.getElementById("qtd");

        try {
            this.service.adicionarItem(produtoEl.value, qtdEl.value);
            qtdEl.value = ""; // Limpa o input após adicionar
        } catch (error) {
            this.view.exibirMensagem(error.message);
        }
    }

    finalizarPedido() {
        if (this.service.pedidoAtual.itens.length === 0) {
            this.view.exibirMensagem("Adicione itens antes de finalizar.");
            return;
        }

        const resultado = this.service.finalizarPedido();
        const mensagem = `Total Original: R$ ${resultado.totalOriginal.toFixed(2)}\nDesconto: R$ ${resultado.desconto.toFixed(2)}\nTaxa: R$ ${resultado.taxa.toFixed(2)}\nTotal Final: R$ ${resultado.totalFinal.toFixed(2)}`;

        this.view.exibirMensagem(mensagem);
        this.service.limparPedido();
    }
}
