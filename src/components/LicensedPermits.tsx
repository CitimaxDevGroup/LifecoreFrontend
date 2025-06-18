import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image"; // Only if using Next.js, adjust if not
import { motion } from "framer-motion";
import {
  Calendar,
  Shield,
  Award,
  FileCheck,
  CheckCircle,
} from "lucide-react";

interface Permit {
  id: string;
  title: string;
  issuingAuthority: string;
  description: string;
  icon: React.ReactNode;
}

const LicensedPermits = ({
  permits = defaultPermits,
}: {
  permits?: Permit[];
}) => {
  return (
    <div className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Licenses and Permits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We maintain the highest standards of medical practice through these
            professional licenses that ensure quality care for all our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {permits.map((permit) => (
            <TooltipProvider key={permit.id}>
              <Tooltip>
                <Dialog>
                  <DialogTrigger asChild>
                    <TooltipTrigger asChild>
                      <motion.div
                        whileHover={{
                          y: -5,
                          boxShadow:
                            "0 10px 25px -5px rgba(34, 197, 94, 0.3)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="h-full overflow-hidden border-2 border-green-50 hover:border-green-200 transition-colors cursor-pointer">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <div className="text-blue-600">
                                {permit.icon}
                              </div>
                              
                            </div>
                            <CardTitle className="text-xl mt-2">
                              {permit.title}
                            </CardTitle>
                            <CardDescription className="text-gray-500">
                              Issued by {permit.issuingAuthority}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600">
                              {permit.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </TooltipTrigger>
                  </DialogTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Click to view full certification details</p>
                  </TooltipContent>

                  <DialogContent className="max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="text-xl">{permit.title}</DialogTitle>
                            <DialogDescription className="text-sm text-gray-500">
                            Issued by {permit.issuingAuthority} <br />
                            </DialogDescription>
                        </DialogHeader>
                              <div className="space-y-4">
                                  <div className="w-full flex justify-center items-start">
                                      <img
                                          src={`/${permit.id}.png`}
                                          alt={permit.title}
                                          className="max-w-full max-h-[1000vh] object-contain border rounded"
                                      />
                                  </div>
                                  <p className="text-gray-700 text-sm">{permit.description}</p>
                              </div>
                          </DialogContent>
                      </Dialog>
                  </Tooltip>
              </TooltipProvider>
          ))}
                </div>
            </div>
        </div>
    );
};

const defaultPermits: Permit[] = [
  {
    id: "1",
    title: "Department of Health License",
    issuingAuthority: "Department of Health License (DOH)",
    description:
      "LIFECORE Bio-Integrative Inc. is duly-licensed by the Department of Health (DOH) to engage in Diagnostic Laboratory",
    icon: <FileCheck className="h-6 w-6" />,
  },
  {
    id: "2",
    title: "Philippine Food and Drugs Authority (FDA) Certification",
    issuingAuthority: "Food and Drugs Authority (FDA)",
    description:
      "LIFECORE Bio-Integrative Inc. is duly-licensed by the Philippine Food and Drugs Authority (FDA) as Drug Store.",
    icon: <FileCheck className="h-6 w-6" />,
  },
  {
    id: "3",
    title: "Security and Exchange Commission Certification",
    issuingAuthority: "Security and Exchange Commission (SEC)",
    description:
      "Certification of compliance with all privacy and security regulations for handling patient health information.",
    icon: <FileCheck className="h-6 w-6" />,
  },
  {
    id: "4",
    title: "Department of Budget and Management Certification",
    issuingAuthority: "Department of Budget and Management (DBM)",
    description:
      "LIFECORE Bio-Integrative Inc. Certificate of PHILGEPS Registration (Platinum Membership) issued by the Department of Budget and Management.",
    icon: <FileCheck className="h-6 w-6" />,
  },
  {
    id: "5",
    title: "Security and Exchange Commission (Certificate of Incorporation)",
    issuingAuthority: "Security and Exchange Commission (SEC)",
    description:
      "Certificate of Incorporation issued by the Security and Exchange Commission, the agency of the Government of the Philippines responsible for regulating the securities industry.",
   icon: <FileCheck className="h-6 w-6" />,
  },
  {
    id: "6",
    title: "Security and Exchange Commission (Unified Registration Record)",
    issuingAuthority: "Security and Exchange Commission (SEC)",
    description:
      "Unified Registration Record for LIFECORE Bio-Integrative Inc., issued by the Security and Exchange Commission.",
    icon: <FileCheck className="h-6 w-6" />,
  },
];

export default LicensedPermits;
