import { useState } from 'react'

const ticker = [
    'Get more replies from your list',
    'Book more calls without more staff',
    'Stop losing leads in your inbox',
    'Launch fast and stay compliant',
    'Your team stays focused on sales',
    'We handle the messaging work',
]

const services = [
    {
        id: 'sms-blasts',
        n: '01',
        title: 'Send texts to your list and get real replies',
        lead: 'Reach a lot of people fast without making a mess for your team.',
        label: 'Outbound Systems',
        heading: 'Text the right people at the right time, and keep every reply organized.',
        p1: 'We set up the campaign before you send anything, so messages go out cleanly and replies come back in a way your team can actually use.',
        p2: 'If you need a big launch now, we can help you roll out an A2P SMS campaign to 3,000+ businesses with setup and reply handling from day one.',
        chips: ['Compliant setup', 'Smart send timing', 'Clean reply routing'],
        mock: 'sms' as const,
    },
    {
        id: 'ai-inbound',
        n: '02',
        title: 'Answer inbound texts fast, even when your team is busy',
        lead: 'Leads and customers get quick answers instead of waiting.',
        label: 'Inbound Automation',
        heading: 'Turn incoming messages into booked conversations, not missed chances.',
        p1: 'AI can answer common questions, collect the important details, and pass the conversation to your team when a real person is needed.',
        p2: 'Sales messages, support questions, and opt-outs each go to the right place so your team sees what matters first.',
        chips: ['Fast first reply', 'Smooth handoff to humans', 'SMS + WhatsApp'],
        mock: 'inbound' as const,
    },
    {
        id: 'managed-service',
        n: '03',
        title: 'We write and run the campaigns for you',
        lead: 'You get the results without building a new team.',
        label: 'Managed Delivery',
        heading: 'Use text messaging to grow sales, while we handle the day-to-day work.',
        p1: 'We write the messages in simple buyer language, build the sequence, launch it, and improve it based on real replies and real results.',
        p2: 'This is for teams that need to move now and do not have time to test twenty versions by themselves.',
        chips: ['Copywriting + updates', 'Launch management', 'Results review'],
        mock: 'managed' as const,
    },
]

type MockKind = 'sms' | 'inbound' | 'managed'

function MockPanel({ kind }: { kind: MockKind }) {
    if (kind === 'sms') {
        return (
            <div className='mock-frame'>
                <div className='mock-bar'>
                    <div className='mock-bar-top'>
                        <div className='mock-bar-group'>
                            <span className='mock-icon'>SMS</span>
                            <span className='mock-bar-title'>Campaign Console</span>
                        </div>
                        <span className='mock-status'>A2P Outreach · Batch 04</span>
                    </div>
                    <div className='mock-bar-sub'>Outbound campaign batch and delivery summary</div>
                </div>
                <div className='p-4 space-y-3'>
                    <div className='mock-box'>
                        <div className='mock-row'><span>Audience</span><strong>Local SMB owners (3,248)</strong></div>
                        <div className='mock-row'><span>Send Window</span><strong>Tue 8:30 AM - Thu 4:00 PM</strong></div>
                        <div className='mock-row'><span>Opt-Out</span><strong>Enabled</strong></div>
                    </div>
                    <div className='rounded-[10px] border border-[rgba(197,82,45,.28)] bg-[rgba(197,82,45,.06)] p-3'>
                        <p className='mock-label'>Outbound copy</p>
                        <p className='text-sm leading-6 text-[#1A1A1A]'>Hi {'{FirstName}'}, we are onboarding a small group of businesses this week for managed SMS campaigns that book replies directly from your list. Want rollout details?</p>
                    </div>
                    <div className='grid grid-cols-2 overflow-hidden rounded-[10px] border border-[#E5E0DA] text-sm sm:grid-cols-2'>
                        {[['Queued', '3,248'], ['Delivered', '3,181'], ['Replies', '212'], ['Opt-Out', '1.7%']].map(([k, v]) => (
                            <div key={k} className='border-b border-r border-[#EFECE8] p-3 last:border-r-0 [&:nth-child(2n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0'>
                                <div className='mock-k'>{k}</div><div className='font-medium text-[#1A1A1A]'>{v}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    if (kind === 'inbound') {
        return (
            <div className='mock-frame'>
                <div className='mock-bar'>
                    <div className='mock-bar-top'>
                        <div className='mock-bar-group'>
                            <span className='mock-icon'>INBOX</span>
                            <span className='mock-bar-title'>Unified Inbox</span>
                        </div>
                        <span className='mock-status'>Live Routing</span>
                    </div>
                    <div className='mock-chip-row'>
                        <span className='mock-chip'>SMS</span>
                        <span className='mock-chip'>WhatsApp</span>
                        <span className='mock-chip mock-chip--muted'>Intent routing</span>
                    </div>
                </div>
                <div className='p-4 space-y-3'>
                    <div className='thread-surface'>
                        <div className='mx-auto w-fit border border-[#E5E0DA] bg-white px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-[#4A4A4A]'>Monday 10:14 AM</div>
                        <div className='bubble-in'>Are you asking about outbound SMS pricing or AI reply automation?</div>
                        <div className='bubble-out ml-auto'>Pricing for both. We have 12k contacts and need this live fast.</div>
                        <div className='bubble-in'>Understood. I can route this to sales now and collect two details first: industry and current platform.</div>
                    </div>
                    <div className='flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.08em] text-[#4A4A4A]'><span className='tag'>AI confidence 96%</span><span className='tag'>Intent: Sales / High volume</span></div>
                    <div className='mock-box'>
                        <div className='mock-box-title'>Routing summary</div>
                        <div className='mock-row'><span>Escalation</span><strong>Sales queue / Priority</strong></div>
                        <div className='mock-row'><span>Summary sent</span><strong>Yes, with transcript</strong></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='mock-frame'>
            <div className='mock-bar'>
                <div className='mock-bar-top'>
                    <div className='mock-bar-group'>
                        <span className='mock-icon'>OPS</span>
                        <span className='mock-bar-title'>Campaign Ops</span>
                    </div>
                    <span className='mock-status'>Copy QA · Launch Calendar</span>
                </div>
                <div className='mock-bar-sub'>Managed copy workflow, approvals, and launch planning</div>
            </div>
            <div className='p-4 space-y-3'>
                <div className='mock-box'>
                    <div className='mock-row'><span>Offer</span><strong>A2P SMS onboarding for SMBs</strong></div>
                    <div className='mock-row'><span>Owner</span><strong>Managed Service Team</strong></div>
                    <div className='mock-row'><span>Next Send</span><strong>Wednesday 09:05 AM</strong></div>
                </div>
                <div className='mock-box'>
                    {[['v1 / Opening message', 'Approved'], ['v2 / Follow-up (24h)', 'Testing'], ['v3 / Qualification branch', 'Ready']].map(([k, v]) => (
                        <div key={k} className='mock-row'><span className='!text-[11px] !normal-case !tracking-normal'>{k}</span><strong className='!text-[#c5522d]'>{v}</strong></div>
                    ))}
                </div>
                <div className='grid grid-cols-2 overflow-hidden rounded-[10px] border border-[#E5E0DA]'>
                    {[['Reply rate', '6.8%'], ['Qualified', '74'], ['Booked', '19'], ['Next action', 'Copy revision']].map(([k, v]) => (
                        <div key={k} className='border-b border-r border-[#EFECE8] p-3 last:border-r-0 [&:nth-child(2n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0'>
                            <div className='mock-k'>{k}</div><div className='font-medium text-[#1A1A1A]'>{v}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    const tickerLoop = [...ticker, ...ticker, ...ticker]
    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <main className='site-root relative min-h-screen overflow-x-clip bg-[#F7F4F0] text-[#1A1A1A]'>
            <div className='paper-noise pointer-events-none fixed inset-0 z-0 opacity-[0.07]' />

            <header className='fixed inset-x-0 top-0 z-50 bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)]'>
                <div className='mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-5 py-4 md:px-6'>
                    <button
                        type='button'
                        onClick={handleLogoClick}
                        className='flex items-center gap-3 rounded-[4px] border border-transparent px-1 py-1 text-left hover:bg-[#FDF0EB]'
                        aria-label='Go to top'
                    >
                        <div className='grid h-9 w-9 place-items-center rounded-[4px] border border-[#E5E0DA] text-xs tracking-[0.14em] text-[#c5522d]'>L1</div>
                        <div>
                            <p className='m-0 text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A]'>Layer One</p>
                            <p className='m-0 mt-0.5 text-[10px] tracking-[0.08em] text-[#4A4A4A]'>Text campaigns that bring replies</p>
                        </div>
                    </button>

                    <nav className='hidden items-center gap-1 text-[11px] uppercase tracking-[0.08em] md:flex'>
                        <a href='#services' className='rounded-[4px] border border-transparent px-3 py-2 text-[#1A1A1A] hover:bg-[#FDF0EB]'>Services</a>
                        <a href='#a2p-priority' className='rounded-[4px] border border-transparent px-3 py-2 text-[#1A1A1A] hover:bg-[#FDF0EB]'>A2P Priority</a>
                        <a href='#contact' className='rounded-[4px] border border-[#c5522d]/30 bg-[#FDF0EB] px-3 py-2 text-[#c5522d] hover:bg-[#f8e4db]'>Start here</a>
                    </nav>

                    <button
                        type='button'
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((v) => !v)}
                        className='flex h-11 w-11 items-center justify-center rounded-[4px] border border-[#E5E0DA] bg-white md:hidden'
                    >
                        <span className='sr-only'>Menu</span>
                        <span className='hamburger' />
                    </button>
                </div>

                {menuOpen && (
                    <div className='border-t border-[#E5E0DA] bg-white px-5 pb-4 pt-2 md:hidden'>
                        <nav className='flex flex-col'>
                            <a href='#services' onClick={() => setMenuOpen(false)} className='mobile-nav-link'>
                                Services
                            </a>
                            <a href='#a2p-priority' onClick={() => setMenuOpen(false)} className='mobile-nav-link'>
                                A2P Priority
                            </a>
                            <a href='#contact' onClick={() => setMenuOpen(false)} className='mobile-nav-link mobile-nav-link--cta'>
                                Start here
                            </a>
                        </nav>
                    </div>
                )}
            </header>

            <div className='h-[76px] md:h-[74px]' />

            <section className='section-shell section-a relative z-10 flex min-h-[78svh] flex-col items-start justify-center py-14'>
                <p className='mb-4 max-w-3xl text-xs uppercase tracking-[0.12em] text-[#4A4A4A]'>SMS + WhatsApp to help your team get more customers</p>
                <h1 className='hero-title m-0 max-w-[14ch] text-[#1A1A1A]'>
                    Send more texts.<br />Get more replies.<br />Let us run the hard part.
                </h1>
                <p className='mt-6 max-w-3xl text-base leading-7 text-[#4A4A4A]'>We help you launch fast, stay compliant, and turn messages into calls and sales. We can also support a live A2P SMS rollout to 3,000+ businesses right now.</p>
                <a href='#a2p-priority' className='cta-primary mt-6 inline-flex px-4 py-3 text-xs uppercase tracking-[0.08em] text-[#fff4ef] max-md:w-full max-md:justify-center'>
                    Save my A2P campaign spot
                </a>
            </section>

            <section className='ticker-wrap relative z-10 overflow-hidden border-y border-[#D8D4CE] bg-[#EDEAE5]' aria-label='Proof and operational metrics'>
                <div className='ticker-track flex w-max gap-3 py-4 text-xs uppercase tracking-[0.08em] text-[#1A1A1A]'>
                    {tickerLoop.map((item, i) => (
                        <span key={`${item}-${i}`} className='whitespace-nowrap after:ml-3 after:text-[#c5522d] after:content-["·"]'>{item}</span>
                    ))}
                </div>
            </section>

            <section id='services' className='section-shell section-a relative z-10 py-14'>
                <p className='mb-4 text-xs uppercase tracking-[0.12em] text-[#4A4A4A]'>How we help</p>
                <div className='border-t border-[#E5E0DA]'>
                    {services.map((s) => (
                        <a key={s.id} href={`#${s.id}`} className='grid grid-cols-[4rem_minmax(0,1fr)_auto] gap-4 border-b border-[#E5E0DA] py-5 text-[#1A1A1A] hover:bg-[#f3eee8] max-md:grid-cols-[3rem_1fr]'>
                            <span className='mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FDF0EB] text-sm tracking-[0.08em] text-[#c5522d] max-md:h-8 max-md:w-8'>{s.n}</span>
                            <div>
                                <h2 className='section-title m-0 text-[#1A1A1A]'>{s.title}</h2>
                                <p className='mt-2 max-w-4xl text-[#4A4A4A]'>{s.lead}</p>
                            </div>
                            <span className='pt-2 text-xs uppercase tracking-[0.08em] text-[#4A4A4A] max-md:col-start-2 max-md:pt-0'>Open</span>
                        </a>
                    ))}
                </div>
            </section>

            {services.map((s, i) => (
                <section key={s.id} id={s.id} className={`relative z-10 py-8 ${i % 2 === 0 ? 'section-b' : 'section-a'}`}>
                    <div className='section-shell'>
                        <div className={`grid items-start gap-5 lg:grid-cols-[1.05fr_.95fr] ${i % 2 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
                            <div>
                                <p className='mb-4 text-xs uppercase tracking-[0.12em] text-[#4A4A4A]'>{s.label}</p>
                                <h3 className='detail-title m-0 text-[#1A1A1A]'>{s.heading}</h3>
                                <p className='mt-4 max-w-3xl leading-8 text-[#4A4A4A]'>{s.p1}</p>
                                <p className='mt-3 max-w-3xl leading-8 text-[#4A4A4A]'>{s.p2}</p>
                                <div className='mt-5 flex flex-wrap gap-2 border-y border-[#E5E0DA] py-3 text-[11px] uppercase tracking-[0.06em] text-[#1A1A1A]'>
                                    {s.chips.map((chip) => (
                                        <span key={chip} className='after:ml-2 after:text-[#A6A099] after:content-["/"] last:after:hidden'>{chip}</span>
                                    ))}
                                </div>
                            </div>
                            <div className='mock-card rounded-2xl border border-[#E5E0DA] bg-[#FAFAF8]'>
                                <MockPanel kind={s.mock} />
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <section id='a2p-priority' className='relative z-10 mt-0 border-y border-black/10 bg-[#c5522d] text-[#fff2ec]'>
                <div className='section-shell py-9'>
                    <p className='m-0 text-xs uppercase tracking-[0.12em] text-[#ffe5da]'>Urgent campaign priority</p>
                    <h2 className='a2p-title mt-3 max-w-[22ch] text-[#fff4ef]'>We are onboarding businesses now for a 3,000+ company A2P SMS rollout.</h2>
                    <p className='mt-4 max-w-4xl leading-7 text-[#fff0e8]/90'>If you want to reach more people fast and keep replies handled, this is the best time to get your spot.</p>
                    <a href='mailto:hello@mylayerone.com?subject=A2P%20SMS%20Campaign%20Onboarding' className='cta-dark mt-5 inline-flex px-4 py-3 text-xs uppercase tracking-[0.08em] text-[#fff4ef] max-md:w-full max-md:justify-center'>Book onboarding call</a>
                </div>
            </section>

            <section id='contact' className='section-b relative z-10 py-14'>
                <div className='section-shell border-b border-[#E5E0DA] pb-14'>
                    <div className='grid gap-8 md:grid-cols-[1.15fr_.85fr]'>
                        <div>
                            <p className='mb-4 text-xs uppercase tracking-[0.12em] text-[#4A4A4A]'>Contact</p>
                            <h2 className='section-title m-0 max-w-[20ch] text-[#1A1A1A]'>Need more replies and less message chaos? We can help.</h2>
                        </div>
                        <div className='pt-1 text-xs leading-7 tracking-[0.04em] text-[#4A4A4A]'>
                            <p className='m-0'>hello@mylayerone.com</p>
                            <p className='m-0'>We run SMS campaigns, answer inbound messages with AI, and manage the copy and launches.</p>
                            <p className='m-0'>Channels: SMS + WhatsApp</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className='section-a relative z-10'>
                <div className='section-shell flex flex-wrap items-center justify-between gap-3 py-5 text-[11px] uppercase tracking-[0.05em] text-[#4A4A4A]'>
                    <p className='m-0 max-w-[56ch]'>Layer One helps teams turn text replies into real sales conversations.</p>
                    <div className='flex flex-wrap gap-3'>
                        <a href='mailto:hello@mylayerone.com' className='border-b border-transparent text-[#1A1A1A] hover:border-[rgba(197,82,45,.35)] hover:text-[#c5522d]'>Contact</a>
                    </div>
                </div>
            </footer>
        </main>
    )
}
