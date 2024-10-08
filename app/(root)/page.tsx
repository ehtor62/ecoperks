import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import EventSection from '@/components/shared/EventSection';  // Import the new component

export default function Home({ searchParams }: { searchParams: { [key: string]: string } }) {
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

      {/* Render the EventSection component */}
      <EventSection searchParams={searchParams} />
    </>
  );
}