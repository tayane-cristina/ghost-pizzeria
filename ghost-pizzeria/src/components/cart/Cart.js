import './Cart.css'

const Cart = ({cartItems, removeItem, increaseItem, decreaseItem}) => {



  return (
    <div className='cart-principal-div'>
      <div>
        <h2 className='cart-title'>Carrinho de compras</h2>
        <hr />

        <div className='infor-order'>
          <ul className='product-cart-ul'>
            {cartItems.length === 0 ? <p className='empty-cart'>Seu carrinho está vazio</p> : cartItems.filter((item) => item.quantity > 0)
            .map((item, index) => (
              <li className='product-cart-li' key={index}>
                <img className='product-cart-image' src={item.image} alt={`Imagem-de-${item.displayName}`} />
                <p className='product-cart-displayName'><strong>{item.displayName}</strong></p>
                <p>R$ {item.price.toFixed(2)}</p>
                <div className='amount-itens-in-cart'>
                  <button onClick={() => decreaseItem(item.id)} className='btn-amount decrease-quantity'>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseItem(item.id)} className='btn-amount increase-quantity'>+</button>
                  <button className='btn-amount trash' onClick={() => removeItem(item.id)}><img src='https://img.icons8.com/?size=24&id=85194&format=png' alt='imagem-de-lixeira'/></button>
                </div>
              </li>
            ))}
          </ul>

          <div className='account'>
            <p>TOTAL</p>
            <span>R$ 0</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;