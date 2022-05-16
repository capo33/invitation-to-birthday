import React from "react";
import { PeopleType as Props } from "../types/peopleType";
import { Container, Row, Col } from "react-bootstrap";

const List: React.FC<Props> = ({ people }) => {
  return (
    <>
      <Container>
        <Row>
          {people.map((person, index) => (
            <Col lg={6} md={6} xs={12} key={index}>
              <div className="card bg-white p-3 mb-2 shadow">
                <div className="user-info">
                  <div className="user-info__img">
                    <img src={person.url} alt={person.name} />
                  </div>
                  <div className="user_contnet">
                    <h5 className="mb-0">{person.name}</h5>
                    <p className="text-muted mb-0">{person.age} years old</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="mb-0">{person.note}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default List;
