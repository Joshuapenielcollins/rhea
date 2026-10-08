import thumbThinking from "@/assets/insight-thinking.jpg";
import thumbIdentity from "@/assets/insight-identity.jpg";
import thumbOverthinking from "@/assets/insight-overthinking.jpg";
import thumbAnxiety from "@/assets/insight-anxiety.jpg";
import thumbPerspective from "@/assets/insight-perspective.jpg";

export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: "Mindset" | "Identity" | "Execution" | "Mental Health" | "Perspective";
  readTime: string;
  date: string;
  isoDate: string;
  excerpt: string;
  sections: ArticleSection[];
  keyTakeaway: string;
  pullQuote?: string;
  image: string;
  featured?: boolean;
}

export const articlesData: Article[] = [
  {
    id: "thinking-investment",
    slug: "thinking-investment",
    title: "Your Thinking Isn't Free, Invest It Wisely",
    category: "Mindset",
    readTime: "4 min read",
    date: "Sep 28, 2026",
    isoDate: "2026-09-28",
    featured: true,
    image: thumbThinking,
    excerpt:
      "Every replayed failure and negative label is an investment in limitation. How to treat your thoughts as high-yield cognitive capital.",
    pullQuote:
      "Treat your attention like venture capital: allocate it only to thoughts that yield tangible returns.",
    keyTakeaway:
      "Cognitive capacity is finite. Stop financing mental patterns that don't produce leadership outcomes.",
    sections: [
      {
        heading: "The Cognitive Balance Sheet",
        paragraphs: [
          "Most of us have worked out or played a competitive sport, and we know that how hard we push ultimately comes down to mindset. Tell yourself you are exhausted, and your body obliges within seconds. The exact same dynamic plays out in executive leadership.",
          "Who you are as a leader is the sum total of your thinking patterns. That means every replayed failure, every imaginary conflict rehearsed in the shower, and every self-limiting label is not harmless daydreaming: it is a recurring investment in limitation.",
        ],
      },
      {
        heading: "The Invisible Mental Tax",
        paragraphs: [
          "When you review a difficult board meeting or prepare for high-stakes stakeholder negotiations, notice the internal narrator. Is it methodically calibrating strategy, or is it rehearsing worst-case scenarios that have never occurred?",
          "Every thought carries a measurable cognitive tax. Most executives treat mental bandwidth as infinite, spending irreplaceable hours in retroactive guilt or hypothetical crises. In reality, attention is the scarcest currency in business.",
        ],
      },
      {
        heading: "Auditing Your Internal Dialogue",
        paragraphs: [
          "Treat your attention like venture capital: allocate it only to thoughts that yield tangible returns. If a thought does not inform your next immediate decision, sharpen your strategy, or protect your core values, interrupt it and reallocate that mental capital.",
          "High performance is not about thinking more; it is about eliminating uncompensated cognitive friction.",
        ],
      },
    ],
  },
  {
    id: "identity-beyond-title",
    slug: "identity-beyond-title",
    title: "Your Title Isn't Who You Are",
    category: "Identity",
    readTime: "4 min read",
    date: "Sep 15, 2026",
    isoDate: "2026-09-15",
    image: thumbIdentity,
    excerpt:
      "I asked twelve refugees in Hong Kong who they were. Not one gave a job title. What happens when leaders disconnect identity from rank.",
    pullQuote:
      "A title is a corporate lease, not an identity. Ground yourself in character and values.",
    keyTakeaway:
      "When your self-worth is uncoupled from your title, you make sharper, calmer, and less defensive decisions.",
    sections: [
      {
        heading: "A Humbling Lesson in Hong Kong",
        paragraphs: [
          "I walked into a coaching session with twelve refugees in Hong Kong thinking I would be the one teaching. Our topic was self-identity, structured around one fundamental question: who are you?",
          "In the corporate boardrooms of London and Mumbai, almost everyone answers that question with their job title and company name. But when I asked this group in Hong Kong, not one person mentioned a job, a past rank, or an employer. They answered with their core values, their family roles, their resilience, and their creative passions.",
        ],
      },
      {
        heading: "The Trap of Borrowed Authority",
        paragraphs: [
          "In corporate life, it is remarkably easy to fuse our identity with our seniority. We derive self-worth from calendar density, headcounts, reporting lines, and org charts. But when restructuring strikes, or when you leave to build an independent venture, that borrowed identity cracks.",
          "When you depend on your title to feel significant, every minor disagreement feels like an existential threat. You become defensive, risk-averse, and reactive.",
        ],
      },
      {
        heading: "Leading from Grounded Presence",
        paragraphs: [
          "True executive presence requires knowing who you are when nobody is looking at your email signature. When your sense of worth is anchored in internal substance rather than external credentials, you listen without fear and lead with genuine authority.",
        ],
      },
    ],
  },
  {
    id: "action-overthinking",
    slug: "action-overthinking",
    title: "One Small Action: Overthinking",
    category: "Execution",
    readTime: "3 min read",
    date: "Aug 29, 2026",
    isoDate: "2026-08-29",
    image: thumbOverthinking,
    excerpt:
      "You don't think your way out of overthinking, you write your way out. A simple cognitive system for immediate clarity under pressure.",
    pullQuote: "You don't think your way out of overthinking; you write your way out.",
    keyTakeaway:
      "Never fight runaway thoughts inside your head. Externalize them onto paper to transform nebulous panic into solvable facts.",
    sections: [
      {
        heading: "The Mental Bottleneck",
        paragraphs: [
          "The senior leaders and founders I coach rarely struggle from a lack of intellect or ambition. They struggle because their own cognitive loops become an overwhelming bottleneck. When complexity mounts, the default reaction is to think harder and longer, hoping clarity will magically materialize.",
          "It never does. Trying to think your way out of overthinking is like trying to put out a fire with petrol. The mind simply creates more recursive loops.",
        ],
      },
      {
        heading: "The Externalization Protocol",
        paragraphs: [
          "The moment you notice rumination, stop. Grab a clean sheet of paper and a pen. Write down the exact, unfiltered sentence running through your head, no matter how catastrophic or unpolished it sounds.",
          "Seeing thoughts inked on paper accomplishes an instant psychological shift: it moves the challenge from a terrifying emotional loop into an objective visual artifact.",
        ],
      },
      {
        heading: "Three Diagnostic Questions",
        paragraphs: [
          "Once the thought is externalized on paper, ask three specific questions: (1) Is this statement an objective fact or an anxious assumption? (2) What single piece of this is within my direct control today? (3) What is the immediate next physical action required?",
          "Ink on paper clears the bottleneck. Action restores momentum.",
        ],
      },
    ],
  },
  {
    id: "action-anxiety",
    slug: "action-anxiety",
    title: "One Small Action: Anxiety",
    category: "Mental Health",
    readTime: "3 min read",
    date: "Aug 14, 2026",
    isoDate: "2026-08-14",
    image: thumbAnxiety,
    excerpt:
      "Anxiety doesn't respond to logic; it responds to biology. How physiological signaling restores executive presence faster than reasoning.",
    pullQuote:
      "Anxiety doesn't respond to logic; it responds to biology. Regulate the nervous system first.",
    keyTakeaway:
      "When nervous tension spikes, regulate the body first. Strategic clarity follows biological calm.",
    sections: [
      {
        heading: "Why Reasoning Fails Under Stress",
        paragraphs: [
          "When a crisis hits or a presentation approaches, your pulse accelerates and your breathing becomes shallow long before your conscious mind registers what is happening. The instinct of most high-achieving professionals is to debate themselves internally, attempting to talk themselves down with logic.",
          "Here is the neurological reality: an amygdala engaged in a fight-or-flight response has effectively suppressed your rational prefrontal cortex. It cannot hear your logic, because it believes you are under physical threat.",
        ],
      },
      {
        heading: "The Physiological Reset",
        paragraphs: [
          "Your nervous system trusts physical inputs far more rapidly than mental assertions. Before entering a high-stakes meeting or contentious negotiation, execute a deliberate physiological reset: inhale deeply for 4 counts, then exhale smoothly and completely for 6 counts.",
          "A longer exhale stimulates the vagus nerve, immediately decelerating heart rate and signaling to your autonomic nervous system that you are safe.",
        ],
      },
      {
        heading: "Returning to Executive Poise",
        paragraphs: [
          "With biological calm restored, your prefrontal cortex comes back online. You regain access to strategic nuance, creative problem solving, and genuine executive presence.",
        ],
      },
    ],
  },
  {
    id: "power-of-perspective",
    slug: "power-of-perspective",
    title: "The Power of Perspective: 'They're Just Friends You Haven't Made Yet'",
    category: "Perspective",
    readTime: "4 min read",
    date: "Jul 22, 2026",
    isoDate: "2026-07-22",
    image: thumbPerspective,
    excerpt:
      "In one sentence, scarcity became curiosity. Perspective is the highest-leverage competitive advantage most leaders underuse.",
    pullQuote:
      "Reframing is not wishful thinking; it is the strategic discipline of choosing the interpretation that gives you the highest agency.",
    keyTakeaway:
      "Perspective is a choice of cognitive frame. Choose the frame that multiplies your agency and leverage.",
    sections: [
      {
        heading: "Curiosity Over Scarcity",
        paragraphs: [
          "Recently, I overheard two children at school drop-off. One child was gripped by anxiety about not knowing anyone in her new class. Her companion turned to her and said with complete ease: 'The other children are just friends you haven't made yet.'",
          "In that single sentence, intimidation transformed into curiosity. Scarcity dissolved into potential.",
        ],
      },
      {
        heading: "The Daily Executive Fork",
        paragraphs: [
          "Leaders face this exact cognitive fork every single day. An adversarial stakeholder is not necessarily an enemy: they are an executive whose unspoken incentives, fears, and success metrics you have not yet mapped. A delayed product rollout is not a disaster: it is clear diagnostic data on process bottlenecks.",
          "The facts of the situation remain identical, but the frame you apply determines whether you collapse into reactivity or step into strategic problem-solving.",
        ],
      },
      {
        heading: "Cultivating Frame Control",
        paragraphs: [
          "Cognitive reframing is neither naive optimism nor toxic positivity. It is an intentional mental discipline: whenever you feel blocked, actively seek the interpretation that gives you the maximum agency and forward momentum.",
        ],
      },
    ],
  },
];
