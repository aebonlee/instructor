export interface Topic {
  id: string
  slug: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  icon: string
  hours: number
  keywords: string[]
  keywordsEn: string[]
  outline: string[]
  outlineEn: string[]
}

export interface Category {
  id: string
  slug: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  icon: string
  color: string
  topics: Topic[]
}

export const categories: Category[] = [
  // ─── 1. 생성형AI 기본 ───
  {
    id: 'ai-basics',
    slug: 'ai-basics',
    title: '생성형AI 기본',
    titleEn: 'Generative AI Basics',
    description: 'AI 활용의 첫걸음. 프롬프트 작성법, AI 윤리, 나만의 AI 비서 만들기까지 기초를 탄탄히 다집니다.',
    descriptionEn: 'Your first step in AI. Build a solid foundation from prompt writing to AI ethics and creating your own AI assistant.',
    icon: 'fa-solid fa-rocket',
    color: '#3B82F6',
    topics: [
      {
        id: 'ab-prompt',
        slug: 'prompt-engineering',
        title: '프롬프트 엔지니어링',
        titleEn: 'Prompt Engineering',
        description: '효과적인 AI 활용을 위한 프롬프트 작성 기초. Zero-shot, Few-shot, 역할 지정 등 핵심 기법을 실습하며 AI와 소통하는 역량을 키웁니다.',
        descriptionEn: 'Fundamentals of prompt writing for effective AI use. Practice core techniques like Zero-shot, Few-shot, and role assignment.',
        icon: 'fa-solid fa-wand-magic-sparkles',
        hours: 6,
        keywords: ['Zero-shot', 'Few-shot', '역할 지정', '프롬프트 구조', 'AI 소통'],
        keywordsEn: ['Zero-shot', 'Few-shot', 'Role Assignment', 'Prompt Structure', 'AI Communication'],
        outline: [
          '프롬프트 엔지니어링이란?',
          '프롬프트의 구성 요소와 구조',
          'Zero-shot & Few-shot 프롬프팅',
          '역할 기반 프롬프트 설계',
          '프롬프트 반복 최적화 기법',
          '실전 프롬프트 작성 실습'
        ],
        outlineEn: [
          'What is Prompt Engineering?',
          'Components and Structure of Prompts',
          'Zero-shot & Few-shot Prompting',
          'Role-based Prompt Design',
          'Iterative Prompt Optimization',
          'Hands-on Prompt Writing Practice'
        ]
      },
      {
        id: 'ab-ethics',
        slug: 'ethics-guide',
        title: '생성형AI 윤리와 법적쟁점, AI 사용 가이드',
        titleEn: 'Generative AI Ethics, Legal Issues & Usage Guide',
        description: 'AI 활용 시 반드시 알아야 할 윤리적 기준과 법적 쟁점을 다룹니다. 저작권, 개인정보, 편향성 이슈와 조직별 AI 사용 가이드라인 수립 방법을 학습합니다.',
        descriptionEn: 'Covers essential ethical standards and legal issues in AI usage including copyright, privacy, bias, and organizational guidelines.',
        icon: 'fa-solid fa-scale-balanced',
        hours: 4,
        keywords: ['AI 윤리', '저작권', '개인정보', '편향성', '가이드라인'],
        keywordsEn: ['AI Ethics', 'Copyright', 'Privacy', 'Bias', 'Guidelines'],
        outline: [
          'AI 윤리의 기본 원칙',
          '생성형 AI와 저작권 쟁점',
          '개인정보 보호와 AI',
          'AI 편향성과 공정성',
          '조직별 AI 사용 가이드라인 수립',
          '사례 분석 및 토론'
        ],
        outlineEn: [
          'Fundamental Principles of AI Ethics',
          'Generative AI and Copyright Issues',
          'Privacy Protection and AI',
          'AI Bias and Fairness',
          'Establishing Organizational AI Guidelines',
          'Case Analysis and Discussion'
        ]
      },
      {
        id: 'ab-assistant',
        slug: 'ai-assistant',
        title: '나만의 비서, 종합 실습 및 Q&A',
        titleEn: 'My AI Assistant: Comprehensive Practice & Q&A',
        description: '개인 맞춤형 AI 비서를 설계하고 구축하는 종합 실습 과정. 업무 자동화, 일정 관리, 정보 검색 기능을 통합하는 방법을 학습합니다.',
        descriptionEn: 'Comprehensive practice course for designing and building your personalized AI assistant with automation and search capabilities.',
        icon: 'fa-solid fa-user-gear',
        hours: 8,
        keywords: ['AI 비서', '맞춤형', '워크플로우', '자동화', '종합 실습'],
        keywordsEn: ['AI Assistant', 'Customized', 'Workflow', 'Automation', 'Practice'],
        outline: [
          'AI 비서의 개념과 활용 범위',
          '워크플로우 분석 및 설계',
          'AI 비서 기능 구현',
          '업무 자동화 연동',
          '종합 실습 프로젝트',
          'Q&A 및 피드백'
        ],
        outlineEn: [
          'Concept and Scope of AI Assistants',
          'Workflow Analysis and Design',
          'Implementing AI Assistant Features',
          'Business Automation Integration',
          'Comprehensive Practice Project',
          'Q&A and Feedback'
        ]
      }
    ]
  },

  // ─── 2. 생성형AI 심화 ───
  {
    id: 'ai-advanced',
    slug: 'ai-advanced',
    title: '생성형AI 심화',
    titleEn: 'Advanced Generative AI',
    description: '프롬프트 고급 설계, 맞춤형 GPT 구축, 데이터 분석, 업무 자동화까지. AI 활용 역량을 한 단계 높이는 심화 과정입니다.',
    descriptionEn: 'Advanced prompt design, custom GPT building, data analysis, and business automation. Take your AI skills to the next level.',
    icon: 'fa-solid fa-brain',
    color: '#8B5CF6',
    topics: [
      {
        id: 'aa-advanced-prompt',
        slug: 'advanced-prompt',
        title: '심화 프롬프트 설계',
        titleEn: 'Advanced Prompt Design',
        description: '복잡한 업무를 해결하기 위한 고급 프롬프트 설계 기법. 멀티 스텝 프롬프팅, 프롬프트 체이닝, 자동화 파이프라인 구축 방법을 다룹니다.',
        descriptionEn: 'Advanced prompt design techniques for complex tasks including multi-step prompting, chaining, and automation pipelines.',
        icon: 'fa-solid fa-layer-group',
        hours: 6,
        keywords: ['멀티 스텝', '프롬프트 체이닝', '파이프라인', '자동화', '템플릿'],
        keywordsEn: ['Multi-step', 'Prompt Chaining', 'Pipeline', 'Automation', 'Templates'],
        outline: [
          '고급 프롬프트 패턴 개요',
          '멀티 스텝 프롬프팅 전략',
          '프롬프트 체이닝 기법',
          '템플릿 기반 프롬프트 설계',
          '자동화 파이프라인 구축',
          '실습: 복잡한 업무 프롬프트 작성'
        ],
        outlineEn: [
          'Overview of Advanced Prompt Patterns',
          'Multi-step Prompting Strategy',
          'Prompt Chaining Techniques',
          'Template-based Prompt Design',
          'Building Automation Pipelines',
          'Practice: Writing Complex Task Prompts'
        ]
      },
      {
        id: 'aa-report',
        slug: 'report-analysis',
        title: '대용량 자료 분석 / 보고서 구조 설계',
        titleEn: 'Large-scale Data Analysis / Report Structure Design',
        description: '대용량 데이터를 효율적으로 분석하고 전문적인 보고서 구조를 설계하는 방법을 학습합니다.',
        descriptionEn: 'Learn to efficiently analyze large-scale data and design professional report structures.',
        icon: 'fa-solid fa-file-lines',
        hours: 6,
        keywords: ['대용량 분석', '보고서', '데이터 구조화', '인사이트', 'AI 분석'],
        keywordsEn: ['Large-scale Analysis', 'Reports', 'Data Structuring', 'Insights', 'AI Analysis'],
        outline: [
          '대용량 데이터 처리 전략',
          'AI를 활용한 데이터 정제',
          '보고서 구조 설계 원칙',
          '데이터 기반 인사이트 도출',
          '자동화된 보고서 생성',
          '실습: 보고서 작성 프로젝트'
        ],
        outlineEn: [
          'Large-scale Data Processing Strategy',
          'Data Cleaning with AI',
          'Report Structure Design Principles',
          'Data-driven Insight Discovery',
          'Automated Report Generation',
          'Practice: Report Writing Project'
        ]
      },
      {
        id: 'aa-custom-gpts',
        slug: 'custom-gpts',
        title: '나만의 GPTs 만들기 / 맞춤형 AI 구축',
        titleEn: 'Building Custom GPTs / Custom AI',
        description: 'OpenAI GPTs를 활용하여 특정 업무에 최적화된 맞춤형 AI를 구축합니다. GPT Builder, 지식 업로드, API 연동 등 실전 기술을 다룹니다.',
        descriptionEn: 'Build custom AI optimized for specific tasks using OpenAI GPTs. Covers GPT Builder, knowledge upload, and API integration.',
        icon: 'fa-solid fa-puzzle-piece',
        hours: 6,
        keywords: ['GPTs', 'GPT Builder', '맞춤형 AI', 'API 연동', '지식 업로드'],
        keywordsEn: ['GPTs', 'GPT Builder', 'Custom AI', 'API Integration', 'Knowledge Upload'],
        outline: [
          'GPTs 개요와 활용 사례',
          'GPT Builder 기본 사용법',
          '지식 파일 업로드 및 관리',
          '외부 API 연동 (Actions)',
          '프롬프트 지시문 최적화',
          '실습: 나만의 GPT 만들기'
        ],
        outlineEn: [
          'Overview and Use Cases of GPTs',
          'Basic GPT Builder Usage',
          'Knowledge File Upload and Management',
          'External API Integration (Actions)',
          'Prompt Instruction Optimization',
          'Practice: Building My Own GPT'
        ]
      },
      {
        id: 'aa-ai-data',
        slug: 'ai-data-viz',
        title: 'AI 데이터 발굴 / 분석 / 시각화',
        titleEn: 'AI Data Discovery / Analysis / Visualization',
        description: 'AI 도구를 활용하여 데이터를 발굴하고, 분석하며, 시각적으로 표현하는 전 과정을 학습합니다.',
        descriptionEn: 'Learn the entire process of discovering, analyzing, and visualizing data using AI tools.',
        icon: 'fa-solid fa-magnifying-glass-chart',
        hours: 8,
        keywords: ['데이터 발굴', 'AI 분석', '시각화', '대시보드', '공공데이터'],
        keywordsEn: ['Data Discovery', 'AI Analysis', 'Visualization', 'Dashboard', 'Public Data'],
        outline: [
          'AI 기반 데이터 발굴 기법',
          '공공/오픈 데이터 활용',
          'AI 분석 도구 활용 (ChatGPT, Claude)',
          '데이터 시각화 기본 원칙',
          '대시보드 설계 및 구현',
          '실습: 데이터 분석 프로젝트'
        ],
        outlineEn: [
          'AI-based Data Discovery Techniques',
          'Public/Open Data Utilization',
          'AI Analysis Tools (ChatGPT, Claude)',
          'Data Visualization Principles',
          'Dashboard Design and Implementation',
          'Practice: Data Analysis Project'
        ]
      },
      {
        id: 'aa-collaboration',
        slug: 'collaboration',
        title: '협업툴 활용 / 팀 프로젝트 최적화',
        titleEn: 'Collaboration Tools / Team Project Optimization',
        description: 'AI 기반 협업 도구를 활용하여 팀 프로젝트를 효율적으로 운영하는 방법을 학습합니다.',
        descriptionEn: 'Learn to efficiently manage team projects using AI-based collaboration tools.',
        icon: 'fa-solid fa-people-group',
        hours: 4,
        keywords: ['협업', 'Notion', 'Slack', '프로젝트 관리', 'AI 협업'],
        keywordsEn: ['Collaboration', 'Notion', 'Slack', 'Project Management', 'AI Collaboration'],
        outline: [
          'AI 협업 도구 생태계',
          'Notion AI 활용법',
          'AI 기반 회의/문서 관리',
          '팀 프로젝트 워크플로우 설계',
          '실시간 협업 최적화',
          '실습: 팀 프로젝트 시뮬레이션'
        ],
        outlineEn: [
          'AI Collaboration Tool Ecosystem',
          'Using Notion AI',
          'AI-based Meeting/Document Management',
          'Team Project Workflow Design',
          'Real-time Collaboration Optimization',
          'Practice: Team Project Simulation'
        ]
      },
      {
        id: 'aa-automation',
        slug: 'automation',
        title: '업무 자동화 / AI와 워크플로우 연결',
        titleEn: 'Business Automation / AI Workflow Integration',
        description: 'AI 도구를 활용한 업무 자동화 방법과 기존 워크플로우에 AI를 연결하는 아이디어를 학습합니다.',
        descriptionEn: 'Learn business automation methods and ideas for integrating AI into existing workflows.',
        icon: 'fa-solid fa-arrows-spin',
        hours: 6,
        keywords: ['자동화', '워크플로우', 'Zapier', 'Make', 'AI 연동'],
        keywordsEn: ['Automation', 'Workflow', 'Zapier', 'Make', 'AI Integration'],
        outline: [
          '업무 자동화의 개념과 범위',
          'AI 자동화 도구 소개',
          'Zapier / Make 활용법',
          'AI 워크플로우 설계',
          '반복 업무 자동화 구현',
          '실습: 업무 자동화 프로젝트'
        ],
        outlineEn: [
          'Concept and Scope of Business Automation',
          'AI Automation Tools Introduction',
          'Using Zapier / Make',
          'AI Workflow Design',
          'Repetitive Task Automation',
          'Practice: Business Automation Project'
        ]
      },
      {
        id: 'aa-process',
        slug: 'process-improvement',
        title: '업무 프로세스 개선 / 사례 공유',
        titleEn: 'Process Improvement / Case Studies',
        description: 'AI를 활용하여 기존 업무 프로세스를 개선하는 방법을 실제 사례를 통해 학습합니다.',
        descriptionEn: 'Learn how to improve existing business processes using AI through real case studies.',
        icon: 'fa-solid fa-diagram-project',
        hours: 4,
        keywords: ['프로세스 개선', '사례 분석', '효율화', 'AI 도입', '변화 관리'],
        keywordsEn: ['Process Improvement', 'Case Analysis', 'Efficiency', 'AI Adoption', 'Change Management'],
        outline: [
          '업무 프로세스 분석 방법론',
          'AI 도입 사례 분석',
          '프로세스 최적화 전략',
          '변화 관리와 AI 도입',
          '성과 측정 및 개선',
          '토론: 조직별 적용 방안'
        ],
        outlineEn: [
          'Business Process Analysis Methodology',
          'AI Adoption Case Analysis',
          'Process Optimization Strategy',
          'Change Management and AI Adoption',
          'Performance Measurement and Improvement',
          'Discussion: Organization-specific Applications'
        ]
      }
    ]
  },

  // ─── 3. 기획·마케팅 역량 ───
  {
    id: 'planning-marketing',
    slug: 'planning-marketing',
    title: '기획·마케팅 역량',
    titleEn: 'Planning & Marketing Skills',
    description: 'AI를 활용한 기획력과 마케팅 역량을 강화합니다. 멀티모달, 데이터 분석, 콘텐츠 창작, 사업 기획까지 실무 중심 과정입니다.',
    descriptionEn: 'Strengthen planning and marketing skills with AI. Practical courses covering multimodal AI, data analytics, content creation, and business planning.',
    icon: 'fa-solid fa-lightbulb',
    color: '#F59E0B',
    topics: [
      {
        id: 'pm-multimodal',
        slug: 'multimodal',
        title: '생성형 AI 활용 - 멀티모달 활용',
        titleEn: 'Generative AI - Multimodal Applications',
        description: '텍스트, 이미지, 음성, 영상 등 다양한 모달리티를 활용하는 AI 기술을 학습합니다. DALL-E, Midjourney, Suno 등 도구의 실전 활용법을 다룹니다.',
        descriptionEn: 'Learn AI technologies utilizing text, image, voice, and video. Covers practical usage of DALL-E, Midjourney, Suno, and more.',
        icon: 'fa-solid fa-photo-film',
        hours: 6,
        keywords: ['멀티모달', '이미지 생성', '음성 AI', '영상 AI', 'DALL-E'],
        keywordsEn: ['Multimodal', 'Image Generation', 'Voice AI', 'Video AI', 'DALL-E'],
        outline: [
          '멀티모달 AI 개요',
          '이미지 생성 AI (DALL-E, Midjourney)',
          '음성/음악 생성 AI (Suno, ElevenLabs)',
          '영상 생성 AI (Sora, Runway)',
          '멀티모달 활용 시나리오 설계',
          '통합 프로젝트 실습'
        ],
        outlineEn: [
          'Overview of Multimodal AI',
          'Image Generation AI (DALL-E, Midjourney)',
          'Voice/Music AI (Suno, ElevenLabs)',
          'Video Generation AI (Sora, Runway)',
          'Designing Multimodal Scenarios',
          'Integrated Project Practice'
        ]
      },
      {
        id: 'pm-planning',
        slug: 'planning-skills',
        title: '프롬프트 고도화 및 기획역량 확대',
        titleEn: 'Advanced Prompting & Planning Skills',
        description: 'AI를 활용한 기획 업무 효율화. 기획서, 제안서, 보고서 작성에 프롬프트를 활용하는 실무 중심 과정입니다.',
        descriptionEn: 'Enhance planning tasks with AI. Practical course on using prompts for proposals, reports, and business plans.',
        icon: 'fa-solid fa-clipboard-list',
        hours: 6,
        keywords: ['기획서', '제안서', '보고서', '문서 자동화', 'AI 기획'],
        keywordsEn: ['Planning', 'Proposals', 'Reports', 'Document Automation', 'AI Planning'],
        outline: [
          'AI 기획의 개념과 활용 분야',
          '기획서/제안서 프롬프트 설계',
          '보고서 자동 생성 프롬프트',
          '문서 구조화 및 최적화',
          '실습: AI 기반 기획서 작성',
          '과제 리뷰 및 피드백'
        ],
        outlineEn: [
          'Concept and Applications of AI Planning',
          'Prompt Design for Plans and Proposals',
          'Auto-generating Report Prompts',
          'Document Structuring and Optimization',
          'Practice: AI-based Planning Document',
          'Assignment Review and Feedback'
        ]
      },
      {
        id: 'pm-marketing-prompt',
        slug: 'marketing-skills',
        title: '프롬프트 고도화 및 마케팅역량 확대',
        titleEn: 'Advanced Prompting & Marketing Skills',
        description: 'AI를 활용한 마케팅 콘텐츠 제작과 전략 수립. 카피라이팅, SNS 콘텐츠, 광고 문구를 프롬프트로 생성하는 실무 과정입니다.',
        descriptionEn: 'Marketing content creation and strategy with AI. Generate copywriting, social media content, and ad copy with prompts.',
        icon: 'fa-solid fa-bullhorn',
        hours: 6,
        keywords: ['카피라이팅', 'SNS 마케팅', '광고', '콘텐츠 전략', 'AI 마케팅'],
        keywordsEn: ['Copywriting', 'SNS Marketing', 'Advertising', 'Content Strategy', 'AI Marketing'],
        outline: [
          'AI 마케팅의 현재와 미래',
          '카피라이팅 프롬프트 설계',
          'SNS 콘텐츠 자동 생성',
          '광고 문구 최적화 기법',
          '마케팅 전략 수립 프롬프트',
          '실습: AI 기반 마케팅 캠페인 설계'
        ],
        outlineEn: [
          'Present and Future of AI Marketing',
          'Copywriting Prompt Design',
          'Auto-generating SNS Content',
          'Ad Copy Optimization Techniques',
          'Marketing Strategy Prompts',
          'Practice: AI-based Marketing Campaign Design'
        ]
      },
      {
        id: 'pm-bigdata',
        slug: 'bigdata',
        title: '빅데이터·데이터분석 실무 적용',
        titleEn: 'Big Data & Data Analytics Practical Application',
        description: '빅데이터 개념과 데이터 분석 기법을 실무에 적용하는 방법을 학습합니다. 데이터 기반 의사결정 역량을 강화합니다.',
        descriptionEn: 'Apply big data concepts and analytics techniques in practice. Strengthen data-driven decision-making capabilities.',
        icon: 'fa-solid fa-database',
        hours: 8,
        keywords: ['빅데이터', '실무 적용', '데이터 파이프라인', '분석 기법', '의사결정'],
        keywordsEn: ['Big Data', 'Practice', 'Data Pipeline', 'Analytics', 'Decision Making'],
        outline: [
          '빅데이터 개념과 특성',
          '데이터 파이프라인 구축',
          '분석 기법과 모델링',
          '실무 적용 사례 분석',
          '데이터 기반 의사결정',
          '실습: 빅데이터 분석 프로젝트'
        ],
        outlineEn: [
          'Big Data Concepts and Characteristics',
          'Building Data Pipelines',
          'Analysis Techniques and Modeling',
          'Practical Application Case Studies',
          'Data-driven Decision Making',
          'Practice: Big Data Analysis Project'
        ]
      },
      {
        id: 'pm-nocode',
        slug: 'nocode-visualization',
        title: '시각화 및 No-code/Low-code',
        titleEn: 'Visualization & No-code/Low-code',
        description: '코딩 없이도 데이터를 시각화하고 분석할 수 있는 No-code/Low-code 도구를 학습합니다.',
        descriptionEn: 'Learn No-code/Low-code tools for data visualization and analysis without coding.',
        icon: 'fa-solid fa-wand-sparkles',
        hours: 4,
        keywords: ['No-code', 'Low-code', '자동화', '시각화 도구', 'AI 도구'],
        keywordsEn: ['No-code', 'Low-code', 'Automation', 'Visualization Tools', 'AI Tools'],
        outline: [
          'No-code/Low-code 개념',
          '주요 도구 소개 및 비교',
          'AI 기반 시각화 자동화',
          '대시보드 구축 실습',
          '업무 자동화 연동',
          '실습: No-code 프로젝트'
        ],
        outlineEn: [
          'No-code/Low-code Concepts',
          'Major Tools Introduction and Comparison',
          'AI-based Visualization Automation',
          'Dashboard Building Practice',
          'Business Automation Integration',
          'Practice: No-code Project'
        ]
      },
      {
        id: 'pm-strategy',
        slug: 'marketing-strategy',
        title: '마케팅과 홍보전략',
        titleEn: 'Marketing & PR Strategy',
        description: 'AI를 활용한 효과적인 마케팅 및 홍보 전략 수립 방법을 학습합니다. 타겟 분석부터 콘텐츠 마케팅까지.',
        descriptionEn: 'Learn effective marketing and PR strategies using AI, from target analysis to content marketing.',
        icon: 'fa-solid fa-bullseye',
        hours: 6,
        keywords: ['마케팅 전략', '홍보', '브랜딩', 'AI 마케팅', '타겟팅'],
        keywordsEn: ['Marketing Strategy', 'PR', 'Branding', 'AI Marketing', 'Targeting'],
        outline: [
          'AI 시대의 마케팅 전략',
          '타겟 분석과 페르소나 설계',
          'AI 기반 콘텐츠 마케팅',
          'SNS 마케팅 자동화',
          '홍보 전략 수립과 실행',
          '실습: 마케팅 전략 기획서 작성'
        ],
        outlineEn: [
          'Marketing Strategy in the AI Era',
          'Target Analysis and Persona Design',
          'AI-based Content Marketing',
          'SNS Marketing Automation',
          'PR Strategy Planning and Execution',
          'Practice: Marketing Strategy Document'
        ]
      },
      {
        id: 'pm-content',
        slug: 'content-creation',
        title: '기업/공공의 기획 마케팅·콘텐츠 창작업무 실습',
        titleEn: 'Enterprise/Public Marketing & Content Creation Practice',
        description: '기업과 공공기관의 기획 마케팅 업무와 콘텐츠 창작에 AI를 활용하는 실무 과정입니다.',
        descriptionEn: 'Practical course on using AI for marketing planning and content creation in enterprise and public sectors.',
        icon: 'fa-solid fa-pen-nib',
        hours: 6,
        keywords: ['콘텐츠 창작', '기획 마케팅', '공공기관', '기업', 'AI 콘텐츠'],
        keywordsEn: ['Content Creation', 'Marketing Planning', 'Public Sector', 'Enterprise', 'AI Content'],
        outline: [
          '기업/공공 마케팅의 특수성',
          'AI 기반 콘텐츠 기획',
          '보도자료/홍보물 AI 작성',
          'SNS 콘텐츠 제작 자동화',
          '영상/이미지 콘텐츠 제작',
          '실습: 통합 마케팅 콘텐츠 제작'
        ],
        outlineEn: [
          'Specifics of Enterprise/Public Marketing',
          'AI-based Content Planning',
          'AI Writing for Press Releases/PR Materials',
          'SNS Content Production Automation',
          'Video/Image Content Production',
          'Practice: Integrated Marketing Content'
        ]
      },
      {
        id: 'pm-business-plan',
        slug: 'business-plan',
        title: '신규사업 기획서 및 세부 실행계획 작성',
        titleEn: 'New Business Proposal & Detailed Action Plan',
        description: 'AI를 활용하여 신규사업 기획서와 세부 실행계획을 작성하는 방법을 학습합니다.',
        descriptionEn: 'Learn how to create new business proposals and detailed action plans using AI.',
        icon: 'fa-solid fa-file-contract',
        hours: 8,
        keywords: ['사업 기획', '실행계획', '제안서', '사업계획서', 'AI 기획'],
        keywordsEn: ['Business Planning', 'Action Plan', 'Proposal', 'Business Plan', 'AI Planning'],
        outline: [
          '사업 기획의 기본 프레임워크',
          'AI를 활용한 시장 분석',
          '사업계획서 구조 설계',
          '재무 계획 및 수익 모델',
          '세부 실행계획 수립',
          '실습: 사업계획서 작성 프로젝트'
        ],
        outlineEn: [
          'Basic Framework of Business Planning',
          'Market Analysis Using AI',
          'Business Plan Structure Design',
          'Financial Planning and Revenue Model',
          'Detailed Action Plan Development',
          'Practice: Business Plan Writing Project'
        ]
      }
    ]
  },

  // ─── 4. 강사양성 과정 ───
  {
    id: 'instructor-training',
    slug: 'instructor-training',
    title: '강사양성 과정',
    titleEn: 'Instructor Training Program',
    description: 'AI 교육 전문 강사를 양성하는 체계적인 과정. 기술 트렌드, 교수법, LLM 원리, 데이터 역량, 포트폴리오 구축까지.',
    descriptionEn: 'A systematic program for training AI education instructors covering technology trends, teaching methods, LLM principles, and portfolio building.',
    icon: 'fa-solid fa-chalkboard-user',
    color: '#10B981',
    topics: [
      {
        id: 'it-trends',
        slug: 'ai-trends',
        title: '생성형 AI 기술 트렌드와 업무 혁신',
        titleEn: 'Generative AI Tech Trends & Business Innovation',
        description: '최신 생성형 AI 기술 동향을 파악하고, 이를 업무 혁신에 적용하는 방법을 학습합니다. GPT, Claude, Gemini 등 주요 모델의 특성과 활용 사례를 다룹니다.',
        descriptionEn: 'Understand the latest generative AI technology trends and learn how to apply them for business innovation.',
        icon: 'fa-solid fa-chart-line',
        hours: 4,
        keywords: ['GPT', 'Claude', 'Gemini', '기술 트렌드', '업무 혁신'],
        keywordsEn: ['GPT', 'Claude', 'Gemini', 'Tech Trends', 'Business Innovation'],
        outline: [
          '생성형 AI 기술 발전사',
          '주요 LLM 모델 비교 분석',
          '산업별 AI 활용 사례',
          '업무 프로세스 혁신 전략',
          'AI 도입 로드맵 수립',
          '미래 전망 및 토론'
        ],
        outlineEn: [
          'History of Generative AI Technology',
          'Comparison of Major LLM Models',
          'Industry-specific AI Use Cases',
          'Business Process Innovation Strategy',
          'AI Adoption Roadmap Planning',
          'Future Outlook and Discussion'
        ]
      },
      {
        id: 'it-prompt-full',
        slug: 'prompt-fundamentals',
        title: '프롬프트 엔지니어링 기초에서 고급까지',
        titleEn: 'Prompt Engineering: From Basics to Advanced',
        description: '프롬프트의 기본 구조부터 고급 기법까지 체계적으로 학습합니다. Chain-of-Thought, Self-consistency 등 최신 기법을 포함합니다.',
        descriptionEn: 'Systematically learn from basic prompt structures to advanced techniques including Chain-of-Thought and Self-consistency.',
        icon: 'fa-solid fa-graduation-cap',
        hours: 8,
        keywords: ['Zero-shot', 'Few-shot', 'Chain-of-Thought', 'Self-consistency', '고급 기법'],
        keywordsEn: ['Zero-shot', 'Few-shot', 'Chain-of-Thought', 'Self-consistency', 'Advanced Techniques'],
        outline: [
          '프롬프트 엔지니어링 개요',
          '프롬프트 구성 요소와 구조',
          'Zero-shot & Few-shot 프롬프팅',
          'Chain-of-Thought(CoT) 추론',
          '역할 기반 프롬프트 & Self-consistency',
          '프롬프트 반복 최적화 기법',
          '실전 고급 프롬프트 작성',
          '과제 및 Q&A'
        ],
        outlineEn: [
          'Overview of Prompt Engineering',
          'Prompt Components and Structure',
          'Zero-shot & Few-shot Prompting',
          'Chain-of-Thought (CoT) Reasoning',
          'Role-based Prompts & Self-consistency',
          'Iterative Prompt Optimization',
          'Hands-on Advanced Prompt Writing',
          'Assignment & Q&A'
        ]
      },
      {
        id: 'it-teaching',
        slug: 'ai-teaching',
        title: 'AI 통합 교수법 설계와 실행',
        titleEn: 'AI-Integrated Teaching Design & Implementation',
        description: '교육 현장에서 AI를 효과적으로 통합하는 교수법을 설계하고 실행합니다. 수업 설계, 평가, 피드백에 AI를 활용하는 방법을 학습합니다.',
        descriptionEn: 'Design and implement AI-integrated teaching methods for lesson design, assessment, and feedback.',
        icon: 'fa-solid fa-chalkboard-user',
        hours: 6,
        keywords: ['교수법', '수업 설계', 'AI 평가', '피드백', '교육 혁신'],
        keywordsEn: ['Teaching Methods', 'Lesson Design', 'AI Assessment', 'Feedback', 'Education Innovation'],
        outline: [
          'AI 통합 교수법의 필요성',
          'AI 기반 수업 설계 프레임워크',
          '학습자 맞춤 AI 피드백 시스템',
          'AI 활용 평가 도구 설계',
          '교수법 적용 사례 분석',
          '실습: AI 통합 수업안 작성'
        ],
        outlineEn: [
          'Need for AI-Integrated Teaching',
          'AI-based Lesson Design Framework',
          'Personalized AI Feedback Systems',
          'AI Assessment Tool Design',
          'Teaching Method Case Analysis',
          'Practice: Writing AI-Integrated Lesson Plans'
        ]
      },
      {
        id: 'it-llm',
        slug: 'llm-ecosystem',
        title: 'LLM 작동 원리와 생태계 이해',
        titleEn: 'Understanding LLM Principles & Ecosystem',
        description: 'LLM의 작동 원리를 이해하고 AI 생태계의 구조를 파악합니다. Transformer, 토큰화, 파인튜닝 등 핵심 개념을 학습합니다.',
        descriptionEn: 'Understand how LLMs work and the AI ecosystem structure, covering Transformer architecture, tokenization, and fine-tuning.',
        icon: 'fa-solid fa-microchip',
        hours: 6,
        keywords: ['LLM', 'Transformer', '토큰화', '파인튜닝', 'AI 생태계'],
        keywordsEn: ['LLM', 'Transformer', 'Tokenization', 'Fine-tuning', 'AI Ecosystem'],
        outline: [
          'LLM의 기본 개념',
          'Transformer 아키텍처 이해',
          '토큰화와 임베딩',
          '사전학습과 파인튜닝',
          'AI 생태계 구조 분석',
          'API 활용 실습'
        ],
        outlineEn: [
          'Basic Concepts of LLM',
          'Understanding Transformer Architecture',
          'Tokenization and Embeddings',
          'Pre-training and Fine-tuning',
          'AI Ecosystem Structure Analysis',
          'API Usage Practice'
        ]
      },
      {
        id: 'it-data-collection',
        slug: 'data-collection',
        title: '데이터 수집 / 발굴',
        titleEn: 'Data Collection / Discovery',
        description: '효과적인 데이터 수집 방법과 새로운 데이터 소스를 발굴하는 기법을 학습합니다. 공공데이터, API, 웹 스크래핑을 다룹니다.',
        descriptionEn: 'Learn effective data collection methods and techniques for discovering new data sources including public data, APIs, and web scraping.',
        icon: 'fa-solid fa-download',
        hours: 4,
        keywords: ['데이터 수집', '웹 스크래핑', 'API', '공공데이터', '크롤링'],
        keywordsEn: ['Data Collection', 'Web Scraping', 'API', 'Public Data', 'Crawling'],
        outline: [
          '데이터 수집 전략 수립',
          '공공데이터 포털 활용',
          'API 기반 데이터 수집',
          '웹 스크래핑 기초',
          'AI를 활용한 데이터 발굴',
          '실습: 데이터 수집 자동화'
        ],
        outlineEn: [
          'Data Collection Strategy Planning',
          'Public Data Portal Usage',
          'API-based Data Collection',
          'Web Scraping Basics',
          'AI-powered Data Discovery',
          'Practice: Automated Data Collection'
        ]
      },
      {
        id: 'it-data-viz',
        slug: 'data-visualization',
        title: '데이터 분석 및 시각화',
        titleEn: 'Data Analysis & Visualization',
        description: '수집된 데이터를 효과적으로 분석하고 시각적으로 표현하는 방법을 학습합니다. 차트, 그래프, 인포그래픽, 대시보드를 다룹니다.',
        descriptionEn: 'Learn to analyze and visually present collected data using charts, graphs, infographics, and dashboards.',
        icon: 'fa-solid fa-chart-pie',
        hours: 6,
        keywords: ['시각화', '차트', '그래프', '인포그래픽', '대시보드'],
        keywordsEn: ['Visualization', 'Charts', 'Graphs', 'Infographics', 'Dashboard'],
        outline: [
          '데이터 분석 기본 프로세스',
          '시각화 원칙과 디자인',
          '차트/그래프 유형별 활용',
          'AI 시각화 도구 활용',
          '인포그래픽 제작',
          '실습: 데이터 시각화 프로젝트'
        ],
        outlineEn: [
          'Data Analysis Basic Process',
          'Visualization Principles and Design',
          'Chart/Graph Type Applications',
          'AI Visualization Tools',
          'Infographic Creation',
          'Practice: Data Visualization Project'
        ]
      },
      {
        id: 'it-portfolio',
        slug: 'portfolio',
        title: '강사 포트폴리오 구축과 미래 전략',
        titleEn: 'Instructor Portfolio Building & Future Strategy',
        description: '전문 강사로서의 포트폴리오를 체계적으로 구축하고, AI 시대에 맞는 강사 역량 개발 전략을 학습합니다.',
        descriptionEn: 'Systematically build an instructor portfolio and learn capability development strategies for the AI era.',
        icon: 'fa-solid fa-briefcase',
        hours: 6,
        keywords: ['포트폴리오', '강사 브랜딩', '커리어', '역량 개발', '미래 전략'],
        keywordsEn: ['Portfolio', 'Instructor Branding', 'Career', 'Skill Development', 'Future Strategy'],
        outline: [
          '강사 포트폴리오의 중요성',
          '강점 분석 및 브랜드 구축',
          '강의 경력 정리 및 문서화',
          'AI 활용 강의 콘텐츠 제작',
          '온/오프라인 강의 전략',
          '미래 강사 시장 전망 및 준비'
        ],
        outlineEn: [
          'Importance of Instructor Portfolio',
          'Strength Analysis and Brand Building',
          'Organizing and Documenting Teaching Career',
          'AI-powered Lecture Content Creation',
          'Online/Offline Teaching Strategy',
          'Future Instructor Market Outlook'
        ]
      }
    ]
  }
]

// Helper: 전체 토픽 수
export const totalTopics = categories.reduce((acc, cat) => acc + cat.topics.length, 0)

// Helper: 전체 강의 시간
export const totalHours = categories.reduce(
  (acc, cat) => acc + cat.topics.reduce((sum, t) => sum + t.hours, 0),
  0
)

// Helper: 카테고리 찾기
export function findCategory(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

// Helper: 토픽 찾기
export function findTopic(categorySlug: string, topicSlug: string): { category: Category; topic: Topic } | undefined {
  const category = findCategory(categorySlug)
  if (!category) return undefined
  const topic = category.topics.find(t => t.slug === topicSlug)
  if (!topic) return undefined
  return { category, topic }
}
