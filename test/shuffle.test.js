import { shuffle } from '../starter/src/shuffle.js';
import { expect } from 'chai';

describe('shuffle()', () => {
  it('should return an array with the same elements', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);

    expect(result).to.have.lengthOf(input.length);
    expect(result.sort()).to.deep.equal([...input].sort());
  });

  it('should not mutate the original array', () => {
    const input = [1, 2, 3];
    const copy = [...input];
    shuffle(input);
    expect(input).to.deep.equal(copy);
  });

  it('should usually return an array in a different order', () => {
    const input = [1, 2, 3, 4, 5];
    let differentOrderFound = false;

    for (let i = 0; i < 10; i++) {
      const result = shuffle(input);
      if (!result.every((val, idx) => val === input[idx])) {
        differentOrderFound = true;
        break;
      }
    }

    expect(differentOrderFound).to.be.true;
  });

  it('should handle empty array', () => {
    const result = shuffle([]);
    expect(result).to.deep.equal([]);
  });

  it('should handle single-element array', () => {
    const result = shuffle([42]);
    expect(result).to.deep.equal([42]);
  });
});
