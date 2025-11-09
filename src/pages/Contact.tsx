import { useState} from 'react';
import { z } from 'zod';

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone must be 10 digits'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

type Toast = {
  message: string;
  type: 'success' | 'error';
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [toast, setToast] = useState<Toast | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate all fields on submit
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        // console.log(error);
        // console.log(Object.keys(error));   //-> only two keys name and message
        console.log("--------------------------------------");
        // console.log(typeof(error.message));      // message is string -> it needs to be parsed into JSON
        // console.log(JSON.parse(error.message)[0]);   // JSON parsing of message, getting 0th index
        console.log(JSON.parse(error.message)[0].path[0]);   // which field has error
        console.log(JSON.parse(error.message)[0].message);   // what exactly is the error

        JSON.parse(error.message).forEach((err:any)=>{
            const fieldName = err.path[0];
            console.log(fieldName);
            // fieldErrors[fieldName as keyof ContactFormData] = JSON.parse(error.message)[0].message;
            fieldErrors[fieldName as keyof ContactFormData] = err.message;
        })
        console.log("----------FIELDERRORS--------------");
        console.log(fieldErrors);
        console.log("------------------------");
        
        // console.log("State of errors ", )
        // console.log(errors);
        setErrors(er => er=fieldErrors);
        return;
      }
    }

    // Debugging code
    // useEffect(()=>{
    //     console.log("state of errors : ",errors);
    //     return;
    // },[errors])

    setIsSubmitting(true);

    try {
      const apiEndpoint = import.meta.env.VITE_VFILM_CONTACT_API as string;
      
      if (!apiEndpoint) {
        throw new Error('API endpoint not configured');
      }
      
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showToast('Message sent successfully!', 'success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        showToast(
          (errorData as { message?: string }).message || 'Failed to send message. Please try again.',
          'error'
        );
      }
    } catch (error) {
      console.error('Contact form error:', error);
      showToast(
        error instanceof Error ? error.message : 'An error occurred. Please try again.',
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
        <div className="flex flex-col items-start justify-center w-[30%] py-6 px-8">
          <p className="font-baseText text-xl mb-4">
            Whether you have an idea, a question, or simply want to explore how V can work together, V're just a message away.
          </p>
          <p className="font-baseText text-xl mb-4">Let's catch up over coffee.</p>
          <p className="font-baseText text-xl">Great stories always begin with a good conversation</p>
        </div>
        
        <div className="flex flex-col gap-6 items-center justify-center w-[50%] py-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-mediumText text-5xl">Join the Story</p>
            <p className="font-baseText text-lg">Ready to bring your vision to life? Let's talk</p>
          </div>

          <form onSubmit={handleSubmit} className="w-[70%] flex flex-col gap-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (10 digits)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary/90 hover:bg-primary text-white py-2 px-4 rounded-full active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>

          <div className="flex items-center justify-center gap-4 font-bold text-primary text-xs w-full mt-4">
            <p>vernita@varnanfilms.co.in</p>
            <p className="leading-none text-3xl font-light font-baseText">|</p>
            <p>+91 98736 84567</p>
          </div>
        </div>

        <img src="/topRight.svg" className="absolute top-0 right-0 w-[25rem]" alt="Decorative element" />
        <img src="/FullHollowCirc.png" className="absolute -bottom-[35%] -left-[25%] w-[40rem]" alt="Decorative element" />
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-4 right-4 z-50 animate-slide-in">
          <div
            className={`px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 ${
              toast.type === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {toast.type === 'success' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <p className="font-medium">{toast.message}</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}