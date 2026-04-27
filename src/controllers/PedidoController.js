import { PedidoService } from '../services/PedidoService.js';
import { PedidoView } from '../views/PedidoView.js';
import { WhatsappService } from '../services/WhatsappService.js'; // Import novo
import { PedidoRepository } from '../repositories/PedidoRepository.js'; // Import novo

export class PedidoController {
    constructor() {
        this.service = new PedidoService();
        this.view = new PedidoView();
        this.whatsapp = new WhatsappService(); // Instância do serviço
        this.repository = PedidoRepository.getInstancia(); // Singleton

        this.service.inscrever((pedidoAtualizado) => {
            this.view.atualizar(pedidoAtualizado);
        });
    }

    adicionarItem() {
        const produtoEl = document.getElementById("produto");
        const qtdEl = document.getElementById("qtd");

        try {
            this.service.adicionarItem(produtoEl.value, qtdEl.value);
            qtdEl.value = "";
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

        // 1. Salva no Repositório (Simulando persistência)
        this.repository.salvar(resultado);

        // 2. Envia via WhatsApp
        this.whatsapp.enviarPedido(resultado);

        // 3. Limpa a tela
        this.service.limparPedido();
        this.view.exibirMensagem("Pedido enviado para o WhatsApp!");
    }
}
