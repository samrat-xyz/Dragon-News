import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import NewsCard from '../NewsCard/NewsCard';

function CategoryNews() {
  const [news, setNews] = useState([]);
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    if (id == '0') {
      setNews(data);
    } 
    else if (id == '1') {
      const filteredBreakingNews = data.filter(b => b.others.is_today_pick == true);
      setNews(filteredBreakingNews);
      // console.log(filteredBreakingNews);
    } 
    else {
      const filteredNews = data.filter(n => n.category_id == id);
      setNews(filteredNews);
      console.log(filteredNews);
    }
  }, [id, data]);

  return (
    <div className=" grid grid-cols-1 gap-3">
      {news.map(singleNews => (
        <NewsCard key={singleNews.id} singleNews={singleNews} />
      ))}
    </div>
  );
}

export default CategoryNews;
