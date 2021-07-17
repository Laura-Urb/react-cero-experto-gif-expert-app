import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en useFetchGifs', () => {
  test('debe de retronar el estado inicial ', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>useFetchGifs('Hi'));
    const { loading, data } = result.current;
    await waitForNextUpdate({timeout:5000});
    // const { loading, data } = useFetchGifs('category');
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('debe de retronar un arreglo y el loading en false ', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>useFetchGifs('category'));
    await waitForNextUpdate({timeout:5000});
    const { loading, data } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
