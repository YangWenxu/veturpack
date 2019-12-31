'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  const { getModelCount: countRouter } = require('./util');
  router.get('/', controller.home.index);
  router.get('/api/v1/admin_count', auth({
    name: 'dd',
    pass: '888888'
  }),
  countRouter
  )
};
