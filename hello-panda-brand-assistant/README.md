# Hello Panda · Brand Decision Assistant (Prototype)

**社外秘 / CONFIDENTIAL — Client: Meiji (明治 海外事業本部)**

A rule-based self-check + case-reference tool that digitizes the Hello Panda
brand governance guides, so regional teams and agencies can self-serve
"can we do this with the brand assets?" decisions instead of routing every
question to the Global HP Brand Manager.

日本語：Hello Panda のブランドガイド（Design Guide / Activation Guide）を
そのままツール化した、**ルールベースのセルフチェック＋事例参照**プロトタイプ。
各エリア担当・代理店が販促判断を「自走」できるようにするのが目的。

---

## Status

- **v0.1 — prototype.** Single self-contained `index.html`, no build step,
  no server, no external calls.
- **Rule-based (no LLM) → zero hallucination.** The tool only ever surfaces
  content that exists in the two source guides. When a question touches an
  unresolved "open topic" (継続論点), it stops and routes the user to the
  Global HP Brand Manager instead of guessing.

## How to open

Open `index.html` in any modern browser. No install required.

- Language toggle (日本語 / EN) — top right.
- Search box — pull up a matching past case; open-topic queries raise a
  guardrail banner.
- Self-check A–D — interactive checklists that produce a verdict
  (decide locally / consult the Global HP Brand Manager).

## Source material

- Hello Panda Design Guide (Draft, SG V1, EN)
- Hello Panda Activation Guide v1 (自走判断ガイド, JP)

Both are **drafts (MVP)** — content will be updated as regional feedback is
collected. Some cross-document page numbers are still being reconciled;
citation codes are shown verbatim from the source.

## Target environment (client constraint)

The client builds on **Google Workspace Enterprise / AppSheet / Gemini /
Google Cloud**. This prototype is intentionally **LLM-agnostic and rule-based**,
so its decision logic and knowledge base port cleanly onto that stack — this
HTML build is a stack-independent demo of the logic and UX, not the production
system.

## Roadmap

- **v0.1 (this)** — rule-based self-check + case reference, JP/EN.
- **UI polish** — clearer self-check flow (in progress).
- **Discovery** — organize current FAQ / documents into the knowledge base.
- **v1.0** — internal Q&A assistant rebuilt on the client stack
  (AppSheet + Gemini + Google Workspace), grounded in these same guides,
  then tested inside the client org.

## Note

This prototype and its source content are confidential. Do not publish to any
public host or share links externally without the brand owner's approval.
