const tester = require('graphql-tester').tester;

describe('A mutations', () => {
  let test = null;
  let id;
  beforeAll(() => {
    test = tester({
      url: 'http://localhost:3000/graphql?',
      contentType: 'application/json'
    });
  });

  it('should save name', done => {
    test(
      JSON.stringify({
        query: `mutation{
          saveName(name: "Clara")
        }`
      })
    )
    .then((res) => {
      id = res.data.saveName;
      expect(typeof(id)).toBe('number');
      expect(res.status).toBe(200);
      expect(res.success).toBe(true);
      done();
    })
    .catch((error) => {
      expect(error).toBe(null);
      done();
    });
  });

  it('should save birthDay', done => {
    test(
      JSON.stringify({
        query: `mutation {
          saveBirthDay(id: ${id}, birthDay: "1992-09-20T00:00:00.000Z")
        }`
      })
    )
    .then((res) => {
      const saveBirthDay = res.data.saveBirthDay;
      expect(saveBirthDay).toBe('Resposta salva.');
      expect(res.status).toBe(200);
      expect(res.success).toBe(true);
      done();
    })
    .catch((error) => {
      expect(error).toBe(null);
      done();
    });
  });

  it('should save response', done => {
    test(
      JSON.stringify({
        query: `mutation {
          saveResponse(id: ${id}, response: "Ansioso")
        }`
      })
    )
    .then((res) => {
      const saveResponse = res.data.saveResponse;
      expect(saveResponse).toBe('Resposta salva.');
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
