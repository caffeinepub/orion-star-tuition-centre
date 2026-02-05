import { useState } from 'react';
import { useSubmitEnquiry } from '../../hooks/useSubmitEnquiry';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface FormData {
  studentName: string;
  parentName: string;
  classGrade: string;
  contactInfo: string;
  message: string;
}

interface FormErrors {
  studentName?: string;
  parentName?: string;
  classGrade?: string;
  contactInfo?: string;
  message?: string;
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    parentName: '',
    classGrade: '',
    contactInfo: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const { mutate: submitEnquiry, isPending, isError, error } = useSubmitEnquiry();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent/Guardian name is required';
    }

    if (!formData.classGrade.trim()) {
      newErrors.classGrade = 'Class/Grade is required';
    }

    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = 'Contact information is required';
    } else if (
      !formData.contactInfo.includes('@') &&
      !/^\d{10}$/.test(formData.contactInfo.replace(/\s/g, ''))
    ) {
      newErrors.contactInfo = 'Please provide a valid email or 10-digit phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);

    if (!validateForm()) {
      return;
    }

    submitEnquiry(
      {
        studentName: formData.studentName.trim(),
        parentName: formData.parentName.trim(),
        classGrade: formData.classGrade.trim(),
        contactInfo: formData.contactInfo.trim(),
        message: formData.message.trim(),
      },
      {
        onSuccess: () => {
          setFormData({
            studentName: '',
            parentName: '',
            classGrade: '',
            contactInfo: '',
            message: '',
          });
          setErrors({});
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 5000);
        },
      }
    );
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Card className="border-border/50 shadow-soft">
      <CardHeader>
        <CardTitle className="text-2xl font-heading">Enquiry Form</CardTitle>
      </CardHeader>
      <CardContent>
        {showSuccess && (
          <Alert className="mb-6 border-accent bg-accent/10">
            <CheckCircle2 className="h-4 w-4 text-accent" />
            <AlertDescription className="text-accent-foreground">
              Thank you for your enquiry! We'll get back to you soon.
            </AlertDescription>
          </Alert>
        )}

        {isError && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>
              {error?.message || 'Failed to submit enquiry. Please try again.'}
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="studentName">Student Name *</Label>
            <Input
              id="studentName"
              value={formData.studentName}
              onChange={(e) => handleChange('studentName', e.target.value)}
              placeholder="Enter student's full name"
              className={errors.studentName ? 'border-destructive' : ''}
            />
            {errors.studentName && (
              <p className="text-sm text-destructive">{errors.studentName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="parentName">Parent/Guardian Name *</Label>
            <Input
              id="parentName"
              value={formData.parentName}
              onChange={(e) => handleChange('parentName', e.target.value)}
              placeholder="Enter parent or guardian's name"
              className={errors.parentName ? 'border-destructive' : ''}
            />
            {errors.parentName && (
              <p className="text-sm text-destructive">{errors.parentName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="classGrade">Class/Grade *</Label>
            <Input
              id="classGrade"
              value={formData.classGrade}
              onChange={(e) => handleChange('classGrade', e.target.value)}
              placeholder="e.g., Class 5, Class 10, etc."
              className={errors.classGrade ? 'border-destructive' : ''}
            />
            {errors.classGrade && (
              <p className="text-sm text-destructive">{errors.classGrade}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactInfo">Contact (Email or Phone) *</Label>
            <Input
              id="contactInfo"
              value={formData.contactInfo}
              onChange={(e) => handleChange('contactInfo', e.target.value)}
              placeholder="Email or 10-digit phone number"
              className={errors.contactInfo ? 'border-destructive' : ''}
            />
            {errors.contactInfo && (
              <p className="text-sm text-destructive">{errors.contactInfo}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Tell us about your requirements, preferred subjects, or any questions you have..."
              rows={5}
              className={errors.message ? 'border-destructive' : ''}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message}</p>
            )}
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Enquiry'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
