import app from './app';

import models from './models';


const startApp = ({ PORT = 3000 } = process.env) => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console
}

models.sequelize
  .sync()
  .then(() => {
    startApp();
  })
  .catch((error) => {
    throw new Error(error);
  })
