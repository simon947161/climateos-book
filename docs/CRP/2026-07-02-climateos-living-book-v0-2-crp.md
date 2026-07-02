# CRP Harvest Block｜ClimateOS Living Book v0.2

**Date:** 2026-07-02  
**Project:** ClimateOS Living Book / Torch and Horizon  
**Repository:** simon947161/climateos-book  
**Production URL:** https://climateos-book.vercel.app/  
**Status:** v0.1 public online; v0.2 multilingual architecture completed locally by Codex, pending Git commit / push / Vercel deployment.

---

## 核心知识点

- v0.1 中文站已上线： https://climateos-book.vercel.app/
- v0.2 六语架构已由 Codex 本地完成，`pnpm run build` 已通过，但尚未 commit / push。
- 支持语言：`zh`, `en`, `es`, `fr`, `de`, `ar`。
- `zh` 为 original / complete，其他语言当前为 pending placeholder。
- 互动入口采用 GitHub Issue Templates，而非数据库登录系统。
- 中文章节数：27。
- 中文总字符数：42,933。
- 五语翻译预估源字符数：214,665。

## 想法点

- 网站不只是书站，而是全球读者、翻译者、研究者和合作者的连接入口。
- 六语发布比单一英文发布更符合 ClimateOS 全球传播目标。
- 翻译应采用 machine draft + AI/human review + community feedback 的渐进模式。
- GitHub Issues 可以先作为轻量级互动系统，避免过早引入复杂数据库和登录系统。

## 愿望点

- 建立一个可全球访问、可参与、可反馈的 ClimateOS Living Book。
- 让不同语言读者都能进入项目，而不是只停留在中文圈。
- 后续形成英文母版，再扩展西语、法语、德语、阿语。
- 逐步形成 ClimateOS 术语表、翻译记忆和全球协作者入口。

## 推理点

- 当前最重要的不是全文翻译，而是先把六语结构和互动机制上线。
- 42,933 中文字符对应五语翻译约 214,665 源字符，规模可控。
- 直接前端实时翻译不适合思想型出版，应使用静态 Markdown 翻译版本。
- 英文版应优先作为全球传播母版，之后再作为其他语言翻译与校对的中间基准。

## 关键决策

- v0.2 先上线六语架构，不伪造翻译完成。
- 加入 Spanish，形成六语总结构：中文、英文、西语、法语、德语、阿语。
- 下一步只做 `git add` / `commit` / `push` / Vercel deploy，不再开发新功能。
- 保持真实状态标注：original / pending / machine-draft / reviewed。

## 未解决问题

- v0.2 尚未推送到 GitHub。
- v0.2 尚未触发 Vercel 部署。
- 真实英文、西语、法语、德语、阿语正文尚未生成。
- 后续需要术语表与翻译风格规则。
- 需要确认 `/feedback`、`/contribute` 和 GitHub Issue Templates 在 v0.2 部署后可正常使用。

## 下一步行动

1. 等 Codex quota / tool approval 恢复。
2. 执行 `git add .` / `git commit` / `git pull --rebase origin main` / `pnpm run build` / `git push origin main`。
3. 确认 Vercel 自动部署 v0.2。
4. 验收 `/en`, `/es`, `/fr`, `/de`, `/ar`, `/feedback`, `/contribute`。
5. 开始 v0.3：英文 machine draft + ClimateOS 术语表。
6. 再进入 v0.4：西语、法语、德语、阿语 machine draft。

## 项目关联关键词

ClimateOS, Living Book, Torch and Horizon, 远方与火炬, multilingual publishing, GitHub Issues, Vercel, Next.js, translation workflow, global collaboration, contribution architecture, English master version, Spanish, French, German, Arabic, RTL, glossary, translation memory
