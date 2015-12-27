var $ = require('jquery')

function template(name, data) {
  var clone = $('[data-template="' + name + '"]').clone().removeAttr('data-template')
  for(var key in data) {
    $.when(data[key]).then(function (val) {
      var el = clone.find('[data-template-key="' + key + '"]')
      var destAttr = el.attr('data-template-attr')
      if(destAttr) {
        el.attr(destAttr, val)
      }
      else {
        el.text(val)
      }
    })
  }
  return clone
}

module.exports = template
