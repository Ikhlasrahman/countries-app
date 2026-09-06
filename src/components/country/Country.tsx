import { useState } from "react";
import type { CountryType } from "../../type";
import "./Country.css";

export interface CountryProps {
  country: CountryType;
  handleVisitedCountry : (country:CountryType)=>void
  handleVisitedFlag : (flag:string)=>void
}

export default function Country({ country, handleVisitedCountry,handleVisitedFlag }: CountryProps) {
  const [visited, setVisited] = useState<boolean>(false);

  const handleVisited = () => {
    //   if(visited===true){
    //       setVisited(false);
    //   }else{setVisited(true);}
    setVisited(!visited);
    handleVisitedCountry(country);
  };
  
  

  return (
    <div className={`country ${visited ? 'country-visted':''}`}>
      <h3>{country.name.official}</h3>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h4>Capital: {country.capital.capital}</h4>
      <h4>Population: {country.population.population}</h4>
      <button onClick={handleVisited}>{visited? 'Visited':'Mark as visited'}</button>
      <button onClick={()=>handleVisitedFlag(country.flags.flags.png)}>Add flag as visited</button>
    </div>
  );
}
