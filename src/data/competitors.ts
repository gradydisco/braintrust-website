/* ============================================================
   Competitor data for /compare/air-vs-X pages.
   Centralized so updates propagate everywhere.
   ============================================================ */

export interface CompetitorData {
    name: string;
    slug: string;
    intro: string;
    featureRows: { feature: string; air: string; competitor: string }[];
    voice: string;
    conversational: string;
    scoring: string;
    enterprise: string;
    scalability: string;
    summary: string;
    faq: { question: string; answer: string }[];
}

const shared = {
    airVoice: 'Braintrust AIR conducts real-time, adaptive voice interviews using advanced speech recognition, NLU, and neural text-to-speech. The AI speaks naturally, listens to candidate responses, and asks contextually relevant follow-up questions — creating a genuine conversational experience. Response latency is under 500ms, and the system supports 16+ languages with production-quality voice models.',
    airConversational: 'AIR\'s conversational engine dynamically navigates interviews based on candidate responses. It follows up on interesting answers, probes vague responses for specifics, and adjusts question complexity based on demonstrated expertise. The system maintains full conversation context, referencing earlier answers to build a complete candidate picture. This adaptive approach produces 3-5× richer evaluation data than scripted alternatives.',
    airScoring: 'AIR evaluates candidates across multiple configurable dimensions simultaneously — technical skills, communication quality, behavioral indicators, domain knowledge, and cultural fit. Scoring rubrics are customizable per role, department, and seniority level. Each dimension receives a calibrated score with supporting evidence from the interview transcript.',
    airEnterprise: 'AIR is SOC 2 Type II certified with enterprise SSO (SAML), configurable data retention, full audit logging, and role-based access controls. It integrates natively with 50+ ATS platforms including Greenhouse, Lever, Workday, BambooHR, and iCIMS. Enterprise customers receive dedicated CSMs, custom SLAs, and quarterly business reviews.',
    airScalability: 'AIR processes thousands of interviews per day without degradation. The architecture scales horizontally to handle peak hiring periods — seasonal surges, campus recruiting waves, and rapid-growth hiring events. Each interview receives the same quality of adaptive conversation and scoring regardless of volume.',
};

export const competitors: Record<string, CompetitorData> = {
    hirevue: {
        name: 'HireVue',
        slug: 'hirevue',
        intro: `<p>HireVue has been a prominent name in AI-powered hiring since 2004, primarily known for video interviewing with AI-assisted assessment. With a strong enterprise client base including many Fortune 500 companies, HireVue has established itself as a mainstream choice for video-first hiring workflows.</p><p>Braintrust AIR represents a newer approach — <a href="/conversational-ai-interview-platform">conversational AI interviewing</a> — that conducts real-time, adaptive voice conversations rather than analyzing recorded video responses. This comparison examines how these fundamentally different approaches stack up across capability, enterprise readiness, and outcomes.</p>`,
        featureRows: [
            { feature: 'Interview Method', air: 'Real-time adaptive voice conversation', competitor: 'Pre-recorded video with AI analysis' },
            { feature: 'Conversational AI', air: '✓ Full adaptive dialogue with follow-ups', competitor: '✗ Scripted questions, no follow-ups' },
            { feature: 'Voice AI', air: '✓ Native real-time voice', competitor: '✗ Video-focused' },
            { feature: 'Adaptive Follow-Ups', air: '✓ Dynamic based on responses', competitor: '✗ Fixed question sets' },
            { feature: 'Assessment Types', air: 'Conversational + skills + behavioral', competitor: 'Video + game-based + coding' },
            { feature: 'Languages', air: '16+', competitor: '10+' },
            { feature: 'SOC 2', air: '✓ Type II', competitor: '✓ Type II' },
            { feature: 'SSO', air: '✓ SAML', competitor: '✓ SAML' },
            { feature: 'ATS Integrations', air: '50+', competitor: '40+' },
            { feature: 'Candidate Experience', air: 'Natural voice conversation, 24/7', competitor: 'Camera recording, structured video' },
            { feature: 'Pricing Model', air: 'Per-interview / enterprise', competitor: 'Enterprise contracts' },
            { feature: 'Time-to-Value', air: '2-4 weeks', competitor: '4-8 weeks' },
        ],
        voice: `${shared.airVoice}<p>HireVue is primarily a video platform — candidates record themselves answering questions on camera. While HireVue analyzes video for verbal and non-verbal cues, it does not conduct real-time voice conversations. The experience is one-directional: candidates speak to a camera interface, not with an interactive AI interviewer.</p><p>For roles where communication quality is critical — sales, customer success, support, management — the ability to evaluate candidates through real-time voice conversation provides significantly richer signal than analyzing recorded video.</p>`,
        conversational: `${shared.airConversational}<p>HireVue uses a structured, scripted approach — candidates answer predetermined questions in a fixed sequence. The system cannot ask follow-up questions, adjust difficulty based on expertise, or explore unexpected areas of knowledge. This scripted methodology is a fundamentally older approach to AI interviewing.</p><p>The practical impact is significant: conversational AI interviews produce evaluation data that is substantially more predictive and nuanced than scripted video assessments, particularly for senior roles and positions requiring strong communication skills.</p>`,
        scoring: `${shared.airScoring}<p>HireVue offers AI-powered scoring of video responses, analyzing verbal content, delivery, and (historically) facial expressions. They also provide game-based assessments and structured coding challenges. However, the scoring is based on recorded, unidirectional responses rather than dynamic conversation — limiting the depth of evaluation possible.</p>`,
        enterprise: `${shared.airEnterprise}<p>HireVue has a long track record in enterprise deployments and strong brand recognition among Fortune 500 HR teams. Both platforms meet enterprise security requirements. The primary differentiator is technology approach — conversational AI (AIR) versus video analysis (HireVue).</p>`,
        scalability: `${shared.airScalability}<p>HireVue scales effectively for asynchronous video interviewing — since candidates record themselves independently, the platform handles high volume naturally. However, the scalability is for recorded video collection and analysis, not real-time interactive interviewing.</p>`,
        summary: `<p>Braintrust AIR and HireVue represent two fundamentally different approaches to AI-powered interviewing. HireVue is a well-established video interview platform with strong enterprise adoption and brand recognition. AIR is a next-generation conversational AI platform that conducts real-time, adaptive voice interviews.</p><p>For organizations seeking the most advanced AI interviewing technology — particularly real-time voice conversation, adaptive follow-up questioning, and multi-dimensional scoring through dialogue — <a href="/products/air">Braintrust AIR</a> leads. For organizations deeply invested in video-first workflows with game-based assessments, HireVue remains strong.</p><p>The market is increasingly moving toward conversational AI approaches, which produce richer evaluation data and better candidate experiences. <a href="/products/air/try">Try AIR free</a> to experience the difference.</p>`,
        faq: [
            { question: 'How is Braintrust AIR different from HireVue?', answer: 'The fundamental difference is interview methodology. AIR conducts real-time, adaptive voice conversations that dynamically adjust based on candidate responses. HireVue records candidates answering pre-set questions on video and analyzes the recordings with AI. AIR\'s conversational approach produces richer evaluation data and better candidate experiences.' },
            { question: 'Is HireVue or Braintrust AIR better for enterprise?', answer: 'Both are enterprise-ready with SOC 2 certification, SSO, and extensive ATS integrations. HireVue has longer enterprise tenure and broader brand recognition. AIR offers more advanced AI interview technology with conversational voice interviews and customizable multi-dimensional scoring.' },
            { question: 'Which platform has better candidate experience?', answer: 'Candidate feedback consistently favors conversational AI interviews (like AIR) over one-way video recordings (like HireVue). Speaking with an interactive AI feels more natural and respectful than recording answers to a camera with no feedback or interaction.' },
            { question: 'Can I use both AIR and HireVue?', answer: 'Yes. Some organizations use AIR for initial screening interviews (high-volume, voice-based) and other tools for specific assessment types. However, AIR\'s comprehensive assessment capabilities often replace the need for multiple platforms.' },
        ],
    },
    testgorilla: {
        name: 'TestGorilla',
        slug: 'testgorilla',
        intro: `<p>TestGorilla is a pre-hire skills assessment platform with a library of 400+ standardized tests covering cognitive ability, programming, language proficiency, and personality. Founded in 2019, it has gained popularity for its test-first approach to hiring.</p><p>Braintrust AIR takes a fundamentally different approach — evaluating candidates through <a href="/conversational-ai-interview-platform">adaptive conversational AI interviews</a> rather than standardized tests. This comparison examines which methodology delivers better results for different hiring contexts.</p>`,
        featureRows: [
            { feature: 'Evaluation Method', air: 'Conversational AI interview', competitor: 'Standardized skills tests' },
            { feature: 'Voice AI', air: '✓ Real-time voice interviews', competitor: '✗ Text-based tests only' },
            { feature: 'Adaptive Assessment', air: '✓ Dynamic follow-up questions', competitor: '△ Adaptive test difficulty' },
            { feature: 'Communication Evaluation', air: '✓ Natural conversation analysis', competitor: '✗ Cannot evaluate speaking ability' },
            { feature: 'Test Library', air: 'Custom per role', competitor: '400+ pre-built tests' },
            { feature: 'Behavioral Assessment', air: '✓ Through conversation', competitor: '✓ Through questionnaires' },
            { feature: 'Enterprise Security', air: '✓ SOC 2, SSO', competitor: '△ Growing' },
            { feature: 'ATS Integrations', air: '50+', competitor: '20+' },
            { feature: 'Anti-Cheating', air: 'Real-time voice (inherent)', competitor: 'Proctoring + monitoring' },
            { feature: 'Languages', air: '16+', competitor: '12+' },
        ],
        voice: `${shared.airVoice}<p>TestGorilla does not offer voice AI capabilities. All assessments are text-based — candidates read questions and select or type answers. This means TestGorilla cannot evaluate communication skills, speaking ability, or conversational quality, which are often the most important predictors of success in client-facing, leadership, and collaborative roles.</p>`,
        conversational: `${shared.airConversational}<p>TestGorilla uses a test-based methodology — standardized questions with predetermined correct/incorrect answers. While some tests adapt difficulty, the fundamental approach is assessment testing, not conversation. Candidates take tests; they don\'t have dialogues.</p><p>For roles where communication, problem-solving approach, and ability to articulate ideas matter, conversational assessment through dialogue provides dramatically better signal than multiple-choice testing.</p>`,
        scoring: `${shared.airScoring}<p>TestGorilla scores candidates against standardized test benchmarks — percentage scores on each test, compared against population norms. This works well for objective skills (coding, math, language) but struggles to evaluate soft skills, communication quality, and role-specific judgment that conversation-based assessment excels at.</p>`,
        enterprise: `${shared.airEnterprise}<p>TestGorilla is growing its enterprise capabilities but has historically focused on the SMB and mid-market. Enterprise features like SOC 2 and SSO are developing. Organizations with strict enterprise requirements may find AIR\'s infrastructure more mature.</p>`,
        scalability: `${shared.airScalability}<p>TestGorilla scales well for test administration — candidates take tests asynchronously. However, the limitation is assessment depth, not volume. High-volume organizations often find that test-only approaches miss important dimensions that conversational assessment captures.</p>`,
        summary: `<p>TestGorilla and Braintrust AIR serve different assessment philosophies. TestGorilla excels at standardized skills testing with a large pre-built library. AIR excels at evaluating the full candidate — skills, communication, behavioral traits, and domain depth — through adaptive voice conversation.</p><p>For organizations prioritizing objective skills testing (coding, language, cognitive), TestGorilla is solid. For organizations wanting a more comprehensive, conversational evaluation that mirrors how candidates actually perform in their roles, <a href="/products/air">Braintrust AIR</a> delivers deeper, more predictive insights.</p>`,
        faq: [
            { question: 'Is Braintrust AIR a testing platform like TestGorilla?', answer: 'No. AIR is a conversational AI interview platform that evaluates candidates through adaptive voice dialogue. TestGorilla is a standardized testing platform. AIR assesses skills through conversation; TestGorilla assesses through structured tests. The approaches are complementary but fundamentally different.' },
            { question: 'Which is better for technical hiring?', answer: 'It depends on what you\'re evaluating. TestGorilla has a large library of coding and technical tests. AIR evaluates technical knowledge through conversation — probing depth of understanding, problem-solving approach, and ability to communicate technical concepts. Many organizations use conversational AI to supplement or replace pure coding tests.' },
            { question: 'Can I use TestGorilla and AIR together?', answer: 'Yes. Some organizations use TestGorilla for specific skills tests and AIR for conversational interviews. However, AIR\'s multi-dimensional assessment often captures the same skills information plus communication and behavioral dimensions that testing alone misses.' },
        ],
    },
    paradox: {
        name: 'Paradox',
        slug: 'paradox',
        intro: `<p>Paradox, known for its AI assistant "Olivia," is a conversational AI platform focused on recruiting workflow automation — candidate engagement, scheduling, and high-volume applicant management. It has gained strong traction in frontline and high-volume hiring.</p><p>Braintrust AIR is a conversational AI <em>interviewer</em> — it conducts adaptive voice interviews that evaluate candidates deeply. While both use conversational AI, they serve different parts of the hiring funnel. This comparison clarifies where each excels.</p>`,
        featureRows: [
            { feature: 'Primary Function', air: 'AI interviewing & assessment', competitor: 'Scheduling & candidate engagement' },
            { feature: 'Voice AI Interviews', air: '✓ Real-time adaptive', competitor: '✗ Chat-focused' },
            { feature: 'Candidate Assessment', air: '✓ Multi-dimensional scoring', competitor: '✗ Screening questions only' },
            { feature: 'Scheduling Automation', air: '△ Via ATS integration', competitor: '✓ Core strength' },
            { feature: 'Candidate Engagement', air: '△ Interview-focused', competitor: '✓ Full lifecycle engagement' },
            { feature: 'Assessment Depth', air: 'Deep multi-dimensional', competitor: 'Basic qualification screening' },
            { feature: 'Enterprise Security', air: '✓ SOC 2, SSO', competitor: '✓ SOC 2, SSO' },
            { feature: 'ATS Integrations', air: '50+', competitor: '40+' },
            { feature: 'Languages', air: '16+', competitor: '10+' },
            { feature: 'Best For', air: 'Deep candidate evaluation', competitor: 'High-volume logistics automation' },
        ],
        voice: `${shared.airVoice}<p>Paradox\'s Olivia is primarily a text/chat-based assistant. While it has expanding voice capabilities, its core strength is chat-based candidate engagement and scheduling — not real-time voice interviewing. Paradox doesn\'t conduct deep-dive voice interviews that evaluate candidate skills and knowledge.</p>`,
        conversational: `${shared.airConversational}<p>Paradox uses conversational AI for <em>workflow automation</em> — answering candidate questions, collecting screening information, and scheduling interviews. It\'s excellent at what it does, but it doesn\'t conduct substantive evaluative interviews.</p><p>The distinction is important: Paradox handles the logistics of hiring; AIR handles the evaluation of candidates. They solve different problems and complement rather than compete for many organizations.</p>`,
        scoring: `${shared.airScoring}<p>Paradox provides basic screening — collecting knockout questions (years of experience, certifications, availability) and routing candidates accordingly. It does not provide the multi-dimensional candidate assessment and scoring that AIR delivers. The platforms serve different stages of the hiring funnel.</p>`,
        enterprise: `${shared.airEnterprise}<p>Paradox has strong enterprise credentials with major deployments across retail, healthcare, and hospitality. Both platforms meet enterprise security requirements. The choice between them is not "which is better" but "which problem are you solving" — logistics automation or candidate evaluation.</p>`,
        scalability: `${shared.airScalability}<p>Paradox excels at massive-scale candidate engagement — handling millions of candidate interactions for the largest employers. It\'s purpose-built for high-volume logistics. AIR scales for high-volume evaluation — conducting thousands of substantive interviews per day.</p>`,
        summary: `<p>Paradox and Braintrust AIR are complementary rather than directly competitive. Paradox excels at the logistics of hiring — candidate engagement, scheduling, and applicant management. AIR excels at the substance of hiring — conducting evaluative interviews, scoring candidates, and producing actionable assessments.</p><p>Many organizations benefit from both: Paradox for the front end (engagement, screening, scheduling) and <a href="/products/air">AIR for evaluation</a> (interviews, assessment, scoring). For organizations choosing one, the decision depends on their primary bottleneck — logistics or evaluation quality.</p>`,
        faq: [
            { question: 'Are Paradox and Braintrust AIR competitors?', answer: 'They are more complementary than competitive. Paradox automates recruiting logistics (scheduling, engagement, screening questions). AIR automates evaluation (conversational interviews, multi-dimensional scoring). Many organizations benefit from using both.' },
            { question: 'Can Paradox conduct interviews like AIR?', answer: 'Paradox can ask basic screening questions (years of experience, availability, certifications) through chat. It does not conduct substantive evaluative interviews with adaptive follow-up questions and multi-dimensional scoring. That is AIR\'s core capability.' },
            { question: 'Which is better for high-volume hiring?', answer: 'Both excel in high-volume hiring but solve different problems. Paradox handles the logistics — engaging candidates, answering questions, scheduling. AIR handles the evaluation — conducting interviews, scoring candidates, ranking applicants. The ideal high-volume stack includes both.' },
        ],
    },
};

// Quick-generate basic competitor entries for remaining platforms
const quickCompetitor = (name: string, slug: string, type: string, focus: string, strength: string, weakness: string): CompetitorData => ({
    name,
    slug,
    intro: `<p>${name} is ${type} in the AI hiring space. ${focus}</p><p>Braintrust AIR takes a fundamentally different approach — conducting <a href="/conversational-ai-interview-platform">adaptive conversational AI voice interviews</a> that evaluate candidates through real-time dialogue. This comparison examines how these approaches differ across capability, enterprise readiness, and outcomes.</p>`,
    featureRows: [
        { feature: 'Interview Method', air: 'Real-time adaptive voice conversation', competitor: strength },
        { feature: 'Conversational AI', air: '✓ Full adaptive dialogue', competitor: weakness.includes('adaptive') ? '△ Limited' : '✗ Scripted/basic' },
        { feature: 'Voice AI', air: '✓ Native real-time voice', competitor: weakness.includes('voice') ? '✗ No voice AI' : '△ Limited' },
        { feature: 'Multi-Dimensional Scoring', air: '✓ Customizable rubrics', competitor: '△ Basic scoring' },
        { feature: 'Enterprise Security', air: '✓ SOC 2 Type II, SSO', competitor: '△ Growing' },
        { feature: 'ATS Integrations', air: '50+', competitor: '10-20' },
        { feature: 'Languages', air: '16+', competitor: '3-5' },
        { feature: 'Scale', air: '1000s interviews/day', competitor: 'Low-Medium volume' },
        { feature: '24/7 Availability', air: '✓ Always on', competitor: '✓ Asynchronous' },
        { feature: 'Candidate Experience', air: 'Natural voice conversation', competitor: `${strength}` },
    ],
    voice: `${shared.airVoice}<p>${name} ${weakness.includes('voice') ? 'does not offer real-time voice AI interviewing capabilities. Its approach is focused on ' + strength.toLowerCase() + ', which does not capture the communication quality signals that voice conversation provides.' : 'has limited voice capabilities compared to AIR\'s full real-time conversational voice platform.'}`,
    conversational: `${shared.airConversational}<p>${name} uses a ${weakness.includes('adaptive') ? 'scripted or structured format rather than adaptive conversation. Candidates respond to predetermined questions without the AI dynamically adjusting based on their answers.' : 'more basic conversational approach that does not match the depth of AIR\'s adaptive dialogue engine.'}</p>`,
    scoring: `${shared.airScoring}<p>${name} provides basic scoring capabilities. However, the depth of evaluating scoring — particularly for communication quality, behavioral indicators, and domain expertise through adaptive conversation — is significantly more limited than AIR\'s multi-dimensional approach.</p>`,
    enterprise: `${shared.airEnterprise}<p>${name} is ${slug === 'brighthire' ? 'enterprise-focused' : 'building enterprise capabilities but may not yet match the breadth of AIR\'s enterprise infrastructure'}, including SOC 2 certification, SSO, and the depth of ATS integrations that large organizations require.</p>`,
    scalability: `${shared.airScalability}<p>${name} handles moderate volume well within its focus area. For organizations requiring thousands of substantive AI interviews per day, AIR\'s architecture is purpose-built for this scale.</p>`,
    summary: `<p>${name} and Braintrust AIR serve different segments of the AI hiring market. ${name} focuses on ${strength.toLowerCase()}, while AIR provides the most advanced conversational AI interviewing with enterprise-grade infrastructure.</p><p>For organizations seeking deep, adaptive candidate evaluation through real-time voice conversation, <a href="/products/air">Braintrust AIR</a> is the stronger choice. ${name} may suit organizations with more specific, narrower requirements in its area of focus.</p><p><a href="/products/air/try">Try AIR free</a> to experience the difference in interview quality and depth.</p>`,
    faq: [
        { question: `How is Braintrust AIR different from ${name}?`, answer: `AIR conducts real-time, adaptive voice interviews that dynamically adjust based on candidate responses. ${name} focuses on ${strength.toLowerCase()}. AIR provides deeper candidate evaluation through conversational AI, while ${name} takes a more ${weakness.includes('adaptive') ? 'structured' : 'specialized'} approach.` },
        { question: `Which is better for enterprise hiring?`, answer: `AIR offers more comprehensive enterprise capabilities — SOC 2 Type II, SSO, 50+ ATS integrations, and dedicated CSMs. ${name} ${slug === 'brighthire' ? 'has enterprise features' : 'is building enterprise capabilities'}. For organizations with strict enterprise requirements, AIR\'s infrastructure is more mature.` },
        { question: `Can I use ${name} and AIR together?`, answer: `Yes. Some organizations use ${name} for ${strength.toLowerCase()} and AIR for comprehensive candidate evaluation through conversational interviews. However, AIR\'s breadth often reduces the need for additional point solutions.` },
    ],
});

competitors['vidcruter'] = quickCompetitor('VidCruiter', 'vidcruter', 'a video interviewing and recruitment automation platform', 'VidCruiter offers structured video interviewing with configurable multi-stage workflows, popular among mid-market organizations.', 'Structured video interviews with workflow automation', 'No voice AI, no adaptive conversational capability');
competitors['sparkhire'] = quickCompetitor('SparkHire', 'sparkhire', 'a video interview platform', 'SparkHire provides simple, user-friendly one-way and live video interviewing for mid-market and growing organizations.', 'Simple one-way video interviews', 'No voice AI, no adaptive follow-ups');
competitors['myinterview'] = quickCompetitor('MyInterview', 'myinterview', 'an AI-assisted video screening platform', 'MyInterview uses AI to analyze video interview responses, scoring for keywords, sentiment, and communication quality. Designed for SMBs.', 'AI-scored video screening', 'No voice AI, no adaptive conversation');
competitors['humanly'] = quickCompetitor('Humanly', 'humanly', 'a chat AI platform for high-volume hiring', 'Humanly offers chatbot-based candidate screening and engagement automation for frontline and high-volume recruiting.', 'Chat-based screening and engagement', 'Limited voice, basic adaptive capability');
competitors['interviewer-ai'] = quickCompetitor('Interviewer.ai', 'interviewer-ai', 'an AI-powered video interview screening tool', 'Interviewer.ai provides automated video screening with AI-based scoring and candidate ranking for pre-screening workflows.', 'AI video screening with auto-ranking', 'No voice AI, no adaptive conversation');
competitors['brighthire'] = quickCompetitor('BrightHire', 'brighthire', 'an interview intelligence platform', 'BrightHire records and analyzes live human interviews to improve hiring decisions and reduce interviewer bias. It is NOT an AI interviewer — it augments human interviewers.', 'Interview recording and intelligence for human interviews', 'Not an AI interviewer — records human interviews, no voice AI interviewing');
competitors['take2'] = quickCompetitor('Take2', 'take2', 'a job simulation assessment platform', 'Take2 provides role-specific job simulation assessments where candidates complete realistic work tasks. A unique assessment methodology.', 'Job simulation assessments', 'No voice AI, no adaptive conversation');
competitors['alexai'] = quickCompetitor('AlexAI', 'alexai', 'an AI-powered recruiting assistant', 'AlexAI automates candidate engagement and basic screening through chat-based conversation. An earlier-stage platform in the AI recruiting space.', 'Chat-based recruiting automation', 'Limited voice, basic adaptive capability');
competitors['micro1'] = quickCompetitor('Micro1', 'micro1', 'an AI technical interviewing platform', 'Micro1 focuses specifically on AI-powered technical interviews for software engineering roles, with automated coding assessments.', 'AI technical coding interviews', 'No voice AI for general hiring, narrowly technical');
competitors['heymilo'] = quickCompetitor('HeyMilo', 'heymilo', 'a voice AI interview platform', 'HeyMilo offers voice-based AI interviews with conversational candidate screening and structured scoring. A newer competitor in the voice AI interview category.', 'Voice-based AI interviews with scoring', 'Less mature enterprise infrastructure and adaptive depth');
competitors['willow'] = quickCompetitor('Willow', 'willow', 'an AI recruiting automation tool', 'Willow assists with candidate screening and engagement through AI-powered automation. An early-stage platform with developing capabilities.', 'AI recruiting automation', 'Limited voice, basic adaptive capability, early stage');

export default competitors;
