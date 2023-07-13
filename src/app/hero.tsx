import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState } from 'react'

const Dialog = dynamic(() => import('@headlessui/react').then(mod => mod.Dialog))
//const Bars3Icon = dynamic(() => import('@heroicons/react/outline').then(mod => mod.Bars3Icon))
//const XMarkIcon = dynamic(() => import('@heroicons/react/outline').then(mod => mod.XMarkIcon))

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Data to enrich your</span>{' '}
                <span className="block text-indigo-600 xl:inline">online business</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl md:mt-5 md:text-2xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center md:mt-8">
                <p className="text-base font-medium text-gray-900">
                  Sign up to get started
                </p>
                <div className="mt-3 sm:flex sm:justify-center">
                  <div className="w-full sm:max-w-xs">
                    <Link href="#">
                      <a className="flex items-center justify-center w-full px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Get started
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="#">
                      <a className="flex items-center justify-center w-full px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100">
                        Learn more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-6">
              <div className="aspect-w-5 aspect-h-2 rounded-xl overflow-hidden">
                <img
                  className="object-cover"
                  src="https://dummyimage.com/1200x600"
                  alt="Data"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
