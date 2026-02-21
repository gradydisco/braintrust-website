import { BlogPost } from './blog';

export const batch6: BlogPost[] = [
    {
        slug: 'navigating-ai-regulations-in-hiring',
        title: 'Navigating AI Regulations in Hiring: How Braintrust AIR Ensures Compliance',
        excerpt: 'A clear breakdown of how Braintrust AIR meets U.S., Canadian, and EU AI hiring regulations — from NYC Local Law 144 to the EU AI Act.',
        content: `AI is transforming the hiring landscape, but with that transformation comes a growing web of regulation. Jurisdictions across the U.S., Canada, and Europe are moving quickly to establish rules around how automated tools can be used in employment decisions — and the penalties for non-compliance are substantial.

Understanding where your tools stand against this regulatory landscape is no longer optional. It's a precondition for enterprise deployment. Here's a breakdown of the major frameworks and how Braintrust AIR is built to meet them.

**NYC Local Law 144**

New York City's Local Law 144 requires any employer using an automated employment decision tool (AEDT) to conduct and publish an annual bias audit performed by an independent third party. The audit must assess the tool's impact across race, gender, and national origin — and the results must be made publicly available.

AIR passed its most recent independent audit with zero adverse findings across all demographic groups. Selection rate equivalence was confirmed at 100%, and the audit methodology met the standards required under LL 144. [Read the full audit findings](/blog/independent-ai-bias-compliance-audit).

**The Illinois AI Video Interview Act**

Illinois requires employers using AI to analyze video interviews to disclose the use of AI to candidates, explain how the AI works, and obtain express consent before analysis. AIR's voice-first architecture sidesteps much of this exposure by design — it analyzes text transcripts, not video or facial data. Where disclosure requirements apply, AIR includes configurable consent flows that can be customized per jurisdiction.

**Colorado SB 169**

Colorado's SB 169 requires developers and deployers of high-risk AI systems to implement a risk management program, conduct annual impact assessments, and disclose AI use to candidates. AIR's rubric-based scoring is designed for exactly this kind of transparency — every decision point is traceable, auditable, and attached to a specific competency rather than a black-box algorithm.

**The EU AI Act**

Under the EU AI Act, AI systems used to make or significantly influence employment decisions are classified as high-risk. High-risk systems require conformity assessments, transparency documentation, human oversight mechanisms, and ongoing monitoring.

AIR addresses these requirements through its human-in-the-loop design philosophy. No hiring decision is made autonomously by the AI — it surfaces ranked candidates and generates scorecards, but a human makes every final call. This architecture directly satisfies the oversight requirements of the EU framework.

**Data Privacy: GDPR and CCPA**

Beyond bias and fairness regulations, data privacy frameworks impose strict requirements on how candidate data is collected, processed, and stored. AIR operates within fully isolated enterprise tenants — candidate PII, audio, and transcripts are never used to train third-party foundational models. Data residency requirements can be configured by region, and all data is encrypted at rest and in transit under SOC 2 Type II controls.

If your legal or compliance team is evaluating AI hiring tools, [book a demo](/book-demo) and we'll walk through our full compliance documentation and third-party audit history in detail.`,
        category: 'AI Recruiting',
        tags: ['Compliance', 'Regulations', 'Enterprise'],
        authorSlug: 'anne-muscarella',
        publishedAt: '2025-10-07',
        readingTime: '8 min read',
    },
    {
        slug: 'case-study-fast-food',
        title: 'How a Leading Fast-Food Management Group Plans to Save 7,000 Manager Hours a Year',
        excerpt: 'A management group operating 80+ restaurants deployed AIR to automate first-round interviews — cutting interview costs by $280K annually and time-to-hire by 75%.',
        content: `Managing hiring across 80+ fast-food restaurant locations is a logistical challenge most HR teams don't fully appreciate until they're in it. Turnover is high, headcount needs are constant, and every day a shift goes understaffed is a day that affects both customer experience and revenue.

For one of our fast-food management group clients, the breaking point was the math. They were conducting over 10,000 first-round interviews per year. Each one required a manager to step off the floor, sit down with a candidate, and spend 20 minutes assessing basic fit — only to discover in the first five minutes that the person wasn't remotely qualified. 

When you multiply that by 10,000 interviews a year, you're looking at thousands of hours of manager time pulled away from operations, and a significant dollar cost attached to every single screen.

**What They Deployed**

The group deployed [Braintrust AIR](/products/air) to automate their entire first-round interview process. When a candidate applied online, they received an immediate SMS invite to complete a short conversational assessment on their phone. The AI asked role-specific behavioral questions — handling a rush, de-escalating a customer complaint, following food safety protocols — and evaluated the responses semantically.

Managers received a ranked shortlist of candidates who had already demonstrated the required competencies. They only stepped off the floor to meet people who were genuinely worth their time.

**The Results**

The numbers were significant. The group achieved a 75% interview completion rate from candidates who received the SMS assessment link — notably higher than industry averages for asynchronous video tools, which typically hover around 40-50%. The conversational format kept candidates engaged rather than intimidated.

Time-to-hire dropped from four weeks to one week, allowing locations to fill vacancies before they materially impacted operations. And because the AI was handling the initial screen instead of managers, the group calculated a savings of approximately 7,000 manager hours annually — which at their average hourly management cost, translated to roughly $280,000 in labor savings per year.

Beyond the cost savings, the group noted an improvement in quality. When managers only met candidates who had already proven basic competencies in the AI screen, first-in-person-interview-to-offer conversion rates climbed. They were spending their limited time on people who were likely to succeed.

If your organization runs multiple high-turnover locations and your managers are drowning in first-round screening, [book a demo](/book-demo) to see how AIR can give them their time back.`,
        category: 'Case Study',
        tags: ['Fast Food', 'High Volume', 'Case Study'],
        authorSlug: 'anne-muscarella',
        publishedAt: '2025-08-27',
        readingTime: '7 min read',
    },
    {
        slug: 'the-debate-is-over-ai-recruiters-outperform-humans',
        title: 'The Debate Is Over: AI Recruiters Outperform Humans. Here\'s the Data.',
        excerpt: 'Independent research from UChicago Booth and Erasmus University shows AI-led interviews produce better hires, higher retention, and significantly less gender bias.',
        content: `For years, the discussion around AI in recruiting has been largely theoretical. Proponents argued it would eliminate bias and scale objectively. Critics worried it would dehumanize the process and disadvantage certain groups. What the debate lacked, until now, was rigorous independent data.

That data has arrived — and the results are striking.

**The Study**

Researchers from the University of Chicago Booth School of Business and Erasmus University conducted a large-scale randomized controlled trial comparing AI-led recruiting interviews against human-led interviews across a diverse pool of job applicants. The study was independently funded and designed to control for role type, applicant demographics, and hiring context.

**The Headline Numbers**

Compared to human-led interviews, AI-led interviews resulted in:

- **12% more job offers extended** to qualified candidates
- **18% more job starts** — meaning fewer candidates ghosted or dropped out between offer and start date
- **17% better 30-day retention** — candidates hired through AI interviews were measurably more likely to still be employed a month later
- **78% of candidates preferred the AI recruiter** over a human for the initial screen when asked directly
- Gender-based discrimination in initial screening was cut by nearly half

These aren't marginal improvements. They represent a structural advantage.

**Why Does AI Outperform?**

The research points to a few key mechanisms. Human recruiters, even well-trained ones, make rapid judgments based on non-verbal cues, vocal tone, cultural familiarity, and demographic signals. These judgments happen largely unconsciously and consistently disadvantage candidates who don't match the profile of previous successful hires.

AI, evaluated purely on what candidates say and how they articulate competencies, doesn't carry these biases. The consistency is perfect — the 10,000th candidate gets exactly the same quality of assessment as the first.

The higher offer-to-start rate is also notable. When candidates experience an AI-led screen that feels fair, transparent, and respectful of their time — no scheduling gymnastics, no awkward small talk, no waiting by the phone — they report higher trust in the employer. That trust carries forward into the offer acceptance and onboarding process.

**The Implication for Enterprise TA**

If your organization is still treating AI recruitment tools as experimental, this data argues for acceleration. The question is no longer whether AI can match human performance in initial screening — it demonstrably exceeds it on the dimensions that matter most: offer rate, start rate, and early retention.

[Braintrust AIR](/products/air) is built specifically to deliver on these outcomes at enterprise scale. [Book a demo](/book-demo) or [try it yourself](/products/air/try) to see what an AI-led interview actually looks and sounds like.`,
        category: 'Research',
        tags: ['Research', 'Data', 'AI vs Human'],
        authorSlug: 'grady-gardner',
        publishedAt: '2025-08-20',
        readingTime: '7 min read',
    },
    {
        slug: 'case-study-entertainment-agency',
        title: 'High-Profile Entertainment Agency Streamlined Hiring and Uncovered Hidden Talent Using AIR',
        excerpt: 'A lean HR team managing 1,000+ applicants per role scaled hiring during their biggest growth year without adding a single recruiter headcount.',
        content: `In the entertainment industry, hiring decisions move fast and the stakes are high. A wrong hire on a key production role has ripple effects across an entire project. But so does a delayed hire — when you need the right person on set or in the office by a specific date, a three-week screening process isn't an option.

For one high-profile entertainment agency we work with, the challenge was volume. They were growing aggressively, posting roles that routinely attracted over 1,000 applicants each, and operating with a lean HR team that simply couldn't process that volume manually without letting excellent candidates slip through.

**The Problem with Manual Screening at Scale**

When your team physically cannot review 1,000 applications in a reasonable time window, you build shortcuts. You filter by school names. You prioritize agency referrals. You apply heuristics that have nothing to do with actual capability — and you end up with a screened pool that looks a lot like the people you've already hired, not the best people for the role.

The HR lead at this agency had a specific concern: they were missing candidates who didn't have the "right" pedigree on paper but had exceptional raw talent. They suspected the manual process was filtering them out before a human even looked.

**What Changed with AIR**

By deploying [Braintrust AIR](/products/air), the agency was able to invite every single applicant — regardless of resume keyword match — into a conversational assessment. The AI asked role-specific questions about creative problem-solving, stakeholder management, and high-pressure production environments. Every candidate got the same questions, evaluated against the same rubric.

Completion rates landed between 30-40%, which for a high-engagement creative industry role is strong. More importantly, the candidates who completed the assessment and scored highly included a meaningful number of people who would have been filtered out under the old manual screening approach — career switchers, candidates from smaller markets, people whose resumes undersold their actual capabilities.

**The Outcome**

The agency successfully scaled through their biggest growth year on record without adding recruiting headcount. The AI was effectively acting as a full-time screener, processing hundreds of candidates per week and surfacing only the top performers for human review.

Several of the candidates hired during this period were identified specifically because AIR surfaced them — people who, by the HR lead's own admission, would never have made it through under the old process.

If your team is drowning in volume and worried about what you're missing, [book a demo](/book-demo) to see how AIR handles high-inbound creative and professional services roles.`,
        category: 'Case Study',
        tags: ['Entertainment', 'Case Study', 'High Volume'],
        authorSlug: 'anne-muscarella',
        publishedAt: '2025-07-28',
        readingTime: '7 min read',
    },
    {
        slug: 'recruitz-case-study',
        title: '"I Can\'t Live Without It": How Recruitz Scaled Faster with Braintrust AIR',
        excerpt: 'A two-person recruiting startup used AIR to handle 500+ applicants for a single role, placing a founding engineer in four weeks — 50% faster than average.',
        content: `Recruitz is a boutique recruiting agency with a big problem: they operate as a two-person shop, but their clients expect them to deliver like a full-service firm. Every time they land a hard role with a high applicant volume, the team has to make a choice between thoroughness and speed — and in recruiting, both matter enormously.

When a technology client asked Recruitz to fill a founding engineer position at an early-stage startup, the brief was demanding. The role attracted over 500 applicants in the first two weeks, each of whom needed initial assessment. With two people running the firm, manually screening even a representative sample of that pool would have taken weeks.

**The Old Way Wasn't Working**

Before using AIR, the Recruitz team would manually review resumes, shortlist 50-60 candidates for a phone screen, and then spend days working through those calls — often only reaching the best candidates by the second or third week of the process. In a competitive talent market, that lag was costly. Candidates already had other conversations in progress.

**Deploying AIR**

By integrating [Braintrust AIR](/products/air) into their process, Recruitz was able to send conversational assessment invites to the full applicant pool immediately. The AI conducted an adaptive voice interview with each candidate — probing their engineering philosophy, their experience with early-stage ambiguity, and their approach to technical architecture decisions.

Within 48 hours, Recruitz had AI-generated scorecards ranking the top performers across the full pool. Instead of screening 50-60 candidates manually, they identified the top 5-10 who warranted a deep human conversation.

**The Results**

They placed the founding engineer in four weeks — roughly half the average time for a role of this complexity and seniority. The candidate they placed had scored highly on AIR's adaptive assessment, and the subsequent human conversations confirmed what the AI had flagged: exceptional technical depth and a strong fit for early-stage uncertainty.

"I can't live without it," said the Recruitz founder. "We went from scrambling to cover volume to having a genuinely confident shortlist in 48 hours. The AI does the work of a full screening team."

For boutique recruiting teams or internal TA functions operating lean, AIR effectively multiplies your capacity without multiplying your headcount. [Try AIR for yourself](/products/air/try) or [book a demo](/book-demo) to see how it fits a high-touch recruiting workflow.`,
        category: 'Case Study',
        tags: ['Recruitz', 'Startup', 'Case Study'],
        authorSlug: 'anne-muscarella',
        publishedAt: '2025-07-08',
        readingTime: '7 min read',
    },
    {
        slug: '5-ai-prompts-that-help-you-source-world-class-talent-faster',
        title: '5 AI Prompts That Help You Source World-Class Talent Faster',
        excerpt: 'Five specific, ready-to-use prompts for recruiters to generate targeted sourcing strategies, high-converting job posts, and personalized candidate outreach.',
        content: `Most recruiters know AI tools like ChatGPT can help with writing. Fewer have figured out how to use them to meaningfully accelerate sourcing — the part of recruiting that actually determines whether you're talking to the right people.

The difference is in how you prompt. Vague inputs produce generic outputs. Specific, structured prompts produce genuinely useful sourcing strategy. Here are five prompts that experienced recruiters use daily to move faster without cutting corners.

**Prompt 1: Source by Skill, Region, and Availability**

"I'm sourcing candidates for a [role title] at a [company stage] company in [location]. The core requirements are [3-4 key skills]. Generate five non-obvious sourcing channels I should explore, including online communities, niche job boards, professional associations, and content platforms where this type of person is likely to be active."

This works because it pushes AI beyond the obvious (LinkedIn, Indeed) and into the spaces where less-competed-for talent actually lives — Discord servers, Substack communities, YouTube comment sections, and industry-specific forums.

**Prompt 2: Write a High-Converting Job Post**

"Write a job posting for a [role title] that is honest, specific, and written from the candidate's perspective rather than the company's. Avoid corporate jargon. Lead with what the candidate will learn and accomplish in their first 90 days. Include the actual salary range. Keep it under 400 words."

Research consistently shows that shorter, candidate-first job postings out-convert traditional format postings. This prompt forces the output in that direction.

**Prompt 3: Craft Personalized Outreach**

"Here is a LinkedIn profile summary: [paste summary]. Write a three-sentence outreach message for a [role title] opportunity that references something specific from their background and doesn't sound like a template. Avoid starting with 'I hope this finds you well.'"

The specificity of the reference is what makes cold outreach convert. Generic messages get ignored. AI can generate personalized angles faster than humans can, especially at volume.

**Prompt 4: Refine the Ideal Candidate Profile**

"I'm hiring for a [role title]. Based on the following job description, help me identify the three most important skills that predict success in this role, three skills that commonly appear in resumes but are actually less predictive, and three non-obvious backgrounds that might transfer well."

This prompt helps you challenge and refine your own assumptions about who can do the job — surfacing candidate populations you might not have considered.

**Prompt 5: Identify Red Flags in a Profile**

"Here is a candidate's LinkedIn profile: [paste profile]. Based on this profile, identify any patterns that might warrant clarification during a screening conversation. Do not make assumptions — flag things worth discussing, not things worth rejecting."

Used responsibly, this prompt helps you prepare better interview questions. It surfaces gaps in experience progression, unexplained tenure changes, or skill claims that warrant verification.

Used together with [Braintrust AIR](/products/air) for automated first-round screening, these prompts can significantly compress the time between sourcing and shortlist.`,
        category: 'How-To',
        tags: ['AI Prompts', 'Sourcing', 'Recruiters'],
        authorSlug: 'anne-muscarella',
        publishedAt: '2025-07-01',
        readingTime: '7 min read',
    },
    {
        slug: '5-ai-prompts-recruiters-need',
        title: 'The 5 AI Prompts Every Time-Strapped Recruiter Needs',
        excerpt: 'Strategic AI prompts that help recruiters build better candidate pipelines, write stronger outreach, and get a real-time read on funnel health.',
        content: `Recruiting is a job built on volume and judgment simultaneously — you need to move fast enough to compete for talent while being thoughtful enough to make good decisions. AI doesn't replace that judgment, but it can dramatically reduce the administrative friction that slows you down.

These five prompts are oriented around the strategic parts of recruiting where AI delivers the most leverage: targeting, outreach, comparison, profiling, and pipeline analysis.

**Prompt 1: Build a Targeted Sourcing Strategy**

"I need to hire a [role] who has experience with [specific skill or domain] and is likely to be open to a [company type] opportunity. Create a sourcing plan that includes specific platforms, communities, and search string strategies I should use, ordered by likely yield."

The key word is "specific." Push the AI to name actual communities and search strings rather than giving you category names. If the first output is generic, ask it to go deeper on each channel.

**Prompt 2: Draft Personalized Candidate Outreach at Scale**

"Here are three LinkedIn profiles [paste summaries]. For each person, draft a two-sentence personalized opening for a recruiting message that references something unique about their experience and explains why I'm reaching out for a [role title] opportunity."

This prompt runs three personalization loops simultaneously. With a bit of editing, you get outreach that actually gets responses — without spending 10 minutes per message.

**Prompt 3: Create a Candidate Comparison Matrix**

"Here are notes from four candidate phone screens: [paste notes]. Create a side-by-side comparison matrix across the following dimensions: [list 4-6 key criteria]. Highlight where candidates were stronger or weaker, and flag any dimensions where data is missing."

When you're managing multiple candidates across multiple roles, keeping the comparisons straight is cognitively exhausting. This prompt structures the information so you can present a clear recommendation to a hiring manager without spending an hour on a slide deck.

**Prompt 4: Build an Ideal Candidate Profile from First Principles**

"I'm hiring for [role title] at a company that is [stage, industry, culture descriptor]. The person will be responsible for [core responsibilities]. Based on these inputs, build an ideal candidate profile that includes: required vs. preferred skills, personality traits that typically predict success in this environment, and interview questions that would help you surface those traits."

Use this at the start of a new search to align with the hiring manager and pressure-test assumptions before you waste time screening for the wrong profile.

**Prompt 5: Get a Funnel Health Snapshot**

"My recruiting funnel for [role] over the last [time period] has these metrics: [paste application volume, screen completion rate, interview-to-offer rate, offer acceptance rate]. Identify where the biggest drop-offs are, hypothesize why they might be occurring, and suggest one experiment I could run to address each."

Most recruiters look at funnel metrics as read-only reporting. This prompt turns them into an active diagnostic — giving you a clear hypothesis to test each week.

Paired with a tool like [Braintrust AIR](/products/air) that automates first-round screening, these prompts handle the thinking work that surrounds the process — so you can focus on the conversations that actually move candidates forward.`,
        category: 'How-To',
        tags: ['AI Prompts', 'Recruiters', 'Productivity'],
        authorSlug: 'anne-muscarella',
        publishedAt: '2025-06-26',
        readingTime: '7 min read',
    },
    {
        slug: 'braintrust-air-faq',
        title: 'Braintrust AIR: Frequently Asked Questions',
        excerpt: 'Everything talent acquisition teams ask before deploying AIR — from how the AI is trained, to candidate experience, to how it handles bias and data privacy.',
        content: `If you're evaluating [Braintrust AIR](/products/air) for your organization, you're probably asking the same questions we hear from every enterprise TA team. Here are the most common ones, answered directly.

**What makes AIR different from other AI recruiting tools?**

Most AI recruiting tools automate a step in the process — resume parsing, scheduling, or video recording analysis. AIR automates the entire top-of-funnel conversation. It conducts a real, adaptive voice interview: asks role-specific questions, listens to candidate responses, generates contextual follow-ups, and produces a semantic scorecard. The candidate experience is conversational, not transactional.

**What types of roles is AIR best suited for?**

AIR is purpose-built for high-volume inbound recruiting — roles that typically receive hundreds or thousands of applications and where the initial screening bottleneck is significant. This includes customer service, retail, healthcare support, sales, operations, and technical roles where communication skills and behavioral competencies can be assessed conversationally. It's not designed for executive search or roles requiring extensive portfolio review.

**How was AIR trained, and does candidate data feed back into the model?**

AIR's core intelligence is built on a foundation of over 1.2 million vetted professional profiles from the Braintrust talent network, combined with purpose-built training for recruiting-specific conversations. Critically: no candidate data from enterprise deployments is ever used to retrain the AI. Your candidates' transcripts, audio, and PII remain entirely within your isolated enterprise tenant.

**What's the typical candidate experience like?**

About 70% of candidates who receive an AIR invite complete the assessment — significantly above industry averages for automated screening tools. Candidates consistently rate the experience positively, with most citing the flexibility (no scheduling), the natural conversation flow, and the absence of a camera as primary reasons. Voice-only format removes the performative anxiety of video, resulting in more authentic responses.

**How does AIR handle bias?**

AIR evaluates candidates exclusively on the semantic content of their transcripts — what they say, not how they sound, what they look like, or what their resume says. The AI doesn't have access to PII during the initial evaluation. Every scoring decision is traceable to a specific rubric competency. AIR has passed an independent third-party audit with zero adverse findings across demographic groups. [Read the full audit](/blog/independent-ai-bias-compliance-audit).

**Does AIR replace the recruiter?**

No. AIR handles the highest-volume, lowest-leverage part of recruiting — initial screening — so recruiters can focus on the highest-leverage parts: building relationships, selling the opportunity, and making nuanced final-round assessments. Organizations using AIR consistently report that their recruiters feel more engaged and strategic, not displaced.

**How does AIR integrate with our existing ATS?**

AIR integrates natively with Greenhouse, Workday, SmartRecruiters, Lever, and others via webhook and API. When a candidate's profile hits a designated stage in your ATS, AIR automatically triggers the assessment invite, conducts the interview, and pushes back structured scorecard data — without any manual steps from your team.

Ready to see it in action? [Try AIR for yourself](/products/air/try) or [book a demo](/book-demo) with our solutions team.`,
        category: 'Product',
        tags: ['FAQ', 'Product', 'AIR'],
        authorSlug: 'anne-muscarella',
        publishedAt: '2025-06-25',
        readingTime: '8 min read',
    },
    {
        slug: 'independent-ai-bias-compliance-audit',
        title: 'Braintrust AIR Passes Independent AI Bias and Compliance Audit with Zero Findings',
        excerpt: 'A third-party audit confirmed zero adverse impact across demographic groups and full compliance with GDPR, EEOC, and NYC Local Law 144.',
        content: `Bias in AI hiring tools is a serious and legitimate concern. Early AI systems amplified historical biases, sometimes dramatically, by learning patterns from tainted data. Legislative bodies in New York City, Illinois, Colorado, and the EU have responded with laws requiring disclosure, auditing, and in some cases, pre-deployment bias testing.

We welcomed this scrutiny — and we commissioned an independent third-party audit of [Braintrust AIR](/products/air) to verify what we believed about our own system. Here's what the audit found.

**The Audit Process**

The audit was conducted by an independent firm with no prior relationship with Braintrust. Auditors were given full access to AIR's scoring methodology, rubric design, training data documentation, and a dataset of historical interview evaluations across a demographically diverse candidate pool.

The evaluation assessed two primary questions: Does AIR produce statistically significant disparities in scoring outcomes across demographic groups? And does the overall system architecture comply with applicable regulatory frameworks, including GDPR, EEOC guidelines, and NYC Local Law 144?

**The Findings**

The auditors found zero adverse impact across every demographic group tested — including race, gender, national origin, and age. Selection rate equivalence was confirmed at 100%: candidates from every demographic group passed through AIR's initial screen at statistically equivalent rates when controlling for the competencies actually required for the role.

The auditors specifically noted that AIR's voice-only, transcript-based evaluation architecture was a key factor in this outcome. By evaluating the semantic content of what candidates say rather than visual or acoustic demographic signals, the system avoids the primary vector through which visual AI systems introduce bias.

**Regulatory Compliance**

On the compliance side, the audit confirmed full alignment with GDPR data processing requirements, EEOC disparate impact standards, and NYC Local Law 144's audit and transparency requirements. The audit report itself constitutes the disclosure required under LL 144 and is available to any enterprise client subject to that regulation.

**What This Means for Enterprise Buyers**

If your legal team or procurement process requires documented evidence of bias testing as a condition of deployment, we have it. If your jurisdiction requires an annual bias audit for automated employment decision tools, our audit history satisfies that requirement.

We believe rigorous independent auditing should be standard practice for any AI system used in high-stakes decisions. We publish our results because we think that transparency builds trust — and because the data supports our confidence in AIR's fairness.

[Book a demo](/book-demo) to request the full audit report and discuss compliance requirements specific to your jurisdiction and industry.`,
        category: 'Research',
        tags: ['Compliance', 'Bias Audit', 'EEOC'],
        authorSlug: 'anne-muscarella',
        publishedAt: '2025-06-20',
        readingTime: '7 min read',
    },
    {
        slug: 'now-interviewing-in-10-languages',
        title: 'Now Interviewing in 10 Languages — With Zero Added Effort',
        excerpt: 'AIR now conducts fully conversational interviews in English, Spanish, Portuguese, German, French, Italian, Dutch, Japanese, Russian, and Hindi.',
        content: `Global hiring just got a lot simpler. [Braintrust AIR](/products/air) now supports fully conversational interviews in 10 languages — and deploying multilingual screening requires zero additional configuration from your team.

The 10 supported languages are English, Spanish, Portuguese, German, Dutch, French, Italian, Japanese, Russian, and Hindi. More are on the way.

**How It Works**

When a candidate begins their AIR session, the platform automatically detects or prompts for their preferred language. The entire interview — the AI's questions, its follow-ups, and its adaptive probing — happens in that language from start to finish. There's no human translator in the loop, no pre-recorded questions, and no degraded experience for candidates interviewing in languages other than English.

Recruiters and hiring managers, regardless of their own language proficiency, receive standardized English-language scorecards and transcripts for every candidate. The AI handles the translation and normalization on the backend, so the evaluation is fully comparable across geographies.

**Why This Matters**

For global enterprises running high-volume hiring across multiple markets, language has historically been a significant barrier to centralized screening. A regional HR team in Brazil had to maintain entirely separate sourcing and screening workflows from the team in Germany — using different tools, different rubrics, and different benchmarks.

Multilingual AIR eliminates that fragmentation. One platform, one rubric, one set of competencies — deployed simultaneously across 10 languages. A candidate in Mumbai and a candidate in Munich applying for the same role get evaluated by the same AI using the same criteria, with the same consistency and objectivity.

**Fairness Across Languages**

A critical question for any multilingual AI system is whether assessment quality degrades in non-primary languages. Our testing and third-party audit work confirm that semantic scoring accuracy is maintained across all 10 supported languages. The AI evaluates the conceptual content and depth of responses, not surface-level vocabulary choices that might vary between native and non-native speakers.

**Who Benefits Most**

Multilingual interviews are particularly valuable for organizations in healthcare, logistics, retail, and customer service — industries where high-volume hiring spans geographically and linguistically diverse candidate pools. They're also valuable for global technology companies with engineering teams spread across multiple countries.

If your organization operates globally and your current screening process requires separate workflows by region, [book a demo](/book-demo) to see how a centralized, multilingual AI interview platform can standardize your top-of-funnel without sacrificing local relevance.`,
        category: 'Product',
        tags: ['Multilingual', 'Global Hiring', 'Product'],
        authorSlug: 'anne-muscarella',
        publishedAt: '2025-06-18',
        readingTime: '6 min read',
    },
    {
        slug: 'healthcarerecruiting',
        title: 'How a Leading Healthcare Provider Tripled Screening Efficiency and Cut Costs by 86%',
        excerpt: 'One of the largest U.S. home care providers increased screening completion rates from 8% to 26% and reduced cost-per-interview from $125 to $18 using AIR.',
        content: `Healthcare recruiting is among the most challenging in any industry. Demand for qualified caregivers consistently outpaces supply. Applicant-to-hire ratios are high, margins are tight, and the consequences of mis-hires — or unfilled positions — are measured in patient outcomes, not just business metrics.

For one of the largest home care providers in the United States, receiving over 250,000 job applications annually, the fundamental problem was conversion. Despite massive inbound volume, their screening completion rate was 8%. The vast majority of applicants who expressed interest never completed the early stages of the process — they fell off during the phone scheduling phase, dropped off asynchronous video tools, or simply moved on to a provider that made it easier to apply.

**The Core Problem: Friction in the Front of the Funnel**

The home care market is particularly competitive at the top of the funnel. Candidates have options — multiple providers are hiring simultaneously, and the one that creates the least friction wins. A process that requires a candidate to schedule a call, wait for a recruiter, take time off to be available at a specific hour, and then go through a formal 30-minute screen is fundamentally misaligned with the lives of the people they're trying to hire.

Many of this provider's candidates are working caregivers themselves — people with irregular schedules, family obligations, and limited windows to complete a formal hiring process. Traditional scheduling-based screening was quietly disqualifying them by design.

**The AIR Deployment**

By deploying [Braintrust AIR](/products/air), the provider replaced the scheduled phone screen with an on-demand conversational AI assessment. Within minutes of applying, candidates received an SMS inviting them to a short voice interview they could complete from their phone, at any time, with no scheduling required.

The AI asked questions calibrated specifically for caregiver roles: empathy in difficult situations, experience with vulnerable populations, reliability and communication under stress, and familiarity with documentation and care protocols. Candidates who engaged found the conversation natural and respectful. Those who completed it received rapid follow-up.

**The Results**

Screening completion rates jumped from 8% to 26% — a 3x improvement — without any change to the applicant pool or job postings. The increase came entirely from removing the scheduling friction that had previously caused 92% of applicants to fall off.

The provider made 30 qualified hires in three weeks using AIR, compared to a process that previously stretched over months for comparable cohorts.

Cost-per-interview dropped from $125 to $18 — an 86% reduction. The $125 figure reflected recruiter time, coordination overhead, and the rate of no-shows and rescheduling that plagued the manual process. At $18, the AI interview is essentially a rounding error in the cost-to-hire model.

Quality of hire held steady or improved. Candidates who completed the conversational assessment and were subsequently hired showed equivalent or better early performance metrics compared to the cohort hired under the previous process.

For healthcare organizations struggling with applicant drop-off, recruiter burnout, or the cost of unfilled patient-facing roles, [book a demo](/book-demo) to walk through how AIR has been configured specifically for healthcare staffing contexts.`,
        category: 'Case Study',
        tags: ['Healthcare', 'Case Study', 'High Volume'],
        authorSlug: 'anne-muscarella',
        publishedAt: '2025-02-18',
        readingTime: '8 min read',
    },
];
