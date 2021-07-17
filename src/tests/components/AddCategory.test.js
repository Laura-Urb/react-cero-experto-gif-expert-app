import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en AddCategory', () => {
  const setCategories = jest.fn();
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola';
    input.simulate('change', { target: { value } });
    expect(wrapper.find('input').props().value).toBe(value);
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola';
    input.simulate('change', { target: { value } });
    expect(wrapper.find('input').props().value).toBe(value);
  });

  test('NO debe de postear la información con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe de llamar al setCategories y limpiar la caja de texto', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Hero' } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).toBeCalledTimes(1);
    expect(input.props().value).toBe('');
  });
});
