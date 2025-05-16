import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import CitizenServices from './CitizenServices';
import DepartmentServices from './DepartmentServices';

interface LoginProps {
  onLoginSuccess: (userType: 'Citizen' | 'Department') => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:'' ,
    password:'' 
  });
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'Citizen' | 'Department'>('Citizen');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const url = 'http://localhost:8087/api/auth';
      const { data: res } = await axios.post(url, { 
        email: formData.email, 
        password: formData.password,
        // Removed 'role' parameter if backend doesn't expect it
        // Add any other required fields according to your API
      });

      localStorage.setItem('token', res.data);
      onLoginSuccess(userType); // Pass userType to parent component
      
      ({
        title: "Login Successful",
        description: `Welcome back! You're logged in as ${userType}`,
      });

      navigate(userType === 'Citizen' ? '/CitizenServices' : '/DepartmentServices');
      
    } catch (error: any) {
      let errorMessage = 'An unexpected error occurred. Please try again.';
      
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = 'Invalid email or password';
        } else if (error.response.data?.message) {
          errorMessage = error.response.data.message;
        }
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <section className="section-padding bg-gov-neutral-100 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-4">
          <Card className="border-t-4 border-t-gov-blue shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Login to GovConnect</CardTitle>
              <CardDescription className="text-center">
                Enter your email and password to access your account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex space-x-4 mb-6">
                <Button
                  variant={userType === 'Citizen' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => setUserType('Citizen')}
                >
                  Citizen
                </Button>
                <Button
                  variant={userType === 'Department' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => setUserType('Department')}
                >
                  Department
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-xs text-gov-blue hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gov-neutral-500 hover:text-gov-blue"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-600 text-center py-2">{error}</p>
                )}

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col">
              <p className="text-center text-sm text-gov-neutral-600">
                Don't have an account?{' '}
                <Link to="/register" className="text-gov-blue hover:underline font-medium">
                  Register
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Login;