<?php

require_once(INCLUDE_DIR.'/class.plugin.php');
require_once(INCLUDE_DIR.'/class.forms.php');

class <%= pluginName %> extends PluginConfig{
 function getOptions() {
 return array(<%= fields %>),
 );
 }

 function pre_save(&$config, &$errors) {
 global $msg;

if (!$errors)
 $msg = 'Configuration updated successfully';

return true;
 }
}
?>
