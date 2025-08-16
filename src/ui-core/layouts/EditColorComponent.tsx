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

// Define the type for color form data
type ColorFormData = {
  name: string;
  hexCode: string;
};

interface EditColorProps {
  initialData: ColorFormData;
  onSubmit: (data: ColorFormData) => void;
}

export function EditColorComponent({
  initialData,
  onSubmit,
}: EditColorProps) {
  const [formData, setFormData] = useState<ColorFormData>(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated color data:", formData);
    onSubmit(formData);
  };

  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <CardTitle>Edit Color</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Color Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter color name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="hexCode">Hex Code</Label>
            <Input
              id="hexCode"
              name="hexCode"
              placeholder="#FFFFFF"
              value={formData.hexCode}
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>

        <CardFooter className="justify-end">
          <Button type="submit">Update Color</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
