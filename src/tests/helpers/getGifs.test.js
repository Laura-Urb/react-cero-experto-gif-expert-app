import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs', () => {
  test('debe de traer 10 elementos', async () => {
    const reps = await getGifs('One');
    expect(reps.length).toBe(10);
  });
  test('debe de traer 0 elementos si el string es vacío', async () => {
    const reps = await getGifs('');
    expect(reps.length).toBe(0);
  });
});
