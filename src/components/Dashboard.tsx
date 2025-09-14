import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, ExternalLink, Link, Settings, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [freelancerUsername, setFreelancerUsername] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const handleFreelancerConnect = () => {
    if (!freelancerUsername) {
      toast({
        title: "Username required",
        description: "Please enter your Freelancer.com username",
        variant: "destructive",
      });
      return;
    }

    // Simulate connection process
    setIsConnected(true);
    toast({
      title: "Connected successfully",
      description: `Connected to Freelancer.com as ${freelancerUsername}`,
    });
  };

  const openFreelancerProfile = () => {
    if (freelancerUsername) {
      window.open(`https://www.freelancer.com/u/${freelancerUsername}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold gradient-text">Freelancer Integration</h1>
            <p className="text-muted-foreground">Connect with Freelancer.com</p>
          </div>
          <Button 
            onClick={logout}
            variant="outline"
            className="glass-card border-0 bg-secondary/20 hover:bg-secondary/30"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Freelancer Connection Card */}
        <Card className="glass-card border-0">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                <Link className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl text-foreground">
                  Connect to Freelancer.com
                </CardTitle>
                <CardDescription>
                  Link your Freelancer.com profile to sync opportunities
                </CardDescription>
              </div>
              {isConnected && (
                <CheckCircle className="w-6 h-6 text-green-500 ml-auto" />
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {!isConnected ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="freelancer-username">Freelancer.com Username</Label>
                  <Input
                    id="freelancer-username"
                    placeholder="Enter your username"
                    value={freelancerUsername}
                    onChange={(e) => setFreelancerUsername(e.target.value)}
                    className="glass-input"
                  />
                </div>
                <Button 
                  onClick={handleFreelancerConnect}
                  className="w-full gradient-primary"
                >
                  Connect Account
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <p className="text-green-400 font-medium">
                    ✓ Connected as {freelancerUsername}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button 
                    onClick={openFreelancerProfile}
                    variant="outline"
                    className="flex-1 glass-card border-0 bg-secondary/20 hover:bg-secondary/30"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                  <Button 
                    onClick={() => setIsConnected(false)}
                    variant="outline"
                    className="flex-1 glass-card border-0 bg-secondary/20 hover:bg-secondary/30"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Disconnect
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="glass-card border-0">
          <CardHeader>
            <CardTitle className="text-foreground">Quick Actions</CardTitle>
            <CardDescription>
              Explore Freelancer.com features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                variant="outline"
                className="h-auto p-4 glass-card border-0 bg-secondary/10 hover:bg-secondary/20 justify-start"
                onClick={() => window.open('https://www.freelancer.com/jobs', '_blank')}
              >
                <div className="text-left">
                  <p className="font-semibold text-foreground">Browse Jobs</p>
                  <p className="text-sm text-muted-foreground">Find new opportunities</p>
                </div>
              </Button>
              <Button 
                variant="outline"
                className="h-auto p-4 glass-card border-0 bg-secondary/10 hover:bg-secondary/20 justify-start"
                onClick={() => window.open('https://www.freelancer.com/dashboard', '_blank')}
              >
                <div className="text-left">
                  <p className="font-semibold text-foreground">Dashboard</p>
                  <p className="text-sm text-muted-foreground">Manage your projects</p>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;