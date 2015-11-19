var generalAppFiles = [
  './app/js/share.min.js', // TODO: LBF 11/17/15 - is this 3rd party? script for sharing to social sites
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
      './bower_components/fontawesome/css/font-awesome.min.css',
      './app/css/latoFont.css'
    ];
  },

  js_lib_src: [
    './app/js/abc2svg-1.js', // script to render ABC to an SVG image - http://moinejf.free.fr/js/
    './app/js/jsmidgen.js', // jsmidgen for generating a midi file - https://github.com/dingram/jsmidgen
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
      './app/css/groove_display_orange.css',
      './app/css/groove_writer_orange.css'
    ];
  },


  image_src: function() {
    'use strict';
    return [
      './app/images/**/{,*/}*'
    ];
  }

};