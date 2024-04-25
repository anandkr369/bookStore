import React from 'react'
import { Card } from "flowbite-react";
import backbook from '../assets/About/bookIcon01.png';

const OurTeam = () => {
    return (
        <>
            <div className='font-bold text-5xl text-center text-blue-700 mb-6'>
                Our Team
            </div>
            <div className='flex flex-row gap-4'>
                <Card href="#" className="max-w-sm">
                    <img className='rounded-full h-36 w-36 object-cover' src="../src/assets/About/person2.jpg" alt="person1" />

                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Rose
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        BookStore was founded by a group of avid readers who wanted to create a haven for book lovers in our community. With a shared love for literature and a commitment to promoting reading culture, we set out to build a bookstore that would not only offer a wide selection of books but also serve as a hub for literary events and discussions.
                    </p>
                </Card>

                <Card href="#" className="max-w-sm">
                    <img className='rounded-full h-36 w-36 object-cover' src="../src/assets/About/person3.jpg" alt="person1" />

                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Robert jane
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        BookStore was founded by a group of avid readers who wanted to create a haven for book lovers in our community. With a shared love for literature and a commitment to promoting reading culture, we set out to build a bookstore that would not only offer a wide selection of books but also serve as a hub for literary events and discussions.
                    </p>
                </Card>

                <Card href="#" className="max-w-sm">
                    <img className='rounded-full h-36 w-36 object-cover' src="../src/assets/About/person4.jpg" alt="person1" />

                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Emily
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        BookStore was founded by a group of avid readers who wanted to create a haven for book lovers in our community. With a shared love for literature and a commitment to promoting reading culture, we set out to build a bookstore that would not only offer a wide selection of books but also serve as a hub for literary events and discussions.
                    </p>
                </Card>

                <Card href="#" className="max-w-sm">
                    <img className='rounded-full h-36 w-36 object-cover' src="../src/assets/About/person1.jpg" alt="person1" />

                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Ameliya
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        BookStore was founded by a group of avid readers who wanted to create a haven for book lovers in our community. With a shared love for literature and a commitment to promoting reading culture, we set out to build a bookstore that would not only offer a wide selection of books but also serve as a hub for literary events and discussions.
                    </p>
                </Card>
            </div>
        </>
    )
}

export default OurTeam