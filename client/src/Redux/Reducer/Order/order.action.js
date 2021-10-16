export const orderPlaced = (cartData) => async (dispatch) => {
    try {
      const placeOrder = cartData.map((foodItem) => {
        const orderDetails = {
          food: foodItem._id,
          quantity: foodItem.quantity,
          paymode: "ONLINE",
          paymentDetails: {
            itemTotal: foodItem.totalPrice,
            promo: 0,
            tax: 0,
          },
        };
        axios({
          method: "POST",
          url: `http://localhost:4000/order/new`,
          data: { orderDetails },
        });
      });
  
      await Promise.all(placeOrder);
  
      return dispatch({
        type: ORDER_PLACED,
        payload: {},
      });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
  