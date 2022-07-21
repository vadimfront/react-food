import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {getAllCategories} from '../api';
import { CategoryList } from '../Components/CategoryList';
import {Preloader} from '../Components/Preloader'
import { Search } from '../Components/Search';

function Home() {

    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);


    let [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search');


    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) => 
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
        setSearchParams(`?search=${str}`)
    }

    useEffect(() => {

        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search ? ( 
                        data.categories.filter((item) => {
                            return item.strCategory.toLowerCase().includes(search.toLowerCase())
                    })
                ) : data.categories );
        }).catch(err => console.log(err))
    },[])


    return <>
        <Search cb={handleSearch}/>
        {!catalog.length ? (
            <Preloader />
        ) : (
            <CategoryList catalog={filteredCatalog} />
        )
            
        }
    </>
}

export { Home }