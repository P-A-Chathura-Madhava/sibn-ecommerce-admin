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

type OrderFormData = {
  id: string;
  customer: string;
  date: string; // you can adjust to Date if needed and handle formatting
  status: string;
  total: string;
};

interface EditOrderProps {
  initialData: OrderFormData;
  onSubmit: (data: OrderFormData) => void;
}

export function EditOrderComponent({
  initialData,
  onSubmit,
}: EditOrderProps) {
  const [formData, setFormData] = useState<OrderFormData>(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated order data:", formData);
    onSubmit(formData);
  };

  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <CardTitle>Edit Order</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="id">Order ID</Label>
            <Input
              id="id"
              name="id"
              placeholder="Enter order ID"
              value={formData.id}
              onChange={handleChange}
              required
              disabled // usually order id is not editable, remove disabled if you want to edit
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="customer">Customer Name</Label>
            <Input
              id="customer"
              name="customer"
              placeholder="Enter customer name"
              value={formData.customer}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              placeholder="Select date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Input
              id="status"
              name="status"
              placeholder="e.g. Processing, Shipped"
              value={formData.status}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="total">Total</Label>
            <Input
              id="total"
              name="total"
              placeholder="$0.00"
              value={formData.total}
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>

        <CardFooter className="justify-end">
          <Button type="submit">Update Order</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
