/* 周璐学霸之路 · 英语听力播放器（自动生成） */
(function () {
  'use strict';
  var TRACKS = [
    { i: "01", f: "01.mp3", n: "Starter P3 Activity 2", g: "Starter · 预备篇" },
    { i: "02", f: "02.mp3", n: "Starter P3 Activity 3", g: "Starter · 预备篇" },
    { i: "03", f: "03.mp3", n: "Starter P5 Activity 10", g: "Starter · 预备篇" },
    { i: "04", f: "04.mp3", n: "Starter P6 Know your school 1", g: "Starter · 预备篇" },
    { i: "05", f: "05.mp3", n: "Starter P9 Go to know each other 1", g: "Starter · 预备篇" },
    { i: "06", f: "06.mp3", n: "Starter P10 Go to know each other 4", g: "Starter · 预备篇" },
    { i: "07", f: "07.mp3", n: "Unit 1 单词", g: "Unit 1 · 第1单元" },
    { i: "08", f: "08.mp3", n: "Unit 1 P16 Activity 2", g: "Unit 1 · 第1单元" },
    { i: "09", f: "09.mp3", n: "Unit 1 P20 Activity 8", g: "Unit 1 · 第1单元" },
    { i: "10", f: "10.mp3", n: "Unit 1 P21 Activity 1", g: "Unit 1 · 第1单元" },
    { i: "11", f: "11.mp3", n: "Unit 1 P21 Phonetics in use P111 Practise more", g: "Unit 1 · 第1单元" },
    { i: "12", f: "12.mp3", n: "Unit 1 P22 Activity 2", g: "Unit 1 · 第1单元" },
    { i: "13", f: "13.mp3", n: "Unit 1 P23 Activity 3", g: "Unit 1 · 第1单元" },
    { i: "14", f: "14.mp3", n: "Unit 1 P24 Activity 2", g: "Unit 1 · 第1单元" },
    { i: "15", f: "15.mp3", n: "Unit 2 单词", g: "Unit 2 · 第2单元" },
    { i: "16", f: "16.mp3", n: "Unit 2 P32 Activity 2", g: "Unit 2 · 第2单元" },
    { i: "17", f: "17.mp3", n: "Unit 2 P36 Activity 8", g: "Unit 2 · 第2单元" },
    { i: "18", f: "18.mp3", n: "Unit 2 P37 Activity 1", g: "Unit 2 · 第2单元" },
    { i: "19", f: "19.mp3", n: "Unit 2 P37 Phonetics in use P111 Practise more", g: "Unit 2 · 第2单元" },
    { i: "20", f: "20.mp3", n: "Unit 2 P38 Activity 2", g: "Unit 2 · 第2单元" },
    { i: "21", f: "21.mp3", n: "Unit 2 P39 Activity 3", g: "Unit 2 · 第2单元" },
    { i: "22", f: "22.mp3", n: "Unit 2 P40 Activity 4", g: "Unit 2 · 第2单元" },
    { i: "23", f: "23.mp3", n: "Unit 3 单词", g: "Unit 3 · 第3单元" },
    { i: "24", f: "24.mp3", n: "Unit 3 P48 Activity 2", g: "Unit 3 · 第3单元" },
    { i: "25", f: "25.mp3", n: "Unit 3 P52 Activity 8", g: "Unit 3 · 第3单元" },
    { i: "26", f: "26.mp3", n: "Unit 3 P53 Activity 1", g: "Unit 3 · 第3单元" },
    { i: "27", f: "27.mp3", n: "Unit 3 P53 Phonetics in use P111 Practise more", g: "Unit 3 · 第3单元" },
    { i: "28", f: "28.mp3", n: "Unit 3 P54 Activity 2", g: "Unit 3 · 第3单元" },
    { i: "29", f: "29.mp3", n: "Unit 3 P55 Activity 3", g: "Unit 3 · 第3单元" },
    { i: "30", f: "30.mp3", n: "Unit 3 P56 Activity 2", g: "Unit 3 · 第3单元" },
    { i: "31", f: "31.mp3", n: "Unit 4 单词", g: "Unit 4 · 第4单元" },
    { i: "32", f: "32.mp3", n: "Unit 4 P64 Activity 2", g: "Unit 4 · 第4单元" },
    { i: "33", f: "33.mp3", n: "Unit 4 P68 Activity 8", g: "Unit 4 · 第4单元" },
    { i: "34", f: "34.mp3", n: "Unit 4 P69 Activity 1", g: "Unit 4 · 第4单元" },
    { i: "35", f: "35.mp3", n: "Unit 4 P69 Phonetics in use P111 Practise more", g: "Unit 4 · 第4单元" },
    { i: "36", f: "36.mp3", n: "Unit 4 P70 Activity 2", g: "Unit 4 · 第4单元" },
    { i: "37", f: "37.mp3", n: "Unit 4 P71 Activity 3", g: "Unit 4 · 第4单元" },
    { i: "38", f: "38.mp3", n: "Unit 4 P72 Activity 1", g: "Unit 4 · 第4单元" },
    { i: "39", f: "39.mp3", n: "Unit 5 单词", g: "Unit 5 · 第5单元" },
    { i: "40", f: "40.mp3", n: "Unit 5 P81 Activity 2", g: "Unit 5 · 第5单元" },
    { i: "41", f: "41.mp3", n: "Unit 5 P84 Activity 8", g: "Unit 5 · 第5单元" },
    { i: "42", f: "42.mp3", n: "Unit 5 P85 Activity 1", g: "Unit 5 · 第5单元" },
    { i: "43", f: "43.mp3", n: "Unit 5 P85 Phonetics in use P111 Practise more", g: "Unit 5 · 第5单元" },
    { i: "44", f: "44.mp3", n: "Unit 5 P86 Activity 2", g: "Unit 5 · 第5单元" },
    { i: "45", f: "45.mp3", n: "Unit 5 P87 Activity 3", g: "Unit 5 · 第5单元" },
    { i: "46", f: "46.mp3", n: "Unit 5 P88 Activity 2", g: "Unit 5 · 第5单元" },
    { i: "47", f: "47.mp3", n: "Unit 6 单词", g: "Unit 6 · 第6单元" },
    { i: "48", f: "48.mp3", n: "Unit 6 P96 Activity 2", g: "Unit 6 · 第6单元" },
    { i: "49", f: "49.mp3", n: "Unit 6 P101 Activity 1", g: "Unit 6 · 第6单元" },
    { i: "50", f: "50.mp3", n: "Unit 6 P101 Phonetics in use P111 Practise more", g: "Unit 6 · 第6单元" },
    { i: "51", f: "51.mp3", n: "Unit 6 P102 Activity 2", g: "Unit 6 · 第6单元" },
    { i: "52", f: "52.mp3", n: "Unit 6 P103 Activity 3", g: "Unit 6 · 第6单元" },
    { i: "53", f: "53.mp3", n: "Unit 6 P104 Activity 2", g: "Unit 6 · 第6单元" },
  ];
  var idx = -1, audio = null;
  var listEl = document.getElementById('trackList');
  var playBtn = document.getElementById('btnPlay');
  var prevBtn = document.getElementById('btnPrev');
  var nextBtn = document.getElementById('btnNext');
  var seek = document.getElementById('seek');
  var curT = document.getElementById('curTime');
  var durT = document.getElementById('durTime');
  var nowTitle = document.getElementById('nowTitle');
  var nowMeta = document.getElementById('nowMeta');

  function fmt(s) {
    if (!isFinite(s) || s < 0) s = 0;
    var m = Math.floor(s / 60), sec = Math.floor(s % 60);
    return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
  }
  function markPlaying() {
    var items = listEl.querySelectorAll('.track-item');
    items.forEach(function (it) { it.classList.remove('playing'); });
    if (idx >= 0 && idx < items.length) items[idx].classList.add('playing');
  }
  function load(i) {
    if (i < 0 || i >= TRACKS.length) return;
    idx = i;
    var t = TRACKS[idx];
    nowTitle.textContent = t.n;
    nowMeta.textContent = t.g + ' · ' + (idx + 1) + ' / ' + TRACKS.length;
    if (!audio) {
      audio = new Audio();
      audio.addEventListener('timeupdate', function () {
        if (!audio.duration) return;
        seek.value = (audio.currentTime / audio.duration) * 100;
        curT.textContent = fmt(audio.currentTime);
        durT.textContent = fmt(audio.duration);
      });
      audio.addEventListener('ended', function () { playNext(true); });
      audio.addEventListener('play', function () { playBtn.textContent = '❚❚'; });
      audio.addEventListener('pause', function () { playBtn.textContent = '▶'; });
    }
    audio.src = '../audio/' + t.f;
    markPlaying();
  }
  function playIdx(i) { load(i); audio.play(); }
  function playNext(auto) {
    var n = idx + 1;
    if (n >= TRACKS.length) { if (!auto) load(0); return; }
    load(n); audio.play();
  }
  function playPrev() {
    var n = idx - 1;
    if (n < 0) n = TRACKS.length - 1;
    load(n); audio.play();
  }
  playBtn.addEventListener('click', function () {
    if (idx < 0) { load(0); }
    if (audio.paused) audio.play(); else audio.pause();
  });
  prevBtn.addEventListener('click', playPrev);
  nextBtn.addEventListener('click', function () { playNext(false); });
  seek.addEventListener('input', function () {
    if (audio && audio.duration) audio.currentTime = (seek.value / 100) * audio.duration;
  });
  listEl.addEventListener('click', function (e) {
    var it = e.target.closest('.track-item');
    if (!it) return;
    playIdx(parseInt(it.getAttribute('data-idx'), 10) - 1);
  });
  /* 生成列表 */
  var html = '';
  var lastGroup = null;
  TRACKS.forEach(function (t) {
    if (t.g !== lastGroup) { html += '<div class="track-group">🎧 ' + t.g + '</div>'; lastGroup = t.g; }
    html += '<div class="track-item" data-idx="' + t.i + '"><span class="ti-idx">' + t.i + '</span><span class="ti-name">' + t.n + '</span></div>';
  });
  listEl.innerHTML = html;
})();
