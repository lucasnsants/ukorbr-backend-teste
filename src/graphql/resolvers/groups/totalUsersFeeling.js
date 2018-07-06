import models from '../../../models';

/**
 * Return total users with base feelings
 */
export default async (_, args) => {
  try {
    return await models.Question.findAll({
      attributes: ['birthDay', 'response', [models.Sequelize.fn('COUNT', models.Sequelize.col('id')), 'count']],
      group: ['birthDay', 'response']
    });
  } catch (error) {
    throw new Error(error)
  }
};
