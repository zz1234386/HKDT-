/**
 * ============================================================
 *  航电机载设备行业周报 · 数据配置文件（多期）
 * ------------------------------------------------------------
 *  issues 数组，第一个为最新一期。
 * ============================================================
 */

const WEEKLY_DATA = {
    issues: [
        {
            id: '2026-W43',
            period: '第 43 周',
            dateRange: '2026年10月19日—10月23日',
            publisher: '龙兴航电战略研究部',
            positioning: '捕捉事件、滚动证伪、维持或修正判断。',
            coreJudgment: {
                headline: '国产替代进入适航兑现期，C919交付滞后拖累线装配套',
                status: '维持上期判断，但关键指标出现负面信号',
                body: '本周行业无标志性边际变化，维持上期“国产替代进入适航兑现期”判断。关键跟踪指标出现显著负面信号：C919截至9月底累计交付仅11架，全年50架目标大概率无法达成，年初至今交付进度严重滞后。该变化直接影响国产机载设备线装配套节奏，建议下调对2026年内国产WQAR/ELT线装增量的预期，存量替换与后改装市场的重要性相应上升。本周无其他证伪信号。',
                impact: '下调2026年国产WQAR/ELT线装增量预期；存量替换与后改装市场重要性上升',
                tags: ['国产替代', 'C919', '线装配套', '证伪']
            },
            dashboard: {
                indicators: [
                    { name: '周客运航班量（10.5-10.11）', value: '10.7万班次', change: '环比-4%，同比-2%', freq: '周度', source: '飞友周报', trendClass: 'down', tag: '运营' },
                    { name: '航班执行率', value: '88.1%', change: '环比-4pct', freq: '周度', source: '飞友周报', trendClass: 'down', tag: '运营' },
                    { name: '客座率', value: '87.2%', change: '环比+1pct', freq: '周度', source: '飞友周报', trendClass: 'up', tag: '运营' },
                    { name: 'C919年内累计交付（截至9月底）', value: '11架', change: '较2026目标50架差距39架', freq: '月度', source: 'Cirium经La Tribune报道', trendClass: 'down', tag: 'C919' },
                    { name: '航电维修企业资质/订单公告', value: '本周无新增', change: '—', freq: '事件驱动', source: '民航局/上市公司公告', trendClass: 'neutral', tag: '维修' }
                ],
                background: [
                    '中国机载设备市场规模 420 亿美元（2025年度口径）',
                    '全球航电维修市场 CAGR 6.4%（年度口径）'
                ],
                interpretation: '本周航班量与执行率环比回落，符合国庆假期后季节性特征，对IFEC/机上WiFi使用强度的传导为中性。C919交付数据是本周唯一具有判断修正意义的高频信号：11架的年内进度意味着商飞在剩余Q4需完成39架交付才能触及年初目标，即便考虑Q4冲量，实际交付落在15-20架区间的概率更高。国产机载设备的OEM线装配套收入确认将同步后移。'
            },
            events: {
                density: '中低',
                densityNote: '核心事件为C919交付数据的负面确认，其余为国际IFEC动态，无国产适航或订单级别的新增事件。',
                list: [
                    { title: 'C919年内交付仅11架，50架目标落空概率高', type: '供给/需求', impact: '利空（线装配套）', impactClass: 'down', area: '国产WQAR/ELT/IFE线装', analysis: '主机厂产能瓶颈直接拖累国产机载设备OEM配套节奏', tag: 'C919' },
                    { title: '新加坡航空升级KrisWorld：4K屏+蓝牙+高速连接', type: '需求/国际对标', impact: '中性偏利好（技术路线确认）', impactClass: 'up', area: 'IFE/机上WiFi', analysis: '全服务航司宽体机仍以高端椅背屏+连接并重，BYOD并非唯一方向', tag: 'IFE' },
                    { title: '加拿大航空Rouge 737 MAX 8全舱配椅背屏+免费WiFi', type: '需求', impact: '利好（椅背屏在 leisure 场景回归）', impactClass: 'up', area: 'IFE硬件', analysis: '低成本 leisure 航司选择椅背屏而非纯BYOD，提示窄体机IFE存在分层需求', tag: 'IFE' },
                    { title: '巴西ANAC放宽小型航空器ELT要求', type: '政策', impact: '中性（区域市场）', impactClass: 'neutral', area: 'ELT', analysis: '仅涉及滑翔机等极小型航空器豁免，对国产ELT出海影响可忽略', tag: 'ELT' }
                ]
            },
            falsification: [
                { indicator: 'C919年交付进度', previous: '2026年达25架', current: '截至9月底累计11架', verdict: '证伪（25架亦难达成）', verdictClass: 'down', nextWatch: '10月单月交付架次', tag: 'C919' },
                { indicator: '国产ELT交付兑现率', previous: 'Q4达签约量50%', current: '本周无新披露', verdict: '待跟踪', verdictClass: 'neutral', nextWatch: 'Q4交付公告/主机厂装机通报', tag: 'ELT' },
                { indicator: 'DO-160G检测产能利用率', previous: '三频驱动（取证+批产+维修）', current: '本周无新增客户/订单公告', verdict: '维持', verdictClass: 'neutral', nextWatch: '检测订单公告', tag: '检测' },
                { indicator: '机上WiFi免费模式对IFEC资本开支影响', previous: '2027H1前订单增速可能放缓', current: '加航Rouge选择免费WiFi+椅背屏并行，未收缩硬件', verdict: '逻辑弱化（利好方向）', verdictClass: 'up', nextWatch: '更多航司改装方案选择', tag: 'IFE' },
                { indicator: '核心芯片/传感器贸易逆差', previous: '供应链安全隐忧持续', current: '本周无新数据', verdict: '维持', verdictClass: 'neutral', nextWatch: '季度海关数据', tag: '供应链' }
            ],
            nextWatch: [
                { title: '商飞10月交付通报', detail: '关注C919 10月单月交付架次，若低于3架则进一步下修线装配套预期。', tag: 'C919' },
                { title: '国产ELT Q4交付进展', detail: '跟踪主机厂线装装机通报与航司改装公告，验证千台订单的实际兑现节奏。', tag: 'ELT' },
                { title: '航司Q3经营数据披露', detail: '关注客座率与IFEC相关资本开支指引是否出现调整。', tag: '运营' }
            ],
            disclaimer: '本报告基于公开信息整理，仅供内部战略研究参考，不构成对外投资建议。数据来源已在文中标注，部分预测数据来自第三方研究机构，存在偏差可能。'
        },
        {
            id: '2026-W42',
            period: '第 42 周',
            dateRange: '2026年10月12日—10月16日',
            publisher: '龙兴航电战略研究部',
            positioning: '捕捉事件、滚动证伪、维持或修正判断。',
            coreJudgment: {
                headline: '国产替代进入适航兑现期，关注Q4交付兑现',
                status: '维持上期判断',
                body: '本周行业无标志性边际变化，维持“国产替代进入适航兑现期”判断。C919交付进度是核心观察变量，截至9月底累计交付11架，Q4交付节奏将决定国产机载设备线装配套的收入确认时点。国产ELT千台订单进入交付验证期，需跟踪主机厂装机通报。',
                impact: '维持国产替代判断，Q4交付兑现是关键验证窗口',
                tags: ['国产替代', 'C919', 'ELT']
            },
            dashboard: {
                indicators: [
                    { name: '周客运航班量', value: '11.1万班次', change: '环比+2%', freq: '周度', source: '飞友周报', trendClass: 'up', tag: '运营' },
                    { name: '航班执行率', value: '92.1%', change: '环比+1pct', freq: '周度', source: '飞友周报', trendClass: 'up', tag: '运营' },
                    { name: 'C919年内累计交付（截至9月底）', value: '11架', change: '较2026目标50架差距39架', freq: '月度', source: 'Cirium经La Tribune报道', trendClass: 'down', tag: 'C919' }
                ],
                background: [
                    '中国机载设备市场规模 420 亿美元（2025年度口径）',
                    '全球航电维修市场 CAGR 6.4%（年度口径）'
                ],
                interpretation: '本周航班量环比回升，执行率维持高位，对IFEC/机上WiFi使用强度传导偏正面。C919交付数据仍是核心变量，Q4交付节奏决定国产机载设备线装配套收入确认时点。'
            },
            events: {
                density: '低',
                densityNote: '本周无国产适航或订单级别新增事件，国际IFEC动态为背景参考。',
                list: [
                    { title: '国产ELT千台订单进入交付验证期', type: '供给', impact: '待验证', impactClass: 'neutral', area: 'ELT', analysis: '需跟踪主机厂装机通报与航司改装公告', tag: 'ELT' },
                    { title: '某航司宽体机IFEC改装方案招标', type: '需求', impact: '中性偏利好', impactClass: 'up', area: 'IFE/机上WiFi', analysis: '宽体机高端椅背屏+连接并重趋势延续', tag: 'IFE' }
                ]
            },
            falsification: [
                { indicator: 'C919年交付进度', previous: '2026年达25架', current: '截至9月底累计11架', verdict: '待跟踪', verdictClass: 'neutral', nextWatch: '10月单月交付架次', tag: 'C919' },
                { indicator: '国产ELT交付兑现率', previous: 'Q4达签约量50%', current: '本周无新披露', verdict: '待跟踪', verdictClass: 'neutral', nextWatch: 'Q4交付公告/主机厂装机通报', tag: 'ELT' },
                { indicator: 'DO-160G检测产能利用率', previous: '三频驱动（取证+批产+维修）', current: '本周无新增客户/订单公告', verdict: '维持', verdictClass: 'neutral', nextWatch: '检测订单公告', tag: '检测' }
            ],
            nextWatch: [
                { title: 'C919 Q4交付节奏', detail: '关注10月单月交付架次，验证全年目标达成可能性。', tag: 'C919' },
                { title: '国产ELT装机通报', detail: '跟踪主机厂线装装机通报与航司改装公告。', tag: 'ELT' }
            ],
            disclaimer: '本报告基于公开信息整理，仅供内部战略研究参考，不构成对外投资建议。'
        }
    ]
};