import { type Task } from 'wasp/entities';
import { type AuthUser } from 'wasp/auth';
// import { useParams } from 'react-router-dom';
import {
  generateGptResponse,
  deleteTask,
  updateTask,
  createTask,
  useQuery,
  getAllTasksByUser,
} from 'wasp/client/operations';

import { useState, useMemo } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { TiDelete } from 'react-icons/ti';
import type { GeneratedSchedule, MainTask, SubTask } from './schedule';
import { cn } from '../client/cn';
import CategoryCard from './CategoryPage';
import DefaultLayout from '../admin/layout/DefaultLayout';


export const categoriesList = [
  { 
    readMoreLink: "/category-page/marketplace",
    description: "This is a sample description",
    title: "Marketplace",
    page: "marketplace",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_2025-01-27_233034134-2x5bEiHoSV2GiTP5M8RYz1JTNGuQVt.png",
    alt: "Web and Mobile Development illustration",
  },
  {
    readMoreLink: "sample readmore",
    description: "This is a sample description",
    title: "Library",
    page: "library",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_2025-01-27_233034134-2x5bEiHoSV2GiTP5M8RYz1JTNGuQVt.png",
    alt: "Design and Creative illustration",
  },
  {
    readMoreLink: "sample readmore",
    description: "This is a sample description",
    title: "Rentals",
    page: "rentals",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_2025-01-27_233034134-2x5bEiHoSV2GiTP5M8RYz1JTNGuQVt.png",
    alt: "Content Writers illustration",
  },

]

export default function DemoAppPage({ user }: { user: AuthUser }) {
  return (
    <>
    <DefaultLayout user={user}>
      <main className="container mx-auto px-4 py-5">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Explore Categories</h1>
          <div className="h-1 w-48 bg-emerald-400 mx-auto" />
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div> */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {categoriesList.map((category, index) => (
      <div
        key={index}
        // onClick={() => Navigate(`/category/${category.page}`)}
        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-500"
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


        <div className="text-center mt-12">
          <p className="text-gray-600">
            Don't see what you're looking for?{" "}
            <a href="#" className="text-emerald-500 hover:text-emerald-600">
              See all categories
            </a>
          </p>
        </div>
      </main>
    </DefaultLayout>
      
    </>
    
  )
}

