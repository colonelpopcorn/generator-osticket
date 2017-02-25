<?php
require_once(INCLUDE_DIR . '/class.plugin.php');

require_once(INCLUDE_DIR . '/class.forms.php');

class <%= pluginName %> extends PluginConfig
{
    function getOptions()
    {
        return array(
            'example_field_1' => new BooleanField(array(
                'id' => 'example_field_1',
                'label' => 'Example checkbox',
                'configuration' => array(
                    'desc' => 'An example check box.'
                ))),
            'example_field_2' => new TextBoxField(array(
                'id' => 'example_field_2',
                'label' => 'Example text box',
                'configuration' => array(
                    'desc' => 'An example text box.'
                ))),
              'example_field_3' => new DatetimeField(array(
                  'id' => 'example_field_3',
                  'label' => 'Example datepicker',
                  'configuration' => array(
                      'desc' => 'An example datepicker.'
                ))),
              'example_field_4' => new PhoneField(array(
                  'id' => 'example_field_4',
                  'label' => 'Example phone field',
                  'configuration' => array(
                      'desc' => 'An example phone number field.'
                ))),
              'example_field_5' => new ChoiceField(array(
                  'id' => 'example_field_5',
                  'label' => 'Example choice field',
                  'choices' => array(
                    'Red' => 'red',
                    'White' => 'white',
                    'Blue' => 'blue'
                  ),
                  'configuration' => array(
                      'desc' => 'An example choice field.'
                ))),
              'example_field_6' => new SectionBreakField(array(
                  'id' => 'example_field_6',
                  'label' => 'Example section break field',
                  'configuration' => array(
                      'desc' => 'An example section break.'
                ))),
              'example_field_7' => new TextareaField(array(
                  'id' => 'example_field_7',
                  'label' => 'Example text area field',
                  'configuration' => array(
                      'desc' => 'An example text area field.'
                ))),
              'example_field_8' => new ThreadEntryField(array(
                  'id' => 'example_field_8',
                  'label' => 'Example checkbox 1',
                  'configuration' => array(
                      'desc' => 'An example rich text field.'
                ))),
        );
    }

    function pre_save(&$config, &$errors)
    {
        global $msg;
        if (!$errors)
            $msg = 'Configuration updated successfully';
        return true;
    }
}

?>
