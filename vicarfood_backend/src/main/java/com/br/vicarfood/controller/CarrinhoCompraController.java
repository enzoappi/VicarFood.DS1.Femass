package com.br.vicarfood.controller;

import com.br.vicarfood.model.CarrinhoCompra;
import com.br.vicarfood.model.ItemCompra;
import com.br.vicarfood.model.Produto;
import com.br.vicarfood.repository.CarrinhoCompraRepository;
import com.br.vicarfood.repository.ItemCompraRepository;
import com.br.vicarfood.repository.ProdutoRepository;
import com.br.vicarfood.request.CarrinhoCompraRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/carrinhoCompra")
public class CarrinhoCompraController {

    private final ProdutoRepository produtoRepository;
//    private final ItemCompraRepository itemCompraRepository;
    private final CarrinhoCompraRepository carrinhoCompraRepository;

    public CarrinhoCompraController(ProdutoRepository produtoRepository, /*ItemCompraRepository itemCompraRepository,*/ CarrinhoCompraRepository carrinhoCompraRepository) {
        this.produtoRepository = produtoRepository;
//        this.itemCompraRepository = itemCompraRepository;
        this.carrinhoCompraRepository = carrinhoCompraRepository;
    }

/*    
    @CrossOrigin
    @GetMapping("/")
    public List<CarrinhoCompra> getCarrinhoCompra(){
        List<CarrinhoCompra> carrComp = carrinhoCompraRepository.findAll();

        List<CarrinhoCompraRequest> comprs = new ArrayList<CarrinhoCompraRequest>();
        for(CarrinhoCompra cC : carrComp) {
            CarrinhoCompraRequest cR = new CarrinhoCompraRequest();
            //cR.setNome(cC.getItensCompra());
        }

        return null;
    }
*/

    @CrossOrigin
    @PostMapping("/incluir")
    public void incluirItemCarrinho(@RequestBody CarrinhoCompraRequest carrinhoCompraRequest) throws Exception{

        var prdt = produtoRepository.findById(carrinhoCompraRequest.getIdProduto());
        Produto produto = new Produto();

        if(prdt.isPresent()) {
            produto = prdt.get();
        } else {
            throw new Exception("Produto não encontrado");
        }

        var car = carrinhoCompraRepository.findByFinalizado(false);
        CarrinhoCompra carrinhoCompra = new CarrinhoCompra();

        if(car.isPresent()){
            carrinhoCompra = car.get();
        }

        carrinhoCompra.adicionarItensAoCarrinho(produto, carrinhoCompraRequest.getQuantidadeProduto());

        carrinhoCompraRepository.save(carrinhoCompra);
    }

}
