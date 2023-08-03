//META{"name":"SoundboardEnabler","version":"1.9.3","description":"Enables Discord's special soundboard feature without Nitro.","author":"BMF","source":"https://github.com/yourusername/soundboard-enabler-plugin"}*//

console.log("SoundboardEnabler plugin started.");

class SoundboardEnabler {
  start() {
    // Enable the soundboard feature
    this.enableSoundboard();
  }

  stop() {
    // Disable the soundboard feature
    this.disableSoundboard();
  }

  enableSoundboard() {
    // Find the soundboard button and trigger a click event to enable it
    const soundboardButton = document.querySelector(".soundboardButton-2aSHcU");
    if (soundboardButton) {
      soundboardButton.click();
    } else {
      console.warn("Soundboard button not found.");
    }
  }

  disableSoundboard() {
    // Find the soundboard button and trigger a click event to disable it
    const soundboardButton = document.querySelector(".soundboardButton-2aSHcU.active-2W0W7Y");
    if (soundboardButton) {
      soundboardButton.click();
    } else {
      console.warn("Active soundboard button not found.");
    }
  }
}

const soundboardEnabler = new SoundboardEnabler();
export default soundboardEnabler;

