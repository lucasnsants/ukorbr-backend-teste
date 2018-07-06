import models from '../../../models';

/**
 * Save name of user
 * @param {string} name
 */
export default async (_, { name }) => {
  try {
    const user = await models.Question.create({ name });
    if (!user) throw new Error('Não foi possível salvar o nome.');
    return user.id;
  } catch (error) {
    throw new Error(error);
  }
}
