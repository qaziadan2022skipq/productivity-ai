import * as z from "zod";

export const formSchema = z.object({
  fullName: z.string().min(1, {
    message: "Full name is required",
  }),
  emailAddress: z.string().email({
    message: "Email Address is required",
  }),
  phoneNumber: z.string().min(1, {
    message: "Phone number is required",
  }),
  currentlyHomeless: z.string().min(1, {
    message: "Phone number is required",
  }),
  riskOfBecomingHomeless: z.string().min(1, {
    message: "Phone number is required",
  }),
  branchOfService: z.string().min(1, {
    message: "Branch of Service is required",
  }),
  serviceDateStarted: z.string().date().min(1, {
    message: "date is required",
  }),
  serviceDateEnded: z.string().date().min(1, {
    message: "date is required",
  }),
  rankAtDischarge: z.string().min(1, {
    message: "Rank is required",
  }),
  typeOfDischarge: z.string().min(1, {
    message: "Type of discharge is required",
  }),
  hazardousOption: z.string().min(1, {
    message: "Required Field",
  }),
  hazardousYesDeatils: z.string().optional(),
  serviceConnectedDisability: z.string().min(1, {
    message: "Required Field",
  }),
  serviceConnectedDisabilityYesDeatils: z.string().optional(),
  disabilities: z.string().min(1, {
    message: "Disablilities are required",
  }),
  claimingAnyConditionsRelatedToToxicExposures: z.string().min(1, {
    message: "Required Field",
  }),
  serveUnderAnotherName: z.string().min(1, {
    message: "Required Field",
  }),
  periodsOfServiceWithEnlistmentAndDischargeDates: z.string().min(1, {
    message: "Required Field",
  }),
  currentlyActivatedOnFederalOrdersWithTheNationalGuardOrReserves: z
    .string()
    .min(1, {
      message: "Required Field",
    }),
  currentlyReceivingInactiveDutyTrainingPay: z.string().min(1, {
    message: "Required Field",
  }),
  monthlyAmount: z.string().min(1, {
    message: "Required Field",
  }),
  prisonerOfWar: z.string().min(1, {
    message: "Required Field",
  }),
  receivingMilitaryRetiredPay: z.string().min(1, {
    message: "Required Field",
  }),
  newDisabilitiesOrWorseningConditions: z.string().min(1, {
    message: "Required Field",
  }),
  newDisabilitiesOrWorseningConditionsYesDeatils: z.string().optional(),
  sustainedInjuries: z.string().min(1, {
    message: "Sustained Injuries are required",
  }),
  sustainedInjuriesYesDeatils: z.string().optional(),
  medicalTreatmentOfInjuries: z.string().min(1, {
    message: "Required Field",
  }),
  medicalTreatmentOfInjuriesYesDeatils: z.string().optional(),
  conditionsAffectedAbilityOfWork: z.string().min(1, {
    message: "Required Field",
  }),
  conditionsAffectedAbilityOfWorkYesDeatils: z.string().optional(),
  filedDisabilityClaimWithVA: z.string().min(1, {
    message: "Required Field",
  }),
  filedDisabilityClaimWithVAYesDeatils: z.string().optional(),
  VAMedicalCentersOrMilitaryTreatmentFacilitiesVisitedForClaimedConditions: z
    .array(
      z.object({
        center: z
          .string()
          .optional(),
        location: z
          .string()
          .optional(),
          
      })
    )
    .optional(),
  currentlyEmployed: z.string().min(1, {
    message: "Required Field",
  }),
  currentlyEmployedYesDeatils: z.string().optional(),
  dependents: z.string().min(1, {
    message: "Required Field",
  }),
  dependentsYesDeatils: z.string().optional(),
  diagnosedDiseasesList: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  otherDiseases: z.string().optional(),
  additionalInfoOfDisabilityClaim: z.string().optional(),
  approvalForAI: z.string().min(1, {
    message: "Required Field",
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
    { value: "riskCompliance", label: "Risk & Compliance" },
    { value: "financialAnalysis", label: "Financial Analysis" },
    { value: "customerSupport", label: "Customer Support" },
    { value: "investmentStrategy", label: "Investment Strategy" },
    { value: "accounting", label: "Accounting" },
    { value: "medicalResearch", label: "Medical Research" },
    { value: "patientManagement", label: "Patient Management" },
    { value: "billingInsurance", label: "Billing & Insurance" },
    { value: "drugDevelopment", label: "Drug Development" },
    { value: "complianceRegulation", label: "Compliance & Regulation" },
    { value: "salesMarketing", label: "Sales & Marketing" },
    { value: "supplyChainLogistics", label: "Supply Chain & Logistics" },
    { value: "merchandising", label: "Merchandising" },
    { value: "inventoryManagement", label: "Inventory Management" },
    { value: "softwareEngineering", label: "Software Engineering" },
    { value: "itSupport", label: "IT Support" },
    { value: "productManagement", label: "Product Management" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "dataScienceAI", label: "Data Science & AI" },
    { value: "qualityControl", label: "Quality Control" },
    { value: "productionPlanning", label: "Production Planning" },
    { value: "maintenanceEngineering", label: "Maintenance & Engineering" },
    { value: "procurement", label: "Procurement" },
    { value: "curriculumDevelopment", label: "Curriculum Development" },
    { value: "researchAnalytics", label: "Research & Analytics" },
    { value: "studentServices", label: "Student Services" },
    { value: "admissionsEnrollment", label: "Admissions & Enrollment" },
    { value: "facultyManagement", label: "Faculty Management" },
    { value: "contractManagement", label: "Contract Management" },
    { value: "caseResearch", label: "Case Research" },
    { value: "regulatoryCompliance", label: "Regulatory Compliance" },
    { value: "riskAssessment", label: "Risk Assessment" },
    { value: "intellectualProperty", label: "Intellectual Property" },
    { value: "networkOperations", label: "Network Operations" },
    { value: "marketingSales", label: "Marketing & Sales" },
    { value: "dataAnalytics", label: "Data Analytics" },
    { value: "propertySalesLeasing", label: "Property Sales & Leasing" },
    { value: "facilityManagement", label: "Facility Management" },
    { value: "legalContracts", label: "Legal & Contracts" },
    { value: "investmentAnalysis", label: "Investment Analysis" },
    { value: "customerRelations", label: "Customer Relations" },
    { value: "contentCreation", label: "Content Creation" },
    { value: "audienceAnalytics", label: "Audience Analytics" },
    { value: "prCommunications", label: "PR & Communications" },
    { value: "licensingDistribution", label: "Licensing & Distribution" },
    { value: "sustainabilityCompliance", label: "Sustainability & Compliance" },
    { value: "operationsManagement", label: "Operations Management" },
    { value: "energyTrading", label: "Energy Trading" },
    { value: "infrastructureMaintenance", label: "Infrastructure Maintenance" },
    { value: "policyResearch", label: "Policy Research" },
    { value: "lawEnforcement", label: "Law Enforcement" },
    { value: "urbanPlanning", label: "Urban Planning" },
    { value: "taxRevenueManagement", label: "Tax & Revenue Management" },
    { value: "publicRelations", label: "Public Relations" },
    { value: "reservationsBookings", label: "Reservations & Bookings" },
    { value: "customerExperience", label: "Customer Experience" },
    { value: "revenueManagement", label: "Revenue Management" },
    { value: "logisticsOperations", label: "Logistics & Operations" },
    { value: "farmManagement", label: "Farm Management" },
    { value: "foodSafetyQuality", label: "Food Safety & Quality" },
    { value: "researchInnovation", label: "Research & Innovation" },
    { value: "logisticsFleetManagement", label: "Logistics & Fleet Management" },
    { value: "rDInnovation", label: "R&D & Innovation" },
    { value: "dealershipManagement", label: "Dealership Management" },
  ];

  export const startPrompt = [
    { value: "summarize the document", label: "Summarize the document" },
    { value: "generate a report", label: "Generate a report" },
    { value: "provide business insights", label: "Provide business insights" },
    { value: "automate a task", label: "Automate a task" },
    
  ];
  
  