// Get the video and create a text track
const video = document.getElementById('my-video');
const track = video.addTextTrack("captions", "English", "en");
track.mode = "showing";
const VTTCue = window.VTTCue || window.TextTrackCue;

fetch('video-description.txt')
  .then(response => response.text())
  .then(text => {
    const lines = text.trim().split('\n');
    lines.forEach(line => {
      const parts = line.split(/\s+/);
      const startTime = parseFloat(parts.shift());
      const endTime = parseFloat(parts.shift());
      const cueText = parts.join(' ');
      console.log(startTime, endTime, cueText);
      const cue = new VTT(startTime, endTime, cueText);
      track.addCue(cue);
  });
})
  //.catch(error => console.error(error));
