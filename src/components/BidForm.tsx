import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { mockApi } from '@/api/mockApi';
import { toast } from 'sonner';
import { Sparkles, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const bidSchema = z.object({
  amount: z.coerce.number().min(1, 'Amount must be greater than 0'),
  proposal: z.string().min(50, 'Proposal must be at least 50 characters'),
});

interface BidFormProps {
  projectId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export const BidForm = ({ projectId, open, onOpenChange, onSuccess }: BidFormProps) => {
  const [generating, setGenerating] = useState(false);
  const form = useForm<z.infer<typeof bidSchema>>({
    resolver: zodResolver(bidSchema),
    defaultValues: {
      amount: 0,
      proposal: '',
    },
  });

  const handleGenerateProposal = async () => {
    setGenerating(true);
    try {
      const response = await mockApi.proposals.generate(projectId);
      if (response.success && response.data) {
        form.setValue('proposal', response.data.proposal);
        toast.success('AI proposal generated!');
      }
    } catch (error) {
      toast.error('Failed to generate proposal');
    } finally {
      setGenerating(false);
    }
  };

  const onSubmit = async (data: z.infer<typeof bidSchema>) => {
    try {
      const response = await mockApi.projects.createBid(projectId, { amount: data.amount, proposal: data.proposal });
      if (response.success) {
        toast.success('Bid submitted successfully!');
        form.reset();
        onOpenChange(false);
        onSuccess();
      } else {
        toast.error(response.error || 'Failed to submit bid');
      }
    } catch (error) {
      toast.error('Failed to submit bid');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Submit Your Bid</DialogTitle>
          <DialogDescription>
            Provide your bid amount and proposal for this project
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bid Amount ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="5000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="proposal"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Proposal</FormLabel>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleGenerateProposal}
                      disabled={generating}
                    >
                      {generating ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 mr-2" />
                          Generate with AI
                        </>
                      )}
                    </Button>
                  </div>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your approach to the project..."
                      className="min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Submit Bid
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
