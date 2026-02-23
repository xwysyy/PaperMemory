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
            "options.introHtml": '<em>These customization options are complementary to those available in the popup such as Dark Theme or Notifications. You can also access your full-screen memory <a target="_blank" id="options-full-memory-link" href="#">here</a></em>.',
            "options.warningHtml": '<em><strong>Warning:</strong> features which alter your Memory such as publication matching, importing papers or overwriting your Memory should not be triggered while you are browsing papers. This would have unpredictable effects as you would concurrently write to the same database.</em>',

            // Options - PWC
            "options.pwcPrefs": "PapersWithCode preferences",
            "options.pwcOfficial": '[1] Only store <em>official</em> code repositories: ',
            "options.pwcFramework": "[2] Preferred implementation framework:",
            "options.noPreference": "No preference",
            "options.about": "About",
            "options.pwcAboutP1": "If you select option [1] and PapersWithCode reports no official implementation for the paper then no repository will be stored, even if there are non-official implementations. Otherwise, official implementations will always be preferred.",
            "options.pwcAboutP2": "If a framework is selected in [2] and such an implementation is available, all other implementations will be ignored.",
            "options.pwcAboutP3": "If multiple code repositories are available at this point, PaperMemory will store the one with most stars.",

            // Options - Auto-tagging
            "options.autoTagging": "Auto-tagging",
            "options.autoTagDesc": 'Provide Javascript regular expressions to automatically add tags to papers based on their titles and authors. The two columns represent an <code>AND</code>. Use two different entries for an <code>OR</code>. Matching is <strong>not</strong> case-sensitive. An empty input matches everything, it is equivalent to <code>.*</code>.',
            "options.autoTagAuthors": 'The Authors RegEx will be matched against a string which joins authors in a BibTex fashion, <em>e.g.</em> <code>Abc Def and Ghi Jkl and Mno Pqr</code>.',
            "options.autoTagExample": 'For instance, to match all papers containing <code>"GAN"</code> the corresponding Title RegEx could be <code>.*gan.*</code> (note this would match <em>any</em> title containing those 3 letters subsequently).',
            "options.titleRegex": "Title RegEx",
            "options.authorsRegex": "Authors RegEx",
            "options.tagsToUse": "Tags to use",
            "options.commaSeparated": "comma-separated",

            // Options - Preprint matching
            "options.preprintMatching": "Preprint matching",
            "options.preprintDesc": 'In this section, you can manually trigger the <a href="#preprint-matching" rel="noopenner noreferrer" target="_blank">preprint matching procedure</a> to discover publications from Arxiv pre-prints and code for your papers from paperswithcode.com.',
            "options.preprintNote": 'A paper\'s <code>note</code> will only be updated to <code>Accepted @ venue (year) -- [source]</code> <strong><em>if</em></strong>&nbsp; you don\'t have a custom note already.',
            "options.preprintCount": 'You currently have <span id="preprints-number"></span> papers missing a publication venue.',
            "options.startMatching": "Start the matching procedure",

            // Options - Select Sources
            "options.selectSources": "Select Sources",
            "options.srcDesc1": 'If you don\'t want to track papers from <emph>all</emph> the sources PaperMemory can handle, you can disable them here.',
            "options.srcDesc2": 'Note that you can only disable per <strong>source</strong> not exact venue. For instance you cannot distinguish between Nature Communications and Nature Climate Change (both <code>nature</code> venues) or between CVPR and ICCV (both <code>cvf</code> venues).',
            "options.srcParse": "Sources to parse papers from:",

            // Options - Data Management
            "options.dataManagement": "Data Management",
            "options.dmDesc1": 'You can export your Memory as a <code>json</code> file or as a bibliography.',
            "options.dmDesc2": "To perform advanced data manipulation (paper merges, batch tagging etc.) you can process the exported Memory file and then load it into the extension, overwriting your current data.",
            "options.dmDesc3": "You can also share a list of papers for others in your team!",
            "options.fullExports": "Full Memory Exports",
            "options.exportBib": ' &gt; Export the Memory as a BibTex <strong>bibliography</strong>: ',
            "options.exportData": ' &gt; Export your full Memory <strong>data</strong>: ',
            "options.loadJson": ' &gt; Load a <code>json</code> memory file (this will <strong style="text-decoration: underline;">overwrite</strong> your Memory): ',
            "options.selectFile": "Select file",
            "options.exportByTags": "Export by tags",
            "options.exportTagsDesc1": 'Select papers to export by providing a list of tags. If you select the <code>AND</code> operator, papers will be required to have all those tags. If you select the <code>OR</code> operator, papers will be required to have at least one of those tags.',
            "options.exportTagsDesc2": 'You can export to <code>.bib</code> for bibliographies, or to <code>.json</code>. In the latter case you can choose to either just export URLs, or include <code>title</code>, <code>codeLink</code> and <code>tags</code> fields (in order to match the <a href="#import-papers">import format</a>, and <code>title</code> is just for the sake of human readability)',
            "options.importPapers": "Import papers",
            "options.importDesc1": 'PaperMemory lets you add papers from a list of URLs in the form of a <code>.json</code> file.',
            "options.importDesc2": 'The file must be structured as follows: a list of entries where each entry is either a <code>string</code> pointing to a paper\'s <code>url</code> (PDF or abstract) or an <code>object</code> with a mandatory <code>"url": string</code> field and <em>optionally</em> :<ul><li>a <code>"codeLink": string</code> field pointing a to code repository</li><li>a <code>"tags": Array&lt;string&gt;</code> field with tags.</li></ul>',
            "options.importNote1": '<strong><em>Note&nbsp;&nbsp;&nbsp;</em></strong>&nbsp;: all URLs must come from sources known to PaperMemory',
            "options.importNote2": '<strong><em>Note 2</em></strong>&nbsp;: If you have enabled online synchronization through Github Gists, be aware that synchronization will only happen after <em>all</em> imported papers have been parsed.',
            "options.importExample": 'Example valid <code>.json</code> file:',

            // Options - Online Sync
            "options.onlineSync": "Online synchronization",
            "options.syncHowTitle": "How it works",
            "options.syncHowList": '<li>Your Memory data gets written to a <code>.json</code> file as a gist on your Github account (<a href="https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists#about-gists" target="_blank" rel="noopener noreferrer">read about gists</a>)</li><li>Although it is non-discoverable, your gist data is still accessible to someone you\'d give the link to</li><li>The synchronization happens in 2 stages:<ul><li><em>Push</em>&nbsp;: when you close the Popup or when a paper gets added to the memory, the remote gist gets overwritten</li><li><em>Pull</em>&nbsp;&nbsp;&nbsp;: when you open the popup or before a paper gets added, the remote gist is downloaded and overwrites your local Memory</li></ul></li><li>This is all very alpha!</li>',
            "options.syncSequential": 'Syncing is meant for <em>sequential</em> use across multiple devices.',
            "options.syncNotMultiUser": 'Syncing does <strong>NOT</strong> turn PaperMemory into a multi-user tool: in its current state, PaperMemory will NOT handle conflicts or concurrent writes to the remote data. Any conflict will result in potential loss of data.',
            "options.syncSyncingTitle": "Syncing",
            "options.syncPatDesc": 'PaperMemory relies on Github\'s <em>Personal Access Tokens</em> which you can easily generate from your Github account. Make sure<ol><li>It has no expiration date</li><li>The <code>gist</code> scope is selected</li></ol>You can revoke the token later at any time. Click <a href="https://github.com/settings/tokens/new?scopes=gist" target="_blank" rel="noopener noreferrer">here</a> to generate a new token.',
            "options.patLabel": "Github Personal Access Token:",
            "options.patNote": "Note: your token is saved locally and does not leave your computer.",
            "options.startSyncTitle": "Start syncing your data to Github?",
            "options.startSyncDesc": 'Your data will be stored as a Gist on your personal github account. Do <strong>not</strong> edit that file manually or you may corrupt your whole data.',
            "options.startSyncBackup": "In case anything goes wrong, we'll still download a backup locally",
            "options.stopSyncTitle": "STOP syncing your data to Github?",
            "options.stopSyncDesc": "The Gist will not be deleted, but changes to your Memory will not be synced anymore.",
            "options.footerText": '',

            // Options - Modals
            "options.modalConflictTitle": "Syncronization conflict",
            "options.modalConflictDesc": "You seem to already have a synced Memory. What do you want to do?",
            "options.modalConflictList": "<li>Overwrite your LOCAL data with the REMOTE data</li><li>Overwrite your REMOTE data with the LOCAL data</li><li>Merge both data sources into the union of all papers</li><li>Abort this procedure.</li>",
            "options.modalConflictNote": '<strong><em>Note&nbsp;:</em></strong>&nbsp; All overwritten data will be saved to your <code>Downloads/</code> folder in case anything goes wrong.',
            "options.modalOverwriteLocal": "1. Overwrite local with remote",
            "options.modalOverwriteRemote": "2. Overwrite remote with local",
            "options.modalMerge": "3. Merge both data sources",
            "options.modalCancelSync": "Cancel synchronization",
            "options.modalWarnP1": "You are about to enable Syncing across devices with Github Gists.",
            "options.modalWarnP2": "This popup is simply to make sure everything is clear on what will happen",
            "options.modalWarnP3": 'In particular, make sure you have read and understood the <a href="#sync-how-it-works" id="modal-sync-warning-description">description of the feature</a> before continuing.',
            "options.modalWarnAdditional": 'Additionally:<ul><li>Syncronization typically takes approximately 2-3 seconds to <em>Pull</em> or to <em>Push</em> the data.</li><li>Therefore, if you modify your memory (add tags, notes, delete a paper) from the popup and then close it, your modifications will be lost so you have to make sure the app is done syncing before leaving the popup.</li><li>In most cases, the above is not critical. But it may explain why you feel like some of your actions are not recored or overwritten.</li></ul>',
            "options.modalWarnInterval": 'In general, you can consider that PaperMemory expects around <strong>5-10 seconds between devices</strong> to work properly.',
            "options.modalWarnCancel": "Cancel Synchronization.",
            "options.modalWarnContinue": "Ok, let's do this!",

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
            "options.introHtml": '<em>这些自定义选项是弹窗中可用选项（如深色主题或通知）的补充。你也可以在<a target="_blank" id="options-full-memory-link" href="#">这里</a>访问全屏记忆库</em>。',
            "options.warningHtml": '<em><strong>警告：</strong>修改记忆库的功能（如出版物匹配、导入论文或覆盖记忆库）不应在浏览论文时触发，否则会因并发写入同一数据库而产生不可预测的效果。</em>',

            // Options - PWC
            "options.pwcPrefs": "PapersWithCode 偏好设置",
            "options.pwcOfficial": '[1] 仅存储<em>官方</em>代码仓库：',
            "options.pwcFramework": "[2] 首选实现框架：",
            "options.noPreference": "无偏好",
            "options.about": "说明",
            "options.pwcAboutP1": "如果选择了选项 [1] 且 PapersWithCode 未报告该论文的官方实现，则不会存储任何仓库，即使存在非官方实现。否则，官方实现将始终优先。",
            "options.pwcAboutP2": "如果在 [2] 中选择了框架且有对应实现，则其他所有实现将被忽略。",
            "options.pwcAboutP3": "如果此时仍有多个代码仓库可用，PaperMemory 将存储星标最多的那个。",

            // Options - Auto-tagging
            "options.autoTagging": "自动标签",
            "options.autoTagDesc": '提供 JavaScript 正则表达式，根据论文标题和作者自动添加标签。两列表示 <code>AND</code>（与）关系。使用两个不同条目表示 <code>OR</code>（或）关系。匹配<strong>不</strong>区分大小写。空输入匹配所有内容，等同于 <code>.*</code>。',
            "options.autoTagAuthors": '作者正则将匹配以 BibTeX 格式连接的作者字符串，<em>例如</em> <code>Abc Def and Ghi Jkl and Mno Pqr</code>。',
            "options.autoTagExample": '例如，要匹配所有包含 <code>"GAN"</code> 的论文，对应的标题正则可以是 <code>.*gan.*</code>（注意这会匹配<em>任何</em>连续包含这3个字母的标题）。',
            "options.titleRegex": "标题正则",
            "options.authorsRegex": "作者正则",
            "options.tagsToUse": "使用的标签",
            "options.commaSeparated": "逗号分隔",

            // Options - Preprint matching
            "options.preprintMatching": "预印本匹配",
            "options.preprintDesc": '在此部分，你可以手动触发<a href="#preprint-matching" rel="noopenner noreferrer" target="_blank">预印本匹配流程</a>，从 Arxiv 预印本中发现出版物，并从 paperswithcode.com 获取论文代码。',
            "options.preprintNote": '论文的 <code>note</code> 仅在你没有自定义备注时才会更新为 <code>Accepted @ venue (year) -- [source]</code>。',
            "options.preprintCount": '你目前有 <span id="preprints-number"></span> 篇论文缺少出版信息。',
            "options.startMatching": "开始匹配流程",

            // Options - Select Sources
            "options.selectSources": "选择来源",
            "options.srcDesc1": '如果你不想追踪 PaperMemory 支持的<emph>所有</emph>来源的论文，可以在此禁用。',
            "options.srcDesc2": '注意你只能按<strong>来源</strong>禁用，而非精确的期刊/会议。例如你无法区分 Nature Communications 和 Nature Climate Change（都是 <code>nature</code> 来源），也无法区分 CVPR 和 ICCV（都是 <code>cvf</code> 来源）。',
            "options.srcParse": "要解析论文的来源：",

            // Options - Data Management
            "options.dataManagement": "数据管理",
            "options.dmDesc1": '你可以将记忆库导出为 <code>json</code> 文件或参考文献。',
            "options.dmDesc2": "要进行高级数据操作（论文合并、批量标签等），你可以处理导出的记忆库文件，然后加载到扩展中覆盖当前数据。",
            "options.dmDesc3": "你还可以与团队成员分享论文列表！",
            "options.fullExports": "完整记忆库导出",
            "options.exportBib": ' &gt; 将记忆库导出为 BibTeX <strong>参考文献</strong>：',
            "options.exportData": ' &gt; 导出完整记忆库<strong>数据</strong>：',
            "options.loadJson": ' &gt; 加载 <code>json</code> 记忆库文件（这将<strong style="text-decoration: underline;">覆盖</strong>你的记忆库）：',
            "options.selectFile": "选择文件",
            "options.exportByTags": "按标签导出",
            "options.exportTagsDesc1": '通过提供标签列表来选择要导出的论文。如果选择 <code>AND</code> 运算符，论文需要包含所有这些标签。如果选择 <code>OR</code> 运算符，论文只需包含其中一个标签。',
            "options.exportTagsDesc2": '你可以导出为 <code>.bib</code> 格式的参考文献，或 <code>.json</code> 格式。后者可以选择仅导出 URL，或包含 <code>title</code>、<code>codeLink</code> 和 <code>tags</code> 字段（以匹配<a href="#import-papers">导入格式</a>，<code>title</code> 仅为方便阅读）',
            "options.importPapers": "导入论文",
            "options.importDesc1": 'PaperMemory 允许你通过 <code>.json</code> 文件中的 URL 列表添加论文。',
            "options.importDesc2": '文件结构如下：一个条目列表，每个条目可以是指向论文 <code>url</code>（PDF 或摘要）的 <code>string</code>，或包含必填 <code>"url": string</code> 字段的 <code>object</code>，以及<em>可选</em>的：<ul><li><code>"codeLink": string</code> 字段，指向代码仓库</li><li><code>"tags": Array&lt;string&gt;</code> 字段，包含标签</li></ul>',
            "options.importNote1": '<strong><em>注意</em></strong>：所有 URL 必须来自 PaperMemory 已知的来源',
            "options.importNote2": '<strong><em>注意 2</em></strong>：如果你启用了通过 Github Gists 的在线同步，请注意同步将在<em>所有</em>导入的论文解析完成后才会进行。',
            "options.importExample": '有效的 <code>.json</code> 文件示例：',

            // Options - Online Sync
            "options.onlineSync": "在线同步",
            "options.syncHowTitle": "工作原理",
            "options.syncHowList": '<li>你的记忆库数据会以 <code>.json</code> 文件的形式写入 Github 账户的 Gist（<a href="https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists#about-gists" target="_blank" rel="noopener noreferrer">了解 Gists</a>）</li><li>虽然 Gist 不可被搜索发现，但拥有链接的人仍可访问你的数据</li><li>同步分为两个阶段：<ul><li><em>推送</em>：关闭弹窗或添加论文时，远程 Gist 会被覆盖</li><li><em>拉取</em>：打开弹窗或添加论文前，远程 Gist 会被下载并覆盖本地记忆库</li></ul></li><li>此功能仍处于早期阶段！</li>',
            "options.syncSequential": '同步适用于多设备间的<em>顺序</em>使用。',
            "options.syncNotMultiUser": '同步<strong>不会</strong>将 PaperMemory 变成多用户工具：当前状态下，PaperMemory 不会处理冲突或并发写入远程数据。任何冲突都可能导致数据丢失。',
            "options.syncSyncingTitle": "同步设置",
            "options.syncPatDesc": 'PaperMemory 依赖 Github 的<em>个人访问令牌</em>，你可以从 Github 账户轻松生成。请确保<ol><li>令牌没有过期日期</li><li>选择了 <code>gist</code> 权限范围</li></ol>你可以随时撤销令牌。点击<a href="https://github.com/settings/tokens/new?scopes=gist" target="_blank" rel="noopener noreferrer">这里</a>生成新令牌。',
            "options.patLabel": "Github 个人访问令牌：",
            "options.patNote": "注意：你的令牌仅保存在本地，不会离开你的电脑。",
            "options.startSyncTitle": "开始将数据同步到 Github？",
            "options.startSyncDesc": '你的数据将以 Gist 形式存储在你的个人 Github 账户上。请<strong>不要</strong>手动编辑该文件，否则可能损坏所有数据。',
            "options.startSyncBackup": "如果出现问题，我们仍会在本地下载备份",
            "options.stopSyncTitle": "停止将数据同步到 Github？",
            "options.stopSyncDesc": "Gist 不会被删除，但记忆库的更改将不再同步。",
            "options.footerText": '',

            // Options - Modals
            "options.modalConflictTitle": "同步冲突",
            "options.modalConflictDesc": "你似乎已有同步的记忆库。你想怎么做？",
            "options.modalConflictList": "<li>用远程数据覆盖本地数据</li><li>用本地数据覆盖远程数据</li><li>合并两个数据源（取所有论文的并集）</li><li>中止此操作</li>",
            "options.modalConflictNote": '<strong><em>注意：</em></strong>所有被覆盖的数据将保存到 <code>Downloads/</code> 文件夹以防万一。',
            "options.modalOverwriteLocal": "1. 用远程覆盖本地",
            "options.modalOverwriteRemote": "2. 用本地覆盖远程",
            "options.modalMerge": "3. 合并两个数据源",
            "options.modalCancelSync": "取消同步",
            "options.modalWarnP1": "你即将启用通过 Github Gists 的跨设备同步。",
            "options.modalWarnP2": "此弹窗只是为了确保你清楚接下来会发生什么",
            "options.modalWarnP3": '请确保你已阅读并理解<a href="#sync-how-it-works" id="modal-sync-warning-description">功能说明</a>后再继续。',
            "options.modalWarnAdditional": '此外：<ul><li>同步通常需要约 2-3 秒来<em>拉取</em>或<em>推送</em>数据。</li><li>因此，如果你从弹窗修改记忆库（添加标签、备注、删除论文）后立即关闭，你的修改可能会丢失，请确保同步完成后再离开弹窗。</li><li>大多数情况下这不是关键问题，但这可能解释了为什么你觉得某些操作没有被记录或被覆盖。</li></ul>',
            "options.modalWarnInterval": '一般来说，PaperMemory 需要设备间间隔约 <strong>5-10 秒</strong>才能正常工作。',
            "options.modalWarnCancel": "取消同步",
            "options.modalWarnContinue": "好的，开始吧！",

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
