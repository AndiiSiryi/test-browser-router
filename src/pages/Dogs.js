import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Dogs = () => {
  const [dogs, setDogs] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
  ]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const dogId = searchParams.get('dogId') ?? '';

  const visibleDogs = dogs.filter(dog => dog.includes(dogId));
  //   useEffect(() => {
  //      Робимо HTTP запрос, якщо потрібно
  //   }, []);

  //   useEffect(() => {
  //     console.log(dogId);
  //   }, [dogId]);
  const updateQueryString = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ dogId: evt.target.value });
    // тернарником:
    //onst updateQueryString = (evt) => {
    //evt.target.value === '' ? setSearchParams({}) : setSearchParams({ dogId: evt.target.value });};
  };
  console.log(location);
  return (
    <div>
      <input type="text" value={dogId} onChange={updateQueryString} />

      {visibleDogs.map(dog => {
        return (
          <li key={dog}>
            <Link to={`${dog}`} state={{ from: location }}>
              {dog}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Dogs;
