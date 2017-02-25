<?php
/**
 * <%= description %>
 *
 * @author <%= author %>
 */
set_include_path(get_include_path() . PATH_SEPARATOR . dirname(__file__) . '/include');
return array(
    'id' => '<%= username %>:<%= pluginName %>', // notrans
    'version' => '<%= version %>',
    'name' => '<%= pluginPresentationName %>',
    'author' => '<%= author %>',
    'description' => '<%= description %>',
    'url' => '<%= url %>',
    'plugin' => '<%= pluginName %>.php:<%= pluginName %>Plugin'
);
?>
