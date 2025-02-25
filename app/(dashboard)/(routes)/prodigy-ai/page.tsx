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
import { Textarea } from "@/components/ui/textarea";

const ClaimOptimizationReport = () => {
  const router = useRouter();
  const [result, setResult] = useState<string>("");
  const printRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: "",
      role: "",
      startPrompt: "",
      message: ""
    },
  });

  const selectedIndustry = form.watch("industry") || "";
  // console.log(selectedIndustry);
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      const response = await axios.post("/api/prodigy-ai-response", values)
      console.log(response.data)
      setResult(response.data)
      toast({
        variant: "default",
        title: "Success",
        description: "Form successfully saved into the database.",
      });
      
      toast({
        variant: "default",
        title: "Success",
        description:
          "Response generated",
      });
      // form.reset();
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
                  name="industry"
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
                  name="role"
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
                          {roles.map(
                            (role) =>
                              role.name === selectedIndustry &&
                              role.value.map((bos) => (
                                <SelectItem key={bos.value} value={bos.value}>
                                  {bos.label}
                                </SelectItem>
                              ))
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* select prompt  */}
                <FormField
                  control={form.control}
                  name="startPrompt"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-4 rounded-lg">
                      <FormLabel className="text-sm text-gray-500">
                      Choose your task:
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
                  name="message"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-12 rounded-lg">
                      <FormLabel className="text-sm text-gray-500">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea rows={8} placeholder="How can I help you today" {...field} />
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
                {result.length > 0 ? "Regenerate" : "Generate"}
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
            <Empty label="No Response Generated!" />
          )}
          {result.length > 0 && (
            <div className="flex flex-col items-center">
              <div ref={printRef}>
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
              <div className="flex items-center gap-x-4 mb-4">
              <Button className="bg-[#002D62] mt-4" onClick={handlePrint}>
                Download PDF
              </Button>
              
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClaimOptimizationReport;
