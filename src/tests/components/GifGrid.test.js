import GifGrid from '../../components/GifGrid';
import React from 'react';
import { shallow } from 'enzyme';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
  const category = 'Hola';
  test('debe de mostrar el componente correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostrar items cuando se cargan imágenes useFetch', () => {
    useFetchGifs.mockReturnValue({
      data: [
        { id: 'A', url: 'https://Hi', title: 'Hi' },
        { id: 'B', url: 'https://Bye', title: 'Bye' },
      ],
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(2);
  });
});
