import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToQuantity, subtractQuantity, removeItem, finalizeOrder } from './actions/cartAction';

class Cart extends Component{
  addToQuantityBtn = (id) => {
    this.props.addToQuantity(id);
  }

  subtractQuantityBtn = (id) => {
    this.props.subtractQuantity(id);
  }

  removeItemBtn = (id) => {
    this.props.removeItem(id);
  }

  finalizeOrderBtn = () => {
    this.props.finalizeOrder();
  }

  render(){
    let addedItems = this.props.items.length ? 
      (
        this.props.items.map(item => {
          return(
            <li className="collection-item avatar" key={item.id}>
              <div className="item-img">
                <img width="200" src={item.img} alt={item.img} className=""/>
              </div>

              <div className="item-desc">
                <span className="title">{item.title}</span>
                <p>{item.desc}</p>
                <p><b>Preço: </b>${item.price}</p>
                <p>
                  <b>Quantidade: </b>{item.quantity}
                </p>
                <div className="add-remove">
                  <Link to="/cart" onClick={() => {this.addToQuantityBtn(item.id)}}>+</Link>
                  <Link to="/cart" onClick={() => {this.subtractQuantityBtn(item.id)}}>-</Link>
                </div>
                <button onClick={() => { this.removeItemBtn(item.id) }}>Remover</button>
              </div>

            </li>
          )
        })
      ) : 
      (
        <p>Nothing</p>
      )

    let finalizeOrder = this.props.total ?
      (
        <div className="finalizeOrder">
          <h5><b>Total: </b>{this.props.total}</h5>
          <Link to="/cart" onClick={() => {this.finalizeOrderBtn()}}>Finalizar pedido</Link>
        </div>
      ) :
      (
        <div className="orderZero">
          <h5><b>Total: </b>{this.props.total}</h5>
        </div>
      )
      

    return(
      <div className="container">
        <div className="cart">
          <h5>Seu carrinho:</h5>
          <ul className="collection">
            {addedItems}

          </ul>
          {finalizeOrder}
          
        </div>

      </div>

    )

  }

}

const mapStateToProps = (state) => {
  return{
    items: state.addedItems,
    total: state.total

  }

};

const mapDispatchToProps = (dispatch) => {
  return{
    addToQuantity: (id) => { dispatch(addToQuantity(id)) },
    subtractQuantity: (id) => { dispatch(subtractQuantity(id)) },
    removeItem: (id) => { dispatch(removeItem(id)) },
    finalizeOrder: () => { dispatch(finalizeOrder())}
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)