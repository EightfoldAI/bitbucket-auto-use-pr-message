const oldPRMessageDiv = document.getElementsByClassName('wiki-content')[0];

if (oldPRMessageDiv) {
  // Handle old Bitbucket PR experience
  const mergeButton = document.getElementById('fulfill-pullrequest');

  mergeButton.addEventListener('click', () => {
    setTimeout(() => {
      const oldPRMessageContent = [...oldPRMessageDiv.childNodes].map(e => e.textContent);
      const mergePRTextArea = document.getElementById('id_commit_message');
      mergePRTextArea.value = oldPRMessageContent.join('\n\n').trim();
      mergePRTextArea.dispatchEvent(new Event("change", { bubbles: true }));
    }, 400);
  });
} else {
  // Handle new Bitbucket PR experience
  var mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes) {
          mutation.addedNodes.forEach(node => {
            if (node.classList && node.classList.contains('css-10p1lac')) {
              const mergeButton = [...document.getElementsByTagName('span')].find(e => e.innerText === 'Merge');
              if (mergeButton) {
                mergeButton.addEventListener('click', () => {
                  const prMessageTextContent = [...document.getElementsByClassName('ak-renderer-document')[0].childNodes].map(e => e.textContent);

                  setTimeout(() => {
                    const mergePRTextArea = document.getElementsByClassName('TextArea-l4fqfr-0 iLAWFj')[0];
                    mergePRTextArea.value = prMessageTextContent.join('\n\n');
                    mergePRTextArea.textContent = prMessageTextContent.join('\n\n');
                    mergePRTextArea.dispatchEvent(new Event("change", { bubbles: true }));
                  }, 400);
                })
              }
            }
          });
        }
      });
  });

  mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
  });
}
