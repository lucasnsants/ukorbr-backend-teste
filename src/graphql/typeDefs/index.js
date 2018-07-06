import {
  Categories,
  Feelings,
  Questions
} from './types';

import queries from './queries';
import mutations from './mutations';

export default `
  scalar DATE
  scalar JSON

  enum TYPECATEGORIES {
    Feliz
    Triste
    Ansioso
    Estressado
    Desanimado
  }

  enum TYPEGROUPS {
    Adolescentes
    Adultos
    Idosos
  }

  ${Categories}
  ${Feelings}
  ${Questions}
  ${queries}
  ${mutations}
`;
