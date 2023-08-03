//META{"name":"SoundboardEnabler","version":"1.9.3","description":"Enables Discord's special soundboard feature without Nitro.","author":"BMF","source":"https://github.com/mattswagyt/SoundboardEnabler"}*//

console.log("SoundboardEnabler plugin started.");

class SoundboardEnabler {
  constructor() {
    this.soundboardEnabled = true; // Enable soundboard by default
    this.soundboardButton = null;

    this.initialize();
  }

  initialize() {
    // Find the soundboard button and store a reference to it
    this.soundboardButton = document.querySelector(".soundboardButton-2aSHcU");

    // Add a click event listener to the soundboard button to toggle soundboard
    if (this.soundboardButton) {
      this.soundboardButton.addEventListener("click", this.handleSoundboardButtonClick);
    }
  }

  start() {
    this.updateSoundboardState();
  }

  stop() {
    this.soundboardButton.removeEventListener("click", this.handleSoundboardButtonClick);
  }

  updateSoundboardState() {
    if (this.soundboardButton) {
      // Toggle the soundboard button based on the enabled state
      this.soundboardButton.style.display = this.soundboardEnabled ? "block" : "none";
    }
  }

  handleSoundboardButtonClick = () => {
    // Toggle soundboard state
    this.soundboardEnabled = !this.soundboardEnabled;

    // Update the soundboard button display
    this.updateSoundboardState();
  };
}

const soundboardEnabler = new SoundboardEnabler();
