import { Search } from 'lucide-react';
import { useState } from 'react';

export function SearchBar() {

    const [search, setSearch] = useState('')

    const handleSearch = () => {
        if (search) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(search)}`;
        }
    };

    return (
        <div className="w-[580px] h-[44px] bg-white border border-gray-300 rounded-full flex items-center px-4 shadow-md">
            <Search className='opacity-50 h-4 w-4' />
            <input
                className="w-full ml-2 text-gray-900 border-none focus:outline-none"
                type="text"
                placeholder=""
                onClick={handleSearch}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()} />
        </div>
    )
}