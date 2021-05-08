$('#tab-contents .tab[id != "tab1"]').hide();
// idがtab-contents、tabクラスのidがtab1でないものは表示されない(hideメソッド)

$('#tab-menu a').on('click', function(event) {
// 下記はtab-menuのa(=link)をクリックした時のイベント
  $("#tab-contents .tab").hide();
  // idがtab-contentsのtabクラスを持つ要素を全て隠す(tab1も隠れる)
  $("#tab-menu .active").removeClass("active");
  // tab-menuのactiveクラスの要素もなくなる(TAB1も他のタブと同じ色になる)
  $(this).addClass("active");
  // thisは親要素をみる＝tab-menuのa(=link)をクリックした時
  // その要素にactiveが追加される＝#tab-menu .activeが適応され、クリックされたリンクの色が変わる
  $($(this).attr("href")).show();
  // .attr()はHTMLの要素の属性を取得したり設定できるメソッド
  // .show()は要素を表示するメソッド
  // ＝取得したhref属性の中身が表示される
  // thisは親要素をみる＝tab-menuのa(=link)をクリックした時
  // hrefの中身(クリックされた#tab1~4のどれか)が表示される
  event.preventDefault();
});