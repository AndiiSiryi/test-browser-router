import { useParams } from 'react-router-dom';

export const SubBreeds = () => {
  const { dogId } = useParams();
  //   useEffect(() => {
  //      Робимо HTTP запрос, якщо потрібно
  //   }, []);
  return <div>SubBreeds: {dogId}</div>;
};
