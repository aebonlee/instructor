import { registerContent } from './topicContent'
import type { TopicContent } from './topicContent'

const aiBasicsContent: TopicContent[] = [
  // ─────────────────────────────────────────────
  // 1. 프롬프트 엔지니어링 (ab-prompt, 6시간)
  // ─────────────────────────────────────────────
  {
    topicId: 'ab-prompt',
    learningObjectives: [
      '프롬프트 엔지니어링의 개념과 중요성을 설명할 수 있다',
      '효과적인 프롬프트의 구성 요소와 구조를 이해하고 적용할 수 있다',
      'Zero-shot, Few-shot, 역할 기반 프롬프트 기법을 실무에 활용할 수 있다',
      '프롬프트를 반복적으로 개선하여 원하는 결과를 도출할 수 있다',
    ],
    learningObjectivesEn: [
      'Explain the concept and importance of prompt engineering',
      'Understand and apply the components and structure of effective prompts',
      'Utilize Zero-shot, Few-shot, and role-based prompt techniques in practice',
      'Iteratively refine prompts to achieve desired outcomes',
    ],
    targetAudience: 'AI 활용에 관심이 있는 직장인, 교육자, 학생 등 생성형 AI를 처음 접하는 모든 분',
    targetAudienceEn: 'Anyone new to generative AI, including office workers, educators, and students interested in leveraging AI',
    prerequisites: '특별한 사전 지식 불필요. 기본적인 컴퓨터 활용 능력과 웹 브라우저 사용 경험이면 충분합니다.',
    prerequisitesEn: 'No special prior knowledge required. Basic computer literacy and web browser experience are sufficient.',
    teachingMethod: [
      '이론 강의 (30%) + 실습 (50%) + 토론 (20%)',
      '라이브 데모를 통한 프롬프트 작성 시연',
      '개인 및 그룹 실습을 통한 체험 학습',
      'Before/After 비교를 통한 프롬프트 개선 체험',
    ],
    teachingMethodEn: [
      'Lecture (30%) + Practice (50%) + Discussion (20%)',
      'Live demo of prompt writing',
      'Experiential learning through individual and group practice',
      'Prompt improvement experience through Before/After comparison',
    ],

    modules: [
      {
        title: '프롬프트 엔지니어링이란?',
        titleEn: 'What is Prompt Engineering?',
        content:
          '프롬프트 엔지니어링은 AI 모델에게 원하는 결과를 얻기 위해 입력 텍스트(프롬프트)를 체계적으로 설계하고 최적화하는 기술입니다. 단순히 질문을 입력하는 것이 아니라, AI의 작동 방식을 이해하고 이에 맞는 지시문을 작성하는 것이 핵심입니다. 좋은 프롬프트는 명확한 목표, 충분한 맥락, 구체적인 형식 지정을 포함하며, 이를 통해 AI의 성능을 극대화할 수 있습니다. 프롬프트 엔지니어링은 현재 가장 접근성이 높은 AI 활용 기술로, 프로그래밍 없이도 AI의 능력을 최대한 이끌어낼 수 있는 핵심 역량입니다.',
        contentEn:
          'Prompt engineering is the art of systematically designing and optimizing input text (prompts) to obtain desired results from AI models. Rather than simply typing questions, the key lies in understanding how AI works and crafting instructions accordingly. A good prompt includes clear objectives, sufficient context, and specific format specifications, which together maximize AI performance. Prompt engineering is currently the most accessible AI skill, enabling anyone to fully harness AI capabilities without programming.',
        keyPoints: [
          '프롬프트 엔지니어링은 AI와의 효과적인 소통 기술이다',
          '좋은 프롬프트는 목표·맥락·형식의 세 요소를 포함한다',
          '프로그래밍 없이 AI 활용 능력을 극대화하는 핵심 역량이다',
          '동일한 AI 모델이라도 프롬프트에 따라 결과 품질이 크게 달라진다',
        ],
        keyPointsEn: [
          'Prompt engineering is the skill of effective communication with AI',
          'A good prompt includes three elements: objective, context, and format',
          'It is a core competency for maximizing AI capabilities without programming',
          'Even with the same AI model, output quality varies greatly depending on the prompt',
        ],
      },
      {
        title: '프롬프트의 구성 요소와 구조',
        titleEn: 'Components and Structure of Prompts',
        content:
          '효과적인 프롬프트는 역할(Role), 맥락(Context), 지시(Instruction), 입력(Input), 출력 형식(Output Format)의 다섯 가지 핵심 요소로 구성됩니다. 역할은 AI가 수행할 페르소나를 설정하고, 맥락은 상황과 배경 정보를 제공합니다. 지시는 수행할 작업을 명확히 정의하며, 입력은 처리할 데이터나 텍스트를 제공합니다. 출력 형식은 응답의 구조와 스타일을 지정하여 일관된 결과물을 얻을 수 있게 합니다. 이 구조를 이해하면 어떤 상황에서도 체계적인 프롬프트를 작성할 수 있습니다.',
        contentEn:
          'Effective prompts consist of five key components: Role, Context, Instruction, Input, and Output Format. Role defines the persona the AI should adopt, while Context provides situational background information. Instruction clearly defines the task, Input supplies the data or text to process, and Output Format specifies the response structure and style for consistent results. Understanding this structure enables you to craft systematic prompts for any situation.',
        keyPoints: [
          '프롬프트의 5대 구성 요소: 역할, 맥락, 지시, 입력, 출력 형식',
          '각 요소의 유무와 구체성이 결과 품질을 좌우한다',
          '구조화된 프롬프트는 재사용성과 일관성이 높다',
          '상황에 따라 요소를 유연하게 조합할 수 있다',
        ],
        keyPointsEn: [
          'Five key components: Role, Context, Instruction, Input, Output Format',
          'The presence and specificity of each component determine output quality',
          'Structured prompts are more reusable and consistent',
          'Components can be flexibly combined depending on the situation',
        ],
      },
      {
        title: 'Zero-shot & Few-shot 프롬프팅',
        titleEn: 'Zero-shot & Few-shot Prompting',
        content:
          'Zero-shot 프롬프팅은 예시 없이 지시만으로 AI에게 작업을 수행하게 하는 방법으로, 간단한 작업이나 AI가 이미 잘 알고 있는 영역에서 효과적입니다. Few-shot 프롬프팅은 원하는 입출력 패턴을 몇 가지 예시로 보여준 뒤 새로운 입력에 대한 응답을 요청하는 기법입니다. 예시의 수와 품질이 결과에 큰 영향을 미치며, 일반적으로 2~5개의 예시가 적절합니다. One-shot(1개 예시)부터 시작하여 점진적으로 예시를 추가하며 최적의 개수를 찾는 것이 효율적인 접근법입니다.',
        contentEn:
          'Zero-shot prompting asks the AI to perform tasks using only instructions without examples, effective for simple tasks or domains the AI already knows well. Few-shot prompting demonstrates desired input-output patterns through several examples before requesting a response for new input. The number and quality of examples significantly impact results, with 2-5 examples generally being appropriate. An efficient approach starts with one-shot (one example) and gradually adds more to find the optimal number.',
        keyPoints: [
          'Zero-shot은 예시 없이 지시만으로 작업을 수행하는 방법이다',
          'Few-shot은 입출력 예시를 제공하여 패턴을 학습시키는 방법이다',
          '2~5개의 고품질 예시가 일반적으로 최적이다',
          '작업 난이도에 따라 Zero-shot과 Few-shot을 선택적으로 활용한다',
        ],
        keyPointsEn: [
          'Zero-shot performs tasks using only instructions without examples',
          'Few-shot teaches patterns by providing input-output examples',
          '2-5 high-quality examples are generally optimal',
          'Choose between Zero-shot and Few-shot based on task complexity',
        ],
      },
      {
        title: '역할 기반 프롬프트 설계',
        titleEn: 'Role-based Prompt Design',
        content:
          '역할 기반 프롬프트 설계는 AI에게 특정 전문가나 페르소나를 부여하여 해당 관점에서 응답하도록 유도하는 강력한 기법입니다. "당신은 10년 경력의 마케팅 전문가입니다"와 같이 구체적인 역할을 지정하면, AI는 해당 전문 분야의 어조, 용어, 사고방식을 반영한 응답을 생성합니다. 역할 설정 시에는 전문 분야, 경력 수준, 커뮤니케이션 스타일 등을 구체적으로 명시하는 것이 중요합니다. 또한, 다중 역할을 활용하여 서로 다른 관점에서의 분석이나 토론을 시뮬레이션할 수도 있습니다.',
        contentEn:
          'Role-based prompt design is a powerful technique that assigns specific personas or expert identities to AI, guiding responses from particular perspectives. Specifying a concrete role like "You are a marketing expert with 10 years of experience" causes the AI to generate responses reflecting that domain\'s tone, terminology, and thinking patterns. When setting roles, it is important to specify the area of expertise, experience level, and communication style. Additionally, multiple roles can be used to simulate analysis or debates from different perspectives.',
        keyPoints: [
          '역할 지정은 AI 응답의 전문성과 관점을 제어하는 핵심 기법이다',
          '역할에는 전문 분야, 경력, 커뮤니케이션 스타일을 구체적으로 명시한다',
          '다중 역할을 통해 다양한 관점의 분석과 토론 시뮬레이션이 가능하다',
          '역할 설정은 할루시네이션을 줄이고 응답 품질을 높이는 효과가 있다',
        ],
        keyPointsEn: [
          'Role assignment is a key technique for controlling expertise and perspective in AI responses',
          'Roles should specify domain expertise, experience level, and communication style',
          'Multiple roles enable analysis and discussion simulation from diverse perspectives',
          'Role setting helps reduce hallucination and improve response quality',
        ],
      },
      {
        title: '프롬프트 반복 최적화 기법',
        titleEn: 'Iterative Prompt Optimization',
        content:
          '프롬프트 최적화는 한 번의 시도로 완벽한 결과를 얻기 어렵기 때문에, 반복적인 수정과 테스트를 통해 점진적으로 개선해 나가는 프로세스입니다. 첫 번째 단계는 초기 프롬프트를 작성하고 결과를 평가하는 것이며, 이후 부족한 부분을 파악하여 프롬프트를 수정합니다. 제약 조건 추가, 부정 지시(하지 말아야 할 것), 출력 형식 세분화, 단계별 사고 유도 등의 기법을 활용합니다. A/B 테스트처럼 두 가지 버전의 프롬프트를 비교하는 방법도 효과적이며, 최적화된 프롬프트는 템플릿으로 저장하여 재사용하는 것이 좋습니다.',
        contentEn:
          'Prompt optimization is an iterative process of gradual improvement through repeated modifications and testing, as achieving perfect results on the first attempt is rarely possible. The first step is writing an initial prompt and evaluating the output, then identifying gaps to revise the prompt. Techniques include adding constraints, negative instructions (what not to do), granular output formatting, and step-by-step reasoning guidance. Comparing two prompt versions like A/B testing is also effective, and optimized prompts should be saved as templates for reuse.',
        keyPoints: [
          '프롬프트 최적화는 반복적 수정과 테스트의 과정이다',
          '제약 조건, 부정 지시, 출력 형식 세분화 등으로 품질을 높인다',
          'A/B 테스트를 통해 더 나은 프롬프트를 선별할 수 있다',
          '최적화된 프롬프트는 템플릿으로 관리하여 재사용한다',
        ],
        keyPointsEn: [
          'Prompt optimization is a process of iterative refinement and testing',
          'Quality improves through constraints, negative instructions, and format granularity',
          'A/B testing helps identify better prompts',
          'Optimized prompts should be managed as templates for reuse',
        ],
      },
      {
        title: '실전 프롬프트 작성 실습',
        titleEn: 'Hands-on Prompt Writing Practice',
        content:
          '이 모듈에서는 앞서 배운 모든 기법을 종합하여 실제 업무 시나리오에 적용하는 실전 실습을 진행합니다. 이메일 작성, 보고서 요약, 데이터 분석 요청, 창의적 콘텐츠 생성 등 다양한 업무 상황별로 프롬프트를 설계하고 테스트합니다. 수강생들은 개인 업무에 맞는 프롬프트를 직접 작성하고, 동료들과 결과를 비교하며 피드백을 교환합니다. 최종적으로 개인 프롬프트 라이브러리를 구축하여 교육 이후에도 지속적으로 활용할 수 있는 자산을 만듭니다.',
        contentEn:
          'This module integrates all previously learned techniques into hands-on practice applied to real work scenarios. Participants design and test prompts for various work situations including email writing, report summarization, data analysis requests, and creative content generation. Students write prompts tailored to their own work, compare results with peers, and exchange feedback. Finally, they build a personal prompt library as an asset for continued use after the training.',
        keyPoints: [
          '실제 업무 시나리오를 기반으로 프롬프트를 설계하고 테스트한다',
          '이메일, 보고서, 데이터 분석 등 다양한 업무에 적용한다',
          '동료 피드백을 통해 프롬프트 품질을 향상시킨다',
          '개인 프롬프트 라이브러리를 구축하여 지속 활용한다',
        ],
        keyPointsEn: [
          'Design and test prompts based on actual work scenarios',
          'Apply to various tasks including emails, reports, and data analysis',
          'Improve prompt quality through peer feedback',
          'Build a personal prompt library for ongoing use',
        ],
      },
    ],

    practices: [
      {
        title: '나만의 프롬프트 템플릿 만들기',
        titleEn: 'Create Your Own Prompt Templates',
        type: 'individual',
        duration: '40분',
        durationEn: '40 minutes',
        description:
          '개인 업무에서 자주 반복되는 작업 3가지를 선정하고, 각각에 대해 5대 구성 요소(역할, 맥락, 지시, 입력, 출력 형식)를 포함한 프롬프트 템플릿을 작성합니다.',
        descriptionEn:
          'Select 3 frequently repeated tasks from your work and create prompt templates for each, incorporating the 5 key components (Role, Context, Instruction, Input, Output Format).',
        steps: [
          '본인 업무에서 AI를 활용하고 싶은 반복 작업 3가지를 선정한다',
          '각 작업에 대해 5대 구성 요소를 채운 프롬프트 초안을 작성한다',
          'ChatGPT 또는 Claude에 프롬프트를 입력하여 결과를 확인한다',
          '결과를 분석하고 프롬프트를 수정하여 2차 테스트를 수행한다',
          '최종 프롬프트 템플릿을 문서화하고 활용 가이드를 작성한다',
        ],
        stepsEn: [
          'Select 3 repetitive tasks in your work where you want to use AI',
          'Draft prompts for each task filling in all 5 key components',
          'Input prompts into ChatGPT or Claude and review the results',
          'Analyze results and revise prompts for a second test round',
          'Document final prompt templates and write a usage guide',
        ],
        tools: ['ChatGPT', 'Claude', 'Google Docs'],
      },
      {
        title: 'Zero-shot vs Few-shot 비교 실험',
        titleEn: 'Zero-shot vs Few-shot Comparison Experiment',
        type: 'group',
        duration: '50분',
        durationEn: '50 minutes',
        description:
          '동일한 작업에 대해 Zero-shot과 Few-shot(1-shot, 3-shot, 5-shot) 프롬프트를 각각 작성하고 결과를 비교하여 최적의 예시 수를 분석합니다.',
        descriptionEn:
          'Write Zero-shot and Few-shot (1-shot, 3-shot, 5-shot) prompts for the same task and compare results to analyze the optimal number of examples.',
        steps: [
          '팀별로 공통 작업 과제를 선정한다 (예: 고객 이메일 응대, 회의록 정리)',
          '각 팀원이 Zero-shot, 1-shot, 3-shot, 5-shot 프롬프트를 하나씩 담당하여 작성한다',
          '모든 프롬프트를 동일한 AI 모델에 입력하여 결과를 수집한다',
          '결과 품질을 정확성, 완성도, 톤 일관성 기준으로 비교 평가한다',
          '팀별 분석 결과를 발표하고 전체 토론을 통해 인사이트를 공유한다',
        ],
        stepsEn: [
          'Each team selects a common task (e.g., customer email response, meeting minutes)',
          'Each team member takes charge of one variant: Zero-shot, 1-shot, 3-shot, 5-shot',
          'Input all prompts into the same AI model and collect results',
          'Compare output quality based on accuracy, completeness, and tone consistency',
          'Present team analysis results and share insights through group discussion',
        ],
        tools: ['ChatGPT', 'Claude', '공유 스프레드시트'],
      },
      {
        title: '프롬프트 해커톤: 실무 과제 해결',
        titleEn: 'Prompt Hackathon: Solving Real Work Challenges',
        type: 'project',
        duration: '90분',
        durationEn: '90 minutes',
        description:
          '팀별로 실제 업무에서 겪는 문제를 선정하고, 프롬프트 엔지니어링 기법을 총동원하여 AI 기반 해결책을 설계하는 미니 해커톤입니다.',
        descriptionEn:
          'A mini hackathon where teams select real workplace challenges and design AI-powered solutions using all prompt engineering techniques learned.',
        steps: [
          '팀별 브레인스토밍을 통해 해결할 실무 과제를 선정한다',
          '과제 해결에 필요한 프롬프트 전략을 수립한다 (역할, Zero/Few-shot 등)',
          '프롬프트를 작성하고 반복 최적화하여 결과물을 도출한다',
          '결과물을 발표 자료로 정리하고 프롬프트 설계 과정을 문서화한다',
          '팀별 발표 후 심사 및 우수 팀 시상, 전체 리뷰를 진행한다',
        ],
        stepsEn: [
          'Select a real work challenge to solve through team brainstorming',
          'Establish a prompt strategy for the challenge (roles, Zero/Few-shot, etc.)',
          'Write prompts, iteratively optimize, and produce deliverables',
          'Organize deliverables into a presentation and document the prompt design process',
          'Team presentations followed by judging, awards, and a comprehensive review',
        ],
        tools: ['ChatGPT', 'Claude', 'Gemini', 'Google Slides', 'Notion'],
      },
    ],

    cases: [
      {
        title: '삼성SDS의 AI 기반 고객 응대 프롬프트 표준화',
        titleEn: 'Samsung SDS: Standardizing AI-based Customer Support Prompts',
        industry: 'IT/서비스',
        industryEn: 'IT/Services',
        summary:
          '삼성SDS는 고객 지원팀의 응대 품질 편차를 줄이기 위해 프롬프트 엔지니어링 교육을 실시하고, 표준 프롬프트 라이브러리를 구축했습니다.',
        summaryEn:
          'Samsung SDS conducted prompt engineering training and built a standard prompt library to reduce quality variance in customer support team responses.',
        challenge:
          '상담원 200명의 AI 활용 수준 차이로 인해 고객 응대 품질에 큰 편차가 발생했고, AI 도구 도입 후에도 일관된 서비스 품질을 확보하기 어려웠습니다.',
        challengeEn:
          'Quality variance in customer service was significant due to varying AI skill levels among 200 agents, and consistent service quality remained elusive even after AI tool adoption.',
        solution:
          '전 상담원 대상 프롬프트 엔지니어링 교육을 6주간 진행하고, 고객 문의 유형별 표준 프롬프트 템플릿 50개를 개발하여 사내 프롬프트 라이브러리를 구축했습니다.',
        solutionEn:
          'Conducted a 6-week prompt engineering training program for all agents and developed 50 standardized prompt templates categorized by inquiry type, building an internal prompt library.',
        result:
          '고객 만족도가 23% 향상되었고, 평균 응대 시간이 35% 단축되었습니다. 상담원 간 응대 품질 편차가 60% 감소하여 일관된 서비스가 가능해졌습니다.',
        resultEn:
          'Customer satisfaction improved by 23%, average response time decreased by 35%, and quality variance among agents was reduced by 60%, enabling consistent service delivery.',
      },
      {
        title: '서울시교육청 교사 AI 역량 강화 프로젝트',
        titleEn: 'Seoul Metropolitan Office of Education: Teacher AI Competency Enhancement',
        industry: '교육/공공',
        industryEn: 'Education/Public Sector',
        summary:
          '서울시교육청은 교사들의 수업 준비 효율을 높이고 학생 맞춤형 교육을 강화하기 위해 프롬프트 엔지니어링 기반 AI 활용 교사 연수를 실시했습니다.',
        summaryEn:
          'The Seoul Metropolitan Office of Education conducted prompt engineering-based AI training for teachers to improve lesson preparation efficiency and strengthen personalized education.',
        challenge:
          '교사 1인당 평균 25명 이상의 학생을 담당하며 개별 맞춤 피드백 제공이 현실적으로 어려웠고, 수업 자료 준비에 과도한 시간이 소요되고 있었습니다.',
        challengeEn:
          'With each teacher responsible for an average of 25+ students, providing individualized feedback was practically impossible, and excessive time was spent on lesson material preparation.',
        solution:
          '역할 기반 프롬프트 설계를 활용하여 학생 수준별 맞춤 문제 생성 프롬프트와 자동 피드백 프롬프트를 개발하고, 수업 계획서 작성을 위한 Few-shot 프롬프트 템플릿을 도입했습니다.',
        solutionEn:
          'Developed customized problem-generation prompts for different student levels using role-based prompt design and automatic feedback prompts, and introduced Few-shot prompt templates for lesson planning.',
        result:
          '교사의 수업 준비 시간이 평균 40% 감소했으며, 학생별 맞춤 학습 자료 제공이 가능해져 학업 성취도가 15% 향상되었습니다. 교사 업무 만족도도 크게 개선되었습니다.',
        resultEn:
          'Teachers\' lesson preparation time decreased by 40% on average, personalized learning materials became feasible leading to 15% improvement in academic achievement, and teacher job satisfaction significantly improved.',
      },
    ],

    tips: [
      {
        title: '라이브 데모는 실패 사례부터 보여주세요',
        titleEn: 'Start Live Demos with Failure Examples',
        content:
          '프롬프트 교육 시 처음부터 완벽한 프롬프트를 보여주기보다, 의도적으로 부실한 프롬프트를 먼저 시연하고 그 결과의 문제점을 분석한 뒤 단계적으로 개선하는 과정을 보여주세요. 수강생들이 "왜 이렇게 해야 하는지"를 체감하게 되어 학습 효과가 크게 높아집니다.',
        contentEn:
          'When teaching prompts, rather than showing perfect prompts from the start, intentionally demonstrate a poor prompt first, analyze the problems in its output, then show the step-by-step improvement process. This helps learners viscerally understand "why" and significantly increases learning effectiveness.',
        category: 'delivery',
      },
      {
        title: '수강생의 실제 업무를 실습 소재로 활용하세요',
        titleEn: 'Use Learners\' Actual Work Tasks as Practice Material',
        content:
          '사전 설문이나 교육 시작 시 수강생들의 실제 업무 과제를 수집하고, 이를 실습 소재로 활용하면 참여도와 학습 전이가 크게 향상됩니다. 교육이 끝난 후 바로 업무에 적용할 수 있는 실질적인 결과물이 나오기 때문에 수강생 만족도도 높아집니다.',
        contentEn:
          'Collect learners\' actual work tasks through pre-surveys or at the start of training and use them as practice material. This greatly improves engagement and learning transfer, and satisfaction increases because learners produce practical deliverables they can apply to their work immediately after training.',
        category: 'engagement',
      },
      {
        title: 'Before/After 포트폴리오로 성장을 가시화하세요',
        titleEn: 'Visualize Growth with Before/After Portfolios',
        content:
          '교육 초반에 작성한 프롬프트와 교육 후반에 작성한 프롬프트를 비교하는 Before/After 포트폴리오를 만들게 하세요. 수강생 스스로 자신의 성장을 확인할 수 있고, 이 포트폴리오는 교육 성과를 증명하는 근거 자료로도 활용될 수 있습니다.',
        contentEn:
          'Have learners create Before/After portfolios comparing prompts written at the beginning versus the end of training. This allows learners to see their own growth and serves as evidence of training outcomes.',
        category: 'assessment',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. 생성형AI 윤리와 법적쟁점, AI 사용 가이드 (ab-ethics, 4시간)
  // ─────────────────────────────────────────────
  {
    topicId: 'ab-ethics',
    learningObjectives: [
      'AI 윤리의 기본 원칙과 국내외 주요 가이드라인을 설명할 수 있다',
      '생성형 AI 활용 시 발생하는 저작권 및 개인정보 쟁점을 분석할 수 있다',
      'AI 편향성의 원인과 유형을 이해하고 대응 방안을 제시할 수 있다',
      '조직의 AI 사용 가이드라인을 수립하고 적용할 수 있다',
    ],
    learningObjectivesEn: [
      'Explain the fundamental principles of AI ethics and major domestic and international guidelines',
      'Analyze copyright and privacy issues arising from generative AI usage',
      'Understand causes and types of AI bias and propose countermeasures',
      'Establish and implement organizational AI usage guidelines',
    ],
    targetAudience: '기업의 AI 도입 담당자, 관리자, 법무팀, 교육 담당자 및 AI를 업무에 활용하는 모든 직장인',
    targetAudienceEn: 'Corporate AI adoption managers, executives, legal teams, training coordinators, and all employees using AI at work',
    prerequisites: '생성형 AI 기본 개념 이해 (ChatGPT, Claude 등 사용 경험 권장)',
    prerequisitesEn: 'Basic understanding of generative AI concepts (experience with ChatGPT, Claude, etc. recommended)',
    teachingMethod: [
      '이론 강의 (40%) + 사례 분석 (30%) + 토론 (30%)',
      '국내외 실제 분쟁 사례를 활용한 판례 분석',
      '조직별 가이드라인 수립 워크숍',
      '찬반 토론을 통한 비판적 사고 훈련',
    ],
    teachingMethodEn: [
      'Lecture (40%) + Case Analysis (30%) + Discussion (30%)',
      'Court case analysis using real domestic and international dispute cases',
      'Workshop for establishing organizational guidelines',
      'Critical thinking training through pro/con debates',
    ],

    modules: [
      {
        title: 'AI 윤리의 기본 원칙',
        titleEn: 'Fundamental Principles of AI Ethics',
        content:
          'AI 윤리는 인공지능 기술의 개발과 활용 과정에서 지켜야 할 도덕적 원칙과 규범을 의미합니다. 주요 원칙으로는 투명성(Transparency), 공정성(Fairness), 책임성(Accountability), 프라이버시(Privacy), 안전성(Safety)이 있습니다. EU AI Act, 한국의 AI 윤리 기준, UNESCO AI 윤리 권고안 등 국내외 주요 프레임워크를 비교 분석하며, 각 원칙이 실무에서 어떻게 적용되는지 사례를 통해 살펴봅니다. AI 윤리는 단순한 규제가 아니라, 지속 가능한 AI 활용의 기반이라는 관점에서 접근합니다.',
        contentEn:
          'AI ethics refers to the moral principles and norms to be observed in the development and use of artificial intelligence. Key principles include Transparency, Fairness, Accountability, Privacy, and Safety. We compare and analyze major domestic and international frameworks such as the EU AI Act, Korea\'s AI Ethics Standards, and the UNESCO AI Ethics Recommendation, examining how each principle applies in practice through cases. AI ethics is approached not as mere regulation but as the foundation for sustainable AI use.',
        keyPoints: [
          'AI 윤리의 5대 원칙: 투명성, 공정성, 책임성, 프라이버시, 안전성',
          'EU AI Act, 한국 AI 윤리 기준, UNESCO 권고안 등 글로벌 프레임워크 이해',
          'AI 윤리는 규제가 아닌 지속 가능한 AI 활용의 기반이다',
          '원칙의 실무 적용 방법과 사례를 함께 학습한다',
        ],
        keyPointsEn: [
          'Five principles of AI ethics: Transparency, Fairness, Accountability, Privacy, Safety',
          'Understand global frameworks: EU AI Act, Korean AI Ethics Standards, UNESCO Recommendation',
          'AI ethics is the foundation for sustainable AI use, not just regulation',
          'Learn practical application methods and cases alongside the principles',
        ],
      },
      {
        title: '생성형 AI와 저작권 쟁점',
        titleEn: 'Generative AI and Copyright Issues',
        content:
          '생성형 AI가 만들어낸 콘텐츠의 저작권 귀속 문제는 현재 가장 뜨거운 법적 쟁점 중 하나입니다. AI가 학습한 데이터에 대한 저작권 침해 여부, AI 생성물의 저작권자 인정 문제, AI 콘텐츠의 상업적 이용 범위 등을 다룹니다. 미국 저작권청의 판단, 한국 저작권법의 해석, 주요 소송 사례(Getty Images vs Stability AI, NYT vs OpenAI 등)를 분석하며, 실무에서 안전하게 AI 콘텐츠를 활용하기 위한 가이드를 제공합니다.',
        contentEn:
          'Copyright attribution of generative AI-created content is one of the hottest legal issues today. We cover copyright infringement of AI training data, authorship recognition of AI outputs, and the scope of commercial use of AI content. Analyzing judgments from the US Copyright Office, interpretations of Korean copyright law, and major lawsuits (Getty Images vs Stability AI, NYT vs OpenAI, etc.), we provide practical guides for safely using AI-generated content.',
        keyPoints: [
          'AI 생성물의 저작권 귀속은 전 세계적으로 논쟁 중인 미해결 이슈이다',
          'AI 학습 데이터에 대한 저작권 침해 여부가 핵심 쟁점이다',
          '주요 소송 사례를 통해 현재의 법적 판단 추이를 파악한다',
          '실무에서 AI 콘텐츠를 안전하게 활용하기 위한 체크리스트를 숙지한다',
        ],
        keyPointsEn: [
          'Copyright attribution of AI-generated content is a globally debated unresolved issue',
          'Whether AI training data constitutes copyright infringement is the core dispute',
          'Understand current legal judgment trends through major lawsuit cases',
          'Master a checklist for safely using AI content in practice',
        ],
      },
      {
        title: '개인정보 보호와 AI',
        titleEn: 'Privacy Protection and AI',
        content:
          '생성형 AI 사용 시 민감한 개인정보가 학습 데이터에 포함되거나, 프롬프트를 통해 유출될 수 있는 위험이 있습니다. 한국의 개인정보보호법(PIPA), EU의 GDPR 등 관련 법규를 살펴보고, AI 서비스 이용 시 개인정보가 어떻게 처리되는지를 분석합니다. 삼성전자 ChatGPT 기밀유출 사건 등 실제 사례를 통해 위험성을 인식하고, 업무 중 AI 활용 시 개인정보를 보호하기 위한 실무 지침(익명화, 가명 처리, 민감 정보 제외 등)을 학습합니다.',
        contentEn:
          'When using generative AI, there are risks of sensitive personal data being included in training data or leaked through prompts. We examine relevant regulations including Korea\'s Personal Information Protection Act (PIPA) and the EU\'s GDPR, analyzing how personal information is processed when using AI services. Through real cases such as Samsung Electronics\' ChatGPT confidentiality leak incident, we recognize the risks and learn practical guidelines for protecting personal information when using AI at work (anonymization, pseudonymization, exclusion of sensitive data, etc.).',
        keyPoints: [
          'AI 서비스에 입력한 데이터가 학습에 사용될 수 있는 위험을 이해한다',
          '한국 개인정보보호법, EU GDPR 등 관련 법규의 핵심 요구사항을 파악한다',
          '실제 기업의 AI 관련 개인정보 유출 사례에서 교훈을 얻는다',
          '익명화, 가명 처리 등 실무 보호 조치를 숙지한다',
        ],
        keyPointsEn: [
          'Understand the risk that data entered into AI services may be used for training',
          'Grasp key requirements of Korea\'s PIPA, EU GDPR, and related regulations',
          'Learn lessons from real corporate AI-related data breach cases',
          'Master practical protective measures such as anonymization and pseudonymization',
        ],
      },
      {
        title: 'AI 편향성과 공정성',
        titleEn: 'AI Bias and Fairness',
        content:
          'AI 모델은 학습 데이터에 내재된 편향을 그대로 반영하거나 증폭시킬 수 있으며, 이는 차별적인 결과로 이어질 수 있습니다. 편향의 유형에는 데이터 편향, 알고리즘 편향, 사회적 편향 등이 있으며, 채용 AI에서의 성별 편향, 대출 심사에서의 인종 편향 등 실제 사례를 분석합니다. 편향성을 탐지하고 완화하기 위한 기술적 방법(공정성 메트릭, 데이터 보정)과 조직적 대응 방안(다양성 확보, 감사 프로세스)을 함께 학습하며, 프롬프트 수준에서 편향을 줄이는 실질적인 기법도 다룹니다.',
        contentEn:
          'AI models can reflect or amplify biases inherent in training data, potentially leading to discriminatory outcomes. Types of bias include data bias, algorithmic bias, and social bias, and we analyze real cases such as gender bias in hiring AI and racial bias in loan assessments. We learn both technical methods for detecting and mitigating bias (fairness metrics, data calibration) and organizational responses (diversity assurance, audit processes), along with practical techniques for reducing bias at the prompt level.',
        keyPoints: [
          'AI 편향의 세 가지 유형: 데이터 편향, 알고리즘 편향, 사회적 편향',
          '편향은 채용, 대출, 의료 등 다양한 분야에서 차별적 결과를 초래할 수 있다',
          '공정성 메트릭과 데이터 보정으로 기술적 완화가 가능하다',
          '프롬프트 설계 단계에서도 편향을 줄이는 기법을 적용할 수 있다',
        ],
        keyPointsEn: [
          'Three types of AI bias: data bias, algorithmic bias, social bias',
          'Bias can cause discriminatory outcomes in hiring, lending, healthcare, and more',
          'Technical mitigation is possible through fairness metrics and data calibration',
          'Bias reduction techniques can be applied at the prompt design stage',
        ],
      },
      {
        title: '조직별 AI 사용 가이드라인 수립',
        titleEn: 'Establishing Organizational AI Guidelines',
        content:
          '조직에서 AI를 체계적이고 안전하게 활용하기 위해서는 명확한 사용 가이드라인이 필수적입니다. 가이드라인에는 허용되는 AI 활용 범위, 금지 행위, 데이터 처리 규칙, 결과물 검증 절차, 책임 소재 등이 포함되어야 합니다. 삼성, LG, 네이버 등 국내 대기업의 AI 가이드라인 사례를 분석하고, 조직의 특성(규모, 업종, 규제 환경)에 맞는 맞춤형 가이드라인을 수립하는 프레임워크를 학습합니다. 가이드라인은 일회성이 아니라 기술 발전에 따라 지속적으로 업데이트해야 합니다.',
        contentEn:
          'Clear usage guidelines are essential for systematic and safe AI use within organizations. Guidelines should cover permitted AI usage scope, prohibited actions, data handling rules, output verification procedures, and accountability. We analyze AI guideline cases from major Korean enterprises such as Samsung, LG, and Naver, and learn a framework for establishing customized guidelines suited to organizational characteristics (size, industry, regulatory environment). Guidelines should not be one-time documents but must be continuously updated as technology evolves.',
        keyPoints: [
          '가이드라인은 허용 범위, 금지 행위, 데이터 규칙, 검증 절차, 책임 소재를 포함한다',
          '국내외 주요 기업의 AI 가이드라인 사례를 벤치마킹한다',
          '조직 특성(규모, 업종, 규제 환경)에 맞는 맞춤형 가이드라인을 수립한다',
          '기술 발전에 따라 가이드라인을 지속적으로 업데이트해야 한다',
        ],
        keyPointsEn: [
          'Guidelines should cover scope, prohibitions, data rules, verification, and accountability',
          'Benchmark AI guideline cases from major domestic and international enterprises',
          'Establish customized guidelines suited to organizational characteristics',
          'Guidelines must be continuously updated as technology evolves',
        ],
      },
      {
        title: '사례 분석 및 토론',
        titleEn: 'Case Analysis and Discussion',
        content:
          '실제 발생한 AI 윤리 분쟁 사례들을 심층 분석하고, 다양한 이해관계자의 관점에서 토론합니다. 딥페이크 악용 사례, AI 챗봇의 유해 발언 사건, AI 생성 콘텐츠의 허위 정보 유포 등 최신 사례를 다루며, 각 사례에서 어떤 윤리 원칙이 침해되었는지, 어떻게 예방할 수 있었는지를 분석합니다. 팀별로 특정 시나리오에 대한 찬반 토론을 진행하며, 윤리적 의사결정 프레임워크를 실전에 적용하는 연습을 합니다.',
        contentEn:
          'We conduct in-depth analysis of real AI ethics dispute cases and discuss them from various stakeholder perspectives. Covering recent cases such as deepfake abuse, harmful AI chatbot statements, and misinformation spread through AI-generated content, we analyze which ethical principles were violated and how they could have been prevented. Teams conduct pro/con debates on specific scenarios, practicing the application of ethical decision-making frameworks in real situations.',
        keyPoints: [
          '딥페이크, 유해 발언, 허위 정보 등 최신 AI 윤리 사례를 분석한다',
          '다양한 이해관계자(개발자, 사용자, 피해자, 규제기관)의 관점을 이해한다',
          '찬반 토론을 통해 윤리적 의사결정 능력을 향상시킨다',
          '예방적 관점에서 각 사례의 교훈을 도출한다',
        ],
        keyPointsEn: [
          'Analyze recent AI ethics cases including deepfakes, harmful speech, and misinformation',
          'Understand perspectives of various stakeholders (developers, users, victims, regulators)',
          'Improve ethical decision-making ability through pro/con debates',
          'Extract lessons from each case with a preventive perspective',
        ],
      },
    ],

    practices: [
      {
        title: 'AI 윤리 딜레마 시나리오 토론',
        titleEn: 'AI Ethics Dilemma Scenario Debate',
        type: 'group',
        duration: '50분',
        durationEn: '50 minutes',
        description:
          '팀별로 AI 윤리 딜레마 시나리오를 배정받아 찬성/반대 입장을 나누고, 근거를 준비하여 토론을 진행합니다. 윤리적 판단 역량과 논리적 사고력을 동시에 훈련합니다.',
        descriptionEn:
          'Teams are assigned AI ethics dilemma scenarios, divided into pro/con positions, prepare arguments, and conduct debates. Simultaneously trains ethical judgment and logical thinking skills.',
        steps: [
          '팀별로 AI 윤리 딜레마 시나리오 카드를 배정받는다 (예: AI 면접관 도입, AI 뉴스 기사 자동 생성)',
          '팀 내에서 찬성팀과 반대팀으로 나누고, 각 입장의 근거를 조사한다',
          '5분 발표 + 3분 반론 형식으로 팀 간 토론을 진행한다',
          '청중(다른 팀)이 투표하고, 토론 내용에 대한 피드백을 제공한다',
          '강사가 핵심 쟁점을 정리하고 윤리적 의사결정 프레임워크를 도출한다',
        ],
        stepsEn: [
          'Each team receives an AI ethics dilemma scenario card (e.g., AI interviewer adoption, auto-generated AI news)',
          'Divide within teams into pro and con sides and research supporting arguments',
          'Conduct inter-team debates in 5-minute presentation + 3-minute rebuttal format',
          'Audience (other teams) votes and provides feedback on the debate content',
          'Instructor summarizes key issues and derives an ethical decision-making framework',
        ],
        tools: ['시나리오 카드', 'Timer', 'Google Docs'],
      },
      {
        title: '우리 조직의 AI 사용 가이드라인 초안 작성',
        titleEn: 'Drafting AI Usage Guidelines for Our Organization',
        type: 'group',
        duration: '60분',
        durationEn: '60 minutes',
        description:
          '팀별로 가상의 조직(또는 실제 소속 조직)을 대상으로 AI 사용 가이드라인 초안을 작성합니다. 허용 범위, 금지 사항, 데이터 규칙, 검증 절차 등을 포함하는 실전 문서를 만듭니다.',
        descriptionEn:
          'Teams draft AI usage guidelines for a hypothetical (or actual) organization. Create a practical document including usage scope, prohibitions, data rules, and verification procedures.',
        steps: [
          '대상 조직의 특성을 정의한다 (업종, 규모, 주요 업무, 규제 환경)',
          '벤치마킹할 기존 가이드라인 사례를 조사한다 (AI를 활용하여 검색)',
          '가이드라인의 목차와 핵심 항목을 설계한다',
          '각 항목별 세부 내용을 작성하고, AI를 활용하여 문서를 다듬는다',
          '팀별 발표를 통해 가이드라인 초안을 공유하고 상호 피드백을 교환한다',
        ],
        stepsEn: [
          'Define characteristics of the target organization (industry, size, key tasks, regulatory environment)',
          'Research existing guideline cases to benchmark (using AI for search)',
          'Design the table of contents and key items for the guidelines',
          'Write detailed content for each item and refine the document using AI',
          'Share guideline drafts through team presentations and exchange mutual feedback',
        ],
        tools: ['ChatGPT', 'Claude', 'Google Docs', 'Notion'],
      },
      {
        title: 'AI 생성 콘텐츠 저작권 체크리스트 실습',
        titleEn: 'AI-Generated Content Copyright Checklist Practice',
        type: 'individual',
        duration: '30분',
        durationEn: '30 minutes',
        description:
          '실제 업무에서 AI가 생성한 콘텐츠(텍스트, 이미지)를 상업적으로 활용할 때 확인해야 할 저작권 체크리스트를 작성하고, 사례에 적용하여 검증합니다.',
        descriptionEn:
          'Create a copyright checklist for commercially using AI-generated content (text, images) in actual work, and validate it by applying to case examples.',
        steps: [
          'AI 생성 콘텐츠의 상업적 활용 시 발생할 수 있는 저작권 리스크를 나열한다',
          '각 리스크에 대한 확인 항목(체크리스트)을 작성한다',
          'AI로 텍스트와 이미지를 각각 생성하고 체크리스트를 적용해본다',
          '체크리스트 적용 결과를 분석하고 개선점을 반영한다',
        ],
        stepsEn: [
          'List copyright risks that may arise when commercially using AI-generated content',
          'Create verification items (checklist) for each risk',
          'Generate text and images with AI and apply the checklist',
          'Analyze checklist application results and incorporate improvements',
        ],
        tools: ['ChatGPT', 'DALL-E', 'Claude', 'Midjourney'],
      },
    ],

    cases: [
      {
        title: 'KB국민은행의 AI 윤리 거버넌스 구축',
        titleEn: 'KB Kookmin Bank: Building AI Ethics Governance',
        industry: '금융',
        industryEn: 'Finance',
        summary:
          'KB국민은행은 AI 기반 금융 서비스 확대에 따른 윤리적 리스크를 관리하기 위해 AI 윤리 위원회를 설치하고 포괄적인 AI 거버넌스 체계를 구축했습니다.',
        summaryEn:
          'KB Kookmin Bank established an AI Ethics Committee and built a comprehensive AI governance framework to manage ethical risks from expanding AI-based financial services.',
        challenge:
          'AI 기반 신용 평가 모델에서 특정 연령대와 지역에 대한 편향이 발견되었고, 고객 데이터를 AI 모델 학습에 활용하는 것에 대한 규제 준수 이슈가 제기되었습니다.',
        challengeEn:
          'Bias against certain age groups and regions was discovered in AI-based credit assessment models, and regulatory compliance issues were raised regarding the use of customer data for AI model training.',
        solution:
          'AI 윤리 위원회를 신설하여 모든 AI 서비스 출시 전 윤리 심사를 의무화하고, 편향성 탐지 자동화 시스템을 도입했습니다. 또한 전 직원 대상 AI 윤리 교육을 분기별로 실시하고, 고객 대상 AI 활용 투명성 보고서를 발행했습니다.',
        solutionEn:
          'Established an AI Ethics Committee mandating ethics reviews before all AI service launches and introduced an automated bias detection system. Conducted quarterly AI ethics training for all employees and published AI usage transparency reports for customers.',
        result:
          'AI 모델의 편향성 지표가 40% 개선되었고, 금융감독원 AI 감독 평가에서 최우수 등급을 받았습니다. 고객 신뢰도 조사에서 AI 서비스 신뢰도가 28% 상승하여 업계 선도적인 AI 거버넌스 모델로 인정받았습니다.',
        resultEn:
          'AI model bias indicators improved by 40%, the bank received the highest rating in Financial Supervisory Service AI audits, and customer trust in AI services increased by 28%, earning recognition as an industry-leading AI governance model.',
      },
      {
        title: '한국콘텐츠진흥원의 AI 콘텐츠 저작권 가이드라인',
        titleEn: 'KOCCA: AI Content Copyright Guidelines',
        industry: '콘텐츠/문화',
        industryEn: 'Content/Culture',
        summary:
          '한국콘텐츠진흥원(KOCCA)은 생성형 AI를 활용한 콘텐츠 제작이 급증함에 따라, 창작자와 기업을 위한 AI 콘텐츠 저작권 가이드라인을 발표하고 교육 프로그램을 운영했습니다.',
        summaryEn:
          'As generative AI content production surged, the Korea Creative Content Agency (KOCCA) published AI content copyright guidelines and operated education programs for creators and enterprises.',
        challenge:
          '웹소설, 웹툰, 음악 등 콘텐츠 산업에서 AI 생성물의 저작권 분쟁이 급증하고, AI와 인간 창작물의 경계가 모호해지면서 창작자들의 불안이 커지고 있었습니다.',
        challengeEn:
          'Copyright disputes over AI-generated works surged in content industries including web novels, webtoons, and music, and creators\' anxiety grew as the boundary between AI and human creations became blurred.',
        solution:
          'AI 콘텐츠 저작권 가이드라인을 5개 분야(텍스트, 이미지, 음악, 영상, 코드)별로 수립하고, 창작자 1,000명 대상 교육 프로그램을 무료로 운영했습니다. AI 활용 콘텐츠의 표기 기준과 출처 관리 체계도 함께 마련했습니다.',
        solutionEn:
          'Established AI content copyright guidelines for 5 domains (text, image, music, video, code), operated free education programs for 1,000 creators, and prepared labeling standards and source management systems for AI-assisted content.',
        result:
          '가이드라인 적용 후 콘텐츠 업계의 AI 관련 분쟁이 35% 감소했으며, 교육 수료 창작자의 97%가 "실무에 도움이 된다"고 평가했습니다. 가이드라인은 아시아 지역 최초의 분야별 AI 콘텐츠 저작권 기준으로 국제적 주목을 받았습니다.',
        resultEn:
          'AI-related disputes in the content industry decreased by 35% after guideline adoption, and 97% of trained creators evaluated the program as "helpful in practice." The guidelines received international attention as Asia\'s first domain-specific AI content copyright standards.',
      },
    ],

    tips: [
      {
        title: '최신 사례를 교육 직전에 업데이트하세요',
        titleEn: 'Update with Latest Cases Right Before Training',
        content:
          'AI 윤리와 법적 이슈는 매주 새로운 사례가 등장할 만큼 빠르게 변화합니다. 교육 1~2일 전에 최신 뉴스와 판례를 검색하여 강의 자료에 반영하면, 수강생들이 "지금 일어나고 있는 일"로 느껴 관심과 몰입도가 크게 높아집니다. AI를 활용하여 최신 사례를 요약하는 것도 좋은 방법입니다.',
        contentEn:
          'AI ethics and legal issues evolve so rapidly that new cases emerge weekly. By searching for the latest news and court rulings 1-2 days before training and reflecting them in materials, learners feel they are dealing with "what is happening right now," greatly increasing interest and engagement. Using AI to summarize recent cases is also an effective approach.',
        category: 'preparation',
      },
      {
        title: '정답을 주기보다 판단 기준을 제시하세요',
        titleEn: 'Provide Judgment Criteria Rather Than Definitive Answers',
        content:
          'AI 윤리는 명확한 정답이 없는 경우가 많습니다. 강사가 "이것이 정답이다"라고 단정하기보다, 다양한 관점과 판단 기준을 제시하고 수강생 스스로 사고할 수 있도록 유도하는 것이 더 효과적입니다. "이 상황에서 여러분이 의사결정자라면?" 같은 질문으로 능동적 참여를 이끌어내세요.',
        contentEn:
          'AI ethics often has no clear-cut answers. Rather than stating "this is the answer," it is more effective to present various perspectives and judgment criteria, guiding learners to think for themselves. Encourage active participation with questions like "If you were the decision-maker in this situation?"',
        category: 'delivery',
      },
      {
        title: '소속 조직의 실제 상황을 연결하세요',
        titleEn: 'Connect to Learners\' Actual Organizational Context',
        content:
          '수강생들이 배운 내용을 자신의 조직에 바로 적용할 수 있도록, 교육 중 "우리 조직에서는?"이라는 질문을 자주 던지세요. 가이드라인 수립 실습에서도 가상의 조직보다 실제 소속 조직을 대상으로 작업하면 실무 전이 효과가 훨씬 큽니다. 다만, 민감한 내부 정보 공유에 주의하도록 사전에 안내합니다.',
        contentEn:
          'Frequently ask "What about our organization?" during training so learners can immediately apply what they learn. In guideline development exercises, working on their actual organization rather than a hypothetical one greatly improves transfer to practice. However, remind participants in advance to be careful about sharing sensitive internal information.',
        category: 'engagement',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. 나만의 비서, 종합 실습 및 Q&A (ab-assistant, 8시간)
  // ─────────────────────────────────────────────
  {
    topicId: 'ab-assistant',
    learningObjectives: [
      'AI 비서의 개념과 활용 가능 범위를 설명할 수 있다',
      '개인 업무 워크플로우를 분석하고 AI 비서 기능을 설계할 수 있다',
      'AI 도구를 활용하여 맞춤형 AI 비서를 구축할 수 있다',
      '업무 자동화와 AI 비서를 연동하여 효율적인 워크플로우를 구현할 수 있다',
    ],
    learningObjectivesEn: [
      'Explain the concept and applicable scope of AI assistants',
      'Analyze personal work workflows and design AI assistant features',
      'Build a customized AI assistant using AI tools',
      'Implement efficient workflows by integrating business automation with AI assistants',
    ],
    targetAudience: 'AI를 활용하여 업무 생산성을 높이고 싶은 직장인, 프리랜서, 소상공인 등 실무자',
    targetAudienceEn: 'Practitioners including office workers, freelancers, and small business owners who want to boost productivity using AI',
    prerequisites: '생성형 AI 기본 사용 경험 (ChatGPT, Claude 등), 프롬프트 작성 기초 지식',
    prerequisitesEn: 'Basic experience using generative AI (ChatGPT, Claude, etc.) and foundational prompt writing knowledge',
    teachingMethod: [
      '이론 강의 (20%) + 실습 (60%) + Q&A (20%)',
      '단계별 hands-on 실습 중심 운영',
      '개인 프로젝트를 통한 맞춤형 AI 비서 구축',
      '실시간 Q&A와 1:1 피드백 제공',
    ],
    teachingMethodEn: [
      'Lecture (20%) + Practice (60%) + Q&A (20%)',
      'Step-by-step hands-on practice-centered operation',
      'Building a customized AI assistant through personal projects',
      'Real-time Q&A and 1:1 feedback',
    ],

    modules: [
      {
        title: 'AI 비서의 개념과 활용 범위',
        titleEn: 'Concept and Scope of AI Assistants',
        content:
          'AI 비서는 자연어 처리 기반의 AI 모델을 활용하여 사용자의 업무를 보조하는 지능형 도구입니다. 단순한 질의응답을 넘어 일정 관리, 이메일 작성, 문서 요약, 데이터 분석, 아이디어 브레인스토밍 등 다양한 업무를 지원합니다. 현재 시장에는 ChatGPT, Claude, Gemini, Copilot 등 다양한 AI 비서 도구가 있으며, 각각의 특성과 강점이 다릅니다. 이 모듈에서는 AI 비서의 현재 기술 수준과 한계를 정확히 파악하고, 자신의 업무에 가장 적합한 AI 비서 활용 전략을 수립합니다.',
        contentEn:
          'An AI assistant is an intelligent tool that leverages NLP-based AI models to support users\' work tasks. Beyond simple Q&A, it assists with scheduling, email writing, document summarization, data analysis, brainstorming, and more. The current market offers various AI assistant tools including ChatGPT, Claude, Gemini, and Copilot, each with different characteristics and strengths. This module accurately assesses the current technical capabilities and limitations of AI assistants and establishes the most suitable AI assistant utilization strategy for your work.',
        keyPoints: [
          'AI 비서는 질의응답을 넘어 다양한 업무를 지원하는 지능형 도구이다',
          'ChatGPT, Claude, Gemini, Copilot 등 도구별 특성과 강점을 이해한다',
          'AI 비서의 현재 기술 수준과 한계를 정확히 파악한다',
          '개인 업무에 최적화된 AI 비서 활용 전략을 수립한다',
        ],
        keyPointsEn: [
          'AI assistants are intelligent tools supporting various tasks beyond Q&A',
          'Understand characteristics and strengths of tools like ChatGPT, Claude, Gemini, Copilot',
          'Accurately assess current technical capabilities and limitations of AI assistants',
          'Establish an AI assistant utilization strategy optimized for personal work',
        ],
      },
      {
        title: '워크플로우 분석 및 설계',
        titleEn: 'Workflow Analysis and Design',
        content:
          '효과적인 AI 비서를 만들기 위해서는 먼저 자신의 업무 워크플로우를 체계적으로 분석해야 합니다. 일일/주간/월간 업무를 시간대별로 기록하고, 반복적인 작업, 시간 소모가 큰 작업, AI가 보조할 수 있는 작업을 식별합니다. 업무 프로세스 맵을 작성하여 각 단계에서 AI가 개입할 수 있는 지점을 표시하고, 자동화 가능 여부와 우선순위를 평가합니다. 이 분석 결과를 바탕으로 AI 비서의 핵심 기능과 워크플로우를 설계하며, 현실적이고 달성 가능한 목표를 설정합니다.',
        contentEn:
          'To create an effective AI assistant, you must first systematically analyze your work workflow. Record daily/weekly/monthly tasks by time slot and identify repetitive tasks, time-consuming tasks, and tasks where AI can assist. Create a process map marking points where AI can intervene at each stage, and evaluate automation feasibility and priorities. Based on this analysis, design the core features and workflow of your AI assistant and set realistic, achievable goals.',
        keyPoints: [
          '업무 워크플로우를 시간대별로 기록하고 분석하는 것이 첫 단계이다',
          '반복 작업, 시간 소모 작업, AI 보조 가능 작업을 식별한다',
          '업무 프로세스 맵에 AI 개입 지점을 표시하여 설계한다',
          '현실적이고 달성 가능한 AI 비서 목표를 설정한다',
        ],
        keyPointsEn: [
          'Recording and analyzing work workflow by time slot is the first step',
          'Identify repetitive tasks, time-consuming tasks, and AI-assistable tasks',
          'Mark AI intervention points on the process map for design',
          'Set realistic and achievable AI assistant goals',
        ],
      },
      {
        title: 'AI 비서 기능 구현',
        titleEn: 'Implementing AI Assistant Features',
        content:
          '설계된 워크플로우를 기반으로 실제 AI 비서 기능을 구현합니다. ChatGPT의 Custom Instructions, Claude의 System Prompt, Gemini의 Gems 등을 활용하여 개인 맞춤형 AI 비서를 설정합니다. 자주 사용하는 업무별 프롬프트 템플릿을 작성하고, 이를 빠르게 호출할 수 있는 체계를 구축합니다. 이메일 작성 비서, 회의 준비 비서, 문서 검토 비서 등 업무 영역별 특화 비서를 만들고, 각 비서의 성격, 전문성, 응답 스타일을 세밀하게 조정합니다.',
        contentEn:
          'Implement actual AI assistant features based on the designed workflow. Set up personalized AI assistants using ChatGPT\'s Custom Instructions, Claude\'s System Prompt, Gemini\'s Gems, and similar features. Create frequently used prompt templates per task and build a system for quick access. Create specialized assistants for different work areas such as email writing, meeting preparation, and document review, and finely tune each assistant\'s personality, expertise, and response style.',
        keyPoints: [
          'Custom Instructions, System Prompt, Gems 등 도구별 개인화 기능을 활용한다',
          '업무별 프롬프트 템플릿을 작성하고 빠른 호출 체계를 구축한다',
          '업무 영역별 특화 AI 비서를 생성한다 (이메일, 회의, 문서 등)',
          '각 비서의 성격, 전문성, 응답 스타일을 세밀하게 조정한다',
        ],
        keyPointsEn: [
          'Leverage personalization features per tool: Custom Instructions, System Prompt, Gems',
          'Create task-specific prompt templates and build a quick access system',
          'Generate specialized AI assistants per work area (email, meetings, documents, etc.)',
          'Finely tune each assistant\'s personality, expertise, and response style',
        ],
      },
      {
        title: '업무 자동화 연동',
        titleEn: 'Business Automation Integration',
        content:
          'AI 비서의 효과를 극대화하기 위해 업무 자동화 도구와 연동하는 방법을 학습합니다. Zapier, Make(Integromat) 등의 자동화 플랫폼을 활용하여 AI 비서가 이메일 수신 시 자동 요약, 일정 등록 시 관련 자료 준비, 데이터 입력 시 자동 분석 등의 기능을 수행하도록 설정합니다. 또한 Notion, Google Workspace, Microsoft 365 등 기존 업무 도구와의 연동 방법을 다루며, API 없이도 활용 가능한 No-code 자동화 시나리오를 설계하고 구현합니다.',
        contentEn:
          'Learn how to integrate business automation tools to maximize AI assistant effectiveness. Using automation platforms like Zapier and Make (Integromat), configure the AI assistant to perform functions such as auto-summarizing incoming emails, preparing related materials upon schedule registration, and auto-analyzing upon data entry. Also cover integration with existing tools like Notion, Google Workspace, and Microsoft 365, and design and implement No-code automation scenarios that work without APIs.',
        keyPoints: [
          'Zapier, Make 등 자동화 플랫폼과 AI 비서를 연동한다',
          '이메일 자동 요약, 일정 자료 준비, 데이터 자동 분석 등을 구현한다',
          'Notion, Google Workspace, Microsoft 365 등 기존 도구와 통합한다',
          'No-code 방식으로 API 없이도 자동화 시나리오를 구현한다',
        ],
        keyPointsEn: [
          'Integrate AI assistants with automation platforms like Zapier and Make',
          'Implement auto email summarization, schedule material prep, and auto data analysis',
          'Integrate with existing tools like Notion, Google Workspace, and Microsoft 365',
          'Implement automation scenarios without APIs using No-code methods',
        ],
      },
      {
        title: '종합 실습 프로젝트',
        titleEn: 'Comprehensive Practice Project',
        content:
          '지금까지 배운 모든 내용을 종합하여 "나만의 AI 비서 시스템"을 완성하는 종합 프로젝트입니다. 개인 업무 분석 결과를 바탕으로 3개 이상의 AI 비서 기능을 구현하고, 최소 1개의 자동화 연동을 설정합니다. 프로젝트는 기획서 작성부터 구현, 테스트, 발표까지 전 과정을 포함하며, 완성된 AI 비서 시스템을 동료들에게 시연합니다. 프로젝트를 통해 실제 업무에 바로 활용할 수 있는 실질적인 산출물을 만들어, 교육 종료 후에도 지속적으로 발전시킬 수 있는 기반을 마련합니다.',
        contentEn:
          'This is a comprehensive project integrating everything learned to complete "My AI Assistant System." Based on personal work analysis, implement 3+ AI assistant features and set up at least 1 automation integration. The project covers the entire process from planning to implementation, testing, and presentation, with a live demo of the completed system. Through the project, create practical deliverables immediately applicable to real work, establishing a foundation for continuous improvement after training.',
        keyPoints: [
          '개인 업무 분석을 바탕으로 3개 이상의 AI 비서 기능을 구현한다',
          '최소 1개의 업무 자동화 연동을 설정한다',
          '기획서 작성부터 구현, 테스트, 발표까지 전 과정을 수행한다',
          '교육 후에도 지속 발전시킬 수 있는 실질적인 산출물을 만든다',
        ],
        keyPointsEn: [
          'Implement 3+ AI assistant features based on personal work analysis',
          'Set up at least 1 business automation integration',
          'Perform the entire process from planning to implementation, testing, and presentation',
          'Create practical deliverables for continuous improvement after training',
        ],
      },
      {
        title: 'Q&A 및 피드백',
        titleEn: 'Q&A and Feedback',
        content:
          '전체 교육 과정을 마무리하며, 수강생들의 질문에 심도 있게 답변하고 개별 프로젝트에 대한 상세 피드백을 제공합니다. AI 비서 활용 시 자주 겪는 문제와 해결 방안을 공유하고, 향후 학습 로드맵을 제시합니다. 수강생 간 네트워킹을 통해 서로의 AI 비서 활용 노하우를 공유하며, 교육 이후에도 지속적으로 학습하고 성장할 수 있는 커뮤니티와 자원을 안내합니다. 최종 설문조사를 통해 교육 만족도와 개선 사항을 수집합니다.',
        contentEn:
          'Wrapping up the entire training, we provide in-depth answers to learners\' questions and detailed feedback on individual projects. Share common problems and solutions when using AI assistants and present a future learning roadmap. Through networking among participants, share AI assistant know-how with each other, and introduce communities and resources for continued learning and growth after training. Collect satisfaction and improvement feedback through a final survey.',
        keyPoints: [
          '개별 프로젝트에 대한 1:1 상세 피드백을 제공한다',
          'AI 비서 활용 시 자주 겪는 문제와 해결 방안을 공유한다',
          '향후 학습 로드맵과 추가 학습 자원을 안내한다',
          '수강생 간 네트워킹과 지속 학습 커뮤니티를 형성한다',
        ],
        keyPointsEn: [
          'Provide 1:1 detailed feedback on individual projects',
          'Share common problems and solutions for AI assistant usage',
          'Guide future learning roadmap and additional learning resources',
          'Form networking among learners and a continuous learning community',
        ],
      },
    ],

    practices: [
      {
        title: '나의 업무 워크플로우 맵 작성',
        titleEn: 'Create My Work Workflow Map',
        type: 'individual',
        duration: '50분',
        durationEn: '50 minutes',
        description:
          '개인의 일일 업무를 시간대별로 기록하고, AI가 보조할 수 있는 영역을 식별하여 워크플로우 맵을 완성합니다. 이 맵은 이후 AI 비서 설계의 기초 자료로 활용됩니다.',
        descriptionEn:
          'Record your daily tasks by time slot, identify areas where AI can assist, and complete a workflow map. This map serves as the foundational material for subsequent AI assistant design.',
        steps: [
          '지난 1주간의 업무를 시간대별로 상세하게 기록한다',
          '각 업무를 "반복적", "창의적", "의사결정", "커뮤니케이션"으로 분류한다',
          '각 업무별 소요 시간과 AI 보조 가능성을 평가한다 (상/중/하)',
          '워크플로우 맵을 시각적으로 작성하고 AI 개입 지점을 표시한다',
          'AI 비서 구축 우선순위를 정하고 기대 효과를 산출한다',
        ],
        stepsEn: [
          'Record the past week\'s tasks in detail by time slot',
          'Classify each task as "repetitive," "creative," "decision-making," or "communication"',
          'Evaluate time spent and AI assistance potential for each task (high/medium/low)',
          'Create a visual workflow map and mark AI intervention points',
          'Prioritize AI assistant construction and estimate expected benefits',
        ],
        tools: ['Notion', 'Miro', 'Google Sheets'],
      },
      {
        title: '맞춤형 AI 비서 구축 실습',
        titleEn: 'Customized AI Assistant Building Practice',
        type: 'individual',
        duration: '90분',
        durationEn: '90 minutes',
        description:
          '워크플로우 분석 결과를 바탕으로 ChatGPT Custom Instructions 또는 Claude System Prompt를 활용하여 개인 맞춤형 AI 비서를 실제로 구축합니다.',
        descriptionEn:
          'Based on workflow analysis results, actually build a personalized AI assistant using ChatGPT Custom Instructions or Claude System Prompt.',
        steps: [
          '워크플로우 맵에서 AI 비서가 담당할 상위 3개 업무를 선정한다',
          '각 업무에 최적화된 시스템 프롬프트(Custom Instructions)를 설계한다',
          'AI 도구에 시스템 프롬프트를 설정하고 테스트 시나리오를 실행한다',
          '결과물의 품질을 평가하고 시스템 프롬프트를 반복 개선한다',
          '최종 AI 비서 설정 내용을 문서화하고 활용 매뉴얼을 작성한다',
        ],
        stepsEn: [
          'Select the top 3 tasks from the workflow map for the AI assistant to handle',
          'Design system prompts (Custom Instructions) optimized for each task',
          'Configure system prompts in the AI tool and run test scenarios',
          'Evaluate output quality and iteratively improve system prompts',
          'Document the final AI assistant configuration and create a usage manual',
        ],
        tools: ['ChatGPT', 'Claude', 'Gemini', 'Notion'],
      },
      {
        title: 'AI 비서 + 자동화 연동 팀 프로젝트',
        titleEn: 'AI Assistant + Automation Integration Team Project',
        type: 'project',
        duration: '120분',
        durationEn: '120 minutes',
        description:
          '팀별로 특정 업무 시나리오를 선정하고, AI 비서와 자동화 도구를 연동한 통합 워크플로우를 설계·구현하는 종합 프로젝트입니다.',
        descriptionEn:
          'A comprehensive project where teams select specific work scenarios and design and implement integrated workflows combining AI assistants with automation tools.',
        steps: [
          '팀별로 해결할 업무 시나리오를 선정한다 (예: 주간보고 자동화, 고객 문의 처리)',
          '시나리오의 전체 워크플로우를 설계하고 AI 비서와 자동화 역할을 분담한다',
          'AI 비서 프롬프트를 작성하고 Zapier/Make를 활용한 자동화 흐름을 구축한다',
          '통합 시스템을 테스트하고 발견된 문제를 수정한다',
          '팀별 시연 및 발표를 진행하고, 상호 피드백을 통해 개선 아이디어를 교환한다',
        ],
        stepsEn: [
          'Each team selects a work scenario to solve (e.g., weekly report automation, customer inquiry processing)',
          'Design the full workflow and assign roles between AI assistant and automation',
          'Write AI assistant prompts and build automation flows using Zapier/Make',
          'Test the integrated system and fix discovered issues',
          'Conduct team demos and presentations, exchange improvement ideas through mutual feedback',
        ],
        tools: ['ChatGPT', 'Claude', 'Zapier', 'Make', 'Notion', 'Google Workspace'],
      },
    ],

    cases: [
      {
        title: 'LG전자 마케팅팀의 AI 비서 도입기',
        titleEn: 'LG Electronics Marketing Team: AI Assistant Adoption Story',
        industry: '제조/마케팅',
        industryEn: 'Manufacturing/Marketing',
        summary:
          'LG전자 마케팅팀은 콘텐츠 생산성 향상과 글로벌 마케팅 효율화를 위해 팀 전원이 개인 맞춤형 AI 비서를 구축하는 프로젝트를 진행했습니다.',
        summaryEn:
          'The LG Electronics marketing team conducted a project where all team members built personalized AI assistants to improve content productivity and global marketing efficiency.',
        challenge:
          '30개국 이상에 대한 마케팅 콘텐츠를 생산해야 하지만, 팀원 수는 한정되어 있어 콘텐츠 생산 속도와 품질 관리에 어려움을 겪고 있었습니다. 특히 다국어 콘텐츠 현지화에 많은 시간이 소요되었습니다.',
        challengeEn:
          'The team needed to produce marketing content for 30+ countries, but with limited team members, struggled with content production speed and quality control. Localization of multilingual content was particularly time-consuming.',
        solution:
          '팀원 각자의 업무에 최적화된 AI 비서를 구축했습니다. 카피라이터는 다국어 카피 생성 비서를, 기획자는 시장 조사 비서를, 디자이너는 크리에이티브 브리프 비서를 각각 맞춤 설정했습니다. Zapier를 통해 콘텐츠 승인 워크플로우를 자동화하고, Notion과 연동하여 콘텐츠 관리 시스템을 구축했습니다.',
        solutionEn:
          'Each team member built AI assistants optimized for their work. Copywriters set up multilingual copy generation assistants, planners set up market research assistants, and designers set up creative brief assistants. Content approval workflows were automated through Zapier, and a content management system was built integrated with Notion.',
        result:
          '콘텐츠 생산 속도가 3배 향상되었고, 다국어 현지화 소요 시간이 70% 단축되었습니다. 월간 마케팅 콘텐츠 생산량이 150건에서 450건으로 증가했으며, 팀원들의 업무 만족도가 크게 향상되었습니다.',
        resultEn:
          'Content production speed improved 3x, and multilingual localization time was reduced by 70%. Monthly marketing content production increased from 150 to 450 pieces, and team member job satisfaction significantly improved.',
      },
      {
        title: '경기도교육청 교무행정 AI 비서 시범 운영',
        titleEn: 'Gyeonggi Provincial Office of Education: Administrative AI Assistant Pilot',
        industry: '교육/행정',
        industryEn: 'Education/Administration',
        summary:
          '경기도교육청은 교사들의 행정 업무 부담을 줄이고 수업 준비에 집중할 수 있도록 교무행정 AI 비서 시범 사업을 진행했습니다.',
        summaryEn:
          'Gyeonggi Provincial Office of Education conducted an administrative AI assistant pilot to reduce teachers\' administrative burden and allow them to focus on lesson preparation.',
        challenge:
          '교사들이 수업 준비보다 행정 업무(공문 작성, 성적 처리, 학부모 안내문, 행사 계획 등)에 더 많은 시간을 소비하고 있었으며, 이로 인해 수업 질 저하와 교사 번아웃이 심각한 문제로 대두되었습니다.',
        challengeEn:
          'Teachers were spending more time on administrative tasks (official document writing, grade processing, parent notices, event planning) than lesson preparation, leading to declining lesson quality and serious teacher burnout.',
        solution:
          '50개 시범 학교 교사 500명에게 AI 비서 구축 교육을 실시하고, 교무행정 특화 프롬프트 템플릿 라이브러리를 제공했습니다. 공문 초안 작성, 가정통신문 생성, 학급 알림장 작성, 성적 코멘트 생성 등 10가지 핵심 행정 업무에 대한 AI 비서를 표준화하여 배포했습니다.',
        solutionEn:
          'Conducted AI assistant building training for 500 teachers at 50 pilot schools and provided a prompt template library specialized for educational administration. Standardized and distributed AI assistants for 10 core administrative tasks including official document drafting, parent newsletter generation, class notification writing, and grade comment generation.',
        result:
          '교사의 행정 업무 시간이 주당 평균 8시간에서 3시간으로 단축되었고, 확보된 시간의 85%를 수업 준비와 학생 지도에 재투자했습니다. 교사 만족도 92%, 학부모 만족도 88%를 기록하여 전국 확대 운영이 결정되었습니다.',
        resultEn:
          'Teachers\' administrative work time was reduced from an average of 8 hours to 3 hours per week, with 85% of saved time reinvested in lesson preparation and student guidance. With 92% teacher satisfaction and 88% parent satisfaction, nationwide expansion was approved.',
      },
    ],

    tips: [
      {
        title: '수강생 수준 편차에 대비하세요',
        titleEn: 'Prepare for Varying Skill Levels Among Learners',
        content:
          '8시간 종합 실습 과정에서는 수강생 간 AI 활용 수준 편차가 크게 나타날 수 있습니다. 기본 과제와 심화 과제를 분리하여 준비하고, 빠르게 진행하는 수강생에게는 추가 챌린지를 제공하세요. 느린 수강생에게는 단계별 체크리스트를 제공하여 자기 속도로 진행할 수 있게 하고, 교실 내 "AI 서포터" 역할의 동료 멘토링 체계를 구성하면 효과적입니다.',
        contentEn:
          'In an 8-hour comprehensive practice course, significant skill level variance among learners may appear. Prepare basic and advanced tasks separately and provide additional challenges for fast learners. Give slower learners step-by-step checklists so they can progress at their own pace, and establishing an in-class peer mentoring system with "AI Supporter" roles is effective.',
        category: 'preparation',
      },
      {
        title: '실습 중간중간에 "쇼케이스 타임"을 넣으세요',
        titleEn: 'Insert "Showcase Time" Throughout Practice Sessions',
        content:
          '긴 실습 시간 동안 수강생들이 지치지 않도록, 30~40분마다 2~3명의 수강생이 자신의 AI 비서를 간단히 시연하는 "쇼케이스 타임"을 배치하세요. 다른 사람의 창의적인 활용법에서 영감을 받아 자신의 비서를 개선할 수 있고, 건전한 경쟁 분위기가 형성되어 몰입도가 유지됩니다.',
        contentEn:
          'To prevent fatigue during long practice sessions, schedule "Showcase Time" every 30-40 minutes where 2-3 learners briefly demonstrate their AI assistants. Participants gain inspiration from others\' creative approaches to improve their own assistants, and a healthy competitive atmosphere maintains engagement.',
        category: 'engagement',
      },
      {
        title: '실습 결과물을 즉시 업무에 적용하도록 유도하세요',
        titleEn: 'Encourage Immediate Application of Practice Results to Work',
        content:
          '교육 마지막 30분에 "내일 바로 쓸 수 있는 AI 비서 기능 TOP 3"를 정리하는 시간을 반드시 넣으세요. 교육에서 만든 AI 비서를 다음 날 출근해서 바로 사용하겠다는 구체적 계획을 세우게 하면, 학습 전이 효과가 극대화됩니다. 1주 후 후속 이메일이나 설문으로 실제 활용 현황을 확인하는 것도 효과적입니다.',
        contentEn:
          'In the last 30 minutes of training, always include time to organize "TOP 3 AI assistant features I can use starting tomorrow." Having learners make concrete plans to use their AI assistants immediately upon returning to work maximizes learning transfer. Following up with an email or survey one week later to check actual usage status is also effective.',
        category: 'assessment',
      },
    ],
  },
]

registerContent(aiBasicsContent)
export default aiBasicsContent
