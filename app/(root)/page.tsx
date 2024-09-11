import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection'
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button'
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const GoogleMapComponent = dynamic(() => import('./googlemaps'), { ssr: false })


export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-8 md:w-1/2">
            <h1 className="h1-bold">Enjoy Attractions through Climate-Friendly Actions</h1>
            <p className="p-regular-20 md:p-regular-24">
              All our choices have an environmental impact, so why not make conscious
              decisions that benefit us all and be <span className="text-pink-800"> rewarded*</span> for them?
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Engage Now
              </Link>
            </Button>
          </div>

          <div className="flex justify-center items-center md:w-1/2">
            <Image 
              src="/assets/images/bicycle.jpg"
              alt="hero"
              width={1000}
              height={1600}
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            />
          </div>
        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <div className="relative">
        <span className="absolute top-0 left-0 text-8xl text-pink-800 font-serif leading-none -translate-x-1/2 -translate-y-1/2">
          *
        </span>
        <h2 className="italic text-lg pl-8 relative z-10 w-[70%] text-center">
          Built on trust and good energy. No matter if you ride a bike, use public transportation,
          or collect trash, you can spend your good energy to collect the listed rewards, and we trust you when you ask to pay
          with it. After all, the only one you would be cheating is yourself if you miss out on doing good for our planet.</h2>
          
        </div>
        <h2 className="italic text-xl font-bold text-pink-800"> How it works</h2>
        <p>
          Earn rewards{" "} <a href="/faq/organizer" className="text-pink-800 hover:underline">
          at local attractions</a>  ranging from a free lunch or a cup of coffee to a kayak tour or even a free entrance
          to a museum. All you need to do is, for instance, bike instead of drive, help maintain the city, work in an urban garden,
          or pledge to sustainable behaviour. Find the attractions and see how they reward your actions below.
        </p>
        <section>
          <div style={{ width: '100%', height: '400px' }}>
            <GoogleMapComponent />
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
    </>
  )
}