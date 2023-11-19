import { useParams } from 'react-router-dom';

export const Gallery = () => {
  const { dogId } = useParams();
  //   useEffect(() => {
  //      Робимо HTTP запрос, якщо потрібно
  //   }, []);
  return <div>Image Gallery: {dogId}</div>;
};
