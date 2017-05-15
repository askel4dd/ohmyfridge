import renderIf from '../../app/lib/renderIf';

describe('renderIf', () => {
  it('returns passed element', () => {
    const predicate = true;
    const element = 'Element';

    expect(renderIf(predicate)(element)).toBe('Element')
  });

  it('returns null', () => {
    const predicate = false;
    const element = 'Element';

    expect(renderIf(predicate)(element)).toBe(null)
  });
});
