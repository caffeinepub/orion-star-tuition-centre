import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface EnquiryData {
  studentName: string;
  parentName: string;
  classGrade: string;
  contactInfo: string;
  message: string;
}

export function useSubmitEnquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: EnquiryData) => {
      if (!actor) throw new Error('Actor not available');
      
      return actor.submitEnquiry(
        data.studentName,
        data.parentName,
        data.classGrade,
        data.contactInfo,
        data.message
      );
    },
    onSuccess: () => {
      // Invalidate enquiries list in case admin is viewing
      queryClient.invalidateQueries({ queryKey: ['enquiries'] });
    },
  });
}
