<?php
  <%= license_header %>

  <%= plugin_description %>

  <%= author %>

  set_include_path(get_include_path().PATH_SEPARATOR.dirname(__file__).'/include');
  return array(<%= parmeter_array %>);
?>