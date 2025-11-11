import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "এই সার্ভিস কি নিরাপদ?",
    answer: "হ্যাঁ, সম্পূর্ণ নিরাপদ। আমরা শুধুমাত্র অরগানিক এবং রিয়েল look like মেথড ব্যবহার করি যা আপনার অ্যাকাউন্টের জন্য সম্পূর্ণ নিরাপদ।",
  },
  {
    question: "কত সময়ে ফলোয়ার ডেলিভারি পাব?",
    answer: "সাধারণত পেমেন্ট কনফার্ম হওয়ার ২৪-৪৮ ঘণ্টার মধ্যে ডেলিভারি শুরু হয় এবং প্যাকেজ অনুযায়ী ৩-৭ দিনের মধ্যে সম্পূর্ণ হয়।",
  },
  {
    question: "ফলোয়াররা কি রিয়েল?",
    answer: "হ্যাঁ, আমরা ১০০% রিয়েল look like ফলোয়ার প্রদান করি যারা আপনার কন্টেন্ট দেখবে এবং এনগেজমেন্ট বাড়াবে।",
  },
  {
    question: "পেমেন্ট মেথড কী কী?",
    answer: "আমরা বিকাশ, নগদ, রকেট এবং ব্যাংক ট্রান্সফার সহ বিভিন্ন পেমেন্ট মেথড গ্রহণ করি।",
  },
  {
    question: "ফলোয়ার কমে গেলে কি করবেন?",
    answer: "আমরা লাইফটাইম গ্যারান্টি দিয়ে থাকি। কোনো কারণে ফলোয়ার কমে গেলে আমরা ফ্রিতে রিফিল করে দিব।",
  },
  {
    question: "কোন প্ল্যাটফর্মের জন্য সার্ভিস পাওয়া যায়?",
    answer: "আমরা Facebook, Instagram, TikTok, YouTube সহ সকল জনপ্রিয় সোশ্যাল মিডিয়া প্ল্যাটফর্মের জন্য সার্ভিস প্রদান করি।",
  },
  {
    question: "সাপোর্ট কীভাবে পাব?",
    answer: "আমরা ২৪/৭ হোয়াটসঅ্যাপ সাপোর্ট প্রদান করি। যেকোনো সমস্যার জন্য আমাদের সাথে যোগাযোগ করতে পারেন।",
  },
  {
    question: "অ্যাকাউন্ট ব্যান হওয়ার ঝুঁকি আছে কি?",
    answer: "না, আমরা সম্পূর্ণ নিরাপদ এবং প্ল্যাটফর্ম গাইডলাইন মেনে কাজ করি। তাই অ্যাকাউন্ট ব্যান হওয়ার কোনো ঝুঁকি নেই।",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            সচরাচর জিজ্ঞাসা
          </h2>
          <p className="text-xl text-muted-foreground">
            আপনার মনে থাকা প্রশ্নগুলোর উত্তর খুঁজে নিন
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="gradient-card border border-border/50 rounded-xl px-6 hover:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left hover:text-primary py-4 text-base font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
