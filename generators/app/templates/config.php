<?php

require_once INCLUDE_DIR . 'class.plugin.php';

class <%= pluginName %>Config extends PluginConfig {
    function getOptions() {
        return array(
            'examplebreak' => new SectionBreakField(array(
                'label' => '<%= pluginName %> configuration',
            )),
            'examplefield' => new TextboxField(array(
                'label' => 'Example field',
                'configuration' => array('size'=>100, 'length'=>200),
            )),
        );
    }
}
