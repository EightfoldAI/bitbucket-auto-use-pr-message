// 
// document.addEventListener('DOMContentLoaded', () => {
//   const enabledToggle = document.getElementById('enabled-toggle');
//   if (enabledToggle) {
//     enabledToggle.addEventListener('change', () => {
//       console.log(enabledToggle.checked);
//       let activeTabURL = null;
//       chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => activeTabURL = tabs[0].url);
//       chrome.storage.local.set({ activeTabURL: enabledToggle.checked});
//     });
//   }
// });
