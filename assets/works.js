/* 登壇・出演・寄稿 一覧：分野・種別・媒体・キーワードで絞り込み */
(function () {
  var ALL = "すべて";
  var TYPE_ORDER = ["寄稿", "インタビュー", "登壇・講演", "テレビ・ラジオ", "記事"];
  var MIN_TAG = 2; // この件数以上あるキーワードだけをタグ一覧に出す

  var works = (window.WORKS || []).slice().sort(function (a, b) {
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  });
  var themes = window.WORKS_THEMES || [];
  var state = { theme: ALL, type: ALL, media: ALL, tag: "", q: "" };

  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  var count = function (key, val) {
    return works.filter(function (w) { return key === "tags" ? w.tags.indexOf(val) > -1 : w[key] === val; }).length;
  };
  var fmtDate = function (d) {
    var p = d.split("-");
    return p[0] + "年" + Number(p[1]) + "月" + (p[2] ? Number(p[2]) + "日" : "");
  };

  /* ---- URL のハッシュで状態を共有（例: works.html#theme=政治・選挙） ---- */
  function readHash() {
    var h = decodeURIComponent(location.hash.replace(/^#/, ""));
    h.split("&").forEach(function (kv) {
      var p = kv.split("=");
      if (p.length === 2 && p[0] in state) state[p[0]] = p[1];
    });
  }
  function writeHash() {
    var parts = [];
    ["theme", "type", "media", "tag"].forEach(function (k) {
      if (state[k] && state[k] !== ALL) parts.push(k + "=" + state[k]);
    });
    history.replaceState(null, "", parts.length ? "#" + encodeURI(parts.join("&")) : location.pathname);
  }

  /* ---- フィルタ UI ---- */
  function btn(label, n, pressed, onClick, cls) {
    var b = el("button", cls || "w-btn");
    b.type = "button";
    b.setAttribute("aria-pressed", pressed ? "true" : "false");
    b.appendChild(document.createTextNode(label));
    if (n != null) b.appendChild(el("span", "w-n", String(n)));
    b.addEventListener("click", onClick);
    return b;
  }

  function renderFilters() {
    var t = $("w-theme"); t.innerHTML = "";
    t.appendChild(btn(ALL, works.length, state.theme === ALL, function () { set("theme", ALL); }));
    themes.forEach(function (th) {
      var n = count("theme", th.name);
      if (n) t.appendChild(btn(th.name, n, state.theme === th.name, function () { set("theme", th.name); }));
    });
    var cur = themes.filter(function (th) { return th.name === state.theme; })[0];
    $("w-theme-desc").textContent = cur ? cur.desc : "";

    var ty = $("w-type"); ty.innerHTML = "";
    ty.appendChild(btn(ALL, null, state.type === ALL, function () { set("type", ALL); }));
    TYPE_ORDER.forEach(function (name) {
      var n = count("type", name);
      if (n) ty.appendChild(btn(name, n, state.type === name, function () { set("type", name); }));
    });

    var sel = $("w-media");
    if (!sel.options.length) {
      var medias = {};
      works.forEach(function (w) { if (w.media) medias[w.media] = (medias[w.media] || 0) + 1; });
      var opt = el("option", null, "すべての媒体"); opt.value = ALL; sel.appendChild(opt);
      Object.keys(medias).sort(function (a, b) { return medias[b] - medias[a] || a.localeCompare(b, "ja"); })
        .forEach(function (m) { var o = el("option", null, m + "（" + medias[m] + "）"); o.value = m; sel.appendChild(o); });
      sel.addEventListener("change", function () { set("media", sel.value); });
    }
    sel.value = state.media;

    var tg = $("w-tags"); tg.innerHTML = "";
    var tags = {};
    works.forEach(function (w) { w.tags.forEach(function (x) { tags[x] = (tags[x] || 0) + 1; }); });
    Object.keys(tags).filter(function (x) { return tags[x] >= MIN_TAG || x === state.tag; })
      .sort(function (a, b) { return tags[b] - tags[a] || a.localeCompare(b, "ja"); })
      .forEach(function (x) {
        tg.appendChild(btn("#" + x, tags[x], state.tag === x, function () { set("tag", state.tag === x ? "" : x); }, "w-tag"));
      });
  }

  /* ---- 一覧 ---- */
  function match(w) {
    if (state.theme !== ALL && w.theme !== state.theme) return false;
    if (state.type !== ALL && w.type !== state.type) return false;
    if (state.media !== ALL && w.media !== state.media) return false;
    if (state.tag && w.tags.indexOf(state.tag) < 0) return false;
    if (state.q) {
      var hay = (w.title + " " + w.media + " " + w.tags.join(" ")).toLowerCase();
      if (hay.indexOf(state.q.toLowerCase()) < 0) return false;
    }
    return true;
  }

  function renderList() {
    var list = $("w-list"); list.innerHTML = "";
    var hits = works.filter(match);
    $("w-count").textContent = hits.length + "件" + (hits.length !== works.length ? "（全" + works.length + "件）" : "");
    $("w-empty").hidden = hits.length > 0;

    var byYear = {};
    hits.forEach(function (w) { var y = w.date.slice(0, 4); (byYear[y] = byYear[y] || []).push(w); });
    Object.keys(byYear).sort().reverse().forEach(function (y) {
      var sec = el("section", "w-year"); sec.setAttribute("aria-label", y + "年");
      sec.appendChild(el("div", "w-year-num", y));
      var ol = el("ol", "w-items");
      byYear[y].forEach(function (w) {
        var li = el("li", "w-item");
        var meta = el("div", "w-meta");
        var time = el("time", null, fmtDate(w.date)); time.setAttribute("datetime", w.date); meta.appendChild(time);
        meta.appendChild(el("span", "w-type", w.type));
        if (w.media) meta.appendChild(el("span", "w-media", w.media));
        li.appendChild(meta);

        var h = el("h4", "w-title");
        if (w.url) {
          var a = el("a", null, w.title); a.href = w.url; a.target = "_blank"; a.rel = "noopener";
          h.appendChild(a);
        } else { h.textContent = w.title; }
        li.appendChild(h);
        if (w.note) li.appendChild(el("p", "w-note", w.note));

        if (w.theme || w.tags.length) {
          var tags = el("div", "w-itags");
          if (w.theme) tags.appendChild(btn(w.theme, null, state.theme === w.theme, function () { set("theme", w.theme); }, "w-itheme"));
          w.tags.forEach(function (x) {
            tags.appendChild(btn("#" + x, null, state.tag === x, function () { set("tag", state.tag === x ? "" : x); }, "w-itag"));
          });
          li.appendChild(tags);
        }
        ol.appendChild(li);
      });
      sec.appendChild(ol);
      list.appendChild(sec);
    });
  }

  function set(key, val) {
    state[key] = val;
    writeHash();
    render();
  }
  function render() { renderFilters(); renderList(); }

  $("w-q").addEventListener("input", function (e) { state.q = e.target.value.trim(); renderList(); });
  $("w-reset").addEventListener("click", function () {
    state = { theme: ALL, type: ALL, media: ALL, tag: "", q: "" };
    $("w-q").value = ""; writeHash(); render();
  });

  readHash();
  render();
})();
