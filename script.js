// Prototype 02: Dark Performance Marketing Scripts
// Shree Siddhi Vinayak Consultancy

document.addEventListener('DOMContentLoaded', () => {
    // 1. Header scroll effect
    const header = document.querySelector('.command-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu
    const hamburger = document.querySelector('.command-hamburger');
    const drawer = document.getElementById('command-mobile-drawer');
    const closeBtn = document.getElementById('command-drawer-close');

    if (hamburger && drawer) {
        hamburger.addEventListener('click', () => drawer.classList.add('open'));
        if (closeBtn) closeBtn.addEventListener('click', () => drawer.classList.remove('open'));
        drawer.querySelectorAll('a').forEach(l => l.addEventListener('click', () => drawer.classList.remove('open')));
    }

    // 3. Hero Timeframe Switcher & Animated 8 Metrics
    const timeframeData = {
        '7d': {
            impressions: '312.4K',
            clicks: '21.8K',
            ctr: '7.1%',
            cpc: '₹12.80',
            leads: '462',
            cpl: '₹168.20',
            conversions: '118',
            roas: '5.9X'
        },
        '30d': {
            impressions: '1.42M',
            clicks: '98.4K',
            ctr: '6.9%',
            cpc: '₹13.40',
            leads: '2,180',
            cpl: '₹172.50',
            conversions: '540',
            roas: '5.8X'
        },
        '90d': {
            impressions: '4.86M',
            clicks: '310.2K',
            ctr: '6.4%',
            cpc: '₹14.10',
            leads: '6,490',
            cpl: '₹181.00',
            conversions: '1,620',
            roas: '5.4X'
        },
        'all': {
            impressions: '18.4M',
            clicks: '1.18M',
            ctr: '6.5%',
            cpc: '₹13.90',
            leads: '24,800',
            cpl: '₹176.40',
            conversions: '6,100',
            roas: '5.6X'
        }
    };

    const timeframeBtns = document.querySelectorAll('.timeframe-btn');
    timeframeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            timeframeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tf = btn.dataset.timeframe;
            const data = timeframeData[tf];
            if (data) {
                updateHeroMetric('val-impressions', data.impressions);
                updateHeroMetric('val-clicks', data.clicks);
                updateHeroMetric('val-ctr', data.ctr);
                updateHeroMetric('val-cpc', data.cpc);
                updateHeroMetric('val-leads', data.leads);
                updateHeroMetric('val-cpl', data.cpl);
                updateHeroMetric('val-conversions', data.conversions);
                updateHeroMetric('val-roas', data.roas);
            }
        });
    });

    function updateHeroMetric(elementId, newValue) {
        const el = document.getElementById(elementId);
        if (el) {
            el.style.opacity = '0.3';
            el.style.transform = 'scale(0.95)';
            setTimeout(() => {
                el.textContent = newValue;
                el.style.opacity = '1';
                el.style.transform = 'scale(1)';
            }, 150);
        }
    }

    // 4. Growth Funnel Interactive Nodes
    const funnelNodes = document.querySelectorAll('.funnel-node');
    const funnelDetailBox = document.getElementById('funnel-active-detail');
    
    const funnelStepsData = {
        'traffic': {
            title: 'Stage 01: High-Intent Traffic Ingestion',
            rate: '100,000 Visitors / Mo',
            tactic: 'Multi-channel acquisition filtering: Target precise in-market audiences on Google Search & Meta, filtering out non-buyers at the click level with negative keywords.'
        },
        'engagement': {
            title: 'Stage 02: Value Stacking & Engagement',
            rate: '28,000 High-Engagement Users (28% Rate)',
            tactic: 'Ultra-fast landing pages with dynamic headline insertion, persuasive video case studies, and interactive proof mechanisms.'
        },
        'leads': {
            title: 'Stage 03: Qualified Lead Capture',
            rate: '3,400 Inbound Inquiries (12.1% Opt-in)',
            tactic: 'Multi-step qualification forms and instant lead magnets that capture verified mobile numbers, corporate emails, and budget intent.'
        },
        'followup': {
            title: 'Stage 04: Rapid Multi-Channel Follow-Up',
            rate: '2,920 Contacted Prospects (86% Connection)',
            tactic: 'Automated 60-second WhatsApp message delivery, SMS reminders, and instant CRM notification to client sales reps.'
        },
        'conversion': {
            title: 'Stage 05: Qualified Sales Conversion',
            rate: '720 Contracted Deals (24.6% Close Rate)',
            tactic: 'Pre-warmed leads attending scheduled calls with high intent, drastically shrinking the client sales cycle.'
        },
        'scale': {
            title: 'Stage 06: Predictable ROAS Scaling',
            rate: '5.8X Average Return on Ad Spend',
            tactic: 'Algorithmic feedback loops send offline conversion data back to Meta & Google algorithms to continuously lower CPA.'
        }
    };

    funnelNodes.forEach(node => {
        node.addEventListener('click', () => {
            funnelNodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            const step = node.dataset.step;
            const data = funnelStepsData[step];
            if (data && funnelDetailBox) {
                funnelDetailBox.innerHTML = `
                    <div style="background:rgba(212,160,23,0.08);border:1px solid #D4A017;padding:18px 24px;border-radius:6px;animation:fadeIn 0.3s ease;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:10px;">
                            <h4 style="font-family:var(--font-heading);color:#FFF;font-size:18px;margin:0;">${data.title}</h4>
                            <span style="font-family:var(--font-mono);color:#D4A017;font-size:12px;background:#090C12;padding:4px 10px;border-radius:4px;border:1px solid rgba(212,160,23,0.3);">${data.rate}</span>
                        </div>
                        <p style="font-size:14px;color:#94A3B8;margin:0;line-height:1.6;">${data.tactic}</p>
                    </div>
                `;
            }
        });
    });

    // 5. Interactive Chart.js / Canvas Performance Engine
    const chartDataSets = {
        'google-ads': {
            title: 'Google Ads (Search & Performance Max)',
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            impressions: [45000, 58000, 72000, 89000, 112000, 138000],
            leads: [120, 165, 210, 280, 360, 480],
            cpl: [210, 195, 182, 170, 162, 154],
            kpis: { spend: '₹84,200', leads: '480', cpl: '₹154', roas: '6.2X' }
        },
        'meta-ads': {
            title: 'Meta Ads (Facebook & Instagram Feed/Reels)',
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            impressions: [80000, 110000, 145000, 190000, 240000, 310000],
            leads: [180, 240, 330, 450, 590, 760],
            cpl: [165, 152, 144, 138, 130, 122],
            kpis: { spend: '₹98,500', leads: '760', cpl: '₹122', roas: '5.8X' }
        },
        'seo': {
            title: 'Search Engine Optimization (Organic Traffic)',
            labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
            impressions: [12000, 24000, 48000, 92000, 165000, 280000],
            leads: [28, 64, 135, 260, 440, 680],
            cpl: [0, 0, 0, 0, 0, 0],
            kpis: { spend: '₹0 Ad Spend', leads: '680 Organic', cpl: '₹0 CPL', roas: '11.4X LTV' }
        },
        'social-media': {
            title: 'Social Media Organic & Community Reach',
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            impressions: [35000, 52000, 84000, 130000, 195000, 275000],
            leads: [45, 80, 140, 215, 310, 420],
            cpl: [140, 125, 110, 98, 92, 85],
            kpis: { spend: 'Community Engine', leads: '420 Inbound', cpl: '₹85 Avg', roas: '4.9X' }
        }
    };

    let activeChart = null;
    const canvas = document.getElementById('performanceChartCanvas');
    
    function renderCustomChart(channelKey) {
        if (!canvas) return;
        const data = chartDataSets[channelKey];
        if (!data) return;

        // Update KPI tiles below chart
        const spendEl = document.getElementById('chart-kpi-spend');
        const leadsEl = document.getElementById('chart-kpi-leads');
        const cplEl = document.getElementById('chart-kpi-cpl');
        const roasEl = document.getElementById('chart-kpi-roas');
        if (spendEl) spendEl.textContent = data.kpis.spend;
        if (leadsEl) leadsEl.textContent = data.kpis.leads;
        if (cplEl) cplEl.textContent = data.kpis.cpl;
        if (roasEl) roasEl.textContent = data.kpis.roas;

        // Check if Chart.js is loaded
        if (window.Chart) {
            if (activeChart) {
                activeChart.destroy();
            }

            const ctx = canvas.getContext('2d');
            activeChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Leads Generated',
                            data: data.leads,
                            borderColor: '#D4A017',
                            backgroundColor: 'rgba(212, 160, 23, 0.15)',
                            fill: true,
                            tension: 0.35,
                            borderWidth: 3,
                            pointBackgroundColor: '#FDE047',
                            pointBorderColor: '#07090E',
                            pointRadius: 5,
                            yAxisID: 'y'
                        },
                        {
                            label: 'Impressions (scaled / 100)',
                            data: data.impressions.map(v => Math.round(v / 100)),
                            borderColor: '#06B6D4',
                            backgroundColor: 'transparent',
                            borderDash: [5, 5],
                            tension: 0.35,
                            borderWidth: 2,
                            pointRadius: 3,
                            yAxisID: 'y'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: '#94A3B8',
                                font: { family: 'JetBrains Mono', size: 11 }
                            }
                        },
                        tooltip: {
                            backgroundColor: '#0E131D',
                            titleColor: '#FDE047',
                            bodyColor: '#FFFFFF',
                            borderColor: '#D4A017',
                            borderWidth: 1,
                            padding: 12
                        }
                    },
                    scales: {
                        x: {
                            grid: { color: 'rgba(255, 255, 255, 0.05)' },
                            ticks: { color: '#64748B', font: { family: 'JetBrains Mono' } }
                        },
                        y: {
                            grid: { color: 'rgba(255, 255, 255, 0.05)' },
                            ticks: { color: '#64748B', font: { family: 'JetBrains Mono' } }
                        }
                    }
                }
            });
        }
    }

    // Tab buttons
    const channelTabBtns = document.querySelectorAll('.channel-tab-btn');
    channelTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            channelTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCustomChart(btn.dataset.channel);
        });
    });

    // Initial chart load
    renderCustomChart('google-ads');

    // 6. Interactive ROI & Lead Estimator Slider
    const spendSlider = document.getElementById('adSpendSlider');
    const displaySpend = document.getElementById('displaySpend');
    const estLeads = document.getElementById('estLeads');
    const estRoas = document.getElementById('estRoas');
    const estRevenue = document.getElementById('estRevenue');

    if (spendSlider) {
        spendSlider.addEventListener('input', (e) => {
            const spend = parseInt(e.target.value, 10);
            if (displaySpend) displaySpend.textContent = '₹' + spend.toLocaleString('en-IN');
            
            // Assume realistic avg CPL of ~₹175
            const leads = Math.round(spend / 175);
            if (estLeads) estLeads.textContent = `${leads} Qualified Leads`;
            
            // Assume 5.4X ROAS potential
            const potentialRev = spend * 5.4;
            if (estRevenue) estRevenue.textContent = '₹' + Math.round(potentialRev).toLocaleString('en-IN');
            if (estRoas) estRoas.textContent = '5.4X Projected ROAS';
        });
    }

    // 7. Terminal Lead Form Submission
    const terminalForm = document.getElementById('terminal-lead-form');
    if (terminalForm) {
        terminalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = terminalForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            const formData = {
                name: terminalForm.fullName?.value?.trim() || '',
                businessName: terminalForm.businessName?.value?.trim() || '',
                phone: terminalForm.phone?.value?.trim() || '',
                email: terminalForm.email?.value?.trim() || '',
                businessType: terminalForm.businessType?.value || '',
                service: terminalForm.serviceRequired?.value || '',
                budget: terminalForm.monthlyBudget?.value || '',
                message: terminalForm.message?.value?.trim() || ''
            };

            if (!formData.name || !formData.phone) {
                window.showSSVCToast('Validation Error', 'Full Name and Phone Number are required.', 'error');
                return;
            }

            btn.disabled = true;
            btn.innerHTML = `<span style="color:#000;">[RUNNING PIPELINE BUILDER...]</span>`;

            setTimeout(() => {
                if (window.ssvcTracker) {
                    window.ssvcTracker.trackLead(formData, 'Prototype 02: Dark Performance');
                }

                window.showSSVCToast(
                    'System Command Accepted',
                    `Growth roadmap initialized for ${formData.businessName || formData.name}. Our Growth Architect will initiate contact at ${formData.phone} shortly.`,
                    'success'
                );

                terminalForm.reset();
                btn.disabled = false;
                btn.innerHTML = originalText;
            }, 750);
        });
    }
});
