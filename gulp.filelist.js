var generalAppFiles = [
  //'./app/js/**/*.js'
  './app/js/abc2svg-1.js',
  './app/js/share.min.js',
  './app/js/jsmidgen.js',
  './app/js/groove_writer.js',
  './app/js/groove_utils.js',
  './app/js/grooves.js'
];

module.exports = {
  app_files: function () {
    'use strict';
    // The individual app builds (i.e. dashboard, conferencing, etc.) insert
    // the proper ./App.appName.js (i.e. App.conferencing) file at index 0 of the genearalAppFiles array.
    return generalAppFiles;
  },

  css_lib_files: function () {
    'use strict';
    return [
      './bower_components/fontawesome/css/font-awesome.min.css'
    ];
  },

  js_lib_src: [
    './app/MIDI.js/js/MIDI/AudioDetect.js',
    './app/MIDI.js/js/MIDI/LoadPlugin.js',
    './app/MIDI.js/js/MIDI/Plugin.js',
    './app/MIDI.js/js/MIDI/Player.js',
    './app/MIDI.js/inc/DOMLoader.XMLHttp.js',
    './app/MIDI.js/inc/jasmid/stream.js',
    './app/MIDI.js/inc/jasmid/midifile.js',
    './app/MIDI.js/inc/jasmid/replayer.js',
    './app/MIDI.js/inc/Base64.js',
    './app/MIDI.js/inc/base64binary.js'
  ],

  css_src: function () {
    'use strict';
    return [
      './app/css/*.css'
    ];
  },


  image_src: function() {
    'use strict';
    return [
      './app/images/**/{,*/}*'
    ];
  }

};