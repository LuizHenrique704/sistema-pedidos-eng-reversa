export class WhatsappService {
    constructor(telefoneEstabelecimento = "5588999999999") { // Substitua pelo seu número
        this.telefone = telefoneEstabelecimento;
    }

    enviarPedido(resultadoPedido) {
        let mensagem = `*Novo Pedido - Pastelaria do Zé*\n\n`;

        resultadoPedido.itens.forEach(item => {
            mensagem += `- ${item.quantidade}x ${item.produto.nome} (R$ ${item.subtotal.toFixed(2)})\n`;
        });

        mensagem += `\n*Subtotal:* R$ ${resultadoPedido.totalOriginal.toFixed(2)}`;
        mensagem += `\n*Desconto:* - R$ ${resultadoPedido.desconto.toFixed(2)}`;
        mensagem += `\n*Taxa:* + R$ ${resultadoPedido.taxa.toFixed(2)}`;
        mensagem += `\n*TOTAL FINAL:* R$ ${resultadoPedido.totalFinal.toFixed(2)}`;

        const url = `https://wa.me/${this.telefone}?text=${encodeURIComponent(mensagem)}`;

        // Abre o WhatsApp em uma nova aba
        window.open(url, "_blank");
    }
}
