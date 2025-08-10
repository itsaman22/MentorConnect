import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Headphones, Mail } from 'lucide-react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      question: "What courses do you offer at the MentorConnect?",
      answer: "We offer a wide range of courses including software development, data science, business management, digital marketing, and leadership development. Our courses are designed by industry experts to meet current market demands."
    },
    {
      question: "Do I need prior experience to enroll?",
      answer: "No prior experience is required for most of our basic courses. However, some advanced courses may have prerequisites. Each course description clearly states any required background knowledge."
    },
    {
      question: "Are the courses self-paced or instructor-led?",
      answer: "We offer both self-paced and instructor-led courses. You can choose the format that best fits your learning style and schedule. Instructor-led courses provide more structured learning with direct mentor interaction."
    },
    {
      question: "Do you provide certification upon course completion?",
      answer: "Yes, we provide certificates of completion for all our courses. These certificates are industry-recognized and can be shared on professional platforms like LinkedIn."
    },
    {
      question: "Can I access the courses online?",
      answer: "Yes, all our courses are available online and can be accessed 24/7 from anywhere in the world. You just need a stable internet connection and a modern web browser."
    },
    {
      question: "Can I access support during the courses?",
      answer: "Absolutely! We provide comprehensive support through multiple channels including live chat, email, and scheduled mentor sessions. Our support team is available to help you with any questions or concerns."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* FAQ Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Have questions?
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to commonly asked questions about our mentorship program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* FAQ Questions */}
          <div className="md:col-span-8">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between transition-colors duration-200"
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                    {openQuestion === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4">
            <div className="bg-blue-50 rounded-xl p-6 space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Still have questions?
              </h3>
              <p className="text-gray-600">
                Can't find the answer you're looking for? Please reach out to our friendly team.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">24/7 CUSTOMER CARE</p>
                    <p className="text-gray-900 font-medium">(62) 3474 - 937-8270</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">FOR TECHNICAL ISSUES</p>
                    <p className="text-gray-900 font-medium">support@mentorconnect.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
