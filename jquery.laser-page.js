(function($) {
  var oscillator, gainNode;

  function createOscillator() {
    var context = new webkitAudioContext();
    var oscillator = context.createOscillator();
    gainNode = context.createGainNode();
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    gainNode.gain.value = 0.4
    oscillator.frequency.value = 1000;
    oscillator.noteOn(0);
    return oscillator;
  }

  $(document).on('mouseenter', 'a,input[type=submit],button', function() {
    oscillator = oscillator || createOscillator()
    oscillator.frequency.value = 50000;
    while (oscillator.frequency.value) {
      oscillator.frequency.value--;
    }
  });
})(jQuery)
