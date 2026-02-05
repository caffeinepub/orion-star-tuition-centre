import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import AdminGuard from '../components/auth/AdminGuard';
import EnquiriesList from '../components/admin/EnquiriesList';
import LoginButton from '../components/auth/LoginButton';
import { useInternetIdentity } from '../hooks/useInternetIdentity';

export default function AdminEnquiriesPage() {
  const { identity } = useInternetIdentity();
  const navigate = useNavigate();

  return (
    <AdminGuard>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
              Enquiries Management
            </h1>
            <p className="text-muted-foreground">
              View and manage student enquiries
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate({ to: '/' })}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </button>
            <LoginButton />
          </div>
        </div>
        <EnquiriesList />
      </div>
    </AdminGuard>
  );
}
