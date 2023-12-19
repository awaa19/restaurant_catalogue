const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('service worker not supported in the browser');
    return;
  }

  try {
    navigator.serviceWorker.register('./sw.bundle.js');
    console.log('service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
