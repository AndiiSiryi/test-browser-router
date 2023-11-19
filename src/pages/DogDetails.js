import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const DogDetails = () => {
  const location = useLocation();
  const dackLinkLokationRef = useRef(location.state?.from ?? '/dogs');
  const { dogId } = useParams();
  //   console.log(dogId);

  //   useEffect(() => {
  //      Робимо HTTP запрос, якщо потрібно
  //   }, []);
  console.log(location);
  console.log(dackLinkLokationRef);
  return (
    <>
      <h1>Дeтальніше про собаку: {dogId}</h1>
      <Link to={dackLinkLokationRef.current}>назад до сторінки колекції</Link>
      <ul>
        <li>
          <Link to="subbbreeds">Подпороди</Link>
        </li>
        <li>
          <Link to="gallery">Гелерея</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;
