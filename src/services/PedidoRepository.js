export class PedidoRepository {
    static #instancia;
    #pedidos = [];

    constructor() {
        if (PedidoRepository.#instancia) {
            return PedidoRepository.#instancia;
        }
        PedidoRepository.#instancia = this;
    }

    static getInstancia() {
        if (!this.#instancia) {
            this.#instancia = new PedidoRepository();
        }
        return this.#instancia;
    }

    salvar(pedido) {
        this.#pedidos.push(pedido);
        // Aqui no futuro integraremos com o JSON Server (Parte 7)
        console.log("Pedido salvo no repositório:", pedido);
    }

    buscarTodos() {
        return this.#pedidos;
    }
}
