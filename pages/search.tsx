import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { PropertyProps } from '@/interfaces';

// Import PropertyCard directly from PropertyListing component
const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        {property.discount && (
          <div className="absolute top-4 left-2 bg-[#2CC39B] text-white px-2 py-1 rounded text-sm flex items-center gap-2">
            <div className="flex items-center gap-2">
              <img src="/assets/images/Subtract.png" alt="discount" />
              <span>{property.discount}% OFF</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-3 px-4">
        {property.category.map((cat, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-lg font-semibold text-gray-800">
            {property.name}
          </h3>
          <div className="flex items-center ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 37 35"
              fill="none"
            >
              <path
                d="M17.1044 2.60318C17.6447 1.51821 19.187 1.50262 19.7491 2.57645L24.1844 11.0507L34.5946 12.9634C35.5128 13.1321 35.8517 14.2713 35.1751 14.9145L28.2151 21.5306L29.5194 32.8088C29.6258 33.7291 28.6501 34.3865 27.8371 33.9423L18.4006 28.7859L9.01381 33.9151C8.19144 34.3645 7.20771 33.6868 7.3345 32.7583L8.86762 21.5306L1.69235 14.9265C0.997719 14.2871 1.33461 13.1289 2.2638 12.962L12.8983 11.0507L17.1044 2.60318Z"
                fill="#FAC02B"
              />
            </svg>
            <span className="text-sm text-gray-600 ml-1">
              {property.rating}
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3">
          {property.address.city},{" "}
          {property.address.country}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-sm text-gray-600 border border-[#E9E9E9] rounded-xl px-2 py-1">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M28.6875 15.3202C28.0177 15.0261 27.294 14.8746 26.5625 14.8752H7.4375C6.70604 14.8745 5.98241 15.0258 5.3125 15.3195C4.36568 15.7336 3.56 16.4145 2.99392 17.279C2.42785 18.1436 2.1259 19.1544 2.125 20.1877V27.6252C2.125 27.907 2.23694 28.1773 2.4362 28.3765C2.63546 28.5758 2.90571 28.6877 3.1875 28.6877C3.46929 28.6877 3.73954 28.5758 3.9388 28.3765C4.13806 28.1773 4.25 27.907 4.25 27.6252V27.094C4.25172 26.9536 4.30825 26.8195 4.4075 26.7203C4.50676 26.621 4.64089 26.5645 4.78125 26.5627H29.2188C29.3591 26.5645 29.4932 26.621 29.5925 26.7203C29.6918 26.8195 29.7483 26.9536 29.75 27.094V27.6252C29.75 27.907 29.8619 28.1773 30.0612 28.3765C30.2605 28.5758 30.5307 28.6877 30.8125 28.6877C31.0943 28.6877 31.3645 28.5758 31.5638 28.3765C31.7631 28.1773 31.875 27.907 31.875 27.6252V20.1877C31.874 19.1545 31.572 18.1439 31.0059 17.2794C30.4398 16.415 29.6342 15.7342 28.6875 15.3202Z"
                  fill="#131212"
                />
              </svg>
              <span className="pl-1">{property.offers.bed}</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M32.583 26.9163C32.583 27.292 32.4338 27.6523 32.1681 27.918C31.9024 28.1837 31.5421 28.3329 31.1664 28.3329H14.1664C13.7907 28.3329 13.4303 28.1837 13.1646 27.918C12.899 27.6523 12.7497 27.292 12.7497 26.9163C12.7497 24.6619 13.6452 22.4999 15.2393 20.9059C16.8334 19.3118 18.9954 18.4163 21.2497 18.4163H24.083C26.3374 18.4163 28.4994 19.3118 30.0935 20.9059C31.6875 22.4999 32.583 24.6619 32.583 26.9163Z"
                  fill="#131212"
                />
              </svg>
              <span className="pl-1">{property.offers.shower}</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M9.91638 26.9163C9.91427 25.4282 10.2074 23.9545 10.7789 22.5806C11.3504 21.2066 12.1888 19.9597 13.2455 18.9121C12.3807 18.5856 11.4641 18.4176 10.5397 18.4163H9.29305C7.20518 18.42 5.20389 19.2511 3.72754 20.7274C2.25119 22.2038 1.42013 24.2051 1.41638 26.2929V26.9163C1.41638 27.292 1.56564 27.6523 1.83131 27.918C2.09699 28.1837 2.45733 28.3329 2.83305 28.3329H10.1714C10.0064 27.8786 9.92021 27.3995 9.91638 26.9163Z"
                  fill="#131212"
                />
              </svg>
              <span className="pl-1">{property.offers.occupants}</span>
            </div>
          </div>

          <div className="text-right">
            <p className="text-lg font-bold text-gray-800">
              ${property.price}
              <span className="text-sm font-normal text-gray-600">/n</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchResults = () => {
  const router = useRouter();
  const { search } = router.query;
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>([]);

  useEffect(() => {
    if (search && typeof search === 'string') {
      const searchTerm = search.toLowerCase();
      const results = PROPERTYLISTINGSAMPLE.filter(property => 
        property.name.toLowerCase().includes(searchTerm) ||
        property.address.city.toLowerCase().includes(searchTerm) ||
        property.address.country.toLowerCase().includes(searchTerm) ||
        property.category.some(cat => cat.toLowerCase().includes(searchTerm))
      );
      setFilteredProperties(results);
    }
  }, [search]);

  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <div className="py-6">
        <h1 className="text-2xl font-semibold mb-2">
          Search Results for "{search}"
        </h1>
        <p className="text-gray-600 mb-6">
          {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
          
          {filteredProperties.length === 0 && (
            <div className="col-span-full text-center py-12">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">No properties found</h2>
              <p className="text-gray-600">
                Try adjusting your search terms or browse our other options
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults; 