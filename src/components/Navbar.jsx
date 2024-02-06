
import { Link } from 'react-router-dom'

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Favorite',
    href: '/favorites',
  },
]

export default function Navbar() {

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Link className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"
          to={'/'}>FoodPanda</Link>
        </div>
        <div>
          <span className='font-semibold decoration-wavy hover:underline duration-150 flex gap-1'>
             <Link to={'/favorites'}>Favorites</Link>
          </span>
        </div>
        
      </div>
    </div>
  )
}