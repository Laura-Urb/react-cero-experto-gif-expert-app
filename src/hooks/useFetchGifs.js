import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((resp) => {
      setState({
        data: resp,
        loading: false,
      });
    });
  }, [category]);

  return state;
};

export default useFetchGifs;
