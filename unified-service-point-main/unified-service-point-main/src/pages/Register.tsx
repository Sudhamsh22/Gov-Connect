import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';

const Register = () => {
 
  const navigate = useNavigate();
  const [userType, setUserType] = useState('citizen');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const [citizenData, setCitizenData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    acceptTerms: false
  });

  const [departmentData, setDepartmentData] = useState({
    departmentName: '',
    departmentId: '',
    email: '',
    password: '',
    acceptTerms: false
  });

  const handleCitizenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setCitizenData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setDepartmentData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const formData = userType === 'citizen' ? citizenData : departmentData;

    const payload = {
      email: formData.email,
      password: formData.password,
      userType,
    //  // ...(userType === 'citizen' && {
    //     first_name: citizenData.firstName,
    //     last_name: citizenData.lastName
    //   }),
    //   ...(userType === 'department' && {
    //     department_name: departmentData.departmentName,
    //     department_id: departmentData.departmentId
    //   })//
    };

    try {
      const url = 'http://localhost:8087/api/users';
      await axios.post(url, payload);

     ({
        title: "Registration Successful",
        description: "Your account has been created successfully",
      });

      navigate('/login');
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || 'An unexpected error occurred.';
      setError(errorMsg);

      ({
        title: "Registration Failed",
        description: errorMsg,
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <section className="section-padding bg-gov-neutral-100 flex items-center justify-center">
        <div className="w-full max-w-md">
          <Card className="border-t-4 border-t-gov-blue">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
              <CardDescription className="text-center">
                Register to access government services
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="citizen" className="mb-6" onValueChange={setUserType}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="citizen">Citizen</TabsTrigger>
                  <TabsTrigger value="department">Department</TabsTrigger>
                </TabsList>

                {/* Citizen Form */}
                <TabsContent value="citizen">
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={citizenData.firstName}
                          onChange={handleCitizenChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={citizenData.lastName}
                          onChange={handleCitizenChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={citizenData.email}
                        onChange={handleCitizenChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={citizenData.password}
                          onChange={handleCitizenChange}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gov-neutral-500"
                          tabIndex={-1}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="acceptTermsCitizen"
                        name="acceptTerms"
                        checked={citizenData.acceptTerms}
                        onCheckedChange={(checked) =>
                          setCitizenData((prev) => ({ ...prev, acceptTerms: checked === true }))
                        }
                        required
                      />
                      <Label htmlFor="acceptTermsCitizen" className="text-sm">
                        I agree to the terms of service and privacy policy
                      </Label>
                    </div>

                    {error && <div className="text-red-600 text-sm">{error}</div>}

                    <Button type="submit" className="w-full" disabled={!citizenData.acceptTerms}>
                      Register
                    </Button>
                  </form>
                </TabsContent>

                {/* Department Form */}
                <TabsContent value="department">
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="departmentName">Department Name</Label>
                      <Input
                        id="departmentName"
                        name="departmentName"
                        value={departmentData.departmentName}
                        onChange={handleDepartmentChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="departmentId">Department ID</Label>
                      <Input
                        id="departmentId"
                        name="departmentId"
                        value={departmentData.departmentId}
                        onChange={handleDepartmentChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deptEmail">Official Email</Label>
                      <Input
                        id="deptEmail"
                        type="email"
                        name="email"
                        value={departmentData.email}
                        onChange={handleDepartmentChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deptPassword">Password</Label>
                      <div className="relative">
                        <Input
                          id="deptPassword"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={departmentData.password}
                          onChange={handleDepartmentChange}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gov-neutral-500"
                          tabIndex={-1}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="acceptTermsDept"
                        name="acceptTerms"
                        checked={departmentData.acceptTerms}
                        onCheckedChange={(checked) =>
                          setDepartmentData((prev) => ({ ...prev, acceptTerms: checked === true }))
                        }
                        required
                      />
                      <Label htmlFor="acceptTermsDept" className="text-sm">
                        I agree to the terms of service and privacy policy
                      </Label>
                    </div>

                    {error && <div className="text-red-600 text-sm">{error}</div>}

                    <Button type="submit" className="w-full" disabled={!departmentData.acceptTerms}>
                      Register
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <p className="text-center text-sm mt-4 text-gov-neutral-600">
                Already have an account?{' '}
                <Link to="/login" className="text-gov-blue hover:underline">
                  Login
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export { Register };