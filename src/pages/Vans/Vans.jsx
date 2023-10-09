import React, { useState } from 'react'
import Van from '../../components/Van';
import { Link, NavLink, useSearchParams, useLoaderData } from 'react-router-dom';
import {getVans} from "../../api"

export function loader(){
  return getVans('/api/vans');
}

export default function Vans(props) { 
  // STATE ---------------------
  const vans = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  // Use loading var to check if it's fetching data from the mirage.js
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null); // check exception
  const typeFilter = searchParams.get("type");
  // USE EFFECT ---------------------
  // React.useEffect(() => {
    // async function loadData() {
    //   // When fetching -> loading = true => render loading onto the screen
    //   setLoading(true);
    //   try {
    //     const vansData = await getVans('/api/vans');
    //     setVans(vansData);
    //   } catch (err) {
    //     setErr(true);
    //     // setVans([]);;
    //   } finally {
    //     // Done loading
    //     setLoading(false);
    //   }
    // }
    // loadData();
  // }, []);

  if (loading) {
    return <h4 className="text-center mt-5">Loading...</h4>;
  }
  if (err) {
    console.log("error");
    return <h4 className="text-center mt-5">Failed to connect to server!</h4>;
  }
  // RENDER THINGS ---------------------
  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;
  const renderedVans = filteredVans.map((van) => (
    <Van
      key={van.id}
      id={van.id}
      name={van.name}
      imageUrl={van.imageUrl}
      price={van.price}
      type={van.type}
      description={van.description}
      searchParams={searchParams}
      typeFilter={typeFilter}
    />
  ));
  const chosenBtnStyle = {
    border: "1px solid #000000",
  };
  function getNewSearchParamString(key, value) {
    // The goal is to accumulate the params without delete the existing one
    // Ex: ?haidu="good" -> click -> ?haidu="good"&trandan="good"
    const sp = new URLSearchParams(searchParams);
    if (!value) {
      // If value = null -> delete all values with key inside
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    // Return the converted back value, (convert obj to string)
    // Ex: '?type='minhdu''
    return `?${sp.toString()}`;
  }

  return (
    <div className="vans px-4">
      <h2 className="vans__header fw-bold">Explore out van options</h2>
      <div className="vans__filter d-flex align-items-center mt-1">
        <NavLink
          to={getNewSearchParamString("type", "simple")}
          className="vans__filter-btn text-decoration-none text-dark"
          style={() => (typeFilter === "simple" ? chosenBtnStyle : null)}
        >
          Simple
        </NavLink>
        <NavLink
          to={getNewSearchParamString("type", "luxury")}
          className="vans__filter-btn text-decoration-none text-dark"
          style={() => (typeFilter === "luxury" ? chosenBtnStyle : null)}
        >
          Luxury
        </NavLink>
        <NavLink
          to={getNewSearchParamString("type", "rugged")}
          className="vans__filter-btn text-decoration-none text-dark"
          style={() => (typeFilter === "rugged" ? chosenBtnStyle : null)}
        >
          Rugged
        </NavLink>
        {typeFilter && (
          <Link to="." className="vans__filter-clear text-dark">
            Clear filters
          </Link>
        )}
      </div>
      <div className="vans__list my-3">
        <div className="row row-gap-3">{renderedVans}</div>
      </div>
    </div>
  );
}
