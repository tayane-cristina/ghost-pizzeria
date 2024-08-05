import './Cart.css'

const Cart = ({cartItems, removeItem, increaseItem, decreaseItem, total, orderClosed}) => {
  

  console.log(cartItems)
  return (
    <div className='cart-principal-div'>
      <div>
        <h2 className='cart-title'>Carrinho de compras</h2>
        <hr />

        <div className='account'>
          <div className='account-infor'>
            <p className='total-text'>TOTAL:</p>
            <span className='total-text-price'>R${total}</span>
          </div>
          <div className='finish'>
            {Array.isArray(cartItems) && cartItems.length === 0 ? <button className='btn-finish-disabled' disabled>Finalizar pedido</button> : <button onClick={orderClosed}  className='btn-finish'>Finalizar pedido</button>}
          </div>

        </div>

        <div className='infor-order'>
          <ul className='product-cart-ul'>
            {Array.isArray(cartItems) && cartItems.length > 0 ?  cartItems.filter((item) => item.quantity > 0)
            .map((item) => (
              <li className='product-cart-li' key={item.id}>
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
            )) : <p className='empty-cart'>Seu carrinho está vazio</p>}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Cart;