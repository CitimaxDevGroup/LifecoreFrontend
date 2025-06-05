import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { CheckCircle, Clock, DollarSign, MapPin } from "lucide-react";

interface JobDetailsProps {
  isOpen?: boolean;
  onClose?: () => void;
  job?: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    postedDate: string;
  };
}

const JobDetails = ({
  isOpen = true,
  onClose = () => {},
  job = {
    id: "1",
    title: "Laboratory Technician",
    company: "LifeCore Biointegrative Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    description:
      "We are seeking a skilled Laboratory Technician to join our growing team at LifeCore Biointegrative Inc. The ideal candidate will have experience in clinical laboratory procedures and a strong attention to detail.",
    responsibilities: [
      "Perform routine laboratory tests and procedures",
      "Maintain laboratory equipment and supplies",
      "Document and report test results accurately",
      "Follow all safety protocols and quality control procedures",
      "Assist with research projects as needed",
    ],
    requirements: [
      "Bachelor's degree in Medical Technology, Clinical Laboratory Science, or related field",
      "2+ years of experience in a clinical laboratory setting",
      "Knowledge of laboratory information systems",
      "Strong attention to detail and problem-solving skills",
      "Certification as a Medical Laboratory Technician (MLT) or Medical Laboratory Scientist (MLS)",
    ],
    postedDate: "2023-05-15",
  },
}: JobDetailsProps) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: "",
      coverLetter: "",
    });
    setIsSubmitted(false);
    onClose(); // Let parent control the open state
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) handleClose();
      }}
    >
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{job.title}</DialogTitle>
          <DialogDescription className="text-lg">
            {job.company}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-500" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-500" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-gray-500" />
            <span>{job.salary}</span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Job Description</h3>
            <p className="text-gray-700">{job.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-1">
              {job.responsibilities.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Requirements</h3>
            <ul className="list-disc pl-5 space-y-1">
              {job.requirements.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Badge variant="secondary" className="text-xs">
              Posted on {job.postedDate}
            </Badge>
          </div>
        </div>

        <div className="mt-8">
          {!isSubmitted ? (
            <Card>
              <CardHeader>
                <CardTitle>Apply for this position</CardTitle>
                <CardDescription>
                  Fill out the form below to submit your application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume Link</Label>
                    <Input
                      id="resume"
                      name="resume"
                      value={formData.resume}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>

                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </DialogFooter>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center justify-center text-center space-y-3">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                  <CardTitle>Application Submitted!</CardTitle>
                  <CardDescription className="text-base">
                    Thank you for applying to {job.title} at {job.company}. We
                    will review your application and contact you soon.
                  </CardDescription>
                  <Button onClick={handleClose} className="mt-4">
                    Close
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetails;
