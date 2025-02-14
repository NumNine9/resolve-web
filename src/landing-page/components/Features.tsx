interface Feature {
  name: string;
  description: string;
  icon: string;
  href: string;
};
import { categoriesList } from '../../demo-ai-app/DemoAppPage';
import CategoryCard from '../../demo-ai-app/CategoryPage';

export default function Features({ features }: { features: Feature[] }) {
  return (
    <div id='features' className='mx-auto mt-6 max-w-7xl px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl text-center'>
        <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
          The <span className='text-yellow-500'>Best</span> Features
        </p>
        <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
          Don't work harder.
          <br /> Work smarter.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex overflow-x-auto gap-4 py-4 max-w-full">
          {categoriesList.map((category, index) => (
            <div
              key={index}
              // onClick={() => Navigate(`/category/${category.page}`)}
              className="flex-shrink-0 w-64 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-500"
            >
              <CategoryCard
                imageUrl={category.imageUrl}
                title={category.title}
                description={category.description}
                readMoreLink={category.readMoreLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
