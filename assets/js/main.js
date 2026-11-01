/* ============================================================
   周璐学霸之路 · 共享脚本
   - 本地 / 在线模式自适应（PDF 仅本地可用）
   - 返回顶部按钮
   - 页脚年份
   ============================================================ */
(function () {
  'use strict';

  var online = location.protocol === 'http:' || location.protocol === 'https:';

  /* ---------- PDF 链接自适应（本地模式） ---------- */
  document.querySelectorAll('[data-pdf]').forEach(function (el) {
    if (!online) {
      el.href = el.getAttribute('data-pdf');
      el.setAttribute('target', '_blank');
    } else {
      el.classList.add('dim');
      el.textContent = '🔒 本地资料 · 需在电脑上打开';
      el.removeAttribute('href');
      el.title = '《学霸同步笔记》PDF 原文件仅在电脑本地版中，在线版请使用「☁️ 网盘阅读」';
    }
  });

  /* ---------- 网盘阅读按钮 ---------- */
  var cloud = window.CLOUD_LINKS || {};
  var filledCount = 0, totalCount = 0;
  Object.keys(cloud).forEach(function (k) {
    totalCount++;
    if (cloud[k]) filledCount++;
  });
  document.querySelectorAll('[data-cloud]').forEach(function (el) {
    var key = el.getAttribute('data-cloud');
    var url = cloud[key];
    if (url) {
      el.href = url;
      el.setAttribute('target', '_blank');
      el.textContent = '☁️ 网盘阅读';
    } else {
      el.classList.add('dim');
      el.textContent = '☁️ 网盘链接待添加';
      el.title = '夸克网盘链接还没填，上传 PDF 后把链接发给我就能补上';
    }
  });

  /* ---------- 在线模式提示条 ---------- */
  if (online) {
    var tipText;
    if (totalCount > 0 && filledCount === totalCount) {
      tipText = '💡 当前为「在线版」：《学霸同步笔记》PDF 已上传<strong>夸克网盘</strong>，' +
        '点下方各科卡片上的「☁️ 网盘阅读」按钮，手机上就能直接阅读。';
    } else if (filledCount > 0) {
      tipText = '💡 当前为「在线版」：《学霸同步笔记》PDF 已上传<strong>夸克网盘</strong>（部分科目），' +
        '点已上传科目的「☁️ 网盘阅读」按钮即可阅读，其余科目链接添加中。';
    } else {
      tipText = '💡 当前为「在线版」：《学霸同步笔记》PDF 将上传<strong>夸克网盘</strong>（链接添加中），' +
        '添加后点各科卡片上的「☁️ 网盘阅读」按钮即可在手机上阅读；' +
        '电脑上打开本地版还可以直接看 PDF 原文件。';
    }
    document.querySelectorAll('.local-only').forEach(function (sec) {
      var tip = document.createElement('div');
      tip.className = 'notice blue';
      tip.style.marginBottom = '14px';
      tip.innerHTML = tipText;
      sec.parentNode.insertBefore(tip, sec);
    });
  }

  /* ---------- 返回顶部 ---------- */
  var bt = document.getElementById('backTop');
  if (bt) {
    window.addEventListener('scroll', function () {
      bt.classList.toggle('show', window.scrollY > 320);
    });
    bt.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- 页脚年份 ---------- */
  document.querySelectorAll('.year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- 当前页导航高亮 ---------- */
  document.querySelectorAll('.nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href && location.pathname.indexOf(href.replace('./', '')) > -1) {
      a.classList.add('active');
    }
  });
})();
