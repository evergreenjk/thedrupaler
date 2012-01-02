// $Id: elfinder.callback.js 106 2011-02-26 08:19:56Z ph0enix $

(function($) {
$().ready(function() {
  if (Drupal.settings.elfinder) {
    var editorApp = Drupal.settings.elfinder.editorApp;

    var elfinderOpts = {
      url : Drupal.settings.elfinder.connectorUrl,
      lang : Drupal.settings.elfinder.langCode,
      rememberLastDir : Drupal.settings.elfinder.rememberLastDir,
      closeOnEditorCallback : false,
    }
    
    if (editorApp && typeof window[Drupal.settings.elfinder.editorCallback] == 'function') {
      elfinderOpts.editorCallback = window[Drupal.settings.elfinder.editorCallback];
    }
    
    $('#finder').elfinder(elfinderOpts);
  }
});

})(jQuery);
