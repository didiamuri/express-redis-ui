import React from 'react'
import Link from 'next/link';
import { headers } from 'next/headers';

async function getProjects() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects/all`, { cache: 'no-cache', headers: headers() });
    const data = await res.json();
    return data.items;
}

const ProjectsPage = async () => {
    const projects = await getProjects();
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between items-center border-b border-gray-200'>
                <div className=''>
                    <h1 className='text-2xl font-bold'>Projects</h1>
                    <p className='text-sm text-gray-500'>Here are all the projects you have created.</p>
                </div>
                <div>
                    <Link href='/projects/new' className='bg-green-500 hover:bg-green-700 text-white font-normal text-sm py-2 px-4 rounded-md'>
                        Create a new project
                    </Link>
                </div>
            </div>
            <ul className='grid gap-2'>
                {projects.map((project: any) => (
                    <li key={project.id} className='border shadow rounded-md p-2 text-sm text-green-700 bg-green-200 hover:bg-gray-100 transition-colors duration-300'>
                        {project.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectsPage