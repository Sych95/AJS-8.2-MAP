import { ErrorRepository } from '../js/ErrorRepository';

test.each([
  [228, 'Wrong type of character', () => { const errorList = new Map(); errorList.set(228, 'Wrong type of character'); return errorList; }],
  [342, 'Wrong name of character', () => { const errorList = new Map(); errorList.set(228, 'Wrong type of character'); errorList.set(342, 'Wrong name of character'); return errorList; }],
])(
  ('Test adding errors in ErrorRepository'),
  (errorCode, errorText, result) => {
    ErrorRepository.addError(errorCode, errorText);
    const { errorList } = ErrorRepository;
    expect(errorList).toEqual(result());
  },
);

test('Testing translate', () => {
  ErrorRepository.addError('228', 'Wrong type of character');
  const result = ErrorRepository.translate(228);
  const expected = 'Wrong type of character';

  expect(result).toBe(expected);
});

test('Testing translate error-text', () => {
  const result = ErrorRepository.translate(0);
  const expected = 'Unknown error';

  expect(result).toBe(expected);
});
