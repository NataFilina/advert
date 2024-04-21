import { useEffect, useState } from 'react';
import { getCarsList } from 'service/contacts-service';

export const useFetchCars = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchDataCars = async () => {
      try {
        const data = await getCarsList();
        setCars(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataCars();
  }, []);

  return { cars, error, isLoading };
};
