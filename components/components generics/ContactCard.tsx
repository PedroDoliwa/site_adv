"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  iconBg?: string;
  title: string;
  mainText: string;
  subText: string;
  buttonText: string;
  buttonAction?: () => void;
}

export function ContactCard({
  icon: Icon,
  iconBg = "bg-amber-600",
  title,
  mainText,
  subText,
  buttonText,
  buttonAction,
}: ContactCardProps) {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${iconBg}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-white">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-amber-400 mb-2">{mainText}</p>
        <p className="text-slate-300">{subText}</p>
        <Button
          className="mt-4 bg-amber-600 hover:bg-amber-700 w-full cursor-pointer"
          onClick={buttonAction}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
