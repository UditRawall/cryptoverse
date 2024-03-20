import React from "react";
import { useGetCryptoNewsQuery } from "../Services/NewsApi";
import { Row, Col, Typography, Card } from "antd";

const News = ({simplified}) => {
  const { Text, Title } = Typography;
  const count = simplified ? 10 : 100;
  const { data: cryptoNews } = useGetCryptoNewsQuery(count);
  const demoImage = "https://wallpapercave.com/wp/wp4678496.jpg";
  console.log(cryptoNews);
  if (!cryptoNews) return "Loading...";
  console.log(cryptoNews.data);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <>
      <Row gutter={[24, 24]}>
        {cryptoNews.data.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="image-title" level={4}>
                    {news.title.length > 50
                      ? `${news.title.substring(0, 50)} ...`
                      : news.title}
                  </Title>
                  <img
                    src={news?.thumbnail || demoImage}
                    alt="news"
                    style={{ maxHeight: "100px", maxWidth: "200px" }}
                  />
                </div>
                <p>
                  {news.description.length > 100
                    ? `${news.description.substring(0, 100)} ....`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Text>{formatDate(news.createdAt)}</Text>
                  </div>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
