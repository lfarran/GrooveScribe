var generalAppFiles = [
  './app/js/share.min.js',
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

  js_lib_src: [
    //'./js/abc2svg-1.js', // script to render ABC to an SVG image - http://moinejf.free.fr/js/
    //'./js/jsmidgen.js', // jsmidgen for generating a midi file - https://github.com/dingram/jsmidgen
    './MIDI.js/js/MIDI/AudioDetect.js',
    './MIDI.js/js/MIDI/LoadPlugin.js',
    './MIDI.js/js/MIDI/Plugin.js',
    './MIDI.js/js/MIDI/Player.js',
    './MIDI.js/inc/DOMLoader.XMLHttp.js',
    './MIDI.js/inc/jasmid/stream.js',
    './MIDI.js/inc/jasmid/midifile.js',
    './MIDI.js/inc/jasmid/replayer.js',
    './MIDI.js/inc/Base64.js',
    './MIDI.js/inc/base64binary.js'
  ],

  css_src: function () {
    'use strict';
    return [
      './css/*.css'
    ];
  },

  image_src: function() {
    'use strict';
    return [
      './images/**/{,*/}*'
    ];
  }

};