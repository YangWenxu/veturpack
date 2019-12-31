import { router } from "../../client/app"

config.jsonp = {
  whiteList: ['localhost']
}

router.get(
  'api/v1/jsonp',
  app.jsonp(),
  (ctx, next) => {
    if(ctx.query.username!=='dd' && ctx.query.password!=='888888') {
      return ctx.throw(403)
    }
    return next()
  },
  ctx => (ctx.body = {name: '123'})
)

const {
  forEachObjIndexed,
  forEach,
  keys,
  values,
  pipe,
  map,
  zipObj
} = require('ramda')

const R = require('ramda')

async function getModelCount(ctx) {
  const models = ctx.app.model.models
  const getValuePromises = R.pipe(R.values, R.map(R.invoker(0, 'count')))
  const names = keys(models)
  const values = await Promise.all(getValuePromises(models))
  ctx.body = R.zipObj(names, values)
}

module.exports = {
  getModelCount
}
