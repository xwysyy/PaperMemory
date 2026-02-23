/**
 * i18n module for PaperMemory runtime language switching.
 * Supports English (en) and Chinese (zh).
 */

const i18n = {
    _lang: "en",
    _messages: {
        en: {
            // Popup header & intro
            "popup.intro": "automatically records and organizes the papers you read, without ever leaving your browser.",
            "popup.intro2": "When opening a paper (its web page or pdf), a reference to that paper will be stored in your Memory. Supports Arxiv, Open Review, PNAS, Science, Nature",
            "popup.andMore": "and more",
            "popup.requestVenue": "Request a new venue",
            "popup.clickOn": "Click on the",
            "popup.memoryButtonBelow": "Memory button below",
            "popup.orPress": "(or press",
            "popup.userGuide": "User Guide",
            "popup.parseWebsite": "Parse current website",

            // Memory
            "memory.search": "Search",
            "memory.searchEntries": "Search {n} entries ...",
            "memory.showFavoritesOnly": "Show favorites only",
            "memory.lastOpen": "Last Open",
            "memory.lastAdded": "Last Added",
            "memory.year": "Year",
            "memory.title": "Title",
            "memory.visits": "# Visits",
            "memory.id": "ID",
            "memory.lastFavoured": "Last favoured",
            "memory.tagsList": "Tags list",

            // Paper info table
            "paper.added": "Added",
            "paper.lastOpen": "Last open",
            "paper.visits": "Visits",
            "paper.source": "Source",
            "paper.publication": "Publication",

            // Paper actions
            "action.edit": "Edit paper details",
            "action.copyMd": "Copy Markdown-formatted link",
            "action.copyBibtex": "Copy Bibtex citation",
            "action.visits": "Number of times you have opened this paper",
            "action.openLocal": "Open downloaded pdf",
            "action.copyLink": "Copy paper url",
            "action.copyHyperLink": "Copy url as hyperlink",
            "action.openSciRate": "Open on SciRate",
            "action.openAlphaXiv": "Open on AlphaXiv",
            "action.openAr5iv": "Open on ar5iv",
            "action.openHuggingFace": "Open on HuggingFace Papers",
            "action.downloadPdf": "Download pdf",
            "action.copyLinkToPaper": "Copy link to paper",
            "action.copyHyperlinkToPaper": "Copy hyperlink to paper",
            "action.deleteFromMemory": "Delete from Memory",
            "action.clickToSeeMetadata": "Click to see metadata",
            "action.openTabTo": "Open tab to {title}",
            "action.copyUrlTo": "Copy URL to the paper's {type}",
            "action.openPaper": "Open Paper {name} Page",
            "action.deletePaperFromMemory": "Delete paper from Memory",

            // Edit form
            "form.tags": "Tags:",
            "form.code": "Code:",
            "form.note": "Note:",
            "form.addLink": "Add link",
            "form.addCodeLink": "Add code link",
            "form.anythingToNote": "Anything to note?",
            "form.done": "Done",
            "form.save": "Save",
            "form.favorite": "Favorite:",
            "form.tagPaper": "Tag paper",

            // Delete modal
            "modal.confirmDelete": "Are you sure you want to delete:",
            "modal.cancel": "Cancel",
            "modal.confirm": "Confirm",

            // Feedback
            "feedback.mdLinkCopied": "Markdown {type} link copied!",
            "feedback.bibtexCopied": "Bibtex copied!",
            "feedback.linkCopied": "{type} link copied!",
            "feedback.hyperlinkCopied": "Hyperlink copied!",
            "feedback.titleCopied": "Title copied!",
            "feedback.bibtexCitationCopied": "Bibtex citation copied!",
            "feedback.hyperlinkCopiedType": "{type} hyperlink copied!",
            "feedback.mdCopied": "Markdown {type} copied!",

            // Sync
            "sync.syncing": "Syncing",
            "sync.synced": "Synced",
            "sync.failed": "Sync failed",

            // No paper
            "noPaper.title": "This paper is not in your Memory",
            "noPaper.hereIs": "Here's a {animal} for your trouble",
            "noPaper.tryManual": "Try manual trigger",

            // Menu
            "menu.feedback": "Feedback",
            "menu.feedbackDesc": "It's the little things that make your research smoother.",
            "menu.feedbackDesc2": "Look at the code ; raise issues ; share improvement ideas",
            "menu.help": "Help",
            "menu.userGuide": "User guide",
            "menu.documentation": "Documentation:",
            "menu.configuration": "Configuration",
            "menu.advanced": "Advanced",
            "menu.openSettings": "Open settings",

            // Menu - Arxiv enhancement
            "menu.arxivEnhancement": "Arxiv.org enhancement",
            "menu.addPdfDownload": "Add PDF direct download button",
            "menu.addMdLink": "Add Markdown Link section",
            "menu.addBibtex": "Add BibTex citation section",

            // Menu - UI
            "menu.userInterface": "User Interface",
            "menu.displayNotification": "Display notification when a paper is added",
            "menu.useDarkMode": "Use Dark Mode",
            "menu.directOpenMemory": "Directly open the Memory when not on a Paper's page",
            "menu.changeTabTitles": "Change paper tab titles",
            "menu.addSciRate": "Add a link to SciRate in the popup",
            "menu.addAlphaXiv": "Add a link to AlphaXiv in the popup",
            "menu.addAr5iv": "Add a link to ar5iv in the popup",
            "menu.addHuggingFace": "Add a link to the HuggingFace paper page in the popup (Arxiv only)",

            // Menu - Functionalities
            "menu.functionalities": "Functionalities",
            "menu.mdYearVenue": "Include a paper's venue and year when available in the Markdown link",
            "menu.preferPdf": "Favor PDFs for paper links (otherwise, links will point to a paper's abstract page)",
            "menu.pdfOnly": "Only record papers on their pdf pages, not from their abstracts",
            "menu.noAuto": "Disable automatic recording of papers. You will have to manually open the popup and click a button",
            "menu.enterLocalPdf": "When hitting Enter on a memory item, open a local PDF file when one is available instead of the the link to the paper.",
            "menu.storePdfs": "Download pdfs to PaperMemory's folder in your Downloads to be able to open them instead of re-downloading.",
            "menu.websiteParsing": "Enable parsing of arbitrary website by adding a button in the popup. This is still very experimental, see #146 on Github.",

            // Menu - Keyboard
            "menu.keyboardNav": "Keyboard Navigation",
            "menu.openBibMatcher": "PaperMemory BibMatcher",
            "menu.fullPageMemory": "full-page memory",
            "menu.optionsPage": "options page",

            // Options page
            "options.title": "PaperMemory Options",
            "options.customizationIntro": "These customization options are complementary to those available in the popup such as Dark Theme or Notifications. You can also access your full-screen memory",
            "options.warning": "features which alter your Memory such as publication matching, importing papers or overwriting your Memory should not be triggered while you are browsing papers. This would have unpredictable effects as you would concurrently write to the same database.",
            "options.pwcPrefs": "PapersWithCode preferences",
            "options.autoTagging": "Auto-tagging",
            "options.preprintMatching": "Preprint matching",
            "options.selectSources": "Select Sources",
            "options.dataManagement": "Data Management",
            "options.onlineSync": "Online synchronization",

            // Language
            "lang.switch": "EN/中",
        },

        zh: {
            // Popup header & intro
            "popup.intro": "自动记录和整理你阅读的论文，无需离开浏览器。",
            "popup.intro2": "打开论文（网页或PDF）时，该论文的引用将存储在你的记忆库中。支持 Arxiv、Open Review、PNAS、Science、Nature",
            "popup.andMore": "等更多",
            "popup.requestVenue": "请求新的期刊/会议",
            "popup.clickOn": "点击下方的",
            "popup.memoryButtonBelow": "记忆库按钮",
            "popup.orPress": "（或按",
            "popup.userGuide": "使用指南",
            "popup.parseWebsite": "解析当前网站",

            // Memory
            "memory.search": "搜索",
            "memory.searchEntries": "搜索 {n} 条记录...",
            "memory.showFavoritesOnly": "仅显示收藏",
            "memory.lastOpen": "最近打开",
            "memory.lastAdded": "最近添加",
            "memory.year": "年份",
            "memory.title": "标题",
            "memory.visits": "访问次数",
            "memory.id": "ID",
            "memory.lastFavoured": "最近收藏",
            "memory.tagsList": "标签列表",

            // Paper info table
            "paper.added": "添加时间",
            "paper.lastOpen": "最近打开",
            "paper.visits": "访问次数",
            "paper.source": "来源",
            "paper.publication": "发表",

            // Paper actions
            "action.edit": "编辑论文详情",
            "action.copyMd": "复制 Markdown 格式链接",
            "action.copyBibtex": "复制 BibTeX 引用",
            "action.visits": "你打开此论文的次数",
            "action.openLocal": "打开已下载的 PDF",
            "action.copyLink": "复制论文链接",
            "action.copyHyperLink": "复制超链接",
            "action.openSciRate": "在 SciRate 上打开",
            "action.openAlphaXiv": "在 AlphaXiv 上打开",
            "action.openAr5iv": "在 ar5iv 上打开",
            "action.openHuggingFace": "在 HuggingFace Papers 上打开",
            "action.downloadPdf": "下载 PDF",
            "action.copyLinkToPaper": "复制论文链接",
            "action.copyHyperlinkToPaper": "复制论文超链接",
            "action.deleteFromMemory": "从记忆库中删除",
            "action.clickToSeeMetadata": "点击查看元数据",
            "action.openTabTo": "打开 {title} 的标签页",
            "action.copyUrlTo": "复制论文 {type} 的链接",
            "action.openPaper": "打开论文 {name} 页面",
            "action.deletePaperFromMemory": "从记忆库中删除论文",

            // Edit form
            "form.tags": "标签：",
            "form.code": "代码：",
            "form.note": "笔记：",
            "form.addLink": "添加链接",
            "form.addCodeLink": "添加代码链接",
            "form.anythingToNote": "有什么要记录的？",
            "form.done": "完成",
            "form.save": "保存",
            "form.favorite": "收藏：",
            "form.tagPaper": "标记论文",

            // Delete modal
            "modal.confirmDelete": "确定要删除：",
            "modal.cancel": "取消",
            "modal.confirm": "确认",

            // Feedback
            "feedback.mdLinkCopied": "Markdown {type} 链接已复制！",
            "feedback.bibtexCopied": "BibTeX 已复制！",
            "feedback.linkCopied": "{type} 链接已复制！",
            "feedback.hyperlinkCopied": "超链接已复制！",
            "feedback.titleCopied": "标题已复制！",
            "feedback.bibtexCitationCopied": "BibTeX 引用已复制！",
            "feedback.hyperlinkCopiedType": "{type} 超链接已复制！",
            "feedback.mdCopied": "Markdown {type} 已复制！",

            // Sync
            "sync.syncing": "同步中",
            "sync.synced": "已同步",
            "sync.failed": "同步失败",

            // No paper
            "noPaper.title": "此论文不在你的记忆库中",
            "noPaper.hereIs": "送你一只 {animal} 聊表歉意",
            "noPaper.tryManual": "尝试手动触发",

            // Menu
            "menu.feedback": "反馈",
            "menu.feedbackDesc": "细节决定研究效率。",
            "menu.feedbackDesc2": "查看代码；提交问题；分享改进想法",
            "menu.help": "帮助",
            "menu.userGuide": "使用指南",
            "menu.documentation": "文档：",
            "menu.configuration": "配置",
            "menu.advanced": "高级",
            "menu.openSettings": "打开设置",

            // Menu - Arxiv enhancement
            "menu.arxivEnhancement": "Arxiv.org 增强",
            "menu.addPdfDownload": "添加 PDF 直接下载按钮",
            "menu.addMdLink": "添加 Markdown 链接区域",
            "menu.addBibtex": "添加 BibTeX 引用区域",

            // Menu - UI
            "menu.userInterface": "用户界面",
            "menu.displayNotification": "添加论文时显示通知",
            "menu.useDarkMode": "使用深色模式",
            "menu.directOpenMemory": "不在论文页面时直接打开记忆库",
            "menu.changeTabTitles": "修改论文标签页标题",
            "menu.addSciRate": "在弹窗中添加 SciRate 链接",
            "menu.addAlphaXiv": "在弹窗中添加 AlphaXiv 链接",
            "menu.addAr5iv": "在弹窗中添加 ar5iv 链接",
            "menu.addHuggingFace": "在弹窗中添加 HuggingFace 论文页面链接（仅限 Arxiv）",

            // Menu - Functionalities
            "menu.functionalities": "功能",
            "menu.mdYearVenue": "在 Markdown 链接中包含论文的会议和年份（如有）",
            "menu.preferPdf": "优先使用 PDF 链接（否则链接将指向论文摘要页）",
            "menu.pdfOnly": "仅在 PDF 页面记录论文，不从摘要页记录",
            "menu.noAuto": "禁用自动记录论文。你需要手动打开弹窗并点击按钮",
            "menu.enterLocalPdf": "按 Enter 时，如有本地 PDF 则打开本地文件而非论文链接。",
            "menu.storePdfs": "将 PDF 下载到 PaperMemory 的下载文件夹，以便直接打开而非重新下载。",
            "menu.websiteParsing": "启用任意网站解析（在弹窗中添加按钮）。此功能仍为实验性，详见 Github #146。",

            // Menu - Keyboard
            "menu.keyboardNav": "键盘导航",
            "menu.openBibMatcher": "PaperMemory BibMatcher",
            "menu.fullPageMemory": "全页记忆库",
            "menu.optionsPage": "选项页面",

            // Options page
            "options.title": "PaperMemory 选项",
            "options.customizationIntro": "这些自定义选项是弹窗中可用选项（如深色主题或通知）的补充。你也可以访问全屏记忆库",
            "options.warning": "修改记忆库的功能（如出版物匹配、导入论文或覆盖记忆库）不应在浏览论文时触发，否则会因并发写入同一数据库而产生不可预测的效果。",
            "options.pwcPrefs": "PapersWithCode 偏好设置",
            "options.autoTagging": "自动标签",
            "options.preprintMatching": "预印本匹配",
            "options.selectSources": "选择来源",
            "options.dataManagement": "数据管理",
            "options.onlineSync": "在线同步",

            // Language
            "lang.switch": "EN/中",
        },
    },
};

/**
 * Get translated text for a key, with optional interpolation.
 * @param {string} key Translation key
 * @param {object} params Optional interpolation params, e.g. {n: 5}
 * @returns {string} Translated text or key if not found
 */
const t = (key, params) => {
    const msg = i18n._messages[i18n._lang]?.[key] ?? i18n._messages.en[key] ?? key;
    if (!params) return msg;
    return msg.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? `{${k}}`);
};

/**
 * Save language preference and apply translations.
 * @param {string} lang "en" or "zh"
 */
const setLang = (lang) => {
    i18n._lang = lang;
    chrome.storage.local.set({ pmLang: lang });
    applyI18n();
};

/**
 * Scan DOM for data-i18n, data-i18n-placeholder, data-i18n-title attributes
 * and replace text content accordingly.
 */
const applyI18n = () => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key) el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (key) el.placeholder = t(key);
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
        const key = el.getAttribute("data-i18n-title");
        if (key) el.title = t(key);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        const key = el.getAttribute("data-i18n-html");
        if (key) el.innerHTML = t(key);
    });
    // Update lang switch button text
    const langBtn = document.getElementById("lang-switch-btn");
    if (langBtn) {
        langBtn.textContent = i18n._lang === "en" ? "中文" : "EN";
    }
};

/**
 * Initialize i18n: read language preference from storage, default to "en".
 * @returns {Promise<string>} The current language
 */
const initI18n = () =>
    new Promise((resolve) => {
        if (typeof chrome !== "undefined" && chrome?.storage?.local) {
            chrome.storage.local.get("pmLang", ({ pmLang }) => {
                i18n._lang = pmLang || "en";
                applyI18n();
                resolve(i18n._lang);
            });
        } else {
            resolve(i18n._lang);
        }
    });
