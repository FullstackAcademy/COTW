describe('removeSurroundingDuplicates', () => {
  it('is a function', () => {
    expect(typeof removeSurroundingDuplicates).toBe('function');
  });

  it('returns an array with a number sequence', () => {
    const returnedValue = removeSurroundingDuplicates([5, 5, 5, 7, 7, 7, 9, 9, 1, 2]);
    expect(Array.isArray(returnedValue)).toBe(true);
  });

  it('returns an array with a string sequence', () => {
    const returnedValue = removeSurroundingDuplicates('ttttAAAbOOORSSppAcE');
    expect(Array.isArray(returnedValue)).toBe(true);
  });

  it('removes duplicates from a number sequence', () => {
    const returnedValue = removeSurroundingDuplicates([5, 5, 5, 7, 7, 7, 9, 9, 1, 2]);
    expect(returnedValue).toEqual([5, 7, 9, 1, 2]);
  });

  it('removes duplicates from a string sequence', () => {
    const returnedValue = removeSurroundingDuplicates('ttttAAAbOOORSSppAcE');
    expect(returnedValue).toEqual(['t', 'A', 'b', 'O', 'R', 'S', 'p', 'A', 'c', 'E']);
  });
});
