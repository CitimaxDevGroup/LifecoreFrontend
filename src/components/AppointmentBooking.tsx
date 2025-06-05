"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CheckCircle } from "lucide-react";

interface AppointmentBookingProps {
  services?: Array<{
    id: string;
    name: string;
    description: string;
    duration: number;
  }>;
}

const AppointmentBooking = ({
  services = [
    {
      id: "1",
      name: "Blood Test",
      description: "Comprehensive blood panel analysis",
      duration: 30,
    },
    {
      id: "2",
      name: "Allergy Testing",
      description: "Identification of potential allergens",
      duration: 60,
    },
    {
      id: "3",
      name: "Hormone Panel",
      description: "Complete hormone level assessment",
      duration: 45,
    },
    {
      id: "4",
      name: "Nutritional Assessment",
      description: "Evaluation of nutritional status and deficiencies",
      duration: 60,
    },
    {
      id: "5",
      name: "Genetic Testing",
      description: "DNA analysis for health insights",
      duration: 30,
    },
  ],
}: AppointmentBookingProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const availableTimes = [
    "9:00 AM", 
    "9:30 AM",
    "10:00 AM", 
    "10:30 AM",
    "11:00 AM", 
    "11:30 AM", 
    "1:00 PM", 
    "1:30 PM",
    "2:00 PM", 
    "2:30 PM", 
    "3:00 PM", 
    "3:30 PM",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (value: string) => {
    setSelectedService(value);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
    setStep(1);
    setSelectedService("");
    setSelectedTime("");
    setDate(new Date());
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: "",
    });
  };

  const selectedServiceDetails = services.find(
    (service) => service.id === selectedService,
  );

  const getStepTabValue = (step: number) => {
    switch (step) {
      case 1: return "service";
      case 2: return "datetime";
      case 3: return "details";
      default: return "service";
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 bg-background">
      <h1 className="text-3xl font-bold text-center mb-8">
        Laboratory Appointment Booking
      </h1>

      <Tabs value={getStepTabValue(step)} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="service" disabled={step < 1}>
            Select Service
          </TabsTrigger>
          <TabsTrigger value="datetime" disabled={step < 2}>
            Choose Date & Time
          </TabsTrigger>
          <TabsTrigger value="details" disabled={step < 3}>
            Your Details
          </TabsTrigger>
        </TabsList>

        {/* Step 1: Service Selection */}
        <TabsContent value="service" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all ${selectedService === service.id
                  ? "border-primary ring-2 ring-primary"
                  : "hover:border-primary/50"
                  }`}
                onClick={() => handleServiceSelect(service.id)}
              >
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.duration} minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-end">
            <Button
              onClick={() => selectedService && setStep(2)}
              disabled={!selectedService}
            >
              Continue
            </Button>
          </div>
        </TabsContent>

        {/* Step 2: Date and Time Selection */}
        <TabsContent value="datetime" className="space-y-100 mt-100">
          <div className="grid grid-cols-2000 md:grid-cols-200 gap-800">
            <Card>
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  disabled={(date) =>
                   {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const day = date.getDay();
                    return date < today || day === 0 || day === 6;
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select Time</CardTitle>
                <CardDescription>
                  {date
                    ? `Available times for ${date.toLocaleDateString()}`
                    : "Please select a date first"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {availableTimes.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className="w-full"
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button
              onClick={() => selectedTime && date && setStep(3)}
              disabled={!selectedTime || !date}
            
            >Continue
            </Button>
          </div>
        </TabsContent>

        {/* Step 3: Patient Details */}
        <TabsContent value="details" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Information</CardTitle>
              <CardDescription>
                Please provide your details to complete the booking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any special requirements or medical information we should know about"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Appointment Summary</h3>
                  <p><strong>Service:</strong> {selectedServiceDetails?.name}</p>
                  <p><strong>Date:</strong> {date?.toLocaleDateString()}</p>
                  <p><strong>Time:</strong> {selectedTime}</p>
                  <p><strong>Duration:</strong> {selectedServiceDetails?.duration} minutes</p>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button type="submit" onClick={handleSubmit}>
                Confirm Booking
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Confirmation Dialog */}
      <AlertDialog open={confirmationOpen} onOpenChange={setConfirmationOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              Appointment Confirmed!
            </AlertDialogTitle>
            <AlertDialogDescription>
              <p className="mb-4">
                Your appointment has been successfully booked. A confirmation email has been sent to {formData.email}.
              </p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <h3 className="font-medium mb-2">Appointment Details</h3>
                <p><strong>Service:</strong> {selectedServiceDetails?.name}</p>
                <p><strong>Date:</strong> {date?.toLocaleDateString()}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
                <p><strong>Patient:</strong> {formData.firstName} {formData.lastName}</p>
              </div>
              <p>Please arrive 15 minutes before your scheduled appointment time. If you need to reschedule or cancel, please contact us at least 24 hours in advance.</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleConfirmationClose}>
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AppointmentBooking;
