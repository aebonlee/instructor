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
  {
    id: 'prompt-engineering',
    slug: 'prompt-engineering',
    title: '프롬프트 엔지니어링',
    titleEn: 'Prompt Engineering',
    description: '효과적인 AI 활용을 위한 프롬프트 설계 및 최적화 기법을 학습합니다.',
    descriptionEn: 'Learn prompt design and optimization techniques for effective AI utilization.',
    icon: 'fa-solid fa-wand-magic-sparkles',
    color: '#8B5CF6',
    topics: [
      {
        id: 'pe-fundamentals',
        slug: 'fundamentals',
        title: '프롬프트 엔지니어링 기초에서 고급까지',
        titleEn: 'Prompt Engineering: From Basics to Advanced',
        description: '프롬프트의 기본 구조부터 고급 기법까지 체계적으로 학습합니다. Zero-shot, Few-shot, Chain-of-Thought 등 핵심 기법을 실습하며 AI 활용 역량을 높입니다.',
        descriptionEn: 'Systematically learn from basic prompt structures to advanced techniques. Practice core methods like Zero-shot, Few-shot, and Chain-of-Thought.',
        icon: 'fa-solid fa-graduation-cap',
        hours: 8,
        keywords: ['Zero-shot', 'Few-shot', 'Chain-of-Thought', '프롬프트 구조', '역할 지정'],
        keywordsEn: ['Zero-shot', 'Few-shot', 'Chain-of-Thought', 'Prompt Structure', 'Role Assignment'],
        outline: [
          '프롬프트 엔지니어링이란?',
          '프롬프트의 구성 요소와 구조',
          'Zero-shot & Few-shot 프롬프팅',
          'Chain-of-Thought(CoT) 추론',
          '역할 기반 프롬프트 설계',
          '프롬프트 반복 최적화 기법',
          '실전 프롬프트 작성 실습',
          '과제 및 Q&A'
        ],
        outlineEn: [
          'What is Prompt Engineering?',
          'Components and Structure of Prompts',
          'Zero-shot & Few-shot Prompting',
          'Chain-of-Thought (CoT) Reasoning',
          'Role-based Prompt Design',
          'Iterative Prompt Optimization',
          'Hands-on Prompt Writing Practice',
          'Assignment & Q&A'
        ]
      },
      {
        id: 'pe-advanced-design',
        slug: 'advanced-design',
        title: '심화 프롬프트 설계',
        titleEn: 'Advanced Prompt Design',
        description: '복잡한 업무를 해결하기 위한 고급 프롬프트 설계 기법을 학습합니다. 멀티 스텝 프롬프팅, 프롬프트 체이닝, 자동화 파이프라인 구축 방법을 다룹니다.',
        descriptionEn: 'Learn advanced prompt design techniques for complex tasks. Covers multi-step prompting, prompt chaining, and automation pipeline construction.',
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
        id: 'pe-planning',
        slug: 'planning',
        title: '프롬프트 고도화 및 기획역량 확대',
        titleEn: 'Advanced Prompting & Planning Skills',
        description: 'AI를 활용한 기획 업무 효율화 방법을 학습합니다. 기획서, 제안서, 보고서 작성에 프롬프트를 활용하는 실무 중심 과정입니다.',
        descriptionEn: 'Learn how to enhance planning tasks with AI. A practical course on using prompts for proposals, reports, and business plans.',
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
        id: 'pe-marketing',
        slug: 'marketing',
        title: '프롬프트 고도화 및 마케팅역량 확대',
        titleEn: 'Advanced Prompting & Marketing Skills',
        description: 'AI를 활용한 마케팅 콘텐츠 제작과 전략 수립 방법을 학습합니다. 카피라이팅, SNS 콘텐츠, 광고 문구 등을 프롬프트로 생성하는 실무 과정입니다.',
        descriptionEn: 'Learn marketing content creation and strategy development with AI. Practical course on generating copywriting, social media content, and ad copy.',
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
      }
    ]
  },
  {
    id: 'generative-ai',
    slug: 'generative-ai',
    title: '생성형 AI 이해',
    titleEn: 'Understanding Generative AI',
    description: '생성형 AI의 원리, 윤리, 트렌드를 이해하고 실무에서 활용하는 방법을 학습합니다.',
    descriptionEn: 'Understand the principles, ethics, and trends of generative AI and learn how to apply them in practice.',
    icon: 'fa-solid fa-brain',
    color: '#EC4899',
    topics: [
      {
        id: 'ga-ethics',
        slug: 'ethics',
        title: '생성형AI 윤리와 법적쟁점, AI 사용 가이드',
        titleEn: 'Generative AI Ethics, Legal Issues & Usage Guide',
        description: 'AI 활용 시 반드시 알아야 할 윤리적 기준과 법적 쟁점을 다룹니다. 저작권, 개인정보, 편향성 등의 이슈와 조직별 AI 사용 가이드라인 수립 방법을 학습합니다.',
        descriptionEn: 'Covers essential ethical standards and legal issues in AI usage. Learn about copyright, privacy, bias issues and how to establish organizational AI guidelines.',
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
        id: 'ga-trends',
        slug: 'trends',
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
        id: 'ga-llm',
        slug: 'llm',
        title: 'LLM 작동 원리와 생태계 이해',
        titleEn: 'Understanding LLM Principles & Ecosystem',
        description: 'LLM(대규모 언어모델)의 작동 원리를 이해하고 AI 생태계의 구조를 파악합니다. Transformer 아키텍처, 토큰화, 파인튜닝 등 핵심 개념을 학습합니다.',
        descriptionEn: 'Understand how LLMs work and the structure of the AI ecosystem. Learn core concepts like Transformer architecture, tokenization, and fine-tuning.',
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
        id: 'ga-multimodal',
        slug: 'multimodal',
        title: '생성형 AI 활용 - 멀티모달 활용',
        titleEn: 'Generative AI - Multimodal Applications',
        description: '텍스트, 이미지, 음성, 영상 등 다양한 모달리티를 활용하는 AI 기술을 학습합니다. DALL-E, Midjourney, Suno 등 멀티모달 도구의 실전 활용법을 다룹니다.',
        descriptionEn: 'Learn AI technologies utilizing various modalities including text, image, voice, and video.',
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
      }
    ]
  },
  {
    id: 'custom-ai',
    slug: 'custom-ai',
    title: '맞춤형 AI 구축',
    titleEn: 'Custom AI Development',
    description: '나만의 AI 비서를 만들고, GPTs를 활용한 맞춤형 AI를 구축하는 방법을 학습합니다.',
    descriptionEn: 'Learn to build your own AI assistant and create custom AI using GPTs.',
    icon: 'fa-solid fa-robot',
    color: '#F59E0B',
    topics: [
      {
        id: 'ca-assistant',
        slug: 'ai-assistant',
        title: '나만의 비서, 종합 실습 및 Q&A',
        titleEn: 'My AI Assistant: Comprehensive Practice & Q&A',
        description: '개인 맞춤형 AI 비서를 설계하고 구축하는 종합 실습 과정입니다. 업무 자동화, 일정 관리, 정보 검색 등의 기능을 통합하는 방법을 학습합니다.',
        descriptionEn: 'Comprehensive practice course for designing and building a personalized AI assistant.',
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
      },
      {
        id: 'ca-custom-gpts',
        slug: 'custom-gpts',
        title: '나만의 GPTs 만들기 / 맞춤형 AI 구축',
        titleEn: 'Building Custom GPTs / Custom AI',
        description: 'OpenAI GPTs를 활용하여 나만의 맞춤형 AI를 구축하는 방법을 학습합니다. GPT Builder 활용법, 지식 업로드, API 연동 등 실전 기술을 다룹니다.',
        descriptionEn: 'Learn to build custom AI using OpenAI GPTs. Covers GPT Builder, knowledge upload, and API integration.',
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
        id: 'ca-ai-teaching',
        slug: 'ai-teaching',
        title: 'AI 통합 교수법 설계와 실행',
        titleEn: 'AI-Integrated Teaching Design & Implementation',
        description: '교육 현장에서 AI를 효과적으로 통합하는 교수법을 설계하고 실행합니다. 수업 설계, 평가, 피드백에 AI를 활용하는 구체적 방법을 학습합니다.',
        descriptionEn: 'Design and implement effective AI-integrated teaching methods. Learn concrete ways to use AI in lesson design, assessment, and feedback.',
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
      }
    ]
  },
  {
    id: 'data-analytics',
    slug: 'data-analytics',
    title: '데이터 분석 & 시각화',
    titleEn: 'Data Analytics & Visualization',
    description: 'AI를 활용한 데이터 수집, 분석, 시각화 기법을 학습합니다.',
    descriptionEn: 'Learn data collection, analysis, and visualization techniques using AI.',
    icon: 'fa-solid fa-chart-bar',
    color: '#10B981',
    topics: [
      {
        id: 'da-report',
        slug: 'report-design',
        title: '대용량 자료 분석 / 보고서 구조 설계',
        titleEn: 'Large-scale Data Analysis / Report Structure Design',
        description: '대용량 데이터를 효율적으로 분석하고, 전문적인 보고서 구조를 설계하는 방법을 학습합니다.',
        descriptionEn: 'Learn to efficiently analyze large-scale data and design professional report structures.',
        icon: 'fa-solid fa-file-lines',
        hours: 6,
        keywords: ['대용량 분석', '보고서', '데이터 구조화', '엑셀', 'AI 분석'],
        keywordsEn: ['Large-scale Analysis', 'Reports', 'Data Structuring', 'Excel', 'AI Analysis'],
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
        id: 'da-ai-data',
        slug: 'ai-data',
        title: 'AI 데이터 발굴 / 분석 / 시각화',
        titleEn: 'AI Data Discovery / Analysis / Visualization',
        description: 'AI 도구를 활용하여 데이터를 발굴하고, 분석하며, 시각적으로 표현하는 전 과정을 학습합니다.',
        descriptionEn: 'Learn the entire process of discovering, analyzing, and visualizing data using AI tools.',
        icon: 'fa-solid fa-magnifying-glass-chart',
        hours: 8,
        keywords: ['데이터 발굴', 'AI 분석', '시각화', 'Python', '대시보드'],
        keywordsEn: ['Data Discovery', 'AI Analysis', 'Visualization', 'Python', 'Dashboard'],
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
        id: 'da-bigdata',
        slug: 'bigdata',
        title: '빅데이터•데이터분석 실무 적용',
        titleEn: 'Big Data & Data Analytics Practical Application',
        description: '빅데이터 개념과 데이터 분석 기법을 실무에 적용하는 방법을 학습합니다.',
        descriptionEn: 'Learn how to apply big data concepts and data analytics techniques in practice.',
        icon: 'fa-solid fa-database',
        hours: 8,
        keywords: ['빅데이터', '실무', '데이터 파이프라인', '분석 기법', '의사결정'],
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
        id: 'da-collection',
        slug: 'data-collection',
        title: '데이터 수집 / 발굴',
        titleEn: 'Data Collection / Discovery',
        description: '효과적인 데이터 수집 방법과 새로운 데이터 소스를 발굴하는 기법을 학습합니다.',
        descriptionEn: 'Learn effective data collection methods and techniques for discovering new data sources.',
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
        id: 'da-visualization',
        slug: 'visualization',
        title: '데이터 분석 및 시각화',
        titleEn: 'Data Analysis & Visualization',
        description: '수집된 데이터를 효과적으로 분석하고 시각적으로 표현하는 방법을 학습합니다.',
        descriptionEn: 'Learn to effectively analyze collected data and present it visually.',
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
        id: 'da-nocode',
        slug: 'nocode',
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
      }
    ]
  },
  {
    id: 'business-innovation',
    slug: 'business-innovation',
    title: '업무 혁신 & 자동화',
    titleEn: 'Business Innovation & Automation',
    description: 'AI를 활용한 업무 프로세스 혁신과 자동화 전략을 학습합니다.',
    descriptionEn: 'Learn business process innovation and automation strategies using AI.',
    icon: 'fa-solid fa-gears',
    color: '#3B82F6',
    topics: [
      {
        id: 'bi-automation',
        slug: 'automation',
        title: '업무 자동화 / AI와 워크플로우 연결',
        titleEn: 'Business Automation / AI Workflow Integration',
        description: 'AI 도구를 활용한 업무 자동화 방법과 기존 워크플로우에 AI를 연결하는 전략을 학습합니다.',
        descriptionEn: 'Learn business automation methods using AI tools and strategies for integrating AI into existing workflows.',
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
        id: 'bi-process',
        slug: 'process',
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
      },
      {
        id: 'bi-collaboration',
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
      }
    ]
  },
  {
    id: 'marketing',
    slug: 'marketing',
    title: '마케팅 & 기획',
    titleEn: 'Marketing & Planning',
    description: 'AI를 활용한 마케팅 전략과 비즈니스 기획 역량을 학습합니다.',
    descriptionEn: 'Learn marketing strategies and business planning skills using AI.',
    icon: 'fa-solid fa-lightbulb',
    color: '#F97316',
    topics: [
      {
        id: 'mk-strategy',
        slug: 'strategy',
        title: '마케팅과 홍보전략',
        titleEn: 'Marketing & PR Strategy',
        description: 'AI를 활용한 효과적인 마케팅 및 홍보 전략 수립 방법을 학습합니다.',
        descriptionEn: 'Learn how to develop effective marketing and PR strategies using AI.',
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
        id: 'mk-content',
        slug: 'content',
        title: '기업/공공의 기획 마케팅•콘텐츠 창작업무 실습',
        titleEn: 'Enterprise/Public Sector Marketing & Content Creation Practice',
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
        id: 'mk-business-plan',
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
  {
    id: 'instructor-dev',
    slug: 'instructor-dev',
    title: '강사 역량 개발',
    titleEn: 'Instructor Development',
    description: '전문 강사로서의 역량을 개발하고 미래를 위한 포트폴리오를 구축합니다.',
    descriptionEn: 'Develop professional instructor capabilities and build a portfolio for the future.',
    icon: 'fa-solid fa-user-tie',
    color: '#6366F1',
    topics: [
      {
        id: 'id-portfolio',
        slug: 'portfolio',
        title: '강사 포트폴리오 구축과 미래 전략',
        titleEn: 'Instructor Portfolio Building & Future Strategy',
        description: '전문 강사로서의 포트폴리오를 체계적으로 구축하고, AI 시대에 맞는 강사 역량 개발 전략을 학습합니다.',
        descriptionEn: 'Systematically build an instructor portfolio and learn instructor capability development strategies for the AI era.',
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
