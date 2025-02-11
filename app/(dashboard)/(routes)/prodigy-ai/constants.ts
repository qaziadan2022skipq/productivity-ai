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
  message: z.string().optional(),
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
  {
    name: "educationElearning",
    value: [
      { value: "curriculumDevelopment", label: "Curriculum Development" },
      { value: "researchAnalytics", label: "Research & Analytics" },
      { value: "studentServices", label: "Student Services" },
      { value: "admissionsEnrollment", label: "Admissions & Enrollment" },
      { value: "facultyManagement", label: "Faculty Management" },
    ],
  },
  {
    name: "legalCompliance",
    value: [
      { value: "contractManagement", label: "Contract Management" },
      { value: "caseResearch", label: "Case Research" },
      { value: "regulatoryCompliance", label: "Regulatory Compliance" },
      { value: "riskAssessment", label: "Risk Assessment" },
      { value: "intellectualProperty", label: "Intellectual Property" },
    ],
  },
  {
    name: "telecommunications",
    value: [
      { value: "networkOperations", label: "Network Operations" },
      { value: "customerSupport", label: "Customer Support" },
      { value: "marketingSales", label: "Marketing & Sales" },
      { value: "regulatoryCompliance", label: "Regulatory Compliance" },
      { value: "dataAnalytics", label: "Data Analytics" },
    ],
  },
  {
    name: "realEstateProperty",
    value: [
      { value: "propertySalesLeasing", label: "Property Sales & Leasing" },
      { value: "facilityManagement", label: "Facility Management" },
      { value: "legalContracts", label: "Legal & Contracts" },
      { value: "investmentAnalysis", label: "Investment Analysis" },
      { value: "customerRelations", label: "Customer Relations" },
    ],
  },
  {
    name: "mediaEntertainment",
    value: [
      { value: "contentCreation", label: "Content Creation" },
      { value: "marketingAdvertising", label: "Marketing & Advertising" },
      { value: "audienceAnalytics", label: "Audience Analytics" },
      { value: "prCommunications", label: "PR & Communications" },
      { value: "licensingDistribution", label: "Licensing & Distribution" },
    ],
  },
  {
    name: "energyUtilities",
    value: [
      {
        value: "sustainabilityCompliance",
        label: "Sustainability & Compliance",
      },
      { value: "operationsManagement", label: "Operations Management" },
      { value: "energyTrading", label: "Energy Trading" },
      {
        value: "infrastructureMaintenance",
        label: "Infrastructure Maintenance",
      },
      { value: "riskAssessment", label: "Risk Assessment" },
    ],
  },
  {
    name: "governmentPublicServices",
    value: [
      { value: "policyResearch", label: "Policy Research" },
      { value: "lawEnforcement", label: "Law Enforcement" },
      { value: "urbanPlanning", label: "Urban Planning" },
      { value: "taxRevenueManagement", label: "Tax & Revenue Management" },
      { value: "publicRelations", label: "Public Relations" },
    ],
  },
  {
    name: "travelHospitality",
    value: [
      { value: "reservationsBookings", label: "Reservations & Bookings" },
      { value: "customerExperience", label: "Customer Experience" },
      { value: "revenueManagement", label: "Revenue Management" },
      { value: "logisticsOperations", label: "Logistics & Operations" },
      { value: "marketingPR", label: "Marketing & PR" },
    ],
  },
  {
    name: "agricultureFood",
    value: [
      { value: "farmManagement", label: "Farm Management" },
      { value: "supplyChain", label: "Supply Chain" },
      { value: "foodSafetyQuality", label: "Food Safety & Quality" },
      { value: "researchInnovation", label: "Research & Innovation" },
      { value: "sustainability", label: "Sustainability" },
    ],
  },
  {
    name: "automotiveTransportation",
    value: [
      {
        value: "logisticsFleetManagement",
        label: "Logistics & Fleet Management",
      },
      { value: "rdInnovation", label: "R&D & Innovation" },
      { value: "customerService", label: "Customer Service" },
      {
        value: "manufacturingSupplyChain",
        label: "Manufacturing & Supply Chain",
      },
      { value: "dealershipManagement", label: "Dealership Management" },
    ],
  },
];

export const startPrompt = [
  { value: "summarize the document", label: "Summarize the document" },
  { value: "generate a report", label: "Generate a report" },
  { value: "provide business insights", label: "Provide business insights" },
  { value: "automate a task", label: "Automate a task" },
];
