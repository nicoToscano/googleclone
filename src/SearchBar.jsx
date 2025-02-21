import { Search } from 'lucide-react';

export function SearchBar (){
    return (
        <div className="w-[580px] h-[44px] bg-white border border-gray-300 rounded-full flex items-center px-4 shadow-md">
                <Search className='opacity-50 h-4 w-4'/>
                <input className="w-full ml-2 text-gray-900 border-none focus:outline-none" type="text" placeholder="" />
        </div>
    )
}