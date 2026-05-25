(function () {
  var selector = '[data-blogverse-share-copy]';

  function getShareText(button) {
    var title = button.dataset.title || document.title;
    var site = button.dataset.site || '';
    var url = button.dataset.url || window.location.href;
    var titleLine = site ? '《' + title + '》 - ' + site : '《' + title + '》';

    return titleLine + '\n' + url;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      var textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.top = '-9999px';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        if (document.execCommand('copy')) {
          resolve();
        } else {
          reject(new Error('copy command failed'));
        }
      } catch (error) {
        reject(error);
      } finally {
        document.body.removeChild(textarea);
      }
    });
  }

  function showMessage(title, message, icon) {
    if (window.VolantisApp && typeof window.VolantisApp.message === 'function') {
      window.VolantisApp.message(title, message, {
        icon: icon
      });
      return;
    }

    window.alert(message);
  }

  function setCopiedState(button) {
    var icon = button.querySelector('i');
    var label = button.querySelector('p');
    var originalIcon = icon ? icon.className : '';
    var originalLabel = label ? label.textContent : '';

    button.classList.add('is-copied');

    if (icon) {
      icon.className = 'fa-solid fa-check fa-fw';
    }

    if (label) {
      label.textContent = '已复制';
    }

    window.setTimeout(function () {
      button.classList.remove('is-copied');

      if (icon) {
        icon.className = originalIcon;
      }

      if (label) {
        label.textContent = originalLabel;
      }
    }, 1800);
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest(selector);

    if (!button) {
      return;
    }

    copyText(getShareText(button))
      .then(function () {
        setCopiedState(button);
        showMessage('分享内容已复制', '文章标题和链接已复制到剪贴板。', 'fa-solid fa-check');
      })
      .catch(function () {
        showMessage('复制失败', '当前浏览器不支持自动复制，请手动复制页面链接。', 'fa-solid fa-triangle-exclamation');
      });
  });
}());
