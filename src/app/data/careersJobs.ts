/** Titled bullet blocks shown on the job detail page after About Us / Role Overview. */
export type JobDetailSection = {
  title: string;
  items: string[];
};

export type CareerJob = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  /** Short summary for listing cards */
  description: string;
  /** Longer copy for detail page */
  aboutUs: string;
  roleOverview: string;
  detailSections: JobDetailSection[];
  howToApply: string;
  /** Shown on careers list + job detail when hiring is winding down or closed */
  listingStatus?: "open" | "closing_soon" | "closed";
};

export const careersJobs: CareerJob[] = [
  {
    id: 1,
    title: "Chief Technology Officer",
    department: "Engineering",
    location: "Hybrid",
    type: "Full-Time",
    listingStatus: "closed",
    description:
      "Lead our technology strategy, platform development, and engineering culture. Equity-based executive role at a high-growth startup.",
    aboutUs:
      "JOMS, short for Just One More Step, combines creativity and technology to develop innovative products that elevate customer experiences. With a focus on technology, we design and deliver premium products and solutions across diverse industries. Our mission is to create meaningful impact and lasting value by redefining how customers connect with the products and services they love.",
    roleOverview:
      "We are seeking an experienced Chief Technology Officer to lead our technology strategy, oversee platform development, and ensure scalability and innovation. As the CTO, you will be a key member of the executive team, driving technological decisions, managing the development lifecycle, and fostering a high-performance tech culture. This equity-based role offers an opportunity to be part of a disruptive startup with significant growth potential.",
    detailSections: [
      {
        title: "Key Responsibilities",
        items: [
          "Technology Leadership: Define the technical vision and roadmap aligned with business goals.",
          "Platform Development: Oversee the development of our cross-platform application (web and mobile) using Flutter, React, or other relevant frameworks.",
          "Scalability and Performance: Architect scalable and high-performance systems capable of handling a large user base.",
          "Hands-on Development: Actively participate in coding, debugging, reviews and technical problem-solving when required.",
          "Team Building: Recruit, mentor, and lead a world-class tech team, fostering a culture of collaboration, innovation, and excellence.",
          "Product Innovation: Collaborate with product, design, and business teams to implement cutting-edge features such as advanced analytics, live stream shopping, CRM tools, and gamified loyalty programs.",
          "Data Security: Ensure robust data protection and compliance with relevant regulations.",
          "Vendor Management: Evaluate and manage relationships with external vendors and technology partners.",
          "Strategic Partnerships: Collaborate with stakeholders to explore AI, ML, and other emerging technologies to enhance the platform.",
        ],
      },
      {
        title: "Requirements",
        items: [
          "8 to 12 years in technology leadership roles, with a proven track record of scaling tech startups or developing consumer-facing platforms.",
          "Proficient in Flutter, Dart, Node.js, ReactJS, Firebase, AWS, Kubernetes, and CI/CD pipelines.",
          "Prior experience in startup environments, with hands-on exposure to both technical and managerial aspects.",
          "Strong understanding of Agile methodologies and tools like Jira or Asana.",
          "Exceptional analytical and problem-solving skills, with the ability to think strategically and tactically.",
          "Ability to align technology with business strategies and future trends.",
          "Excellent communication skills to articulate technical concepts to non-technical stakeholders.",
        ],
      },
      {
        title: "Location",
        items: [
          "Candidates must be based in Bangalore for seamless collaboration and team management.",
        ],
      },
    ],
    howToApply:
      "Submit your resume and a brief cover letter highlighting your interest in the role and relevant experience to hiring@joms.in. We are an equal-opportunity employer and welcome candidates from diverse backgrounds to apply.",
  },
  {
    id: 2,
    title: "Brand Marketing Manager",
    department: "Branding & Marketing",
    location: "Hybrid",
    type: "Full-Time",
    description:
      "Own brand positioning, campaigns, and growth across channels. Hybrid of branding and marketing management in a B2C-focused environment.",
    aboutUs:
      "JOMS, short for Just One More Step, combines creativity and technology to develop innovative products that elevate customer experiences. With a focus on technology, we design and deliver premium products and solutions across diverse industries. Our mission is to create meaningful impact and lasting value by redefining how customers connect with the products and services they love.",
    roleOverview:
      "This role is a hybrid of Branding and Marketing Management, requiring a dynamic professional who can build, position, and grow the brand while driving marketing campaigns that increase awareness, engagement, and conversions. The ideal candidate will be responsible for crafting compelling brand narratives, managing strategic partnerships, executing performance marketing initiatives, and ensuring cohesive brand messaging across all channels.",
    detailSections: [
      {
        title: "Qualifications",
        items: [
          "3 to 6 years of experience in brand marketing, digital marketing, or growth marketing, preferably in B2C space.",
          "Bachelor’s or Master’s degree in Marketing, Design or a related field.",
          "Excellent verbal and written communication skills with experience in stakeholder management.",
          "Ability to craft compelling brand narratives and execute high-impact marketing strategies.",
          "Strong understanding of SEO, SEM, paid social media, influencer marketing, and content marketing.",
          "Blend of creativity and analytical thinking, capable of crafting engaging campaigns while measuring their effectiveness.",
          "Hands-on experience with Google Analytics, Facebook Ads Manager, HubSpot, Canva, Adobe Creative Suite, and marketing automation tools.",
        ],
      },
      {
        title: "Location",
        items: [
          "Candidates must be based in Bangalore for seamless collaboration with internal teams and partners.",
        ],
      },
    ],
    howToApply:
      "Submit your resume and a brief cover letter highlighting your interest in the role and relevant experience to hiring@joms.in. We are an equal-opportunity employer and welcome candidates from diverse backgrounds to apply.",
  },
  {
    id: 3,
    title: "User Interface Designer, Internship",
    department: "Product Design",
    location: "Hybrid",
    type: "Internship",
    listingStatus: "closed",
    description:
      "Collaborate on intuitive UI for web and mobile. Wireframes, design system, and user research in a real product environment.",
    aboutUs:
      "JOMS (Just One More Step) Commerce and Technologies Private Limited, formed with a vision to create significant social impact by creating most relevant and innovative consumer products and services. We are a team of passionate individuals who are united by the courage and commitment to create real impact by building products that is helpful for customers and enriches their experiences across different aspects of life.",
    roleOverview:
      "As a UI Designer Intern, you will collaborate with our design and development teams to create intuitive, visually appealing, and user-friendly interfaces for our web and mobile applications. This role offers an excellent opportunity to gain hands-on experience in UI/UX design while contributing to impactful projects.",
    detailSections: [
      {
        title: "Key Responsibilities",
        items: [
          "Design wireframes, prototypes, and high-fidelity mockups for web and mobile applications.",
          "Collaborate with product managers and developers to translate user needs into elegant and functional interfaces.",
          "Maintain and evolve the design system to ensure consistency across platforms.",
          "Conduct user research and usability testing to refine design solutions.",
          "Stay updated on the latest UI/UX design trends, tools, and technologies.",
          "Provide input on visual branding elements, including icons, typography, and color schemes.",
        ],
      },
      {
        title: "Qualifications",
        items: [
          "Education: Enrolled in or recently graduated from a degree program in Design, Human-Computer Interaction, or a related field.",
          "Proficiency in design tools like Figma, Sketch, Adobe XD, or similar software.",
          "Basic understanding of responsive design principles and usability guidelines.",
          "A strong portfolio showcasing UI design projects (academic or professional).",
          "Attention to detail, creativity, and a user-centered design approach.",
          "Excellent communication and collaboration skills.",
          "Knowledge of front-end development (HTML, CSS, JavaScript) is a plus.",
        ],
      },
      {
        title: "Perks and Benefits",
        items: [
          "Certificate of Completion.",
          "Opportunity to work on real-world projects and enhance your portfolio.",
          "Potential to transition into a full-time role based on performance.",
        ],
      },
    ],
    howToApply:
      "Please submit your resume and portfolio to hiring@joms.in.",
  },
  {
    id: 4,
    title: "Graphic Designer Intern",
    department: "Product Design",
    location: "Hybrid",
    type: "Internship",
    description:
      "Create graphics, social assets, and video content. Work with marketing to elevate brand identity in a fast-paced startup.",
    aboutUs:
      "JOMS (Just One More Step) Commerce and Technologies Private Limited, formed with a vision to create significant social impact by creating most relevant and innovative consumer products and services. We are a team of passionate individuals who are united by the courage and commitment to create real impact by building products that is helpful for customers and enriches their experiences across different aspects of life.",
    roleOverview:
      "As a Graphic Designer Intern, you will bring creative ideas to life through compelling visuals and engaging video content. You’ll work closely with the marketing and content teams to design digital assets, edit videos, and craft visuals that captivate audiences and elevate brand identity.",
    detailSections: [
      {
        title: "Key Responsibilities",
        items: [
          "Create high-quality graphics, illustrations, and social media assets tailored to our brand.",
          "Edit and produce engaging video content for social media platforms, marketing campaigns, and product promotions.",
          "Collaborate with the marketing team to brainstorm creative concepts and ensure alignment with brand guidelines.",
          "Assist in developing animations, motion graphics, and visual effects.",
          "Optimise graphics and videos for web and social media platforms to ensure optimal performance.",
          "Stay updated on design trends, video editing techniques, and relevant tools.",
        ],
      },
      {
        title: "Qualifications",
        items: [
          "Education: Enrolled in or recently graduated from a degree/diploma program in Graphic Design, Animation, Visual Arts, or a related field.",
          "Proficiency in design tools such as Adobe Photoshop, Illustrator, and Canva.",
          "Hands-on experience with video editing tools like Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve is preferred.",
          "Knowledge of motion graphics tools like Adobe After Effects is a strong plus.",
          "Strong attention to detail and a creative mindset with a portfolio showcasing design and video editing projects.",
          "Basic understanding of social media platforms and how to design for them.",
          "Excellent time management skills and the ability to work on multiple projects simultaneously.",
        ],
      },
      {
        title: "Perks and Benefits",
        items: [
          "Certificate of Completion.",
          "Opportunity to enhance your portfolio with real-world projects.",
          "Exposure to working in a fast-paced startup environment.",
          "Potential to transition into a full-time role based on performance.",
        ],
      },
    ],
    howToApply: "Submit your resume and portfolio to hiring@joms.in.",
  },
  {
    id: 5,
    title: "Finance Interns",
    department: "Finance",
    location: "Hybrid",
    type: "Internship",
    description:
      "Support financial planning, analysis, and reporting. Build foundations in startup finance alongside the finance team.",
    aboutUs:
      "JOMS (Just One More Step) Commerce and Technologies Private Limited, formed with a vision to create significant social impact by creating most relevant and innovative consumer products and services. We are a team of passionate individuals who are united by the courage and commitment to create real impact by building products that is helpful for customers and enriches their experiences across different aspects of life.",
    roleOverview:
      "As a Finance Intern, you will work closely with the finance team to support financial planning, analysis, and reporting activities. This internship offers an excellent opportunity to develop a strong foundation in financial management while contributing to meaningful projects in a fast-paced startup environment.",
    detailSections: [
      {
        title: "Key Responsibilities",
        items: [
          "Assist in preparing and analysing financial statements and reports.",
          "Support the budgeting and forecasting process by gathering and interpreting data.",
          "Conduct research and analysis on market trends and financial benchmarks.",
          "Collaborate with the finance team to manage accounts payable/receivable and track expenses.",
          "Help ensure compliance with financial regulations and company policies.",
          "Provide input on cash flow management and cost optimisation strategies.",
          "Contribute to ad hoc financial projects and presentations as required.",
        ],
      },
      {
        title: "Qualifications",
        items: [
          "Education: Enrolled in or recently graduated from a degree program in Finance, Accounting, Economics, or a related field.",
          "Strong analytical skills and attention to detail.",
          "Proficiency in MS Excel and familiarity with accounting software (e.g., QuickBooks, Tally) is a plus.",
          "Excellent verbal and written communication skills.",
          "Ability to manage multiple tasks and meet deadlines in a fast-paced environment.",
          "A proactive attitude and eagerness to learn about financial operations in a startup setting.",
        ],
      },
      {
        title: "Perks and Benefits",
        items: [
          "Certificate of Completion.",
          "Hands-on experience with financial tools and practices.",
          "Opportunity to contribute to strategic financial decisions and learn about startup finance.",
          "Potential to transition into a full-time role based on performance.",
        ],
      },
    ],
    howToApply:
      "Submit your resume and a brief cover letter highlighting your interest in the role and any relevant coursework or experience to hiring@joms.in.",
  },
  {
    id: 6,
    title: "Digital Marketing Intern",
    department: "Branding & Marketing",
    location: "Hybrid",
    type: "Internship",
    description:
      "Support campaigns, social, SEO, and analytics. Hands-on digital marketing in a mission-driven consumer tech company.",
    aboutUs:
      "JOMS Commerce and Technologies Pvt. Ltd. is driven by a bold vision to create products and services that make a real difference in people’s lives. At JOMS, we are not just building businesses, we are crafting meaningful experiences that solve real-world problems and enrich everyday living. United by passion, courage, and commitment, our diverse team of innovators is dedicated to designing solutions that are both relevant and impactful. From cutting-edge consumer products to services that inspire positive change, we aim to deliver excellence while staying true to our values of innovation, customer focus, and social responsibility. At JOMS, every step we take is about making life better, one product, one service, and one idea at a time.",
    roleOverview:
      "As a Digital Marketing Intern, you will work closely with our marketing team to drive online visibility, engagement, and growth across multiple channels. You will gain hands-on experience in digital campaigns, social media management, content creation, and performance analytics.",
    detailSections: [
      {
        title: "Key Responsibilities",
        items: [
          "Assist in creating and managing digital marketing campaigns across platforms (Facebook, Instagram, Google Ads, LinkedIn).",
          "Develop and schedule engaging content for social media, blogs, and newsletters.",
          "Support SEO optimization efforts by researching relevant keywords and implementing strategies.",
          "Monitor and report on digital campaign performance metrics (traffic, engagement, conversions).",
          "Help plan and execute influencer marketing campaigns.",
          "Collaborate with cross-functional teams to align messaging and branding.",
          "Stay updated on digital marketing trends and emerging tools.",
        ],
      },
      {
        title: "Qualifications",
        items: [
          "Education: Enrolled in or recently graduated from a bachelor’s degree program in Marketing, Business, Communications, or a related field.",
          "Strong verbal and written communication skills.",
          "Basic understanding of social media platforms and digital advertising tools.",
          "Proficiency in MS Office Suite (Word, Excel, PowerPoint).",
          "Knowledge of tools like Canva, Google Analytics, or any marketing platforms (a plus).",
          "Ability to work independently, take initiative, and manage time effectively.",
          "A passion for marketing, content creation, and social media trends.",
        ],
      },
      {
        title: "Perks and Benefits",
        items: [
          "Certificate of Completion.",
          "Opportunity to work on real-world projects and build a strong portfolio.",
          "Potential to transition into a full-time role based on performance.",
        ],
      },
    ],
    howToApply:
      "Submit your resume and a brief cover letter highlighting your interest in the role and relevant experience to hiring@joms.in.",
  },
  {
    id: 7,
    title: "Flutter Developer, Internship",
    department: "Engineering",
    location: "Hybrid",
    type: "Internship",
    listingStatus: "closed",
    description:
      "Build cross-platform mobile apps with Flutter and Dart. Pair with design and backend on real features—with flexible work options.",
    aboutUs:
      "JOMS, short for Just One More Step, combines creativity and technology to develop innovative products that elevate customer experiences. Our flagship projects include a range of cutting-edge products and solutions, such as ecommerce marketplace, premium fashion brands, curated luxury experiences, and much more.",
    roleOverview:
      "As a Flutter Developer Intern, you will contribute to designing, developing, and maintaining high-performance mobile applications. You’ll work closely with the tech team to build cross-platform apps for iOS and Android, ensuring an exceptional user experience and top-notch performance.",
    detailSections: [
      {
        title: "Key Responsibilities",
        items: [
          "Develop and maintain cross-platform mobile applications using Flutter and Dart.",
          "Collaborate with UI/UX designers to translate wireframes and mockups into responsive, user-friendly interfaces.",
          "Integrate REST APIs, third-party libraries, and backend services.",
          "Optimize application performance for scalability and responsiveness.",
          "Debug and resolve technical issues, ensuring app stability and functionality.",
          "Participate in code reviews to maintain high coding standards and improve code quality.",
          "Stay updated with the latest Flutter features, tools, and best practices.",
        ],
      },
      {
        title: "Qualifications",
        items: [
          "Education: Enrolled in or recently graduated from a degree/diploma program in Computer Science, Information Technology, or a related field.",
          "Strong understanding of Flutter, Dart, and mobile app development lifecycle.",
          "Familiarity with state management tools such as Provider, Riverpod, or Bloc.",
          "Basic knowledge of integrating RESTful APIs and working with JSON data.",
          "Experience with version control systems like Git.",
          "Familiarity with IDEs such as Android Studio or Visual Studio Code is a plus.",
          "Understanding of Material Design principles and app UI/UX best practices.",
          "Knowledge of Firebase (Firestore, Authentication, Analytics) is a plus.",
          "Strong problem-solving skills, attention to detail, and a proactive attitude.",
        ],
      },
      {
        title: "Perks and Benefits",
        items: [
          "Internship Experience Certificate for successfully completing the program as per policy.",
          "On-site, Hybrid, Remote working option to accommodate your academic commitments.",
          "Full-time role offer based on your performance and company’s requirements.",
          "Training and Workshops are held periodically for up-skilling.",
          "Join us at industry events, with all costs covered for you to gain valuable experience.",
          "Travel Reimbursement related to internship activities based on your role.",
          "Free Food and Beverages while working at the office, any time of the day.",
          "Leave Policy to cater to any health or life situations, upon approval.",
          "Public Holidays in accordance with company policy.",
        ],
      },
    ],
    howToApply:
      "Submit your resume and a brief cover letter highlighting your interest in the role and relevant experience to hello@joms.in. We are an equal-opportunity employer and welcome candidates from diverse backgrounds to apply.",
  },
  {
    id: 8,
    title: "Video Editor",
    department: "Branding & Marketing",
    location: "Hybrid",
    type: "Full-Time",
    description:
      "Edit short-form and long-form content using Premiere Pro or DaVinci Resolve, plus AI-assisted workflows with Runway, Descript, and more.",
    aboutUs:
      "JOMS, short for Just One More Step, combines creativity and technology to develop innovative products that elevate customer experiences. With a focus on technology, we design and deliver premium products and solutions across diverse industries.",
    roleOverview:
      "We are looking for a Video Editor experienced in both traditional editing and AI-assisted workflows. You must be proficient in Premiere Pro or DaVinci Resolve, capable of editing short-form and long-form content, and experienced with AI tools such as Runway, Descript, ChatGPT, and ElevenLabs for automation, captions, scripting, and content enhancement.",
    detailSections: [
      {
        title: "Requirements",
        items: [
          "Strong experience in traditional video editing and modern AI-assisted workflows.",
          "Proficient in Premiere Pro or DaVinci Resolve.",
          "Comfortable editing both short-form and long-form content.",
          "Hands-on experience with AI tools such as Runway, Descript, ChatGPT, and ElevenLabs for automation, captions, scripting, and content enhancement.",
        ],
      },
    ],
    howToApply:
      "Submit your resume and portfolio or sample reel to hiring@joms.in. We are an equal-opportunity employer and welcome candidates from diverse backgrounds to apply.",
  },
];

export function isJobListingOpen(job: CareerJob): boolean {
  return job.listingStatus !== "closed";
}

export function getOpenCareersJobs(): CareerJob[] {
  return careersJobs.filter(isJobListingOpen);
}

export function getCareerJobById(id: number): CareerJob | undefined {
  return careersJobs.find((j) => j.id === id);
}

export function getInternshipJobs(): CareerJob[] {
  return getOpenCareersJobs().filter((j) => j.type === "Internship");
}
