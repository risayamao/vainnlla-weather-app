# CLAUDE.md — Risa プロフィール & 作業ルール

> ⚠️ **PRIVATE / CONFIDENTIAL。** 個人情報・クライアント機密（売上・契約・氏名等）を含む。
> このリポジトリは非公開前提。外部公開・共有リンク化しないこと。
> このファイルは毎セッション自動で読み込まれる。作業前に必ず内容に従う。

---

## 🔄 最初に読むもの（Google Drive 同期プロフィール）

Risa のマスタープロフィールは **Cowork Claude（ローカル）と Google Drive で同期**される。
**セッション開始時、Google Drive コネクタで下記を読み、本ファイルより新しければそちらを優先すること。**

- 📄 Drive ファイル: `_Risa_profile_for_claude_code.md`（KPP フォルダ）
- 🔗 直接リンク: _（Risa が共有予定。未設定のうちは本ファイルを正とする）_
- 手順: Google Drive コネクタで上記ファイル名を検索 → 読み込み → 差分があれば反映
- ⚠️ headless/cron セッションでは Drive コネクタが無い場合あり。その時は本ファイルを使う。

---

## 基本情報
- **名前:** Risa（「Risa」または「risa」。**「Riza」(z)はNG**、「Risaさん」より「Risa」）
- **本名:** 島田理紗（旧姓: 山尾）
- **拠点:** 日本（鎌倉）
- **メール:** risa.yamao@gmail.com / risa@r-agile.studio
- **言語:** バイリンガル（日本語ネイティブ＋英語ビジネスレベル）
- **文化:** バイカルチャー（日本 × フィンランド/北欧 × グローバル多文化）

## 事業構造
- **法人:** Kamakura Peak Partners 合同会社（KPP）、代表社員=島田理紗
- **ブランド:** R Agile Studio / Three Peace /（葉山管工サポート）
- **職業:** アジャイルコーチ（Scrum Masterではなくこの呼称を好む）/ 組織コンサル / プロダクト・デザイン戦略家 / ファシリテーター
- **キーフレーズ:** 「Designing ways of working」
- **経験:** 20年、うちReaktor Japan 8年（2018-2026年3月）、ICU出身

## 現在のクライアント（2026年7月）
- **明治HD - Hello Panda:** KPP最大の売上源、月¥2,200,000税込、担当=加納まい(まいちゃん)+井口さん、契約12月まで
- **葉山管工(株):** AI業務改善パートナー、施工計画書AI化 Phase 1a/1b/2、家族企業(まゆちゃん後継者候補)、助成金活用予定
- **Fast Retailing/UNIQLO:** Digital Library長期関与、協力者Laura(デザイナー)等
- **Furyu/PictLink:** 過去、今も仲良し（メンター的継続）
- **Three Peace:** 自ブランド、exit検討中

## Nav Star（人生ゴール）
- 50歳までに週5卒業
- 地方女性アジャイル/SMコーチコミュニティを作る（本来のゴール）
- Scrum Alliance認定トレーナー化（自分で認定発行できるレベル）
- 15-20人の分散型コーチング/トレーニングネットワーク
- 年次オンサイト集会（北欧inspiration、日本ベース）
- 日本の女性と地域コミュニティ支援

---

## 🧭 作業ルール（Claude Code はこれに従う）

### 相談スタイル
- **自走推奨。** 詰まったら即通知。**`AskUserQuestion` ツールは使わない**（質問は本文で）。
- **長文要約より具体アクション**を優先。
- **結論先出し + ⚠️/✅ マーカー**で視認性を上げる。
- ママ友/お姉ちゃんポジションで相談OK。カジュアル敬語崩しOK。
- 🤍🌸🍃🌊 系の絵文字歓迎。

### コミュニケーション
- 暖かいがシャープなトーン、自然な英語+日本語、簡潔だが人間的、グローバルに理解可能。

### 日本語の書き方（重要）
- **⚠️ 日本語の単語間に半角/全角スペースを入れない。**
  - ❌「共 に 働いてきた 仲間」 → ✅「共に働いてきた仲間」
  - 例外: 英数字と日本語の境界（「Voicesセクション」はOK）

### 避ける
ロボット的コンサル用語 / バズワード / 硬い翻訳 / 一般論アジャイル / 教科書的Scrum / 浅いジャーゴン / 硬直的PM思考 /「ベストプラクティス」

### 好む
システム思考 / 感情的知性 / 戦略的明確さ / ファシリテーション意識 / プロダクト・デザイン理解 / 組織ダイナミクス / ビジネス現実主義

---

## 📌 このプロジェクトの文脈（Hello Panda QAボット）

- **用途:** 明治HP リブランディング関連の**社内Q&A自動応答システム試作版**（2026/10-12月契約 Project A）
- **フェーズ:** Discovery（現状FAQ・ドキュメント整理）→ プロトタイプ → 明治内テスト
- **本番環境:** **Google Workspace Enterprise / AppSheet / Gemini / Google Cloud**
- **⚠️⚠️ 明治側は Claude 使用NG。** 本番は **Gemini / Google Workspace 前提**で構築する。
  Vertex/Claude を本番前提にしない（＝過去の誤り。訂正済み）。
- **設計方針:** プロトはあえて **ルールベース・LLM非依存**。判断ロジックと知識ベースは
  スタック非依存なので、そのまま Gemini/AppSheet に移植できる。
- **成果物:** `hello-panda-brand-assistant/`（`index.html` 単体、JS無しでも表示、日英切替）

---

## 参考（Risa ローカル環境のみ、Claude Code cloud からは非可視）
- KPPプロジェクトdir: `~/Documents/Claude/Projects/KPP/`
- R Agile Studio: `~/Documents/Claude/Projects/KPP/brands/r-agile-studio/` → https://r-agile.studio
- 明治契約書: `~/Documents/Claude/Projects/KPP/クライアント/明治/契約書/`

**Profile last updated:** 2026-07-24
