import GraphQLDate from 'graphql-date';
import GraphQLJSON from 'graphql-type-json';
import moment from 'moment';
import {
  map
} from 'lodash';
import {
  saveBirthDay,
  saveName,
  saveResponse
} from './questions';

import {
  totalUsersCategory,
  totalUsersFeeling
} from './groups';

/**
 * Return categories per ages
 * @param {data} feelings
 * @param {string} type
 */
const getAgeCategories = (feelings, type) => {
  let categories = {
    Adultos: {},
    Adolescentes: {},
    Idosos: {}
  };
  map(feelings, (feeling) => {
    let age = moment().diff(feeling.birthDay, 'years');
    if(age >= 18 && age <= 30) categories['Adolescentes'][feeling.response] = feeling.dataValues.count;
    if(age >= 31 && age <= 50) categories['Adultos'][feeling.response] = feeling.dataValues.count;
    if(age >= 51) categories['Idosos'][feeling.response] = feeling.dataValues.count;
  });
  return categories[type];
}

export default {
  DATE: GraphQLDate,
  JSON: GraphQLJSON,

  Query: {
    totalUsersCategory,
    totalUsersFeeling
  },

  Mutation: {
    saveBirthDay,
    saveName,
    saveResponse
  },

  Feelings: {
    Adolescentes: (feelings) => {
      return getAgeCategories(feelings, 'Adolescentes');
    },
    Adultos: (feelings) => {
      return getAgeCategories(feelings, 'Adultos');
    },
    Idosos: (feelings) => {
      return getAgeCategories(feelings, 'Idosos');
    }
  }
};
