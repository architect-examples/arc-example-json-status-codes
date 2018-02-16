var arc = require('@architect/functions')

/* test error 
function authorize (req, res, next) {
  res(Error('Error!'))
} */

function route(req, res) {
  res({
    status: 403,
    json: { error: 'Not Authorized' }
  })
}

exports.handler = arc.json.get(/* authorize,*/ route)
