$(document).on("submit", "form[data-turboform]", function(e) {
  var $form = $(this);
  $.rails.disableFormElements($form);
  $(document).one("page:receive", function() { $.rails.enableFormElements($form); });
  Turbolinks.visit(this.action+(this.action.indexOf('?') == -1 ? '?' : '&')+$form.serialize());
  return false;
});
