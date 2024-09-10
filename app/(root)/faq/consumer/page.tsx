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

export default function FAQPage() {
  const faqItems = [
    {
      title: "What is the purpose of ecoPerks?",
      content: (
        <p style={{ color: 'purple' }}>
          The purpose of ecoPerks is to encourage sustainable behaviour and enrich the cultural experience of
          visitors and residents anywhere by transforming green actions into currency for cultural experiences.
          The campaign about ecoPerks runs worldwide, and it is not intended to increase tourism. With ecoPerks,
          we are empowering people to experience more of what each place offers while placing less burden on our planet.
          It's about creating meaningful and memorable experiences that are enjoyable and environmentally responsible.
        </p>
      )
    },
    {
      title: "How can one participate in ecoPerks?",
      content: (
        <p style={{ color: 'purple' }}>
          <b>For Organizers</b> <br></br> Participation is simple. Just sign up to this website for free and start creating perks.
           The "FAQ for Organizers" provides creative ideas of how to engage your consumers in a sustainable fashion. Once created,
          it will show up on the home page. <br></br> <br></br>
          <b>For Consumers</b> <br></br> Participation is simple. Tourists and residents can redeem rewards depending on the action/attraction
          offered. These actions include cycling, participating in cleanup efforts, volunteering at urban farms and many more. By showing proof
          of green actions, such as train tickets or bicycles, you are entitled for the reward. Click the map on this site to find all participating attractions and which action
          they reward. Some attractions have limited availability, so remember to check if you have to buy a ticket in advance.
        </p>
      )
    },
    {
      title: "How do I get in touch with the individual attractions?",
      content: (
        <p style={{ color: 'purple' }}>
          If you have questions about rewards and actions, you should contact the individual partner directly by finding
          their contact information on the{' '}
          <a href="/" className="text-blue-600 hover:underline">complete list of attractions</a>.
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
    {
      title: "How sustainable is my destination?",
      content: (
        <p style={{ color: 'purple' }}>
          According to the Global Destination Sustainability Index the list of the most sustainable destinations in the world can be found{' '}
          <a href="https://www.gds.earth/index/top-40-cities/" className="text-blue-600 hover:underline"
            target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      )
    },
    {
      title: "How does ecoPerks specifically contribute to reducing my current destination's carbon footprint?",
      content: (
        <p style={{ color: 'purple' }}>
          ecoPerks encourages the use of bicycles, public transportation, and participation in environmental activities,
          which collectively reduce the carbon emissions by promoting greener modes of transportation and waste reduction.
          However, the environmental burden of transportation to and from your current destination is much more significant
          than that of local transportation. Consequently, ecoPerks is encouraging both visitors and locals to make more sustainable choices
          and not travel long-distance for a specific attraction.
        </p>
      )
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions by Users</h1>
      
      <div className="border-t border-gray-200">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}