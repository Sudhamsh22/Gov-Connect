import React, { useState } from 'react';
import Layout from '@/components/Layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from 'lucide-react';

const services = {
  department: [
    {
      id: 1,
      title: "Inter-Department Request",
      description: "Request information or assistance from other departments",
      category: "Administrative",
      department: "All",
      link: "#"
    },
    {
      id: 2,
      title: "Resource Allocation",
      description: "Request additional resources for departmental projects",
      category: "Resources",
      department: "All",
      link: "#"
    },
    {
      id: 3,
      title: "Budget Approval",
      description: "Submit budget proposals for approval",
      category: "Finance",
      department: "Finance",
      link: "#"
    },
    {
      id: 4,
      title: "Policy Review",
      description: "Submit policies for review and approval",
      category: "Policy",
      department: "All",
      link: "#"
    }
  ]
};

const DepartmentServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('department');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const uniqueDepartments = Array.from(
    new Set(services.department.map(service => service.department))
  );

  const filteredServices = services.department.filter(service => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === 'All' || service.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  return (
    <Layout>
      <section className="section-padding bg-gov-neutral-100">
        <div className="gov-container">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gov-blue mb-3">
              Government Services
            </h1>
            <p className="text-lg text-gov-neutral-700 max-w-2xl mx-auto">
              Browse all available services provided by government departments
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
            {/* Search Input */}
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gov-neutral-500" />
              <Input
                type="search"
                aria-label="Search services"
                placeholder="Search for services..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Department Dropdown */}
            <div className="w-full md:w-1/3">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-sm"
              >
                <option value="All">All Departments</option>
                {uniqueDepartments.map(dep => (
                  <option key={dep} value={dep}>{dep}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="department" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full mb-6 grid grid-cols-1">
              <TabsTrigger value="department">Departmental Services</TabsTrigger>
            </TabsList>

            <TabsContent value="department">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredServices.length ? (
                  filteredServices.map(service => (
                    <article key={service.id}>
                      <Card className="transition-shadow duration-200 hover:shadow-md service-card cursor-pointer">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{service.title}</CardTitle>
                            <span className="bg-gov-neutral-100 text-gov-neutral-700 text-xs px-2 py-1 rounded">
                              {service.category}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="mb-3">
                            {service.description}
                          </CardDescription>
                          <div className="text-sm text-gov-neutral-500 mb-2">
                            Department: {service.department}
                          </div>
                          <a
                            href={service.link}
                            className="text-gov-blue text-sm font-medium hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn More &rarr;
                          </a>
                        </CardContent>
                      </Card>
                    </article>
                  ))
                ) : (
                  <p className="text-center text-gov-neutral-600 col-span-full">
                    No services found for this department or search term.
                  </p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default DepartmentServices;
