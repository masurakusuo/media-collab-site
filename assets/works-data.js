/*
 * 登壇・出演・寄稿 の一覧データ
 * ------------------------------------------------------------
 * 新しい記事を足すときは、配列の好きな位置に1件追加するだけ（表示は日付順に自動で並ぶ）。
 *
 *   date   : "YYYY-MM" または "YYYY-MM-DD"
 *   title  : 見出し
 *   media  : 媒体名（媒体フィルタのボタンになる）
 *   type   : 寄稿 / インタビュー / 登壇・講演 / テレビ・ラジオ / 記事（自分の媒体での記事）
 *   theme  : 分野。THEMES のどれか1つ（空欄なら「すべて」にだけ出る）
 *   tags   : キーワード（#タグ）。いくつでも
 *   url    : リンク先（なければ空欄）
 *   note   : 補足（任意）
 */
window.WORKS_THEMES = [
  { name: "ファクトチェック・リテラシー", desc: "検証の考え方から画像・動画の検証ツールまで。情報氾濫にどう向き合うか。" },
  { name: "デジタルメディアとジャーナリズム", desc: "ニュースメディアのミッションとビジネスモデル、デジタル人材、信頼と収益性。" },
  { name: "ダイバーシティ", desc: "編集局の多様性、ジェンダーギャップ、LGBTQ。" },
  { name: "政治・選挙", desc: "若者の投票率、選挙報道、誰に投票すればいいかわからない人へ。" },
  { name: "キャリア", desc: "新聞記者からネットメディア創刊編集長、独立、JFC編集長まで。" }
];

window.WORKS = [
  { date: "2024-11", title: "兵庫知事選とメディア不信", media: "TBS「サンデーモーニング」", type: "テレビ・ラジオ", theme: "政治・選挙", tags: ["選挙", "メディアの信頼", "SNS"], url: "" },
  { date: "2024-11", title: "SNS発信の威力… 第三者による情報拡散なぜ浸透？ 真偽検証あり方は", media: "日本テレビ", type: "テレビ・ラジオ", theme: "ファクトチェック・リテラシー", tags: ["選挙", "SNS", "ファクトチェック"], url: "" },
  { date: "2023-06", title: "日本経済新聞への寄稿", media: "日本経済新聞", type: "寄稿", theme: "", tags: [], url: "https://www.nikkei.com/article/DGXZQOCA138N50T10C23A4000000/" },
  { date: "2022-09", title: "ニセ広告を見極める「メディアリテラシー」の高め方【音声】", media: "NewsPicks×J-WAVE", type: "インタビュー", theme: "ファクトチェック・リテラシー", tags: ["メディアリテラシー", "偽情報"], url: "https://newspicks.com/news/7515153/body/" },
  { date: "2022-08", title: "デジタル時代にメディアは「信頼」を構築できるか ―「信頼指標」から考える（前編）", media: "慶應義塾大学KGRI", type: "登壇・講演", theme: "デジタルメディアとジャーナリズム", tags: ["メディアの信頼"], url: "https://www.kgri.keio.ac.jp/news-event/126215.html" },
  { date: "2022-08", title: "デジタル時代にメディアは「信頼」を構築できるか ―「信頼指標」から考える（後編）", media: "慶應義塾大学KGRI", type: "登壇・講演", theme: "デジタルメディアとジャーナリズム", tags: ["メディアの信頼"], url: "https://www.kgri.keio.ac.jp/news-event/126389.html" },
  { date: "2022-07", title: "【フェイクニュースお悩み相談Q&A】家族が、職場で、過激な意見とどうつき合えばいい？", media: "Yahoo!ニュース", type: "寄稿", theme: "ファクトチェック・リテラシー", tags: ["偽情報", "分断"], url: "https://news.yahoo.co.jp/articles/2f34433eff4e7b88e0f45c286ec53c0561ced921" },
  { date: "2021-10", title: "「政治、よくわからない」の解決策 古田大輔さんと探る朝日東大調査", media: "朝日新聞", type: "インタビュー", theme: "政治・選挙", tags: ["選挙", "投票率"], url: "https://digital.asahi.com/articles/ASPBV51F9PBMULEI003.html" },
  { date: "2021-09", title: "「フェイクニュース」への備え ～デマや不確かな情報に惑わされないために～", media: "Yahoo!ニュース", type: "寄稿", theme: "ファクトチェック・リテラシー", tags: ["偽情報", "メディアリテラシー"], url: "https://news.yahoo.co.jp/special/fakenews/" },
  { date: "2021-09", title: "不安なときこそ\"デマ\"に注意 「フェイク・バスターズ」未公開トーク【前編】", media: "NHK", type: "テレビ・ラジオ", theme: "ファクトチェック・リテラシー", tags: ["偽情報", "新型コロナ"], url: "https://www.nhk.or.jp/gendai/comment/0016/topic022.html" },
  { date: "2021-09", title: "ワクチン情報をめぐる\"分断\" どう乗り越える 「フェイク・バスターズ」未公開トーク【後編】", media: "NHK", type: "テレビ・ラジオ", theme: "ファクトチェック・リテラシー", tags: ["ワクチン", "分断", "新型コロナ"], url: "https://www.nhk.or.jp/gendai/comment/0016/topic023.html" },
  { date: "2021-09", title: "第1回 自殺報道のあり方を考える勉強会 ～報道の自由と自殺リスクの狭間で～", media: "いのち支える自殺対策推進センター", type: "登壇・講演", theme: "デジタルメディアとジャーナリズム", tags: ["報道倫理"], url: "https://jscp.or.jp/action/jisatsu_benkyokai_report0810.html" },
  { date: "2021-07", title: "ワクチンデマ対策シンポジウム", media: "セーファーインターネット協会", type: "登壇・講演", theme: "ファクトチェック・リテラシー", tags: ["ワクチン", "偽情報", "新型コロナ"], url: "https://www.saferinternet.or.jp/event/vaccinesympo_202107/" },
  { date: "2021-06", title: "デジタル化が遅れた日本のニュースメディアが「生き残る道」", media: "COURRIER Japon", type: "インタビュー", theme: "デジタルメディアとジャーナリズム", tags: ["ビジネスモデル", "デジタル化"], url: "https://courrier.jp/news/archives/249384/" },
  { date: "2021-05-26", title: "あなたのメディアは、誰に、何の価値を提供しますか？ 古田大輔氏インタビュー 前編【デジタル人材戦略】", media: "メディアテクノロジー", type: "インタビュー", theme: "デジタルメディアとジャーナリズム", tags: ["デジタル人材", "ビジネスモデル"], url: "https://www.mediatechnology.jp/entry/2021/05/26/110000" },
  { date: "2021-05-27", title: "米メディアで編集長格のプロダクト責任者も 古田大輔氏インタビュー 後編【デジタル人材戦略】", media: "メディアテクノロジー", type: "インタビュー", theme: "デジタルメディアとジャーナリズム", tags: ["デジタル人材"], url: "https://www.mediatechnology.jp/entry/2021/05/27/110000" },
  { date: "2021-05-10", title: "インターネットから「ギフト」を受け取るには？ ―― Google News Labでの活動", media: "メディアテクノロジー", type: "インタビュー", theme: "キャリア", tags: ["Google News Lab", "デジタル人材"], url: "https://www.mediatechnology.jp/entry/2021/05/10/114856" },
  { date: "2021-02", title: "ただの批判を\"炎上\"に仕立て上げる、PV稼ぎメディアの存在 そして「炎上とフェイクがつながったビジネス」が生まれるワケ", media: "logmi", type: "登壇・講演", theme: "デジタルメディアとジャーナリズム", tags: ["炎上", "PV至上主義", "偽情報"], url: "https://logmi.jp/business/articles/324002" },
  { date: "2021-02", title: "世界で一番出回っている、ワクチンに関する荒唐無稽なデマ 「信じたい人は、どんなフェイクでも信じたがる」という事実", media: "logmi", type: "登壇・講演", theme: "ファクトチェック・リテラシー", tags: ["ワクチン", "偽情報"], url: "https://logmi.jp/business/articles/324003" },
  { date: "2021-02", title: "\"原則オフレコ\"のClubhouseでも起こりうる、炎上事案 「報道に値する」と認識すれば、報道機関は記事を出す", media: "logmi", type: "登壇・講演", theme: "デジタルメディアとジャーナリズム", tags: ["炎上", "報道倫理"], url: "https://logmi.jp/business/articles/324004" },
  { date: "2021-02", title: "高く評価された、ある企業の\"自社に向けられたデマ\"への対応 「発信者を批判する」以外にも、スマートなやり方は存在する", media: "logmi", type: "登壇・講演", theme: "ファクトチェック・リテラシー", tags: ["偽情報", "企業広報"], url: "https://logmi.jp/business/articles/324005" },
  { date: "2021-02", title: "口コミサイトへの書き込み問題、企業はどう対応すべき？ SNSより影響の大きい「Googleマップ」の永続性", media: "logmi", type: "登壇・講演", theme: "ファクトチェック・リテラシー", tags: ["企業広報", "SNS"], url: "https://logmi.jp/business/articles/324024" },
  { date: "2021-02", title: "東洋経済Brand Lab Live「2021年、激動の時代に加速するメディアの変化とは？」", media: "東洋経済", type: "登壇・講演", theme: "デジタルメディアとジャーナリズム", tags: ["ビジネスモデル"], url: "https://toyokeizai.smartseminar.jp/public/seminar/view/3659" },
  { date: "2020-11-11", title: "「首相発言のファクトチェックを」 ジャーナリストの古田大輔さんが感じる「恐怖」", media: "毎日新聞", type: "インタビュー", theme: "ファクトチェック・リテラシー", tags: ["ファクトチェック", "政治"], url: "https://mainichi.jp/articles/20201111/k00/00m/010/098000c" },
  { date: "2020-10", title: "ニュースメディアが生き残る道は？ 古田大輔が語るジャーナリズムの今と未来", media: "Forbes JAPAN", type: "インタビュー", theme: "デジタルメディアとジャーナリズム", tags: ["ビジネスモデル", "メディアの信頼"], url: "https://forbesjapan.com/articles/detail/37952/5/1/1" },
  { date: "2020-09", title: "「才能を生かせない」テレビ局から優秀な人材が離れる理由", media: "logmi", type: "登壇・講演", theme: "デジタルメディアとジャーナリズム", tags: ["デジタル人材"], url: "https://logmi.jp/business/articles/323361" },
  { date: "2020-09", title: "ネット社会を勝ち抜く「ファクトスキル」の鍛え方", media: "日経doors", type: "インタビュー", theme: "ファクトチェック・リテラシー", tags: ["メディアリテラシー"], url: "https://doors.nikkei.com/atcl/feature/19/082800084/091600003/" },
  { date: "2020-07-08", title: "東京都知事選「投票率」55％…前回よりも投票率が下がった\"大きな理由\"は？", media: "マイナビニュース", type: "インタビュー", theme: "政治・選挙", tags: ["選挙", "投票率"], url: "https://news.mynavi.jp/article/20200708-1125592/" },
  { date: "2019-12", title: "電通PRが選ぶこれから予測「完全没入できる世界で遊ぶことは、もはや夢でなく近未来」", media: "電通PR", type: "寄稿", theme: "デジタルメディアとジャーナリズム", tags: ["テクノロジー"], url: "https://www.dentsu-pr.co.jp/assets/uploads/2019/12/%e3%81%93%e3%82%8c%e3%81%8b%e3%82%89%e4%ba%88%e6%b8%ac%e2%91%a1.pdf" },
  { date: "2019-10", title: "参院選報道から考える 新聞がやるべきたった一つのこと ―― 低投票率世代に選挙記事を届けるには", media: "新聞研究（10月号）", type: "寄稿", theme: "政治・選挙", tags: ["選挙", "投票率", "若者"], url: "https://www.pressnet.or.jp/publication/kenkyu/190927_13161.html" },
  { date: "2019-10", title: "ネット時代のニュースメディアは「信頼」と「コラボレーション」で現状を打破できるか #ネットメディアの現在地", media: "", type: "寄稿", theme: "デジタルメディアとジャーナリズム", tags: ["メディアの信頼", "コラボレーション"], url: "" },
  { date: "2019-08", title: "同性婚に消極的な自民党で起こる「地殻変動」", media: "文藝春秋（9月号）", type: "寄稿", theme: "ダイバーシティ", tags: ["LGBTQ", "同性婚", "政治"], url: "https://bungeishunju.com/n/n919d3652c013" },
  { date: "2019-07-14", title: "昨日読んだ文庫『敗戦後論とレイテ戦記』", media: "毎日新聞", type: "寄稿", theme: "", tags: ["書評"], url: "" },
  { date: "2017-12", title: "独立メディア塾", media: "独立メディア塾", type: "登壇・講演", theme: "デジタルメディアとジャーナリズム", tags: [], url: "http://previous.mediajuku.com/?p=10082" },
  { date: "2017-10", title: "メディアは創刊の理念が大切である「メディアは今後どう進化するのか？ クオリティ・信頼性はどうあるべきか？」", media: "ICC", type: "登壇・講演", theme: "デジタルメディアとジャーナリズム", tags: ["メディアの信頼", "BuzzFeed"], url: "https://industry-co-creation.com/industry-trend/23360" },
  { date: "2017-03", title: "コンテンツは人と人をつなげるもの：クリエイティブ塾 Vol.9「BuzzFeed Japan」創刊編集長・古田大輔さん", media: "ライフハッカー", type: "登壇・講演", theme: "キャリア", tags: ["BuzzFeed"], url: "https://www.lifehacker.jp/2017/03/170319_creative_daisuke_furuta.html" },
  { date: "2015-09", title: "安保法案反対デモの参加者数は捏造？ 群衆の正確な数え方とは", media: "withnews", type: "記事", theme: "ファクトチェック・リテラシー", tags: ["ファクトチェック", "データ"], url: "https://withnews.jp/article/f0150910000qqf2150907000qqF0W0090401qq000012482A" },
  { date: "2015-09", title: "ニューズピックス 佐々木編集長が見つけた「勝利の方程式」", media: "withnews", type: "記事", theme: "デジタルメディアとジャーナリズム", tags: ["ビジネスモデル"], url: "https://withnews.jp/article/f0150904001qq000000000000000W0090901qq000012458A" },
  { date: "2015-03", title: "マーケティングジャーナル掲載論文", media: "マーケティングジャーナル（J-STAGE）", type: "寄稿", theme: "デジタルメディアとジャーナリズム", tags: [], url: "https://www.jstage.jst.go.jp/article/amr/14/4/14_140402/_pdf/-char/ja" },
  { date: "2014-12", title: "得票率1割台で政権取る可能性 グラフで見る衆院選", media: "withnews", type: "記事", theme: "政治・選挙", tags: ["選挙", "データ"], url: "https://withnews.jp/article/f0141202002qq000000000000000W0090101qq000011207A" },
  { date: "2014-04", title: "第3回 企画術 | ブランドコンテンツ", media: "東洋経済オンライン", type: "寄稿", theme: "デジタルメディアとジャーナリズム", tags: [], url: "https://toyokeizai.net/articles/-/33719" },
  { date: "2014-02", title: "浅田真央 ラストダンス", media: "朝日新聞デジタル", type: "記事", theme: "", tags: ["スポーツ"], url: "http://www.asahi.com/olympics/sochi2014/lastdance/" }
];
