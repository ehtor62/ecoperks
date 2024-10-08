import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection';
import Search from '@/components/shared/Search';
import { getAllEvents } from '@/lib/actions/event.actions';
import dynamic from 'next/dynamic';

// Dynamically import the GoogleMapComponent, but disable server-side rendering for this component
const GoogleMapComponent = dynamic(() => import('./googlemaps'), { ssr: false });

// Function to extract lat and lng from the location string
const extractLatLng = (location: string) => {
  const regex = /Lat:\s*([\d.-]+),\s*Lng:\s*([\d.-]+)/;
  const match = location.match(regex);

  if (match) {
    return {
      lat: parseFloat(match[1]),
      lng: parseFloat(match[2]),
    };
  }
  return { lat: null, lng: null };
};

// This is a server component
export default async function EventSection({ searchParams }: { searchParams: { [key: string]: string } }) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  // Fetch events using a server-side function
  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  const formattedEvents = events?.data?.map((event: { _id: any; title: any; description: any; location: string; }) => {
    const { lat, lng } = extractLatLng(event.location);
    return {
      id: event._id,
      title: event.title,
      description: event.description,
      location: event.location,
      lat: lat,  // Extracted latitude
      lng: lng,  // Extracted longitude
    };
  });

  return (
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <div className="relative">
        <span className="absolute top-0 left-0 text-8xl text-pink-800 font-serif leading-none -translate-x-1/2 -translate-y-1/2">
          *
        </span>
        <h2 className="italic text-lg pl-8 relative z-10 w-[70%] text-center">
          Built on trust and good energy. No matter if you ride a bike, use public transportation,
          or collect trash, you can spend your good energy to collect the listed rewards, and we trust you when you ask to pay
          with it. After all, the only one you would be cheating is yourself if you miss out on doing good for our planet.
        </h2>
      </div>
      <h2 className="italic text-xl font-bold text-pink-800"> How it works</h2>
      <p>
        Earn rewards{" "} <a href="/faq/organizer" className="text-pink-800 hover:underline">
          at local attractions</a> ranging from a free lunch or a cup of coffee to a kayak tour or even a free entrance
        to a museum. All you need to do is, for instance, bike instead of drive, help maintain the city, work in an urban garden,
        or pledge to sustainable behaviour. Find the attractions and see how they reward your actions below.
      </p>
      <section className="my-8">
        <div className="flex justify-center w-full">
          <div className="w-full max-w-4xl">
            <GoogleMapComponent events={formattedEvents} />
          </div>
        </div>
      </section>
      <div className="flex w-full flex-col gap-5 md:flex-row">
        <Search />
        <CategoryFilter />
      </div>
      <Collection
        data={events?.data}
        emptyTitle="No Events Found"
        emptyStateSubtext="Come back later"
        collectionType="All_Perks"
        limit={6}
        page={page}
        totalPages={events?.totalPages}
      />
    </section>
  );
}