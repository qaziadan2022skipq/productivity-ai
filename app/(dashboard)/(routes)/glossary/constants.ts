import { title } from "process";

export const methods = [
  {
    title: "Ask Questions Method",
    description:
      "Ensures ChatGPT fully understands your task and has all the information required to complete it, leading to the most relevant answers.",
    example:
      "Write 500 words of sales copy for a website landing page following the PAS framework. The product I am selling is [insert product here]",
  },
  {
    title: "Prompt Generator",
    description:
      "Refine your prompts iteratively to craft the best possible prompt for your needs.",
    steps: [
      "First, ask what the prompt should be about.",
      "Generate a revised prompt, suggestions, and questions for further refinement.",
      "Iterate until the prompt is optimized.",
    ],
  },
  {
    title: "Break It Down Method",
    description:
      "Breaks down larger writing projects into smaller chunks, making focus and revisions easier.",
    example:
      "I want you to write an ebook on [dental hygiene]. Please start by drafting me 10 chapter ideas.",
  },
  {
    title: "Primer Method",
    description:
      "Feed ProdigyAI some source text to analyze before prompting it further. Useful for copywriting, document analysis, and editing.",
  },
  {
    title: "GPT Tutor",
    description:
      "Learn about any topic in a structured, interactive way from an expert AI tutor.",
    details:
      "GPT Tutor can generate lesson plans, projects, and explanations based on your learning needs.",
  },
  {
    title: "Writing a cover letter",
    description: `Here is my CV [paste CV]. I am applying for a job as [insert job title]. Can you please provide write a cover letter that highlights my skills and my suitability for the following job description: [job description]? I want to come across as [eg. professional/experienced/easy going].
Draft a persuasive cover letter in 150 words or less highlighting my qualifications and enthusiasm for the [position] at [company] using my resume achievements below.

Create a compelling cover letter that explains why I am the best fit for the [position] at [company]. Write the letter using the StoryBrand Framework.

Compose a professional cover letter demonstrating how my abilities align with the requirements for the [position] at [company]. Use the information below as a guide.`,
  },
  {
    title: "Create a business plan",
    description: `Write a business plan for my tech startup [name of the company] that aims to disrupt the [industry/sector] by offering [innovative product/service]. Include an executive summary, market analysis, competitive analysis, product development roadmap, financial projections, and company mission and vision.
Develop a marketing plan for my restaurant [name of the restaurant] that specializes in [type of cuisine] and is located in [location]. The goal of the marketing plan is to increase foot traffic and revenue by [specific goals]. Include a target audience analysis, competitive analysis, marketing mix strategies, budget allocation, and marketing plan implementation timeline.
Draft a business plan for my social enterprise [name of the enterprise] that aims to solve [social/environmental issue] by providing [solution]. The enterprise is a [for-profit/nonprofit] organization and the business plan should include an executive summary, mission and vision statement, impact assessment, financial projections, and strategies to achieve sustainability and scalability.`,
  },
];
