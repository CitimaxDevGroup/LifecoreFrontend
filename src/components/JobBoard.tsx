"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Briefcase, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface JobType {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  postedDate: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary: string;
}

const JobDetails = ({ job }: { job: JobType }) => (
  <div className="space-y-4">
    <DialogHeader>
      <DialogTitle>{job.title}</DialogTitle>
      <p className="text-muted-foreground">{job.company}</p>
    </DialogHeader>
    <div className="text-sm text-muted-foreground">
      <div className="mb-2"><strong>Location:</strong> {job.location}</div>
      <div className="mb-2"><strong>Type:</strong> {job.type}</div>
      <div className="mb-2"><strong>Category:</strong> {job.category}</div>
      <div className="mb-2"><strong>Posted:</strong> {new Date(job.postedDate).toLocaleDateString()}</div>
    </div>
    <p>{job.description}</p>
    <div>
      <h4 className="font-medium mt-4">Responsibilities:</h4>
      <ul className="list-disc pl-5">
        {job.responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="font-medium mt-4">Requirements:</h4>
      <ul className="list-disc pl-5">
        {job.requirements.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="font-semibold">Salary: {job.salary}</div>
  </div>
);

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedJob, setSelectedJob] = useState<JobType | null>(null);
  const [open, setOpen] = useState(false);

  const defaultJobs: JobType[] = [
    {
      id: "1",
      title: "Medical Laboratory Technician",
      company: "LifeCore Biointegrative Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      category: "Laboratory",
      postedDate: "2023-05-15",
      description: "We are seeking a skilled Medical Laboratory Technician to join our team...",
      requirements: ["Bachelor's degree", "2+ years experience", "LIS knowledge", "Strong analytical skills"],
      responsibilities: ["Perform lab tests and procedures", "Maintain equipment and supplies", "Ensure safety and compliance standards"],
      salary: "$60,000 - $75,000/year",
    },
  ];

  const filteredJobs = defaultJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
    const matchesType = selectedType === "all" || job.type === selectedType;
    const matchesLocation =
      selectedLocation === "all" ||
      job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchesSearch && matchesCategory && matchesType && matchesLocation;
  });

  const categories = ["all", ...Array.from(new Set(defaultJobs.map((job) => job.category)))];
  const types = ["all", ...Array.from(new Set(defaultJobs.map((job) => job.type)))];
  const locations = ["all", ...Array.from(new Set(defaultJobs.map((job) => job.location.split(",")[0].trim())))];

  return (
    <div className="bg-background w-full p-6 rounded-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Job Board</h1>
        <p className="text-muted-foreground">
          Find your next career opportunity at LifeCore Biointegrative Inc.
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((c) => (
              <SelectItem key={c} value={c}>
                {c === "all" ? "All" : c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger>
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            {types.map((t) => (
              <SelectItem key={t} value={t}>
                {t === "all" ? "All" : t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((loc) => (
              <SelectItem key={loc} value={loc}>
                {loc === "all" ? "All" : loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Card key={job.id} className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription className="mt-1">{job.company}</CardDescription>
                  </div>
                  <Badge variant={job.type === "Full-time" ? "default" : "secondary"}>
                    {job.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="mr-1 h-4 w-4" />
                    {job.category}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    Posted {new Date(job.postedDate).toLocaleDateString()}
                  </div>
                </div>
                <p className="mt-4 line-clamp-2 text-sm">{job.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={() => {
                  setSelectedJob(job);
                  setOpen(true);
                }}>
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No jobs found</h3>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      {/* Job Details Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedJob && <JobDetails job={selectedJob} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobBoard;
