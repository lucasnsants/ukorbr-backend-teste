const tester = require('graphql-tester').tester;

describe('A queries', () => {
  let test = null;
  beforeAll(() => {
    test = tester({
      url: 'http://localhost:3000/graphql?',
      contentType: 'application/json'
    });
  });

  it('should total users of categories', done => {
    test(
      JSON.stringify({
        query: `query{
          totalUsersCategory {
            Feliz
            Triste
            Ansioso
          }
        }`
      })
    )
    .then((res) => {
      const obj = res.data.totalUsersCategory;
      expect(typeof(obj)).toBe('object');
      expect(res.status).toBe(200);
      expect(res.success).toBe(true);
      done();
    })
    .catch((error) => {
      expect(error).toBe(null);
      done();
    });
  });

  it('should total users of feelings', done => {
    test(
      JSON.stringify({
        query: `query{
          totalUsersFeeling {
            Adolescentes {
              Feliz
              Triste
              Ansioso
              Estressado
              Desanimado
            }
            Adultos {
              Feliz
              Triste
              Ansioso
              Estressado
              Desanimado
            }
            Idosos {
              Feliz
              Triste
              Ansioso
              Estressado
              Desanimado
            }
          }
        }`
      })
    )
    .then((res) => {
      const obj = res.data.totalUsersFeeling;
      expect(typeof(obj)).toBe('object');
      expect(res.status).toBe(200);
      expect(res.success).toBe(true);
      done();
    })
    .catch((error) => {
      expect(error).toBe(null);
      done();
    });
  });
});
