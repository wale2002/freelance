import { useState } from 'react';
import { useAuthStore } from '@/stores/authStore';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileImage, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { mockApi } from '@/api/mockApi';

export default function PortfolioPage() {
  const { user } = useAuthStore();
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    try {
      const formData = new FormData();
      Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
          formData.append('images[]', file);
        } else if (file.type === 'application/pdf') {
          formData.append('files[]', file);
        }
      });

      const response = await mockApi.users.uploadPortfolio(formData);
      if (response.success) {
        toast.success('Portfolio files uploaded successfully!');
      }
    } catch (error) {
      toast.error('Failed to upload files');
    } finally {
      setUploading(false);
    }
  };

  if (user?.role !== 'freelancer') {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              Portfolio is only available for freelancers
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Portfolio</h1>
              <p className="text-muted-foreground mt-2">
                Showcase your best work to attract clients
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Upload Files</CardTitle>
                <CardDescription>
                  Upload images (up to 5) and PDFs (up to 2) to showcase your work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    disabled={uploading}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-2">
                      {uploading ? 'Uploading...' : 'Click to upload files'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Images (JPG, PNG) and PDFs accepted
                    </p>
                  </label>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-xl font-semibold mb-4">Your Portfolio</h2>
              {user.portfolio && user.portfolio.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {user.portfolio.map((item: any, index: number) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        {item.type === 'image' ? (
                          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                            <FileImage className="w-12 h-12 text-muted-foreground" />
                          </div>
                        ) : (
                          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                            <FileText className="w-12 h-12 text-muted-foreground" />
                          </div>
                        )}
                        <p className="text-sm text-muted-foreground mt-2">
                          {item.name || `Portfolio item ${index + 1}`}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-12 text-center text-muted-foreground">
                    No portfolio items yet. Upload your work to get started!
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
