import orderByProps from '../getSorted';

test('Тестирование сортировки массива по правилам', () => {
  const exp = [
    { key: 'name', value: 'Aleks' },
    { key: 'level', value: 1 },
    { key: 'attack', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 100 },
    { key: 'type', value: 'Daemon' },
  ];

  const obj = {
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    name: 'Aleks',
    type: 'Daemon',
  };

  const resolved = orderByProps(obj, ['name', 'level']);
  expect(resolved).toEqual(exp);
});

test('Тестирование сортировки массива без правил', () => {
  const exp = [
    { key: 'attack', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 100 },
    { key: 'level', value: 1 },
    { key: 'name', value: 'Aleks' },
    { key: 'type', value: 'Daemon' },
  ];

  const obj = {
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    name: 'Aleks',
    type: 'Daemon',
  };

  const resolved = orderByProps(obj);
  expect(resolved).toEqual(exp);
});