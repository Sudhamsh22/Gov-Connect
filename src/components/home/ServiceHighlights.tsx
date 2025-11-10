
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MessageSquare, ClipboardList, BarChart2 } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-gov-blue" />,
    title: "Communication Portal",
    description: "Secure messaging between departments and citizens for efficient communication."
  },
  {
    icon: <ClipboardList className="h-8 w-8 text-gov-blue" />,
    title: "Task Management",
    description: "Create, assign, and track tasks across departments with real-time updates."
  },
  {
    icon: <FileText className="h-8 w-8 text-gov-blue" />,
    title: "Document Sharing",
    description: "Upload and manage official documents with secure access controls."
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-gov-blue" />,
    title: "Real-time Insights",
    description: "Track pending tasks, completed services, and communication logs."
  }
];

const ServiceHighlights = () => {
  return (
    <section className="section-padding bg-white">
      <div className="gov-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gov-blue mb-4">Key Features</h2>
          <p className="text-lg text-gov-neutral-700 max-w-2xl mx-auto">
            Our platform provides powerful tools to streamline government operations and improve service delivery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="service-card border-t-4 border-t-gov-blue-light hover:-translate-y-1 transition-transform duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gov-neutral-700 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
