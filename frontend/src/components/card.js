import React from 'react';
import { Food } from '../custom_api/cardData';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const FoodComponent = () => {
  return (
    <div className="container">
      <div className="row">
        {Food.map((foodItem, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card>
              <CardImg
                top
                width="100%"
                src={foodItem.img}
                alt={foodItem.Name}
                className="card-img"
              />
              <CardBody>
                <CardTitle tag="h5">{foodItem.Name}</CardTitle>
                <CardText>{foodItem.desc}</CardText>
                <CardText>Sales: {foodItem.sales}</CardText>
                <CardText>Likes: {foodItem.likes}</CardText>
                <CardText>Ratings: {foodItem.Ratings}</CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodComponent;
