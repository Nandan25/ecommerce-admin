"use client";

import { useState } from "react";
// import { Input } from "../../components/ui/input";
// import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "Lauren Gregory",
    email: "jessica78@hernandez.biz",
    phone: "051.527.5460x00712",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      {/* Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            {/* <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your name"
            /> */}
          </div>
          <div>
            {/* <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Enter your email"
              type="email"
            /> */}
          </div>
          <div>
            {/* <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            /> */}
          </div>
          <Button>Update Profile</Button>
        </CardContent>
      </Card>

      {/* Preferences Section */}
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Theme: (Add toggle here later)</p>
        </CardContent>
      </Card>

      {/* Password Section */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            {/* <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" /> */}
          </div>
          <div>
            {/* <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" /> */}
          </div>
          <div>
            {/* <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" /> */}
          </div>
          <Button>Change Password</Button>
        </CardContent>
      </Card>
    </div>
  );
}
