import { ReactNode } from 'react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useIsCallerAdmin } from '../../hooks/useEnquiriesAdmin';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Button } from '../ui/button';
import { Loader2, ShieldAlert } from 'lucide-react';
import LoginButton from './LoginButton';

interface AdminGuardProps {
  children: ReactNode;
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const { identity, isInitializing } = useInternetIdentity();
  const { data: isAdmin, isLoading: isCheckingAdmin, isFetched } = useIsCallerAdmin();

  const isAuthenticated = !!identity;

  // Show loading while initializing identity or checking admin status
  if (isInitializing || (isAuthenticated && isCheckingAdmin)) {
    return (
      <div className="container mx-auto px-4 py-24 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-24 max-w-md">
        <Alert>
          <ShieldAlert className="h-5 w-5" />
          <AlertTitle className="text-lg font-heading font-semibold mb-2">
            Authentication Required
          </AlertTitle>
          <AlertDescription className="space-y-4">
            <p className="text-muted-foreground">
              You need to be logged in to access the admin panel.
            </p>
            <LoginButton />
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  // Show access denied if authenticated but not admin
  if (isFetched && !isAdmin) {
    return (
      <div className="container mx-auto px-4 py-24 max-w-md">
        <Alert variant="destructive">
          <ShieldAlert className="h-5 w-5" />
          <AlertTitle className="text-lg font-heading font-semibold mb-2">
            Access Denied
          </AlertTitle>
          <AlertDescription className="space-y-4">
            <p>
              You do not have permission to access this page. Only administrators can view this content.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => window.location.href = '/'}
              >
                Go to Home
              </Button>
              <LoginButton />
            </div>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  // Render children if authenticated and admin
  return <>{children}</>;
}
