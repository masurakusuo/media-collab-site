/*
 * 登壇・出演・寄稿 の一覧データ
 * ------------------------------------------------------------
 * 新しいものを足すときは WORKS の好きな位置に1行追加するだけ（表示は日付順に自動で並ぶ）。
 *
 *   date   : "YYYY-MM" または "YYYY-MM-DD"
 *   title  : 見出し
 *   media  : 媒体・主催者名（媒体プルダウンの選択肢になる）
 *   type   : 寄稿 / インタビュー / 登壇・講演 / テレビ・ラジオ / YouTube・Podcast / 記者として執筆 / 調査・監修
 *   theme  : 分野。WORKS_THEMES の name のどれか1つ（空欄なら「すべて」にだけ出る）
 *   tags   : キーワード（#タグ）。いくつでも
 *   url    : リンク先（なければ空欄）
 *   note   : 補足（任意）
 *
 * WORKS_THEMES の picks は、分野を選んだときに一覧の上に出る「主な記事」。
 */
window.WORKS_PROFILES = [
  { name: "日本ファクトチェックセンター（JFC）", url: "https://www.factcheckcenter.jp/author/daisuke/" },
  { name: "note", url: "https://note.com/masurakusuo" },
  { name: "BuzzFeed Japan", url: "https://www.buzzfeed.com/jp/daisukefuruta" },
  { name: "Yahoo!ニュース エキスパート", url: "https://news.yahoo.co.jp/expert/authors/furutadaisuke" }
];

window.WORKS_THEMES = [
  {
    name: "ファクトチェック・リテラシー",
    desc: "検証の考え方から画像・動画の検証ツールまで。情報の氾濫にどう向き合うか。",
    picks: [
      { title: "JFCファクトチェック講座", media: "日本ファクトチェックセンター", url: "https://factcheckcenter.jp/m/m2663551b4f4e", desc: "ファクトチェックの基本的な考え方から、画像や動画の検証ツールの使い方まで実践的に解説した連載。" },
      { title: "JFCリテラシー講座", media: "日本ファクトチェックセンター", url: "https://factcheckcenter.jp/m/meb15e342977d", desc: "ファクトチェックより広い観点で、情報の氾濫にどう対応するか。リテラシーの重要性とポイントを解説。" }
    ]
  },
  {
    name: "デジタルメディアとジャーナリズム",
    desc: "ニュースメディアのミッションとビジネスモデル、デジタル人材、ローカルメディア、信頼と収益性。",
    picks: [
      { title: "イノベーション・リポート（連載）", media: "note", url: "https://note.com/masurakusuo/m/m72b6dbabc36b", desc: "ニューヨーク・タイムズのV字回復の起点となった必読のリポートを解説。" },
      { title: "あなたのメディアは、誰に、何の価値を提供しますか？【デジタル人材戦略】前編", media: "Media × Tech", url: "https://www.mediatechnology.jp/entry/2021/05/26/110000", desc: "米国のジャーナリズム大学院で学んだ、メディアのミッションとビジネスモデル。" },
      { title: "米メディアで編集長格のプロダクト責任者も【デジタル人材戦略】後編", media: "Media × Tech", url: "https://www.mediatechnology.jp/entry/2021/05/27/110000", desc: "デジタル人材戦略について。" },
      { title: "ジャーナリスト古田大輔が語る、“ローカルからの情報発信”が必要な理由", media: "Qualities", url: "https://qualities.jp/article/furuta", desc: "ローカルメディアの重要性。" },
      { title: "【特別寄稿】「ローカルから始まる、情報発信革命」", media: "HASH#FUKUOKA", url: "https://www.city.fukuoka.lg.jp/hash/news/archives/180.html", desc: "ローカルメディアの重要性。" },
      { title: "「メディアは残るが、ニュースメディアは危機的」", media: "ハフポスト日本版", url: "https://www.huffingtonpost.jp/entry/daisuke-furuta_jp_5dc26f6ee4b0f5dcf8fd4171", desc: "ニュースメディアの危機とPV重視の問題点。" },
      { title: "爆速で成長したBuzzFeed Japan創刊編集長を退任します", media: "BuzzFeed Japan", url: "https://www.buzzfeed.com/jp/daisukefuruta/from-bfj-to-media-collab", desc: "BuzzFeedでの3年半を振り返り、ニュースメディアの根本課題「収益性と信頼性」について。" }
    ]
  },
  {
    name: "ダイバーシティ",
    desc: "編集局の多様性、ジェンダーギャップ、LGBTQ。",
    picks: [
      { title: "日本のジェンダー平等は実現するのか？ 北欧の成功からひもとく道筋と可能性", media: "MASHING UP", url: "https://www.mashingup.jp/2023/04/268948_nordic_talks.html", desc: "ジェンダーギャップ指数1位アイスランド、2位フィンランドの大手メディア編集長だった女性2人に、日本メディアの課題を聞いた。" },
      { title: "「長時間労働が当たり前」は言い訳「BuzzFeed」が“多様性”を大事にする理由", media: "ウートピ", url: "https://wotopi.jp/archives/70859", desc: "BuzzFeedでの実例をもとに、編集局における多様性の重要性と実践方法。" },
      { title: "ゲイとトランスジェンダーと母と子 新しいファミリーが生まれた", media: "BuzzFeed Japan", url: "https://www.buzzfeed.com/jp/daisukefuruta/congrats-on-new-baby", desc: "新聞記者時代から取材してきたLGBTQについて。" },
      { title: "なぜ、同性婚を支持する人が過半数を超えても、政治が変わらないのか", media: "note", url: "https://note.com/masurakusuo/n/n8dd6cd40b014", desc: "" }
    ]
  },
  {
    name: "政治・選挙",
    desc: "若者の投票率、低投票率とメディアの役割、誰に投票すればいいかわからない人へ。",
    picks: [
      { title: "「政治に対して声を上げない若者」を作ったのは誰か――都知事選と出てこないキッズ", media: "QJWeb", url: "https://qjweb.jp/journal/27574/", desc: "若者世代の投票率を、日本と海外で比較。" },
      { title: "「投票しても何も変わらない」というあなたへ。日本の民主主義は「はりぼて」になっていないか", media: "QJWeb", url: "https://qjweb.jp/journal/40531/", desc: "低投票率とメディアの役割。" },
      { title: "支持する政治家も政党もない人は、どうやって投票先を決めたら良いか（参考サイトつき）", media: "note", url: "https://note.com/masurakusuo/n/n96c9aad0377c", desc: "選挙で誰に投票すれば良いかわからない人のために。" }
    ]
  },
  {
    name: "キャリア",
    desc: "新聞記者からネットメディア創刊編集長、独立、Google News Labフェロー、JFC編集長まで。",
    picks: [
      { title: "新聞記者からのキャリア構築 どうやって社内転職からGoogle、その先に至ったか", media: "D-JEDI", url: "https://d-jedi.jp/n/n9dc0b399a938", desc: "日本の新聞記者→米ネットメディア日本版創刊編集長→独立→Google News Labフェロー→JFC編集長と渡り歩いたキャリア。" }
    ]
  },
  {
    name: "国際・社会ほか",
    desc: "新聞記者時代の国際報道や、上記以外の社会の話題。",
    picks: []
  }
];

var FC = "ファクトチェック・リテラシー", DM = "デジタルメディアとジャーナリズム", DV = "ダイバーシティ",
    PE = "政治・選挙", CA = "キャリア", ETC = "国際・社会ほか";

window.WORKS = [
  // ---- 2026 ----
  { date: "2026-07", title: "Voters 92号", media: "明るい選挙推進協会", type: "寄稿", theme: PE, tags: ["選挙"], url: "https://www.akaruisenkyo.or.jp/061mag/11641/" },
  { date: "2026-06", title: "辞めマスコミ本音座談会！どうなる？マスメディアの未来【ReHacQ生配信】", media: "ReHacQ", type: "YouTube・Podcast", theme: DM, tags: ["マスメディア"], url: "https://www.youtube.com/watch?v=OPGzdWsRoe0" },
  { date: "2026-05", title: "「偽情報に惑わされないために」日本ファクトチェックセンターの古田大輔編集長が講演（西日本政経懇話会）", media: "西日本新聞", type: "登壇・講演", theme: FC, tags: ["偽情報"], url: "https://www.nishinippon.co.jp/item/1495303/" },
  { date: "2026-04", title: "電通総研コンパス vol.17「情報インテグリティ調査2026」結果を発表", media: "電通総研", type: "調査・監修", theme: FC, tags: ["調査", "偽情報"], url: "https://www.dentsusoken.com/news/release/2026/0402.html" },
  { date: "2026-03", title: "“信頼”も生成できるのか？ AI・ディープフェイク時代に問われる広報の真価", media: "電通PRコンサルティング", type: "インタビュー", theme: FC, tags: ["生成AI", "企業広報"], url: "https://www.dentsuprc.co.jp/magazine/ai_deepfake_pr/" },
  { date: "2026-02", title: "偽情報から企業と個人を守るには――AI時代に必須の「ファクトチェック」教養", media: "Web担当者Forum", type: "登壇・講演", theme: FC, tags: ["偽情報", "生成AI", "企業広報"], url: "https://webtan.impress.co.jp/e/2026/02/04/51844" },
  { date: "2026-02", title: "「政治に熱心になりすぎないのが、最大の対策」その理由とは？ SNS情報との向き合い方（石戸諭さんと）", media: "選挙ドットコムちゃんねる", type: "YouTube・Podcast", theme: PE, tags: ["選挙", "SNS"], url: "https://www.youtube.com/watch?v=M4h8RhY3GC4", note: "記事版：Yahoo!ニュース（選挙ドットコム）" },
  { date: "2026-01", title: "選挙などの偽情報に惑わされないためには（佐賀政経懇話会 講演採録）", media: "佐賀新聞", type: "登壇・講演", theme: FC, tags: ["選挙", "偽情報"], url: "https://www.saga-s.co.jp/articles/-/1639109" },
  // ---- 2025 ----
  { date: "2025-12", title: "＜日胆 はなし抄＞自分自身のバイアス 疑う姿勢が大切（道新苫小牧政経文化懇話会）", media: "北海道新聞", type: "登壇・講演", theme: FC, tags: ["メディアリテラシー"], url: "https://www.hokkaido-np.co.jp/article/1248892/" },
  { date: "2025-10", title: "フェイクニュースどう見分ける？ 求められる客観的科学的根拠、信頼性", media: "産経新聞", type: "インタビュー", theme: FC, tags: ["ファクトチェック", "教育"], url: "https://www.sankei.com/article/20251015-66F5XTVHNBMGJN5JRQF3L4YNUA/" },
  { date: "2025-10", title: "ぼくがフェイクニュースといたちごっこを続ける理由 第8回 ファクトチェックする人のメンタル問題", media: "ほぼ日", type: "インタビュー", theme: FC, tags: ["ファクトチェック"], url: "https://www.1101.com/n/s/daisuke_furuta/2025-10-01.html" },
  { date: "2025-09", title: "ぼくがフェイクニュースといたちごっこを続ける理由 第1回 フェイクニュースってどんなもの？", media: "ほぼ日", type: "インタビュー", theme: FC, tags: ["偽情報"], url: "https://www.1101.com/n/s/daisuke_furuta/2025-09-24.html" },
  { date: "2025-07", title: "【参院選2025】“選挙×誤情報”のリアルとは？ 選挙前に知っておきたいSNSとの付き合い方", media: "選挙ドットコムちゃんねる", type: "YouTube・Podcast", theme: PE, tags: ["選挙", "偽情報", "SNS"], url: "https://www.youtube.com/watch?v=yJf3JPbmTzU" },
  { date: "2025-07", title: "参院選 SNSで広がる偽・誤情報に私たちはどう向きあう？【深層NEWS】", media: "日本テレビ", type: "テレビ・ラジオ", theme: PE, tags: ["選挙", "偽情報", "影響工作", "生成AI"], url: "https://www.youtube.com/watch?v=c9szJYf2fBk" },
  { date: "2025-05", title: "【解説】メタ社のファクトチェック廃止～その波紋は？", media: "TBSラジオ「荻上チキ・Session」", type: "テレビ・ラジオ", theme: FC, tags: ["プラットフォーム", "ファクトチェック"], url: "https://www.youtube.com/watch?v=t05BwCguALY" },
  { date: "2025-02", title: "【善意がデマを広げる!?】意識すべき3つのキーワード／SNSがファクトチェックから撤退!?", media: "選挙ドットコムちゃんねる", type: "YouTube・Podcast", theme: FC, tags: ["偽情報", "プラットフォーム"], url: "https://www.youtube.com/watch?v=FHfe-zCHKI4" },
  { date: "2025-02", title: "TikTok『みんなで守ろう「ネットコミュニティ」プロジェクト』クリエイター向け「偽・誤情報対策ワークショップ」", media: "TikTok Japan", type: "登壇・講演", theme: FC, tags: ["偽情報", "プラットフォーム"], url: "https://note.com/tiktok/n/n82802214c5f9" },
  // ---- 2024 ----
  { date: "2024-12", title: "“中立”で面白くないメディアは「公平性解釈のステートメント」を発表すべき？（石戸諭さんと）", media: "ABEMA「アベヒル」", type: "テレビ・ラジオ", theme: PE, tags: ["選挙", "メディアの信頼"], url: "https://news.tv-asahi.co.jp/news_politics/articles/900014989.html", note: "動画：ABEMAニュース（YouTube）" },
  { date: "2024-12", title: "秋篠宮家バッシングに見る攻撃的な情報の拡散「悪意ではなく善意から」", media: "AERA dot.", type: "インタビュー", theme: FC, tags: ["SNS", "誹謗中傷"], url: "https://dot.asahi.com/articles/-/244198" },
  { date: "2024-11", title: "兵庫知事選とメディア不信", media: "TBS「サンデーモーニング」", type: "テレビ・ラジオ", theme: PE, tags: ["選挙", "メディアの信頼", "SNS"], url: "https://www.tiktok.com/@sundaym_tbs/video/7440670149742464273" },
  { date: "2024-11", title: "SNS発信の威力… 第三者による情報拡散なぜ浸透？ 真偽検証あり方は【深層NEWS】", media: "日本テレビ", type: "テレビ・ラジオ", theme: PE, tags: ["選挙", "SNS", "ファクトチェック"], url: "https://www.youtube.com/watch?v=_f9gQDl1jhE" },
  { date: "2024-10", title: "「あなたの一票を守る！選挙の偽・誤情報に惑わされないためにできること」TikTok LIVE", media: "TikTok Japan", type: "登壇・講演", theme: PE, tags: ["選挙", "偽情報", "プラットフォーム"], url: "https://note.com/tiktok/n/n4eecc5224ec9" },
  { date: "2024-10", title: "フェイクニュースをどう見破るか 先生たちが研修会（宮崎市）", media: "NHK宮崎", type: "登壇・講演", theme: FC, tags: ["教育", "メディアリテラシー"], url: "https://www3.nhk.or.jp/lnews/miyazaki/20241004/5060019460.html", note: "MRT宮崎放送も報道" },
  { date: "2024-09", title: "【西田亮介vs朝日新聞】なぜ激怒？ エモい記事は必要？【新聞の未来】", media: "ReHacQ", type: "YouTube・Podcast", theme: DM, tags: ["マスメディア"], url: "https://www.youtube.com/live/wCvFYaZrbMs" },
  { date: "2024-08", title: "ネット情報の真偽、どう見極める？…「ファクトチェック」学ぶ取り組み広がる", media: "読売新聞", type: "インタビュー", theme: FC, tags: ["教育", "ファクトチェック"], url: "https://www.yomiuri.co.jp/national/20240823-OYT1T50115/" },
  { date: "2024-06", title: "優秀だけど“おっちょこちょい” メディアにも広がるAIの波「虚偽情報の生成」の課題も", media: "AERA dot.", type: "インタビュー", theme: DM, tags: ["生成AI"], url: "https://dot.asahi.com/articles/-/225665" },
  { date: "2024-06", title: "コロンブス炎上はどう防げたか 個人でも使えるAIを活用した対策などを学ぶセミナー", media: "D-JEDI", type: "登壇・講演", theme: FC, tags: ["炎上", "生成AI", "企業広報", "D-JEDI"], url: "https://d-jedi.jp/n/nd73997805b7a" },
  { date: "2024-05", title: "フェイク情報に警戒を【信毎セミナー】", media: "信濃毎日新聞", type: "登壇・講演", theme: FC, tags: ["偽情報"], url: "https://www.shinmai.co.jp/news/article/CNTS2024051400055" },
  { date: "2024-05", title: "過激な投稿がSNSで利益に アテンション・エコノミー【風をよむ】", media: "TBS「サンデーモーニング」", type: "テレビ・ラジオ", theme: FC, tags: ["SNS", "アテンション・エコノミー"], url: "https://newsdig.tbs.co.jp/articles/-/1191733" },
  { date: "2024-05", title: "ニートから人気ライターへ コネゼロから始めるインタビュー術", media: "D-JEDI", type: "登壇・講演", theme: DM, tags: ["D-JEDI", "人材育成"], url: "https://d-jedi.jp/n/nf4daa3cc333f" },
  { date: "2024-05", title: "みんなでファクトチェック 第7回 ファクトチェックとは？ 団体に聞きました", media: "NHKラジオ「Nらじ」", type: "テレビ・ラジオ", theme: FC, tags: ["ファクトチェック"], url: "https://www.nhk.or.jp/radio/magazine/article/nradi/nra20240524.html" },
  { date: "2024-04", title: "ロケットニュースが愛される理由 羽鳥豪編集長に聞く", media: "D-JEDI", type: "登壇・講演", theme: DM, tags: ["D-JEDI"], url: "https://d-jedi.jp/n/n2aa96e53921d" },
  { date: "2024-04", title: "【なぜ騙される？】フェイクニュース時代を生き抜く知識と技術を学ぶ JFC講座 第0章", media: "日本ファクトチェックセンター", type: "YouTube・Podcast", theme: FC, tags: ["JFC講座", "ファクトチェック"], url: "https://www.youtube.com/watch?v=bH6u02HgHYE" },
  { date: "2024-04", title: "「フェイクニュース」について質問ある？ | Tech Support", media: "WIRED Japan", type: "YouTube・Podcast", theme: FC, tags: ["偽情報"], url: "https://www.youtube.com/watch?v=H5Yr3e3Z-5w" },
  { date: "2024-03", title: "能登地震でもやっぱり出た、根拠のない「人工地震」 デマはなぜ広がる？", media: "47NEWS（共同通信）", type: "インタビュー", theme: FC, tags: ["災害", "陰謀論"], url: "https://nordot.app/1141629932710511102" },
  { date: "2024-03", title: "「男と言ったら男」Xでデマ拡散 当事者の思いや識者見解聞く", media: "山陽新聞", type: "インタビュー", theme: DV, tags: ["LGBTQ", "偽情報"], url: "https://www.sanyonews.jp/article/1519942" },
  { date: "2024-03", title: "【解説】デマ拡散も…「手術なしで性別変更」家裁が認めた背景とは", media: "KSB瀬戸内海放送", type: "テレビ・ラジオ", theme: DV, tags: ["LGBTQ", "偽情報"], url: "https://news.ksb.co.jp/article/15198365" },
  { date: "2024-02", title: "情報を見極めよう ～トビタテ！留学安全対策講座シリーズ 第1回～", media: "トビタテ！留学JAPAN（文部科学省）", type: "登壇・講演", theme: FC, tags: ["教育", "偽情報"], url: "https://tobitate-gov.note.jp/n/n74f628e28bb6", note: "講義動画：トビタテ!留学チャンネル（YouTube）" },
  { date: "2024-01", title: "フェイクニュース、AI、認知戦 2024年という選挙のビッグイヤーに何が起きるのか", media: "時事ドットコム", type: "寄稿", theme: FC, tags: ["選挙", "生成AI", "影響工作"], url: "https://www.jiji.com/jc/v8?id=202401fakendf" },
  // ---- 2023 ----
  { date: "2023-12", title: "「選挙イヤー」の2024年 世界で高まる“フェイクへの懸念”（WEB特集）", media: "NHK", type: "インタビュー", theme: FC, tags: ["選挙", "生成AI"], url: "https://www3.nhk.or.jp/news/html/20231216/k10014289161000.html" },
  { date: "2023-10", title: "「パレスチナ情勢でウソが氾濫」ダマされないために必要な「クリティカルシンキング」とは？", media: "ABEMA TIMES", type: "テレビ・ラジオ", theme: FC, tags: ["偽情報", "国際"], url: "https://times.abema.tv/articles/-/10100057" },
  { date: "2023-10", title: "シンポジウム「フェイクニュースとメディア・リテラシー：東アジアとヨーロッパからの視座」", media: "ゲーテ・インスティトゥート東京", type: "登壇・講演", theme: FC, tags: ["メディアリテラシー", "国際会議"], url: "https://www.goethe.de/ins/jp/ja/ver.cfm?event_id=25013304" },
  { date: "2023-10", title: "Information Integrity in the Digital Age | Day 1", media: "DCN Global", type: "登壇・講演", theme: FC, tags: ["国際会議"], url: "https://www.youtube.com/watch?v=O4-TcTrVS7I&t=166s" },
  { date: "2023-10", title: "文研フォーラム2023 秋", media: "NHK放送文化研究所", type: "登壇・講演", theme: DM, tags: [], url: "https://www.nhk.or.jp/bunken/forum/2023_aki/program.html#programA" },
  { date: "2023-10", title: "IGF 2023 - Day 0 - Workshop 2", media: "Internet Governance Forum", type: "登壇・講演", theme: FC, tags: ["国際会議", "インターネットガバナンス"], url: "https://www.youtube.com/live/hIhezo7ZI68?t=25520" },
  { date: "2023-09", title: "What AI brings to Information Disorder", media: "Japan Scicom Forum", type: "登壇・講演", theme: FC, tags: ["生成AI", "国際会議"], url: "https://www.youtube.com/watch?v=HF14jcqZE-w" },
  { date: "2023-08", title: "ファクトチェックから読み解く、ニュースメディアの未来", media: "電通総研", type: "インタビュー", theme: DM, tags: ["ファクトチェック"], url: "https://institute.dentsu.com/articles/3041/" },
  { date: "2023-07", title: "SESSION2 INTERVIEW｜MEDIA DAY TOKYO 2023", media: "MEDIA DAY TOKYO", type: "インタビュー", theme: DM, tags: ["生成AI"], url: "https://prtimes.jp/pj/mediadaytokyo/session2_interview/" },
  { date: "2023-07", title: "メディアの未来のためにできることは？ ヒットコンテンツの極意やAI活用を語る『MEDIA DAY TOKYO』レポート", media: "CINRA", type: "登壇・講演", theme: DM, tags: ["生成AI"], url: "https://www.cinra.net/article/2308-mediadaytokyo2023_iktayclsp" },
  { date: "2023-07", title: "AI時代メディアが生き残るには？ 深津貴之氏らが予測、今後メディアはこう進化する", media: "ビジネス+IT", type: "登壇・講演", theme: DM, tags: ["生成AI", "ビジネスモデル"], url: "https://www.sbbit.jp/article/cont1/119985" },
  { date: "2023-07", title: "SNSの偽情報、本当に見抜ける？ 中高生向けのワークショップ開催", media: "教育新聞", type: "登壇・講演", theme: FC, tags: ["教育", "偽情報"], url: "https://www.kyobun.co.jp/news/20230818_02/" },
  { date: "2023-07", title: "偽情報を流すのは数秒、真偽判断には数時間――偽・誤情報等への対策と課題", media: "リディラバジャーナル", type: "インタビュー", theme: FC, tags: ["偽情報", "分断"], url: "https://journal.ridilover.jp/issues/0dda4a4e1417" },
  { date: "2023-06", title: "少子化政策に関する合意形成は可能か", media: "NIRA総合研究開発機構", type: "寄稿", theme: PE, tags: ["熟議"], url: "https://www.nira.or.jp/paper/opinion-paper/2023/69.html" },
  { date: "2023-06", title: "2023年度春学期 メディア・コミュニケーション研究所公開講座", media: "慶應義塾大学", type: "登壇・講演", theme: FC, tags: ["大学"], url: "https://www.keio.ac.jp/ja/news/2023/6/22/27-139287/" },
  { date: "2023-06", title: "日本経済新聞への寄稿（見出し要確認）", media: "日本経済新聞", type: "寄稿", theme: "", tags: [], url: "https://www.nikkei.com/article/DGXZQOCA138N50T10C23A4000000/" },
  { date: "2023-06", title: "偽ニュースから身を守る 最新事例と対策の4原則", media: "日本経済新聞", type: "寄稿", theme: FC, tags: ["偽情報", "ファクトチェック"], url: "https://www.nikkei.com/telling/DGXZTS00004460Y3A510C2000000/" },
  { date: "2023-06", title: "偽情報対策「多様な利害関係者で議論」パネル討論（世界デジタルサミット2023）", media: "日本経済新聞", type: "登壇・講演", theme: FC, tags: ["国際会議", "インターネットガバナンス"], url: "https://www.nikkei.com/article/DGXZQOUC056010V00C23A6000000/" },
  { date: "2023-06", title: "ChatGPTを使うが信用はしない。事実と意見を切り分けたファクトチェックを", media: "PR TIMES MAGAZINE", type: "インタビュー", theme: FC, tags: ["生成AI", "ファクトチェック"], url: "https://prtimes.jp/magazine/chatgpt-opinion-8/" },
  { date: "2023-02", title: "オンライン勉強会「フェイクニュースにどう対抗するか」", media: "日本環境ジャーナリストの会", type: "登壇・講演", theme: FC, tags: ["偽情報"], url: "http://jfej.org/seminar-230217/" },
  // ---- 2022 ----
  { date: "2022-12", title: "安保関連文書に反撃能力明記「説明不足は批判されるべきだがメディア側も話題にできていない」", media: "TBS「サンデーモーニング」", type: "テレビ・ラジオ", theme: PE, tags: ["安全保障"], url: "https://www.sponichi.co.jp/entertainment/news/2022/12/18/kiji/20221218s00041000173000c.html", note: "記事：スポニチ" },
  { date: "2022-09", title: "Piano Academy Tokyo", media: "Piano", type: "登壇・講演", theme: DM, tags: ["ビジネスモデル"], url: "https://academy.piano.io/tokyo-september-2022" },
  { date: "2022-09", title: "味の素 食と健康の未来フォーラム2022", media: "味の素", type: "登壇・講演", theme: FC, tags: [], url: "https://www.ajinomoto.co.jp/forum/fwff2022/" },
  { date: "2022-09", title: "ニセ広告を見極める「メディアリテラシー」の高め方【音声】", media: "NewsPicks×J-WAVE", type: "YouTube・Podcast", theme: FC, tags: ["メディアリテラシー", "偽情報"], url: "https://newspicks.com/news/7515153/body/" },
  { date: "2022-09", title: "ファクトチェックと情報リテラシー ～事実を確かめるための基礎知識と心構え～", media: "THE PAGE", type: "YouTube・Podcast", theme: FC, tags: ["ファクトチェック", "メディアリテラシー"], url: "https://www.youtube.com/watch?v=WvzVXW0U6j4" },
  { date: "2022-08", title: "デジタル時代にメディアは「信頼」を構築できるか ―「信頼指標」から考える（前編）", media: "慶應義塾大学KGRI", type: "登壇・講演", theme: DM, tags: ["メディアの信頼"], url: "https://www.kgri.keio.ac.jp/news-event/126215.html" },
  { date: "2022-08", title: "デジタル時代にメディアは「信頼」を構築できるか ―「信頼指標」から考える（後編）", media: "慶應義塾大学KGRI", type: "登壇・講演", theme: DM, tags: ["メディアの信頼"], url: "https://www.kgri.keio.ac.jp/news-event/126389.html" },
  { date: "2022-07", title: "【フェイクニュースお悩み相談Q&A】家族が、職場で、過激な意見とどうつき合えばいい？", media: "Yahoo!ニュース", type: "寄稿", theme: FC, tags: ["偽情報", "分断"], url: "https://news.yahoo.co.jp/articles/2f34433eff4e7b88e0f45c286ec53c0561ced921" },
  // ---- 2021 ----
  { date: "2021-10", title: "「政治、よくわからない」の解決策 古田大輔さんと探る朝日東大調査", media: "朝日新聞", type: "インタビュー", theme: PE, tags: ["選挙", "投票率"], url: "https://digital.asahi.com/articles/ASPBV51F9PBMULEI003.html" },
  { date: "2021-09", title: "「フェイクニュース」への備え ～デマや不確かな情報に惑わされないために～", media: "Yahoo!ニュース", type: "寄稿", theme: FC, tags: ["偽情報", "メディアリテラシー"], url: "https://news.yahoo.co.jp/special/fakenews/" },
  { date: "2021-08", title: "不安なときこそ“デマ”に注意「フェイク・バスターズ」未公開トーク【前編】", media: "NHK", type: "テレビ・ラジオ", theme: FC, tags: ["偽情報", "新型コロナ"], url: "https://www.nhk.or.jp/gendai/comment/0016/topic022.html" },
  { date: "2021-08", title: "ワクチン情報をめぐる“分断” どう乗り越える「フェイク・バスターズ」未公開トーク【後編】", media: "NHK", type: "テレビ・ラジオ", theme: FC, tags: ["ワクチン", "分断", "新型コロナ"], url: "https://www.nhk.or.jp/gendai/comment/0016/topic023.html" },
  { date: "2021-08", title: "第1回 自殺報道のあり方を考える勉強会 ～報道の自由と自殺リスクの狭間で～", media: "いのち支える自殺対策推進センター", type: "登壇・講演", theme: DM, tags: ["報道倫理"], url: "https://jscp.or.jp/action/jisatsu_benkyokai_report0810.html" },
  { date: "2021-07", title: "ワクチンデマ対策シンポジウム", media: "セーファーインターネット協会", type: "登壇・講演", theme: FC, tags: ["ワクチン", "偽情報", "新型コロナ"], url: "https://www.saferinternet.or.jp/event/vaccinesympo_202107/" },
  { date: "2021-06", title: "デジタル化が遅れた日本のニュースメディアが「生き残る道」", media: "COURRIER Japon", type: "インタビュー", theme: DM, tags: ["ビジネスモデル"], url: "https://courrier.jp/news/archives/249384/" },
  { date: "2021-05", title: "あなたのメディアは、誰に、何の価値を提供しますか？ 古田大輔氏インタビュー 前編【デジタル人材戦略】", media: "Media × Tech", type: "インタビュー", theme: DM, tags: ["デジタル人材", "ビジネスモデル"], url: "https://www.mediatechnology.jp/entry/2021/05/26/110000" },
  { date: "2021-05", title: "米メディアで編集長格のプロダクト責任者も 古田大輔氏インタビュー 後編【デジタル人材戦略】", media: "Media × Tech", type: "インタビュー", theme: DM, tags: ["デジタル人材"], url: "https://www.mediatechnology.jp/entry/2021/05/27/110000" },
  { date: "2021-05", title: "インターネットから「ギフト」を受け取るには？ ―― Google News Labでの活動", media: "Media × Tech", type: "インタビュー", theme: CA, tags: ["Google News Lab"], url: "https://www.mediatechnology.jp/entry/2021/05/10/114856" },
  { date: "2021-05", title: "ニュースの向こう、記者の肉声で 朝日新聞ポッドキャスト", media: "朝日新聞", type: "インタビュー", theme: DM, tags: ["ポッドキャスト"], url: "https://digital.asahi.com/articles/DA3S14893321.html" },
  { date: "2021-04", title: "「Build New Local プロジェクト」キックオフカンファレンス", media: "Build New Local", type: "登壇・講演", theme: DM, tags: ["ローカルメディア"], url: "" },
  { date: "2021-02", title: "ただの批判を“炎上”に仕立て上げる、PV稼ぎメディアの存在 そして「炎上とフェイクがつながったビジネス」が生まれるワケ", media: "logmi", type: "登壇・講演", theme: DM, tags: ["炎上", "PV至上主義", "偽情報"], url: "https://logmi.jp/business/articles/324002" },
  { date: "2021-02", title: "世界で一番出回っている、ワクチンに関する荒唐無稽なデマ「信じたい人は、どんなフェイクでも信じたがる」という事実", media: "logmi", type: "登壇・講演", theme: FC, tags: ["ワクチン", "偽情報"], url: "https://logmi.jp/business/articles/324003" },
  { date: "2021-02", title: "“原則オフレコ”のClubhouseでも起こりうる、炎上事案「報道に値する」と認識すれば、報道機関は記事を出す", media: "logmi", type: "登壇・講演", theme: DM, tags: ["炎上", "報道倫理"], url: "https://logmi.jp/business/articles/324004" },
  { date: "2021-02", title: "高く評価された、ある企業の“自社に向けられたデマ”への対応「発信者を批判する」以外にも、スマートなやり方は存在する", media: "logmi", type: "登壇・講演", theme: FC, tags: ["偽情報", "企業広報"], url: "https://logmi.jp/business/articles/324005" },
  { date: "2021-02", title: "口コミサイトへの書き込み問題、企業はどう対応すべき？ SNSより影響の大きい「Googleマップ」の永続性", media: "logmi", type: "登壇・講演", theme: FC, tags: ["企業広報", "SNS"], url: "https://logmi.jp/business/articles/324024" },
  { date: "2021-02", title: "東洋経済Brand Lab Live「2021年、激動の時代に加速するメディアの変化とは？」", media: "東洋経済", type: "登壇・講演", theme: DM, tags: ["ビジネスモデル"], url: "https://toyokeizai.smartseminar.jp/public/seminar/view/3659" },
  { date: "2021-01", title: "なぜ人々はトランプの嘘を信じたのか", media: "PLANETS", type: "登壇・講演", theme: FC, tags: ["偽情報", "アメリカ"], url: "https://www.jiji.com/jc/article?k=000000002.000077667&g=prt", note: "動画：PLANETS YouTubeチャンネル" },
  // ---- 2020 ----
  { date: "2020-12", title: "【古田大輔×西村宏堂×森田かずよ×大濱徹】インクルーシブな社会における「普通」とは何か？", media: "", type: "登壇・講演", theme: DV, tags: ["インクルーシブ"], url: "" },
  { date: "2020-12", title: "［JIMA講座］情報発信者に求められるリテラシーとは？［上］", media: "インターネットメディア協会（JIMA）", type: "登壇・講演", theme: FC, tags: ["JIMA", "メディアリテラシー"], url: "" },
  { date: "2020-12", title: "［JIMA講座］情報発信者に求められるリテラシーとは？［下］", media: "インターネットメディア協会（JIMA）", type: "登壇・講演", theme: FC, tags: ["JIMA", "メディアリテラシー"], url: "" },
  { date: "2020-11", title: "「首相発言のファクトチェックを」 ジャーナリストの古田大輔さんが感じる「恐怖」", media: "毎日新聞", type: "インタビュー", theme: FC, tags: ["ファクトチェック", "政治"], url: "https://mainichi.jp/articles/20201111/k00/00m/010/098000c" },
  { date: "2020-10", title: "ジャーナリスト古田大輔氏が語る、“ローカルからの情報発信”が必要な理由", media: "Qualities", type: "インタビュー", theme: DM, tags: ["ローカルメディア"], url: "https://qualities.jp/article/furuta" },
  { date: "2020-10", title: "評価されるPR施策には、アイデアからストラテジーまで一貫したストーリーがある", media: "AdverTimes（宣伝会議）", type: "インタビュー", theme: DM, tags: ["企業広報"], url: "https://www.advertimes.com/20201007/article324620/" },
  { date: "2020-10", title: "「投票しても何も変わらない」というあなたへ。日本の民主主義は「はりぼて」になっていないか", media: "QJWeb", type: "寄稿", theme: PE, tags: ["投票率", "ローカルメディア"], url: "https://qjweb.jp/journal/40531/" },
  { date: "2020-10", title: "ニュースメディアが生き残る道は？ 古田大輔が語るジャーナリズムの今と未来", media: "Forbes JAPAN", type: "インタビュー", theme: DM, tags: ["ビジネスモデル", "メディアの信頼"], url: "https://forbesjapan.com/articles/detail/37952/5/1/1" },
  { date: "2020-09", title: "「才能を生かせない」テレビ局から優秀な人材が離れる理由", media: "logmi", type: "登壇・講演", theme: DM, tags: ["デジタル人材"], url: "https://logmi.jp/business/articles/323361" },
  { date: "2020-09", title: "NewsPicks・佐々木氏「映像なくしてメディアはない」 動画ビジネスの市場規模と将来性", media: "logmi", type: "登壇・講演", theme: DM, tags: ["ビジネスモデル"], url: "https://logmi.jp/business/articles/323360" },
  { date: "2020-09", title: "新興メディアは「もう古い」 超老舗・NYタイムズに見る、最先端の「新・新興メディア」", media: "logmi", type: "登壇・講演", theme: DM, tags: ["ビジネスモデル"], url: "https://logmi.jp/business/articles/323359" },
  { date: "2020-09", title: "「新興メディアはレガシーメディアに取って代わるか？」【Reversible World 2020】", media: "テレビ東京ビジネスオンデマンド", type: "登壇・講演", theme: DM, tags: ["マスメディア"], url: "https://txbiz.tv-tokyo.co.jp/rw2020/vod/post_210373/" },
  { date: "2020-09", title: "ネット社会を勝ち抜く「ファクトスキル」の鍛え方", media: "日経doors", type: "インタビュー", theme: FC, tags: ["メディアリテラシー", "新型コロナ"], url: "https://doors.nikkei.com/atcl/feature/19/082800084/091600003/" },
  { date: "2020-09", title: "安倍政権の8年間でまったく進まなかったこと", media: "QJWeb", type: "寄稿", theme: PE, tags: ["政治"], url: "https://qjweb.jp/journal/36774/" },
  { date: "2020-08", title: "メディアの現場が学べることは？ ――「検証・トイレットペーパー報道がもたらした買い占めの影響」開催レポート", media: "", type: "登壇・講演", theme: FC, tags: ["新型コロナ", "報道倫理"], url: "" },
  { date: "2020-08", title: "緊急避妊薬の問題から考える「変わらない日本」を変える女性たち", media: "QJWeb", type: "寄稿", theme: DV, tags: ["ジェンダー"], url: "https://qjweb.jp/journal/32338/" },
  { date: "2020-07", title: "三浦春馬さんの死去をめぐりWHOのガイドラインに準拠しない報道が続々…メディアの伝え方はどうあるべきなのか", media: "ABEMA TIMES", type: "テレビ・ラジオ", theme: DM, tags: ["報道倫理"], url: "https://times.abema.tv/posts/8616422" },
  { date: "2020-07", title: "「政治に対して声を上げない若者」を作ったのは誰か――都知事選と出てこないキッズ", media: "QJWeb", type: "寄稿", theme: PE, tags: ["投票率", "若者"], url: "https://qjweb.jp/journal/27574/" },
  { date: "2020-07", title: "ヤバ過ぎる「香港国家安全法」 世界は香港の民主主義を守れるのか", media: "TOKYO MX「モーニングCROSS」", type: "テレビ・ラジオ", theme: ETC, tags: ["香港", "国際"], url: "https://news.nifty.com/article/item/neta/12266-733746/" },
  { date: "2020-07", title: "東京都知事選「投票率」55％…前回よりも投票率が下がった“大きな理由”は？", media: "TOKYO FM", type: "テレビ・ラジオ", theme: PE, tags: ["選挙", "投票率"], url: "https://news.mynavi.jp/article/20200708-1125592/", note: "記事：マイナビニュース" },
  { date: "2020-07", title: "ジャーナリズムがやるべき6つのこと #ジャーナリズム提言", media: "Choose Life Project", type: "YouTube・Podcast", theme: DM, tags: ["報道倫理"], url: "https://www.youtube.com/watch?v=TWxbwj8DgbY" },
  { date: "2020-05", title: "コロナ禍はメディアを変えるか ジャーナリスト古田大輔さんに聞いた", media: "ささっと（福岡）", type: "インタビュー", theme: DM, tags: ["新型コロナ", "ローカルメディア"], url: "https://sasatto.jp/article/entry-566.html" },
  { date: "2020-04", title: "新型コロナの専門家会議…問題は“伝え方”？「政治のトップがどういうメッセージを出すかが非常に重要」", media: "TOKYO FM", type: "テレビ・ラジオ", theme: PE, tags: ["新型コロナ", "政治"], url: "https://news.radiko.jp/article/station/FMT/40787/" },
  { date: "2020-04", title: "未来授業", media: "TOKYO FM", type: "テレビ・ラジオ", theme: DM, tags: [], url: "https://www.tfm.co.jp/future/detail/26018/" },
  // ---- 2019 ----
  { date: "2019-12", title: "「困った人々の心に明るさをともす」中村医師が亡くなった同僚に誓った生き方", media: "AERA", type: "寄稿", theme: ETC, tags: ["アフガニスタン", "国際"], url: "https://dot.asahi.com/aera/2019121000037.html" },
  { date: "2019-12", title: "「不平等に対する復讐」中村哲医師が人生をアフガニスタンに捧げた理由", media: "AERA", type: "寄稿", theme: ETC, tags: ["アフガニスタン", "国際"], url: "https://dot.asahi.com/aera/2019121000036.html" },
  { date: "2019-12", title: "電通PRが選ぶこれから予測「完全没入できる世界で遊ぶことは、もはや夢でなく近未来」", media: "電通PR", type: "寄稿", theme: DM, tags: ["テクノロジー"], url: "https://www.dentsu-pr.co.jp/assets/uploads/2019/12/%e3%81%93%e3%82%8c%e3%81%8b%e3%82%89%e4%ba%88%e6%b8%ac%e2%91%a1.pdf" },
  { date: "2019-11", title: "Facebookが「メディアに記事使用料を払う」と表明した思惑", media: "デイリー新潮", type: "インタビュー", theme: DM, tags: ["プラットフォーム"], url: "https://www.dailyshincho.jp/article/2019/11301100/" },
  { date: "2019-11", title: "ヤフー・LINE統合、なぜ「ヤフトピ」になかったのか", media: "朝日新聞", type: "インタビュー", theme: DM, tags: ["プラットフォーム"], url: "https://digital.asahi.com/articles/ASMCM7V0KMCMULFA04F.html" },
  { date: "2019-11", title: "ブロックチェーンはメディアのマネタイズにいかに寄与するのか", media: "ウェブ電通報", type: "登壇・講演", theme: DM, tags: ["ビジネスモデル", "テクノロジー"], url: "https://dentsu-ho.com/articles/6987" },
  { date: "2019-11", title: "古田大輔が考えるメディアのコラボとは？ ～元NHK立岩陽一郎のLIFE SHIFT㉕", media: "GOETHE", type: "インタビュー", theme: CA, tags: ["コラボレーション"], url: "https://goetheweb.jp/person/slug-n32d1339b75a7" },
  { date: "2019-11", title: "「バズ」の本質を行くSNSマーケティング", media: "広報会議（2019年12月号）", type: "インタビュー", theme: DM, tags: ["SNS", "企業広報"], url: "https://mag.sendenkaigi.com/kouhou/201912/pr-strategy-using-twitter/017468.php" },
  { date: "2019-11", title: "「メディアは残るが、ニュースメディアは危機的」BuzzFeed Japan創刊編集長を務めた古田大輔さんが警告", media: "ハフポスト日本版", type: "インタビュー", theme: DM, tags: ["PV至上主義", "ビジネスモデル"], url: "https://www.huffingtonpost.jp/entry/daisuke-furuta_jp_5dc26f6ee4b0f5dcf8fd4171" },
  { date: "2019-11", title: "古田大輔さん、ジャーナリズムってなんですか？【前編】", media: "チャリツモ", type: "インタビュー", theme: DM, tags: [], url: "https://charitsumo.com/interview/15715" },
  { date: "2019-11", title: "古田大輔さん、ジャーナリズムってなんですか？【後編】", media: "チャリツモ", type: "インタビュー", theme: DM, tags: [], url: "https://charitsumo.com/interview/15750" },
  { date: "2019-10", title: "参院選報道から考える 新聞がやるべきたった一つのこと ―― 低投票率世代に選挙記事を届けるには", media: "新聞研究（10月号）", type: "寄稿", theme: PE, tags: ["選挙", "投票率", "若者"], url: "https://www.pressnet.or.jp/publication/kenkyu/190927_13161.html" },
  { date: "2019-10", title: "ネット時代のニュースメディアは「信頼」と「コラボレーション」で現状を打破できるか #ネットメディアの現在地", media: "BLOGOS", type: "寄稿", theme: DM, tags: ["メディアの信頼", "コラボレーション"], url: "https://blogos.com/article/409094/" },
  { date: "2019-08", title: "同性婚に消極的な自民党で起こる「地殻変動」", media: "文藝春秋（9月号）", type: "寄稿", theme: DV, tags: ["LGBTQ", "同性婚", "政治"], url: "https://bungeishunju.com/n/n919d3652c013" },
  { date: "2019-07", title: "昨日読んだ文庫『敗戦後論とレイテ戦記』", media: "毎日新聞（7月14日朝刊）", type: "寄稿", theme: ETC, tags: ["書評"], url: "" },
  { date: "2019-04", title: "「健全なインターネットメディアの発展」について話し合う場が必要だ", media: "インターネットメディア協会（JIMA）", type: "インタビュー", theme: DM, tags: ["JIMA"], url: "https://jima.media/in-the-field-of-media-1/" },
  { date: "2019-04", title: "私のオピニオン", media: "JAグループ", type: "寄稿", theme: DM, tags: ["デジタル化"], url: "https://org.ja-group.jp/about/opinion/1904_1" },
  { date: "2019-02", title: "宇野常寛 NewsX vol.17「ネットジャーナリズムの課題と展望」", media: "PLANETS", type: "テレビ・ラジオ", theme: DM, tags: [], url: "https://www.youtube.com/watch?v=Jya5JNgVoYY", note: "冒頭部分の動画" },
  { date: "2019-01", title: "「BuzzFeed Japan」とは？", media: "日テレNEWS24", type: "テレビ・ラジオ", theme: DM, tags: ["BuzzFeed"], url: "https://www.news24.jp/articles/2019/01/28/07415453.html" },
  { date: "2019-01", title: "SPA!問題“寛容の矛盾”どう解決するか", media: "日テレNEWS24", type: "テレビ・ラジオ", theme: DV, tags: ["ジェンダー"], url: "https://www.news24.jp/articles/2019/01/28/07415470.html" },
  // ---- 2018 ----
  { date: "2018-11", title: "変貌するニュースメディアとデジタル社会のメディアリテラシー", media: "アメリカ大使館", type: "登壇・講演", theme: FC, tags: ["メディアリテラシー"], url: "https://americancenterjapan.com/event/201811066228/" },
  { date: "2018-10", title: "私はこう考える「表現者にとっての表現の自由」［「憲法と表現の自由」の現在と未来］", media: "", type: "登壇・講演", theme: DM, tags: ["表現の自由"], url: "https://www.youtube.com/watch?v=WBMieAhpZy0" },
  { date: "2018-05", title: "大手メディアと同じことはしない。BuzzFeedが目指す効率的なメディアの運営方法", media: "fledge", type: "インタビュー", theme: DM, tags: ["BuzzFeed", "働き方"], url: "https://fledge.jp/article/buzzfeedjapan-1" },
  { date: "2018-05", title: "「長時間労働が当たり前」は言い訳「BuzzFeed」が“多様性”を大事にする理由", media: "ウートピ", type: "インタビュー", theme: DV, tags: ["BuzzFeed", "働き方", "ジェンダー"], url: "https://wotopi.jp/archives/70859" },
  { date: "2018-02", title: "社会課題からエンタメまで「ポジティブなインパクト」の先に", media: "週刊エコノミスト", type: "インタビュー", theme: DM, tags: ["BuzzFeed"], url: "https://www.weekly-economist.com/20180220netmedia-buzzfeed/" },
  { date: "2018-01", title: "受験と私：バズフィード編集長の古田大輔さん「あの時受かってたら、人生なめてた」", media: "毎日新聞", type: "インタビュー", theme: CA, tags: [], url: "https://mainichi.jp/articles/20171229/mog/00m/040/008000c" },
  // ---- 2017 ----
  { date: "2017-12", title: "独立メディア塾", media: "独立メディア塾", type: "登壇・講演", theme: DM, tags: [], url: "http://previous.mediajuku.com/?p=10082" },
  { date: "2017-11", title: "BuzzFeed編集長 古田大輔さんに聞いた、エンジニアと作る新しいメディアのあり方とは？", media: "CodeIQ MAGAZINE", type: "インタビュー", theme: DM, tags: ["テクノロジー", "BuzzFeed"], url: "http://topics.smt.docomo.ne.jp/article/codeiq/trend/codeiq-86887" },
  { date: "2017-11", title: "日本の「ファンド＝悪」が変わりつつある？ 起業家の増加とともに見られる主要メディアの変化", media: "logmi", type: "登壇・講演", theme: DM, tags: ["スタートアップ"], url: "https://logmi.jp/business/articles/248961" },
  { date: "2017-11", title: "多様性のある組織はなぜ強いのか？ 変革の旗手たちが語る、ダイバーシティを追求する理由", media: "logmi", type: "登壇・講演", theme: DV, tags: ["組織"], url: "https://logmi.jp/business/articles/253220" },
  { date: "2017-11", title: "3.11後のネット世界は「正しさを競い合っていた」 BuzzFeed Japanの記者が震災をテーマとした本を書いた理由", media: "logmi", type: "登壇・講演", theme: DM, tags: ["災害", "BuzzFeed"], url: "https://logmi.jp/business/articles/245328" },
  { date: "2017-10", title: "メディアは創刊の理念が大切である「メディアは今後どう進化するのか？ クオリティ・信頼性はどうあるべきか？」", media: "ICC", type: "登壇・講演", theme: DM, tags: ["メディアの信頼", "BuzzFeed"], url: "https://industry-co-creation.com/industry-trend/23360" },
  { date: "2017-07", title: "【特別寄稿】BuzzFeed日本版編集長・古田大輔氏「ローカルから始まる、情報発信革命」", media: "HASH#FUKUOKA", type: "寄稿", theme: DM, tags: ["ローカルメディア", "福岡"], url: "https://www.city.fukuoka.lg.jp/hash/news/archives/180.html" },
  { date: "2017-07", title: "BuzzFeed編集長古田さんとウミーベ代表カズワタベさんが感じる福岡の魅力", media: "Biz/Zine", type: "インタビュー", theme: CA, tags: ["福岡"], url: "https://bizzine.jp/article/detail/2351" },
  { date: "2017-07", title: "ヨッピー氏×BuzzFeed古田氏×徳力氏と考える、WELQ騒動以降のWEBメディア事情", media: "logmi", type: "登壇・講演", theme: DM, tags: ["キュレーションメディア", "PV至上主義"], url: "https://logmi.jp/business/articles/225783" },
  { date: "2017-03", title: "コンテンツは人と人をつなげるもの：クリエイティブ塾 Vol.9「BuzzFeed Japan」創刊編集長・古田大輔さん", media: "ライフハッカー", type: "登壇・講演", theme: CA, tags: ["BuzzFeed"], url: "https://www.lifehacker.jp/2017/03/170319_creative_daisuke_furuta.html" },
  { date: "2017-02", title: "フェイクニュース、キュレーションメディア、SEO…藤村厚夫、古田大輔、辻正浩がメディアとテクノロジーの未来を語る", media: "HTML5Experts.jp", type: "インタビュー", theme: DM, tags: ["偽情報", "キュレーションメディア", "テクノロジー"], url: "https://html5experts.jp/shumpei-shiraishi/22160/" },
  { date: "2017-02", title: "LUST FM 第16回ゲスト", media: "FM大阪", type: "テレビ・ラジオ", theme: CA, tags: ["BuzzFeed"], url: "https://www.fmosaka.net/_ct/17045092" },
  // ---- 2016 ----
  { date: "2016-11", title: "「Post Truth」トランプ勝利後も続く捏造ニュース騒動", media: "TOKYO MX「モーニングCROSS」", type: "テレビ・ラジオ", theme: FC, tags: ["偽情報", "アメリカ"], url: "https://www.youtube.com/watch?v=240KBdck4qE" },
  { date: "2016-11", title: "「記事の信用性は」検索で上位になるWELQの記事～ネットのニュース どうやって見ますか？", media: "TOKYO MX「モーニングCROSS」", type: "テレビ・ラジオ", theme: FC, tags: ["キュレーションメディア", "メディアリテラシー"], url: "https://www.youtube.com/watch?v=mJ9C0SYXp0Y" },
  { date: "2016-07", title: "BuzzFeed Japan古田氏とヨッピー氏が語る、「ダメなメディアと良いメディア」を分けるたった1つのポイントは？", media: "ferret", type: "登壇・講演", theme: DM, tags: ["BuzzFeed"], url: "https://ferret-plus.com/4667" },
  { date: "2016-07", title: "ネコから調査報道まで“なんでもあり”のBuzzFeedを支える最新テクノロジーと理念", media: "logmi", type: "登壇・講演", theme: DM, tags: ["BuzzFeed", "テクノロジー", "PV至上主義"], url: "https://logmi.jp/business/articles/150896" },
  { date: "2016-03", title: "【古田大輔×堀江貴文】バイラルメディア編 vol.1 ～居酒屋ホリエモンチャンネル～", media: "堀江貴文 ホリエモン", type: "YouTube・Podcast", theme: DM, tags: ["BuzzFeed"], url: "https://www.youtube.com/watch?v=oKRoWqfJO6c" },
  { date: "2016-02", title: "LIFE MAKERS 1月トークイベントレポート", media: "LIFE MAKERS（佐々木俊尚）", type: "登壇・講演", theme: DM, tags: ["BuzzFeed"], url: "http://lifemakers.jp/blog/2016/02/life-makers-1buzzfeed-japan.html" },
  { date: "2016-01", title: "BuzzFeedは何をつくるつもりなのか？『BuzzFeed』2人の編集長への問い", media: "WIRED", type: "インタビュー", theme: DM, tags: ["BuzzFeed"], url: "https://wired.jp/2016/01/27/buzzfeed-japan-us-interview/" },
  { date: "2016-01", title: "【全文】BuzzFeed Japan 創刊編集長 古田氏が会見「ポジティブな影響を与えていきたい」", media: "logmi", type: "登壇・講演", theme: DM, tags: ["BuzzFeed"], url: "https://logmi.jp/business/articles/120643" },
  // ---- 2015以前（記者時代） ----
  { date: "2015-09", title: "安保法案反対デモの参加者数は捏造？ 群衆の正確な数え方とは", media: "withnews", type: "記者として執筆", theme: FC, tags: ["ファクトチェック", "データ"], url: "https://withnews.jp/article/f0150910000qqf2150907000qqF0W0090401qq000012482A" },
  { date: "2015-09", title: "ニューズピックス 佐々木編集長が見つけた「勝利の方程式」", media: "withnews", type: "記者として執筆", theme: DM, tags: ["ビジネスモデル"], url: "https://withnews.jp/article/f0150904001qq000000000000000W0090901qq000012458A" },
  { date: "2015-09", title: "ニューズピックス黒字化「来年初頭に」 会員増、広告好調の理由は", media: "withnews", type: "記者として執筆", theme: DM, tags: ["ビジネスモデル"], url: "https://withnews.jp/article/f0150903002qq000000000000000W0090901qq000012445A" },
  { date: "2015-09", title: "ニューズピックス梅田氏「深さ×時間の広告」急成長メディアの戦略", media: "withnews", type: "記者として執筆", theme: DM, tags: ["ビジネスモデル"], url: "https://withnews.jp/article/f0150903003qq000000000000000W0090901qq000012457A" },
  { date: "2015-09", title: "ニューズピックス躍進支える技術力 記事・広告一括管理の新システム", media: "withnews", type: "記者として執筆", theme: DM, tags: ["テクノロジー"], url: "https://withnews.jp/article/f0150905001qq000000000000000W0090901qq000012459A" },
  { date: "2015-03", title: "マーケティングジャーナル掲載論文", media: "マーケティングジャーナル（J-STAGE）", type: "寄稿", theme: DM, tags: [], url: "https://www.jstage.jst.go.jp/article/amr/14/4/14_140402/_pdf/-char/ja" },
  { date: "2015-02", title: "東洋経済、月間1億PVの秘密「ヒットの法則はデータが語る」・上", media: "withnews", type: "記者として執筆", theme: DM, tags: ["ビジネスモデル", "データ"], url: "https://withnews.jp/article/f0150209000qq000000000000000W0091001qq000011477A" },
  { date: "2015-02", title: "「あんな無料サイトに書くな」 東洋経済は意識をどう変えたか・中", media: "withnews", type: "記者として執筆", theme: DM, tags: ["ビジネスモデル"], url: "https://withnews.jp/article/f0150210000qq000000000000000W0091001qq000011481A" },
  { date: "2015-02", title: "編集部8人で「年商10億円」へ 東洋経済オンラインの稼ぎ方・下", media: "withnews", type: "記者として執筆", theme: DM, tags: ["ビジネスモデル"], url: "https://withnews.jp/article/f0150211001qq000000000000000W0091001qq000011482A" },
  { date: "2014-12", title: "得票率1割台で政権取る可能性 グラフで見る衆院選", media: "withnews", type: "記者として執筆", theme: PE, tags: ["選挙", "データ"], url: "https://withnews.jp/article/f0141202002qq000000000000000W0090101qq000011207A" },
  { date: "2014-12", title: "「なんで日本人は投票行かないの？」 香港デモ、若者たちの言葉", media: "withnews", type: "記者として執筆", theme: PE, tags: ["投票率", "若者", "香港"], url: "https://withnews.jp/article/f0141212003qq000000000000000W0090101qq000011254A" },
  { date: "2014-08", title: "対立の海 中国の海洋進出（特集）", media: "朝日新聞デジタル", type: "記者として執筆", theme: ETC, tags: ["南シナ海", "国際"], url: "http://www.asahi.com/special/spratly/" },
  { date: "2014-05", title: "MITメディアラボ×朝日新聞シンポジウム2014", media: "朝日新聞デジタル", type: "記者として執筆", theme: DM, tags: ["テクノロジー"], url: "http://www.asahi.com/special/mit/2014/" },
  { date: "2014-04", title: "第3回 企画術 | ブランドコンテンツ", media: "東洋経済オンライン", type: "寄稿", theme: DM, tags: [], url: "https://toyokeizai.net/articles/-/33719" },
  { date: "2014-02", title: "浅田真央 ラストダンス", media: "朝日新聞デジタル", type: "記者として執筆", theme: ETC, tags: ["スポーツ"], url: "http://www.asahi.com/olympics/sochi2014/lastdance/" },
  { date: "2014-02", title: "データジャーナリズム・ハッカソン（未来メディアプロジェクト）", media: "朝日新聞デジタル", type: "記者として執筆", theme: DM, tags: ["データ"], url: "http://www.asahi.com/miraimedia/sympo/hackathon/" },
  { date: "2014-01", title: "＜パネル討論4＞広がるデータジャーナリズム「検証が役割」", media: "朝日新聞デジタル", type: "登壇・講演", theme: DM, tags: ["データ", "ファクトチェック"], url: "http://www.asahi.com/miraimedia/sympo/opendata/report_006.html" },
  { date: "2013-06", title: "MITメディアラボシンポ ダイジェスト", media: "朝日新聞デジタル", type: "記者として執筆", theme: DM, tags: ["SNS", "テクノロジー"], url: "http://www.asahi.com/sns/sympo/digest/" }
];
