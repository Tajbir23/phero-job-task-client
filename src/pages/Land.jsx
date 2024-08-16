import { useEffect, useState } from "react";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import baseUrl from '../hooks/useBaseUrl';

const Land = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    category: "",
    price_range: "1000000",
    sort_order: "",
  })
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/data.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json()).then(result => {
      setData(result);
    });
  }, []);

  useEffect(() => {
    const selectedBrand = data.find(item => item.brand_name === brandName);
    if (selectedBrand) {
      setCategories(selectedBrand.categories);
    } else {
      setCategories([]);
    }
  }, [brandName, data]);


  useEffect(() => {
    baseUrl.get(`/products?search=${filter?.search}&&brand_name=${brandName}&&category=${filter?.category}&&price_range=${filter?.price_range}&&sort_order=${filter?.sort_order}`)
    .then((response) => response.data)
    .then((data) => setProducts(data))
    .catch((error) => console.log(error))
  },[filter, brandName])

  console.log(products)

  return (
    <div className="">
      {/* Filter section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div 
          onClick={() => setOpen(!open)} 
          className="w-full flex items-center justify-between p-5 border-b border-gray-300 cursor-pointer bg-slate-300"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Filter</h2>
          {open ? (
            <CiMenuFries className="text-2xl text-gray-700" />
          ) : (
            <CiMenuBurger className="text-2xl text-gray-700" />
          )}
        </div>

        {open && (
          <div className="p-5 flex lg:flex-row flex-col items-center justify-between space-y-4">
            <input 
              type="text" 
              onChange={(e) => setFilter({...filter, search: e.target.value})}
              placeholder="Search here" 
              className=" p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select 
              onChange={(e) => setBrandName(e.target.value)}
              className=" p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Brand</option>
              {data.map(item => (
                <option key={item.brand_name} value={item.brand_name}>{item.brand_name}</option>
              ))}
            </select>

            <select 
              className=" p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFilter({...filter, category: e.target.value})}
            >
              <option value="">Select Category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select 
              onChange={(e) => setFilter({...filter, sort_order: e.target.value})}
              className=" p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sort order</option>
              <option value="low_to_high">Low to high</option>
              <option value="high_to_low">High to low</option>
              <option value="newest_date">Newest date</option>
            </select>

            <div className="flex items-center">
              <span className="mr-2 text-gray-600">Price Range: 0 to {filter.price_range}</span>
              <input 
                type="range"
                min="0"
                max="1000000"
                step="50"
                onChange={(e) => setFilter({...filter, price_range: e.target.value})}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Land;
