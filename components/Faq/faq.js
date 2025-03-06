'use client';

import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "What services does PropertyLand offer?",
            answer: "PropertyLand offers comprehensive real estate services including property buying, selling, renting, property management, and investment consulting. Our experienced agents provide personalized guidance throughout your real estate journey."
        },
        {
            question: "How do I schedule a property viewing?",
            answer: "You can schedule a property viewing by contacting our team through our website, calling our office, or reaching out to one of our agents directly. We offer both in-person and virtual tours to accommodate your preferences."
        },
        {
            question: "What documents do I need to rent a property?",
            answer: "Required documents typically include proof of income (pay stubs or bank statements), employment verification, photo ID, rental history, and references. Additional documents may be required depending on the specific property and circumstances."
        },
        {
            question: "How long does the buying process typically take?",
            answer: "The buying process usually takes 30-45 days from offer acceptance to closing. This timeline can vary based on factors such as financing, property conditions, and contract negotiations. Our team works to ensure a smooth and efficient process."
        },
        {
            question: "What are your agent commission rates?",
            answer: "Our commission rates are competitive and vary based on the type of service and property. We provide transparent pricing and will discuss all fees during our initial consultation to ensure there are no surprises."
        },
        {
            question: "Do you help with property investment strategies?",
            answer: "Yes, we offer comprehensive investment consulting services. Our experts can help you analyze market trends, identify profitable opportunities, and develop investment strategies tailored to your goals and risk tolerance."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="font-sans divide-y divide-[#F4D5C6] rounded-lg mx-auto mt-8 sm:mt-20 max-w-5xl px-4">
            <div className="mb-4 sm:mb-8 text-start md:text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary font-kufam mb-10 sm:mb-20 mt-6 sm:mt-10">Frequently Asked Questions</h2>
            </div>
            
            {faqData.map((faq, index) => (
                <div key={index} className="accordion" role="region">
                    <button
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        className={`toggle-button w-full text-sm sm:text-base outline-none text-left font-semibold py-4 sm:py-6 ${
                            openIndex === index ? 'hover:text-primary' : ''
                        }  flex items-center justify-between transition-colors duration-300`}
                    >
                        <span className="mr-4 text-primary text-md sm:text-2xl  font-kufam">{faq.question}</span>
                        {openIndex === index ? (
                            <MinusIcon className="w-8 h-8 sm:w-10 sm:h-10 p-2 text-primary bg-secondary rounded-full" />
                        ) : (
                            <PlusIcon className="w-8 h-8 sm:w-10 sm:h-10 p-2 text-primary bg-secondary rounded-full" />
                        )}
                    </button>
                    
                    <div
                        className={`content overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index ? 'max-h-60 sm:max-h-48' : 'max-h-0'
                        }`}
                    >
                        <p className="text-xs sm:text-lg text-[#7D7D7D] pb-4 sm:pb-6">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
