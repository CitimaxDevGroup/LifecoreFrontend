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
} from "./ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, BookOpenCheck, CalendarClock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AdvisoryType {
  id: string;
  title: string;
  provider: string;
  location: string;
  type: string;
  category: string;
  postedDate: string;
  description: string;
  benefits: string[];
  requirements: string[];
  price: string;
}

const AdvisoryDetails = ({ advisory }: { advisory: AdvisoryType }) => (
  <div className="space-y-4">
    <DialogHeader>
      <DialogTitle>{advisory.title}</DialogTitle>
      <p className="text-muted-foreground">{advisory.provider}</p>
    </DialogHeader>
    <div className="text-sm text-muted-foreground">
      <div className="mb-2"><strong>Location:</strong> {advisory.location}</div>
      <div className="mb-2"><strong>Type:</strong> {advisory.type}</div>
      <div className="mb-2"><strong>Category:</strong> {advisory.category}</div>
      <div className="mb-2"><strong>Posted:</strong> {new Date(advisory.postedDate).toLocaleDateString()}</div>
    </div>
    <p>{advisory.description}</p>
    <div>
      <h4 className="font-medium mt-4">Benefits:</h4>
      <ul className="list-disc pl-5">
        {advisory.benefits.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="font-medium mt-4">Requirements:</h4>
      <ul className="list-disc pl-5">
        {advisory.requirements.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="font-semibold">Price: {advisory.price}</div>
  </div>
);

const AdvisoryBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedAdvisory, setSelectedAdvisory] = useState<AdvisoryType | null>(null);
  const [open, setOpen] = useState(false);

  const defaultAdvisories: AdvisoryType[] = [
    {
      id: "1",
      title: "Regulatory Compliance Consultation",
      provider: "LifeCore Biointegrative Inc.",
      location: "San Francisco, CA",
      type: "Consultation",
      category: "Regulatory",
      postedDate: "2023-06-01",
      description: "Expert advisory on FDA and ISO compliance for medical laboratories and manufacturers.",
      benefits: [
        "Understand key compliance requirements",
        "Gap analysis of your current practices",
        "Detailed action plan to meet standards",
      ],
      requirements: ["Pre-meeting intake form", "Company documentation"],
      price: "$1,200 per session",
    },
    // Add more services here...
  ];

  const filteredAdvisories = defaultAdvisories.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    const matchesType = selectedType === "all" || service.type === selectedType;
    const matchesLocation =
      selectedLocation === "all" ||
      service.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchesSearch && matchesCategory && matchesType && matchesLocation;
  });

  const categories = [
    "all",
    ...Array.from(new Set(defaultAdvisories.map((s) => s.category))),
  ];
  const types = [
    "all",
    ...Array.from(new Set(defaultAdvisories.map((s) => s.type))),
  ];
  const locations = [
    "all",
    ...Array.from(
      new Set(defaultAdvisories.map((s) => s.location.split(",")[0].trim()))
    ),
  ];

  return (
    <div className="bg-background w-full p-6 rounded-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Advisory Services</h1>
        <p className="text-muted-foreground">
          Browse expert consulting services from LifeCore Biointegrative Inc.
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search services..."
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
            <SelectValue placeholder="Type" />
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

      {/* Advisory Listings */}
      <div className="space-y-4">
        {filteredAdvisories.length > 0 ? (
          filteredAdvisories.map((service) => (
            <Card
              key={service.id}
              className="hover:border-primary transition-colors"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {service.provider}
                    </CardDescription>
                  </div>
                  <Badge
                    variant={service.type === "Consultation" ? "default" : "secondary"}
                  >
                    {service.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    {service.location}
                  </div>
                  <div className="flex items-center">
                    <BookOpenCheck className="mr-1 h-4 w-4" />
                    {service.category}
                  </div>
                  <div className="flex items-center">
                    <CalendarClock className="mr-1 h-4 w-4" />
                    Posted {new Date(service.postedDate).toLocaleDateString()}
                  </div>
                </div>
                <p className="mt-4 line-clamp-2 text-sm">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedAdvisory(service);
                    setOpen(true);
                  }}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No services found</h3>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      {/* Advisory Details Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedAdvisory && <AdvisoryDetails advisory={selectedAdvisory} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdvisoryBoard;