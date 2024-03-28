import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from '@mui/material'
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

const Section = ({ title, data, filterSource, type }) => {
    const [ carouselToggle, setCarouselToggle ] = useState(true);
    const [ filters, setFilters ] = useState([{ key: "all", label: "All" }]);
    const [ selectedFilteredIndex, setSelectedFilteredIndex ] = useState(0);
  
    const handleToggle = () => {
      setCarouselToggle(!carouselToggle);
    };

    useEffect(() => {
      if(filterSource) {
        filterSource().then((response) => {
          const {data} = response;
          setFilters([...filters, ...data]);
        })
      }
    }, []);

    const showFilters = filters.length > 1;
    const cardsToRender = data.filter((card) => 
      showFilters && selectedFilteredIndex !== 0 ? card.genre.key === filters[selectedFilteredIndex].key : card
    )

    return (
      <div>
        <div className={styles.header}>
          <h3>{title}</h3>
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? "Show All" : "Collapse All"}
          </h4>
        </div>
        {
          showFilters && (
            <div className={styles.filterWrapper}>
              <Filters
                filters={filters}
                selectedFilteredIndex={selectedFilteredIndex}
                setSelectedFilteredIndex={setSelectedFilteredIndex}
              />
            </div>
          )
        }
        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className={styles.cardWrapper}>
            {!carouselToggle ? (
              <div className={styles.wrapper}>
                  {cardsToRender.map((card) => (
                  <Card data={card} type={type} key={card.id} />
                  ))}
              </div>
            ) : (
              <Carousel data={cardsToRender} renderCardComponent={(data) => <Card data={data} type={type}/>}/>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default Section;