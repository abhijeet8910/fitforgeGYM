'use client'
import Link from "next/link"
import { useState } from "react"

const navItems = [
    {name: 'Home', path: '/'},
    {name:'About', path: '/about'},
    {name: 'Contact', path: '/contact'},
    {name: 'services', path: '/services'},
    {name: 'Pricing', path: '/pricing'},
    {name: 'Blog', path: '/blog'},
    
]

const servicesItems = [
    
    {name: 'Yoga', path: '/yoga'},
    {name: 'Pilates', path: '/pilates'},
    {name: 'Zumba', path: '/zumba'},
    {name: 'Cardio', path: '/cardio'},
    {name: 'WeightLifting', path: '/weightlifting'},

]
const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="fixed top-0 z-50 w-full h-20">
        <nav className="max-w-7xl mx-auto p-6 flex justify-between items-center">
            {/* logo */}
            <div>
                Logo
            </div>
            {/* laptop view */}
            <ul className="hidden lg:flex space-x-8">
                {navItems.map(item => {
                    if(item.name === 'services'){
                        return (

                        <div key={item.name} className="relative group cursor-pointer">
                            <span>Services</span>
                            <ul className="hidden group-hover:flex flex-col space-y-4 absolute top-full left-0 ">
                            {servicesItems.map(item => (
                                <li key={item.name}>
                                    <Link href={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                        </div>
                        
                        )  
                    }
                    else {
                    return(
                    <li key={item.name}>
                        <Link href={item.path}>{item.name}</Link>
                    </li>
                    
                )};
                })}
            </ul>
            {/* cta fot laptop view*/}
            <div className="hidden lg:block">
                CTA And Button
            </div>

            {/* tablet and mobile drawer */}
            <div className="lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'}</button>
            </div>

            {/* tablet and mobile view */}
            {isOpen && (
                <ul className="lg:hidden absolute top-full left-6 flex flex-col space-y-4  ">
                    {navItems.map(item => (
                        <li key={item.name}>
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                    {/* CTA */}
                    <div className="">
                CTA And Button
            </div>
                </ul>
            )}

        </nav>
    </header>
  )
}

export default Navbar
