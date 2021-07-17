import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {
  const title = 'Titulo';
  const url =
    'https://media1.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=29e81697khpvl59ds9odzlf5el4cag89l64zqrksysp4dkyk&rid=giphy.gif&ct=g';

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de tener un párrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });
  test('debe de tener la imagen igual a la url y alt de los props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });
  test('debe de tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
});
