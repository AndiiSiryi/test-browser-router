import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment } from 'redux/store';

export const Layout = () => {
  const value = useSelector(state => state.myValue);
  const dispatch = useDispatch();
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Домашня</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Колекція</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <button onClick={() => dispatch(increment(100))}>increment</button>
        <button onClick={() => dispatch(decrement(100))}>decrement</button>
        <div>{value}</div>
        <Outlet />
      </main>

      {/* <footer>Підвал</footer> */}
    </div>
  );
};
