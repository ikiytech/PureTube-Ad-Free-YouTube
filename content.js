// Fungsi untuk menghapus elemen iklan
const hideAds = () => {
    const adSelectors = [
      'ytd-ad-slot-renderer',
      'ytd-companion-slot-renderer',
      '.ytp-ad-module',
      '.video-ads'
    ];
  
    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
  
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
      skipButton.click();
    }
  };
  
  // Fungsi untuk menampilkan kembali tombol dislike
  const restoreDislike = () => {
    const buttons = document.querySelectorAll("ytd-toggle-button-renderer");
    buttons.forEach((button) => {
      if (button.getAttribute("aria-label")?.includes("Dislike")) {
        button.style.display = "inline-flex"; // Menampilkan tombol dislike
      }
    });
  };
  
  // Fungsi untuk melewati promosi sponsor dalam video
  const skipSponsoredSegments = () => {
    const transcript = document.querySelector('.ytp-chrome-bottom');
    if (transcript && transcript.innerText.includes("Sponsored")) {
      const video = document.querySelector('video');
      if (video) {
        video.currentTime += 10; // Loncat 10 detik untuk skip promosi
      }
    }
  };
  
  // Jalankan setiap 1 detik untuk update otomatis
  setInterval(() => {
    hideAds();
    restoreDislike();
    skipSponsoredSegments();
  }, 1000);
  