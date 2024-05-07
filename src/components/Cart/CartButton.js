import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(uiAction.toggle())
  }

  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
