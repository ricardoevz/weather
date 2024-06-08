import { ChangeEvent, useContext, useRef, useState } from 'react';
import { WeatherContext } from '../context';
import { Place } from '../interfaces';

export const InputSearch = () => {
  const { handleSearchPlacesByTerm, handleChangePlace } =
    useContext(WeatherContext);

  const debouncerRef = useRef<number>();
  const [places, setPlaces] = useState<Place[]>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debouncerRef.current) clearTimeout(debouncerRef.current);

    debouncerRef.current = setTimeout(async () => {
      const places = await handleSearchPlacesByTerm(event.target.value);
      setPlaces(places);
    }, 350);
  };

  const handleClic = (place: Place) => {
    handleChangePlace({ lat: place.lat, lon: place.lon });
    setPlaces([]);
  };

  return (
    <div className='relative'>
      <input
        type='text'
        className=' p-3 rounded w-full bg-slate-700'
        placeholder='Buscar lugar...'
        onChange={onQueryChanged}
        aria-label='Buscar lugar'
        aria-controls='place-listbox'
        aria-autocomplete='list'
        role='combobox'
      />
      <div className='absolute w-full bg-slate-700'>
        {places && (
          <ul
            id='place-listbox'
            role='listbox'
            aria-label='Resultados de la búsqueda'
          >
            {places.map((place) => (
              <li
                tabIndex={0}
                key={place.lat}
                onClick={() => handleClic(place)}
                className='cursor-pointer p-2 hover:bg-slate-800 focus:bg-slate-800 '
              >
                {place.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
