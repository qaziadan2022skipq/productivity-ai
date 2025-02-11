import * as z from "zod";

export const formSchema = z.object({
  industry: z.string().min(1, {
    message: "Industry is required",
  }),
  role: z.string().min(1, {
    message: "Industry is required",
  }),
  startPrompt: z.string().min(1, {
    message: "Industry is required",
  }),
});
export const industries = [
  { value: "financeBanking", label: "Finance & Banking" },
  { value: "healthcarePharma", label: "Healthcare & Pharmaceuticals" },
  { value: "retailEcommerce", label: "Retail & E-commerce" },
  { value: "technologySoftware", label: "Technology & Software Development" },
  { value: "manufacturingIndustrial", label: "Manufacturing & Industrial" },
  { value: "educationElearning", label: "Education & E-learning" },
  { value: "legalCompliance", label: "Legal & Compliance" },
  { value: "telecommunications", label: "Telecommunications" },
  { value: "realEstateProperty", label: "Real Estate & Property Management" },
  { value: "mediaEntertainment", label: "Media & Entertainment" },
  { value: "energyUtilities", label: "Energy & Utilities" },
  { value: "governmentPublicServices", label: "Government & Public Services" },
  { value: "travelHospitality", label: "Travel & Hospitality" },
  { value: "agricultureFood", label: "Agriculture & Food Production" },
  { value: "automotiveTransportation", label: "Automotive & Transportation" },
];

export const roles = [
  {
    name: "financeBanking",
    value: [
      { value: "riskCompliance", label: "Risk & Compliance" },
      { value: "financialAnalysis", label: "Financial Analysis" },
      { value: "customerSupport", label: "Customer Support" },
      { value: "investmentStrategy", label: "Investment Strategy" },
      { value: "accounting", label: "Accounting" },
    ],
  },
  {
    name: "healthcarePharma",
    value: [
      { value: "medicalResearch", label: "Medical Research" },
      { value: "patientManagement", label: "Patient Management" },
      { value: "billingInsurance", label: "Billing & Insurance" },
      { value: "drugDevelopment", label: "Drug Development" },
      { value: "complianceRegulation", label: "Compliance & Regulation" },
    ],
  },
  {
    name: "retailEcommerce",
    value: [
      { value: "salesMarketing", label: "Sales & Marketing" },
      { value: "supplyChainLogistics", label: "Supply Chain & Logistics" },
      { value: "customerService", label: "Customer Service" },
      { value: "merchandising", label: "Merchandising" },
      { value: "inventoryManagement", label: "Inventory Management" },
    ],
  },
  {
    name: "technologySoftware",
    value: [
      { value: "softwareEngineers", label: "Software Engineers" },
      { value: "itSupport", label: "IT Support" },
      { value: "productManagement", label: "Product Management" },
      { value: "cybersecurity", label: "Cybersecurity" },
      { value: "dataScienceAI", label: "Data Science & AI" },
    ],
  },
  {
    name: "manufacturingIndustrial",
    value: [
      { value: "qualityControl", label: "Quality Control" },
      { value: "supplyChain", label: "Supply Chain" },
      { value: "productionPlanning", label: "Production Planning" },
      { value: "maintenanceEngineering", label: "Maintenance & Engineering" },
      { value: "procurement", label: "Procurement" },
    ],
  },
];

export const startPrompt = [
  { value: "summarize the document", label: "Summarize the document" },
  { value: "generate a report", label: "Generate a report" },
  { value: "provide business insights", label: "Provide business insights" },
  { value: "automate a task", label: "Automate a task" },
];
