"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// Define a type for customer form data
type CustomerFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  joined: string; // ISO date string (e.g. "2024-04-15")
};

interface EditCustomerProps {
  initialData: CustomerFormData;
  onSubmit: (data: CustomerFormData) => void;
}

export function EditCustomerComponent({
  initialData,
  onSubmit,
}: EditCustomerProps) {
  const [formData, setFormData] = useState<CustomerFormData>(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated customer data:", formData);
    onSubmit(formData);
  };

  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <CardTitle>Edit Customer</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="joined">Joined Date</Label>
            <Input
              id="joined"
              name="joined"
              type="date"
              value={formData.joined}
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>

        <CardFooter className="justify-end">
          <Button type="submit">Update Customer</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
