"use client"

import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-6 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="py-4 px-6 bg-gray-50">
          {content}
        </div>
      )}
    </div>
  );
};

export default function FAQOrgPage() {
  const faqOrgItems = [
    {
      title: "10 compelling reasons to become an organizer",
      content: (
        <p style={{ color: 'purple' }}>
            1.	Positive Public Image:<br></br>
	        Corporate Social Responsibility (CSR): Demonstrating a commitment to sustainability enhances the company's or
            institution's reputation. Brand Loyalty: Customers and visitors are more likely to support businesses that prioritize
            environmental responsibility.<br></br><br></br>
            2.	Increased Customer Engagement:<br></br>
	        Customer Retention: Offering unique perks and incentives can lead to higher customer retention rates.
            New Customer Attraction: Eco-friendly initiatives attract environmentally conscious consumers.<br></br><br></br>
            3.	Cost Savings:<br></br>
            Volunteer Work: Engaging volunteers in tasks like park maintenance or gardening reduces labor costs.
            Waste Reduction: Encouraging customers to bring their own containers reduces packaging expenses.<br></br><br></br>
            4.	Regulatory Compliance:<br></br>
            Environmental Regulations: Proactively engaging in sustainable practices helps businesses comply with environmental laws and regulations.
            Grants and Incentives: Some governments offer grants or incentives to businesses that implement green initiatives.<br></br><br></br>
            5.	Employee Satisfaction:<br></br>
            Workplace Morale: Employees take pride in working for socially responsible companies, which can improve morale and reduce turnover.
            Employee Engagement: Opportunities for employees to participate in sustainability initiatives can boost engagement and
            teamwork.<br></br><br></br>
            6.	Market Differentiation:<br></br>
            Competitive Advantage: Offering unique, sustainability-focused engagements can differentiate a business from its competitors.
            Innovation: Developing eco-friendly initiatives can lead to innovative business practices and solutions.<br></br><br></br>
            7.	Networking Opportunities:<br></br>
            Partnerships: Collaborating with other eco-conscious businesses and organizations can lead to beneficial partnerships.
            Community Involvement: Active participation in community sustainability efforts can strengthen local ties and support.<br></br><br></br>
            8.	Customer Feedback and Insights:<br></br>
            Engagement Programs: These initiatives provide a platform for direct interaction with customers, leading to valuable
            feedback and insights.<br></br><br></br>
            9.	Marketing and Promotion:<br></br>
            Media Attention: Eco-friendly initiatives can attract positive media coverage and enhance marketing efforts.
            Social Media Content: Engaging activities provide content for social media and other marketing channels.<br></br><br></br>
            10.	Long-term Sustainability:<br></br>
            Resource Conservation: Reducing waste and conserving resources ensures long-term sustainability and profitability.
            Future-proofing: Businesses that adapt to environmental trends are better prepared for future market changes.
        </p>
      )
    },
    {
      title: "How can one participate in ecoPerks?",
      content: (
        <p style={{ color: 'purple' }}>
          Participation is simple. Just sign up to this website for free and start creating perks.
          Once created, it will show up on the home page.
        </p>
      )
    },
    
    {
      title: "What proof is required to show someone has participated in a green action?",
      content: (
        <p style={{ color: 'purple' }}>
          Participants can show proof, such as train tickets or photos of themselves biking or participating in cleanup
          efforts, but generally, ecoPerks is built on trust, just as{' '}
          <a href="https://www.pewresearch.org/short-reads/2020/12/03/social-trust-in-advanced-economies-is-lower-among-young-people-and-those-with-less-education/" className="text-blue-600 hover:underline"
            target="_blank" rel="noopener noreferrer">all of us would expect</a>.
        </p>
      )
    },
    
      ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions by Organizers</h1>
      
      <div className="border-t border-gray-200">
        {faqOrgItems.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}