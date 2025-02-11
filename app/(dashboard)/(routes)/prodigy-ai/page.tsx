"use client";

import * as z from "zod";
import Heading from "@/components/heading";
import { PenLineIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema, industries, roles, startPrompt } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { Loader } from "@/components/loader";
import { Empty } from "@/components/empty";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";
import { Checkbox } from "@/components/ui/checkbox";

interface UserQuestionnaire {
  id: string;
  userId: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  branchOfService: string;
  serviceDateStarted: string;
  serviceDateEnded: string;
  rankAtDischarge: string;
  typeOfDischarge: string;
  hazardousOption: string;
  hazardousYesDeatils: string;
  serviceConnectedDisability: string;
  serviceConnectedDisabilityYesDeatils: string;
  disabilities: string;
  newDisabilitiesOrWorseningConditions: string;
  newDisabilitiesOrWorseningConditionsYesDeatils: string;
  sustainedInjuries: string;
  sustainedInjuriesYesDeatils: string;
  medicalTreatmentOfInjuries: string;
  medicalTreatmentOfInjuriesYesDeatils: string;
  conditionsAffectedAbilityOfWork: string;
  conditionsAffectedAbilityOfWorkYesDeatils: string;
  filedDisabilityClaimWithVA: string;
  filedDisabilityClaimWithVAYesDeatils: string;
  currentlyEmployed: string;
  currentlyEmployedYesDeatils: string;
  dependents: string;
  dependentsYesDeatils: string;
  additionalInfoOfDisabilityClaim: string;
  approvalForAI: string;
}

const ClaimOptimizationReport = () => {
  const router = useRouter();
  // const [questionnaire, setQuestionnaire] = useState<UserQuestionnaire>();
  const [result, setResult] = useState<string>("");
  const printRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // create new thread
    localStorage.setItem("claimOptimizationBotThreadId", "");
    createThread();
    getQuestionnaire();
  }, []);

  const createThread = async () => {
    const response = await axios.post("/api/create-thread");
    localStorage.setItem("claimOptimizationBotThreadId", response.data);
  };

  const getQuestionnaire = async () => {
    const response = await axios.get("/api/get-questionnaire");
    console.log(response.data);
    // setQuestionnaire(response.data);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      currentlyHomeless: "No",
      riskOfBecomingHomeless: "No",
      branchOfService: "",
      serviceDateStarted: "",
      serviceDateEnded: "",
      rankAtDischarge: "",
      typeOfDischarge: "",
      hazardousOption: "",
      hazardousYesDeatils: "Nil",
      serviceConnectedDisability: "",
      serviceConnectedDisabilityYesDeatils: "Nil",
      claimingAnyConditionsRelatedToToxicExposures: "Yes",
      serveUnderAnotherName: "No",
      periodsOfServiceWithEnlistmentAndDischargeDates: "Jan 2025 to jan 2026",
      currentlyActivatedOnFederalOrdersWithTheNationalGuardOrReserves: "No",
      currentlyReceivingInactiveDutyTrainingPay: "No",
      prisonerOfWar: "No",
      receivingMilitaryRetiredPay: "No",
      monthlyAmount: "0$",
      disabilities: "",
      newDisabilitiesOrWorseningConditions: "",
      newDisabilitiesOrWorseningConditionsYesDeatils: "Nil",
      sustainedInjuries: "",
      sustainedInjuriesYesDeatils: "Nil",
      medicalTreatmentOfInjuries: "",
      medicalTreatmentOfInjuriesYesDeatils: "Nil",
      conditionsAffectedAbilityOfWork: "",
      conditionsAffectedAbilityOfWorkYesDeatils: "Nil",
      filedDisabilityClaimWithVA: "",
      filedDisabilityClaimWithVAYesDeatils: "Nil",
      VAMedicalCentersOrMilitaryTreatmentFacilitiesVisitedForClaimedConditions:
        [{ center: "", location: "" }],
      currentlyEmployed: "",
      currentlyEmployedYesDeatils: "Nil",
      dependents: "",
      dependentsYesDeatils: "Nil",
      additionalInfoOfDisabilityClaim: "Nil",
      approvalForAI: "",
      diagnosedDiseasesList: [
        "PTSD or other mental health disorders",
        "Respiratory issues or lung diseases",
      ],
      otherDiseases: "Nil",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setResult("");
      console.log(values);
      const response = await axios.post("/api/save-user-questionnaire", values);
      toast({
        variant: "default",
        title: "Success",
        description: "Form successfully saved into the database.",
      });
      setResult(response.data);
      toast({
        variant: "default",
        title: "Success",
        description:
          "Thank you for completing the questionnaire. We will review your information and get back to you with the next steps.",
      });
      const botAnswer = await axios.post("/api/claim-optimization-bot", {
        userMessage: JSON.stringify(values),
        threadId: localStorage.getItem("claimOptimizationBotThreadId"),
      });
      console.log(botAnswer.data);
      toast({
        variant: "default",
        title: "Success",
        description: "Report successfully generated.",
      });
      setResult(botAnswer.data.text.value);
      form.reset();
    } catch (error) {
      // todo: Open Pro Modal
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Internal server error. Please try again.",
      });
    } finally {
      router.refresh();
    }
  };

  const handlePrint = () => {
    const content = printRef.current?.innerHTML;
    if (!content) return;

    const printWindow = window.open("", "", "width=800,height=600");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Print</title>
          </head>
          <body>
            ${content}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  };

  return (
    <div className="mt-4">
      <Heading title="ProdigyAI" description="Make everything easy" />
      <div className="px-2 lg:px-4">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg 
                w-full 
                
              "
            >
              <div className="w-full grid grid-cols-12 gap-2 border-2 rounded-lg py-4 px-3 mt-6 shadow-lg">
                {/* Industry  */}
                <FormField
                  control={form.control}
                  name="branchOfService"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-4 rounded-lg">
                      <FormLabel className="text-sm text-gray-500">
                        Choose Industry:
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Please select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {industries.map((bos) => (
                            <SelectItem key={bos.value} value={bos.value}>
                              {bos.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Role  */}
                <FormField
                  control={form.control}
                  name="branchOfService"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-4 rounded-lg">
                      <FormLabel className="text-sm text-gray-500">
                        Choose Role:
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Please select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {roles.map((bos) => (
                            <SelectItem key={bos.value} value={bos.value}>
                              {bos.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* select prompt  */}
                <FormField
                  control={form.control}
                  name="branchOfService"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-4 rounded-lg">
                      <FormLabel className="text-sm text-gray-500">
                        Select a start prompt:
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Please select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {startPrompt.map((bos) => (
                            <SelectItem key={bos.value} value={bos.value}>
                              {bos.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 {/* Message */}
                 <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-12 rounded-lg">
                      <FormLabel className="text-sm text-gray-500">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Please type here" {...field} />
                      </FormControl>
                      {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>

              <Button
                className="col-span-12 lg:col-span-12 mt-4 w-full bg-[#002D62]"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-20">
              <Loader />
            </div>
          )}
          {result.length === 0 && !isLoading && (
            <Empty label="No Report is Generated!" />
          )}
          {result.length > 0 && (
            <div>
              <div ref={printRef}>
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
              <Button className="bg-[#CC302F] mt-4" onClick={handlePrint}>
                Download PDF
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClaimOptimizationReport;
