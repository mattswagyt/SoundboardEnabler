//META{"name":"SoundboardEnabler","version":"1.9.3","description":"Enables Discord's special soundboard feature without Nitro.","author":"BMF","source":"https://github.com/mattswagyt/SoundboardEnabler"}*//

console.log("SoundboardEnabler plugin started.");

class SoundboardEnabler {
  constructor() {
    this.soundboardEnabled = false;
    this.voiceChannel = null;
    this.soundboardButton = null;

    this.initialize();
  }

  initialize() {
    // Listen for voice state updates
    document.addEventListener("voiceStateUpdate", this.handleVoiceStateUpdate);

    // Find the soundboard button and store a reference to it
    this.soundboardButton = document.querySelector(".soundboardButton-2aSHcU");

    // Add a click event listener to the soundboard button to unlock custom sounds
    if (this.soundboardButton) {
      this.soundboardButton.addEventListener("click", this.handleSoundboardButtonClick);
    }
  }

  start() {
    this.handleVoiceStateUpdate();
  }

  stop() {
    this.disableSoundboard();
    this.soundboardButton.removeEventListener("click", this.handleSoundboardButtonClick);
  }

  handleVoiceStateUpdate = () => {
    // Get the user's current voice channel
    const userVoiceState = BdApi.findModuleByProps("getVoiceState").getVoiceState();
    if (userVoiceState && userVoiceState.channelId) {
      this.voiceChannel = userVoiceState.channelId;

      // Enable the soundboard button
      this.enableSoundboard();
    } else {
      this.voiceChannel = null;

      // Disable the soundboard button
      this.disableSoundboard();
    }
  };

  enableSoundboard() {
    if (this.soundboardButton) {
      this.soundboardButton.style.display = "block";
      this.soundboardEnabled = true;
    }
  }

  disableSoundboard() {
    if (this.soundboardButton) {
      this.soundboardButton.style.display = "none";
      this.soundboardEnabled = false;
    }
  }

  handleSoundboardButtonClick = () => {
    // Logic for handling custom sounds on your server
    // Replace this with your custom sound logic
    this.playCustomSound();
  };

  playCustomSound() {
    // Play your custom sound logic here
    console.log("Playing custom sound...");
  }
}

const soundboardEnabler = new SoundboardEnabler();
