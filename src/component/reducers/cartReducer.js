import item1 from '../../assets/img/produto-01.jpeg';
import item2 from '../../assets/img/produto-02.jpeg';
import item3 from '../../assets/img/produto-03.jpeg';
import item4 from '../../assets/img/produto-04.jpeg';
import item5 from '../../assets/img/produto-05.jpeg';
import item6 from '../../assets/img/produto-06.jpeg';
import item7 from '../../assets/img/produto-07.jpeg';
import item8 from '../../assets/img/produto-08.jpeg';
import { ADD_TO_CART, ADD_TO_QUANTITY, REMOVE_ITEM, SUB_QUANTITY, FINALIZE_ORDER } from '../actions/action-types/cart-action';

const initState = {
  items: [
    {id: 1, quantity: 0, title: 'Product 01', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 10, img: item1},
    {id: 2, quantity: 0, title: 'Product 02', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 20, img: item2},
    {id: 3, quantity: 0, title: 'Product 03', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 30, img: item3},
    {id: 4, quantity: 0, title: 'Product 04', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 40, img: item4},
    {id: 5, quantity: 0, title: 'Product 05', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 50, img: item5},
    {id: 6, quantity: 0, title: 'Product 06', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 60, img: item6},
    {id: 7, quantity: 0, title: 'Product 07', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 70, img: item7},
    {id: 8, quantity: 0, title: 'Product 08', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 80, img: item8},
  ],
  addedItems: [],
  total: 0
}

const cartReducer = (state = initState, action) => {
  if(action.type === ADD_TO_CART){
    let addedItem = state.items.find(item => item.id === action.id);
    let existed_item = state.addedItems.find(item => action.id === item.id);
    
    if(existed_item){
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price

      }

    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price;
      return{
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal

      }

    }
  }
  if(action.type === REMOVE_ITEM){
    let addedItem = state.items.find(item => item.id === action.id);
    let newTotal = state.total - (addedItem.price * addedItem.quantity);
    let new_items = state.addedItems.filter(item => item.id !== action.id);
    return{
      ...state,
      addedItems: new_items,
      total: newTotal
    }

  }
  if(action.type === ADD_TO_QUANTITY){
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return{
      ...state,
      total: newTotal
    }

  }
  if(action.type === SUB_QUANTITY){
    let addedItem = state.items.find(item => item.id === action.id);

    if(addedItem.quantity === 1){
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return{
        ...state,
        addedItems: new_items,
        total: newTotal
      }
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return{
        ...state,
        total: newTotal

      }

    }

  } 
  if(action.type === FINALIZE_ORDER){
    alert('Pedido finalizado de R$' + state.total);
    return{
      ...state,
      addedItems: [],
      total: 0
    }


  }else {
    return state;

  }

  

}

export default cartReducer;
