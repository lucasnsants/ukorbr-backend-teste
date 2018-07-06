import models from '../../../models';
import {
  map
} from 'lodash';

/**
 * Return total users with base categories
 */
export default async (_, args) => {
  try {
    let categories = await models.Question.findAll({
      attributes: ['response', [models.Sequelize.fn('COUNT', models.Sequelize.col('id')), 'count']],
      group: ['response']
    });

    let newCategories = {}
    map(categories, (category) => {
      newCategories[category.response] = category.dataValues.count;
    });
    return newCategories;
  } catch (error) {
    throw new Error(error)
  }
};
