public class IPhone {
    public static void main(String[] args) throws Exception {
        Navegador safari = new Navegador();
        ReprodutorMusical ipod = new ReprodutorMusical();
        Telefone telefone = new Telefone();

        safari.exibirPagina("google.com");

        ipod.tocar("Rap do Maito Gai");

        telefone.ligar(636336366);
    }
}
