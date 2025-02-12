import { type AuthUser } from 'wasp/auth';
// import { useParams } from 'react-router-dom';


import DefaultLayout from '../admin/layout/DefaultLayout';
import { Calendar } from '../components/ui/calendar';
import { useState } from 'react';



export default function Dashboard({ user }: { user: AuthUser }) {
  const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <>
      <DefaultLayout user={user}>
        <main className="container mx-auto px-4 py-5">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Student dashboard Page</h1>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            <div className="h-1 w-48 bg-emerald-400 mx-auto" />
          </div>
          {/* <div className="text-center mt-12">
            <p className="text-gray-600">
              Student dashboard Page
            </p>
          </div> */}
        </main>
      </DefaultLayout>
        
      </>
      
    )
  }