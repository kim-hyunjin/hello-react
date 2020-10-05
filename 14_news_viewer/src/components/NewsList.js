import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({category}) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const query = category === 'all' ? '' : `&category=${category}`;
      const url = 'http://newsapi.org/v2/top-headlines' +
      `?country=kr${query}` +
      '&apiKey=80c7785acfbd48448a82e895b4629224';
      try {
        const response = await axios.get(url);
        setArticles(response.data.articles);
        console.log(response);
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };
    fetchData();
  }, [category]);

  if(loading) {
    return <NewsListBlock>대기중...</NewsListBlock>
  }

  if(!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map(article => (
      <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>

  );
};

export default NewsList;