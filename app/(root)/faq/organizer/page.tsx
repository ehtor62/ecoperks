"use client"

import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button className="w-full text-left py-4 px-6 focus:outline-none flex justify-between items-center" onClick={onClick} >
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqOrgItems = [
    {
      title: "Ideas for local sustainable engagement",
      content: (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Idea</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Engagement</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Reward</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Proof</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Ticket</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Beach Cleanup for Free Snack</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Participate in beach cleanups</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>After Sail lesson or rental get a Panini and a Drink</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Waste bags</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Park Cleanup for Fitness Classes</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Help clean and maintain local parks</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Free yoga or fitness class in the park</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Waste bags</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Recycling Drop-Off for Movie Tickets</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Bring recyclables to designated drop-off points</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Free movie ticket for a local cinema</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Receipt from the recycling center or a photo of recyclables at the drop-off.</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Public Transport Usage for Restaurant Discounts</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Show proof of using public transportation</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Discount on meals at participating restaurants</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Train or bus ticket, or a screenshot of a transit app showing the trip</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Community Garden Work for Concert Tickets</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Volunteer in community gardens</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Free or discounted tickets to local concerts</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Photos of work done in the garden</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Museum Annual Membership</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Participate in a museum-organized sustainability workshop</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Extra month added to museum membership duration</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Attendance certificate from the workshop</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>✔️</td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Zoo Admission</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Bring your own reusable water bottle and refuse single-use plastics at the zoo</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Free guided tour of a special exhibit</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Show the reusable water bottle at the zoo</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>✔️</td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Theme Park Day Pass</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Use park's recycling stations correctly throughout your visit</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Fast-pass tickets for two popular rides</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Photos of recycling stations in use or a signed log from park staff</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>✔️</td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Concert Tickets</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Carpool to a concert with at least three people</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Exclusive meet-and-greet with the artist after the show</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Photo of the carpool group or a signed log from the event organizer</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Botanical Garden Membership</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Volunteer for a day in the garden's composting program</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Free entry passes for two guests</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Signed volunteer log or a photo from the composting program</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>✔️</td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Plastic Bottle Collection for Coffee Shop Discounts</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Collect and return plastic bottles</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Discount on beverages at local coffee shops</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Receipt from the bottle return or a photo of collected bottles</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Ski Resort Day Pass on weekends</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Use resort's free shuttle service instead of private car</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Complimentary ski lesson or equipment upgrade</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Shuttle ticket or a photo of the shuttle service</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>✔️</td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Energy Saving Tips Submission for Museum Passes</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Submit energy-saving tips or ideas</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Free entry to museums or cultural institutions</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Confirmation email or acknowledgment from the museum</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Local Food Festival Entry</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Bring your own reusable cutlery and food containers</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Extra food and drink vouchers</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Show the reusable cutlery and containers at the festival</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>✔️</td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Educational Workshops for Eco-Friendly Product Samples</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Attend workshops on sustainability</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Samples of eco-friendly products</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Attendance certificate or a photo from the workshop</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>City Bus Tour</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Complete a quiz about the city's sustainability initiatives</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Extended ticket validity (e.g., 48 hours instead of 24)</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Completed quiz submission or a photo of the quiz</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>✔️</td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Tree Planting for Sporting Event Tickets</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Participate in tree planting events</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Free or discounted tickets to local sports events</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Photos of the planting event or a signed volunteer log</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Waste Segregation for Free Bike Rentals every Friday</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Properly segregate waste and compost</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Free bike rental for a day</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Photos of correctly sorted waste or a signed log from a waste management program</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Sustainable Fashion Swap for Store Credit</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Bring unwanted sustainable clothing to a swap event</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Store credit for a new sustainable item</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Receipt or confirmation email from the swap event</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Plant-Based Meal Photos for Discounts</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Share photos of plant-based meals on social media with a specific hashtag</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Discount on future plant-based meals</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Screenshot of the post or a link to the social media post</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Reusable Cup Challenge for Free Coffee</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Bring a reusable cup to a coffee shop for a week</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Free coffee on the seventh day</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Coffee shop stamp card or a photo of the reusable cup at the shop</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Energy-Efficient Appliance Upgrade Consultation for Gift Cards</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Schedule a consultation to discuss energy-efficient appliance upgrades</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Gift card to a home improvement store</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Confirmation email from the consultation</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Composting Workshop for Gardening Supplies</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Attend a composting workshop</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Gardening supplies or seeds</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Attendance certificate or a photo from the workshop</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Eco-Friendly Product Reviews for Free Products</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Write reviews of eco-friendly products</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Free eco-friendly products</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Published review link or a confirmation email from the product company</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Zero-Waste Grocery Shopping Challenge for Gift Cards</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Complete a zero-waste grocery shopping challenge</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Gift card to a local grocery store</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Receipt from the grocery store or a photo of the zero-waste shopping experience</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Sustainable Travel Tips for Travel Discounts</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Share sustainable travel tips or experiences</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Discount on future sustainable travel bookings or experiences</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Blog post link or social media post screenshot</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Paid Park Entry for Wildlife Education Program</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Attend a talk on wildlife conservation during your park visit</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Extended park access (e.g., an extra day pass or longer hours in the park)</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Attendance certificate or a photo from the talk</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>✔️</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Concert Ticket for Public Transport Usage before 7pm</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Show proof of using public transport to get to the venue</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Early access to the concert venue or a meet-and-greet with the artists</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Transit ticket or a screenshot of the transit app showing the trip</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>✔️</td>
            </tr>
            <tr>
             <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Gym Membership for Energy-Saving Initiatives in April</td>
             <td style={{ border: '1px solid black', padding: '8px' }}>Participate in a gym challenge to reduce water or energy usage (e.g., use less hot water in showers)</td>
             <td style={{ border: '1px solid black', padding: '8px' }}>Extra gym time (extended membership duration) or free access to special classes</td>
             <td style={{ border: '1px solid black', padding: '8px' }}>Participation certificate or a signed log from the gym</td>
             <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>✔️</td>
            </tr>
            <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Paid Amusement Park Entry between 10am-11am for Carbon Offset Purchase</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Buy a carbon offset for your park visit to neutralize your carbon footprint</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Fast-pass to skip lines or free access to an extra ride</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Receipt of the carbon offset purchase</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>✔️</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', color: 'purple' }}>Paid Hiking Trail Permit for Litter Collection</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Collect litter during your hike and return it at the park entrance</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Discount on future hiking permits or a free trail map</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Photos of collected litter or a signed log from park staff</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>✔️</td>
          </tr>
          </tbody>
        </table>
      )
    },
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
    {
      title: "How is the money of ticket prices collected?",
      content: (
        <p style={{ color: 'purple' }}>
          ecoPerks will onboard event organizers using Stripe's OAuth flow (for Standard accounts) or a custom sign-up flow
          (for Express or Custom accounts). Stripe provides a redirect link to complete their onboarding process. The platform fee
          is set to 5% of the ticket price, meaning ecoPerks receives $5 for a $100 ticket sale. The remaining $95 will be automatically
          transferred to the organizer’s Stripe account.
        </p>
      )
    }
    
  ];

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions by Organizers</h1>
      
        <div className="border-t border-gray-200">
          {faqOrgItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              title={item.title} 
              content={item.content} 
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
    </div>
  );
}