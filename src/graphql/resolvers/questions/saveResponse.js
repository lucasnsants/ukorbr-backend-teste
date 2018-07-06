import models from '../../../models';

/**
 * Save response of user
 * @param {int} id
 * @param {string} response
 */
export default async (_, { id, response }) => {
  let transaction = null;
  try {
    transaction = await models.sequelize.transaction();
    let question = await models.Question.update(
      {response},
      {
        where: {
          id
        }
      }
    );
    if(question[0] !== 1) throw new Error('Não foi possível salvar sua resposta.');
    transaction.commit();
    return "Resposta salva.";
  } catch(error) {
    throw new Error(error);
    await transaction.rollback();
  }
}
