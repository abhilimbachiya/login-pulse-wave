import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User, Mail, Shield, Sparkles, Activity, Users, Settings } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const stats = [
    { title: 'Projects', value: '12', icon: Activity, color: 'text-blue-400' },
    { title: 'Collaborators', value: '8', icon: Users, color: 'text-green-400' },
    { title: 'Tasks', value: '24', icon: Settings, color: 'text-purple-400' },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold gradient-text">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back to your workspace</p>
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

        {/* User Info Card */}
        <Card className="glass-card border-0">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <CardTitle className="text-2xl text-foreground">
                  {user?.username}
                </CardTitle>
                <CardDescription className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    {user?.email}
                  </span>
                  <span className="flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    {user?.role.name}
                  </span>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-muted-foreground text-sm">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Welcome Section */}
        <Card className="glass-card border-0">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <CardTitle className="text-foreground">Getting Started</CardTitle>
            </div>
            <CardDescription>
              Your account has been successfully created and you're now logged in!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="glass-card border-0 bg-secondary/10">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">Complete Profile</h3>
                  <p className="text-sm text-muted-foreground">
                    Add more details to your profile to get better recommendations.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card border-0 bg-secondary/10">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">Explore Features</h3>
                  <p className="text-sm text-muted-foreground">
                    Discover all the powerful tools available in your dashboard.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;