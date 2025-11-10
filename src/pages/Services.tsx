import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from 'lucide-react';

const services = {
  citizen: [
    { 
      id: 1, 
      title: "Aadhaar Card Application", 
      description: "Apply for a new ID card or renew an existing one", 
      category: "Identity", 
      department: "Interior"
    },
    { 
      id: 2, 
      title: "Birth Certificate", 
      description: "Request a copy of a birth certificate", 
      category: "Records", 
      department: "Health"
    },
    { 
      id: 3, 
      title: "Driver's License", 
      description: "Apply for or renew a driver's license", 
      category: "Transport", 
      department: "Transport"
    },
    { 
      id: 4, 
      title: "Passport Application", 
      description: "Apply for a new passport or renew an existing one", 
      category: "Travel", 
      department: "Interior"
    },
    { 
      id: 5, 
      title: "Tax Filing", 
      description: "File personal income taxes", 
      category: "Finance", 
      department: "Finance"
    },
    { 
      id: 6, 
      title: "Voter Registration", 
      description: "Register to vote in upcoming elections", 
      category: "Civic", 
      department: "Electoral"
    },
    { 
      id: 7, 
      title: "Housing Assistance", 
      description: "Apply for housing support programs", 
      category: "Housing", 
      department: "Housing"
    },
    { 
      id: 8, 
      title: "Education Grants", 
      description: "Apply for education funding and scholarships", 
      category: "Education", 
      department: "Education"
    },
    { 
      id: 9, 
      title: "Business Registration", 
      description: "Register a new business entity", 
      category: "Legal", 
      department: "Commerce"
    },
    { 
      id: 10, 
      title: "Tax ID Application", 
      description: "Apply for a business tax identification number", 
      category: "Finance", 
      department: "Finance"
    },
    { 
      id: 11, 
      title: "Licensing", 
      description: "Apply for business operation licenses", 
      category: "Regulatory", 
      department: "Commerce"
    },
    { 
      id: 12, 
      title: "Export Permissions", 
      description: "Request permissions for international exports", 
      category: "Trade", 
      department: "Commerce"
    },
    { 
      id: 13, 
      title: "Employment Verification", 
      description: "Verify employment eligibility for new hires", 
      category: "Labor", 
      department: "Labor"
    },
    { 
      id: 14, 
      title: "Government Contracts", 
      description: "Apply for government contract opportunities", 
      category: "Procurement", 
      department: "Commerce"
    }
  ],
  department: [
    { 
      id: 1, 
      title: "Inter-Department Request", 
      description: "Request information or assistance from other departments", 
      category: "Administrative", 
      department: "All"
    },
    { 
      id: 2, 
      title: "Resource Allocation", 
      description: "Request additional resources for departmental projects", 
      category: "Resources", 
      department: "All"
    },
    { 
      id: 3, 
      title: "Budget Approval", 
      description: "Submit budget proposals for approval", 
      category: "Finance", 
      department: "Finance"
    },
    { 
      id: 4, 
      title: "Policy Review", 
      description: "Submit policies for review and approval", 
      category: "Policy", 
      department: "All"
    }
  ]
};

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('citizen');
  const navigate = useNavigate();
  
  const filteredServices = services[activeTab as keyof typeof services].filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = () => {
    navigate('/login');
  };
  
  return (
    <Layout>
      <section className="section-padding bg-gov-neutral-100">
        <div className="gov-container">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gov-blue mb-4">Government Services</h1>
            <p className="text-lg text-gov-neutral-700 max-w-2xl mx-auto">
              Browse all available services provided by government departments
            </p>
          </div>
          
          <div className="relative mb-8 max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gov-neutral-500" />
            <Input 
              type="search" 
              placeholder="Search for services..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="citizen" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="citizen">Citizen Services</TabsTrigger>
              <TabsTrigger value="department">Departmental Services</TabsTrigger>
            </TabsList>
            
            <TabsContent value="citizen">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map(service => (
                  <Card 
                    key={service.id} 
                    className="service-card cursor-pointer hover:shadow-md transition-shadow"
                    onClick={handleCardClick}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{service.title}</CardTitle>
                        <span className="bg-gov-neutral-100 text-gov-neutral-700 text-xs px-2 py-1 rounded">
                          {service.category}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{service.description}</CardDescription>
                      <div className="text-sm text-gov-neutral-500">Department: {service.department}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="department">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map(service => (
                  <Card 
                    key={service.id} 
                    className="service-card cursor-pointer hover:shadow-md transition-shadow"
                    onClick={handleCardClick}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{service.title}</CardTitle>
                        <span className="bg-gov-neutral-100 text-gov-neutral-700 text-xs px-2 py-1 rounded">
                          {service.category}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{service.description}</CardDescription>
                      <div className="text-sm text-gov-neutral-500">Department: {service.department}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Services;