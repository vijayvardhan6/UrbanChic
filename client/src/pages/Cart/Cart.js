import React from 'react'
import "./Cart.css"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart.products)
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (
      total += item.quantity * item.price
    ));
    return total.toFixed(2);

  };

  const stripePromise = loadStripe('pk_test_51NK0muSDjeZnE6Kl1CK6WmhAEmm5vPiXkR72qwiQUJD52Kt8aUrfOKRxNIC44C3sV04Are7vz7eq06NwWD9FxUYI004pOIRfZW');

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      // const res = await makeRequest.post("/orders", {
      //   products,
      // });
      const res = await axios.post("http://localhost:1337/api/orders", {
        products,
      }, {
        headers: {
          Authorization: "bearer " + "3989c2b75e28e2d985b9a0a1499b5120cf24d85230de032328afd844b36739a24dc494702ba5dbc7334fb0963e8d555b201f3cb66984a815a82f628fae5b6d141062fa393801d6c0592ab9a253c4ea33ba3867fc4c8debe9106a5fc51b024a21bd8c8ad81b4efd2e365b72152fd41e16a3241c9ecd4913add5f475bd505c456c",
        },
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <h4>Products in your cart</h4>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={'http://localhost:1337' + item.img} alt="" />
          <div className="details">
            <h5>{item.title}</h5>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              <p>{item.quantity} x {item.price}</p>
            </div>
          </div>
          <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button className='checkout' onClick={handlePayment}>PROCEED TO CHECK</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart
