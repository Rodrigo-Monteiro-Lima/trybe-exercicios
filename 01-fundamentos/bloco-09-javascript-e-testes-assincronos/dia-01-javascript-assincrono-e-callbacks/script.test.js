const { uppercase, getPokemonDetails, handlePokemonSearch }= require('./script')

it('testa se retorna a string toda em caps', (done) => {
  uppercase('rodrigo', callback => {
    try {
      expect(callback).toBe('RODRIGO');
      done();
    } catch (error) {
      done(error);
    }
  });
});

//Ex 9

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    getPokemonDetails('Cr', (error, message) => {
      try {
        expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it('retorna um pokémon que existe no banco de dados', (done) => {
    getPokemonDetails('Charmander', (error, message) => {
      try {
        expect(message).toBe('Olá, seu pokémon é o Charmander, o tipo dele é Fogo e a habilidade principal dele é Lança Chamas');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

