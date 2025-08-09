import { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-secondary rounded-lg">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-black">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
