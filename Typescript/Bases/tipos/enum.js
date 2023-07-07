"use strict";
(() => {
    let audioLevel;
    (function (audioLevel) {
        audioLevel[audioLevel["min"] = 1] = "min";
        audioLevel[audioLevel["mid"] = 2] = "mid";
        audioLevel[audioLevel["max"] = 10] = "max";
    })(audioLevel || (audioLevel = {}));
    let currentAudio = audioLevel.mid;
    console.log(currentAudio);
    console.log(audioLevel);
})();
//# sourceMappingURL=enum.js.map