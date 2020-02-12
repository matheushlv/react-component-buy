import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartAction';

class Home extends Component{

  handleClick = (id) => {
    this.props.addToCart(id);
    console.log(this.props.addedItems);  
  }

  render(){
    let itemList = this.props.items.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img width="200" height="10%" src={item.img} alt={item.title}/>
            <span className="card-title">{item.title}</span>
            <button onClick={() => {this.handleClick(item.id)}} to="/">Adicionar</button>
          </div>
          
          <div className="card-content">
            <p>{item.desc}</p>
            <p><b>Preço: </b>${item.price}</p>
          </div>
          
        </div>
      );
    });
    return(
      <div className="home">
        <h3>Items</h3>
        <div className="box">
          {itemList}
        </div>
      </div>

    );

  }

}

const mapStateToProps = (state) => {
  return{
    items: state.items,
    total: state.total,
    addedItems: state.addedItems
  }

}

const mapDispatchToProps = (dispatch) => {
  return{
    addToCart: (id) => { dispatch(addToCart(id)) }

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);