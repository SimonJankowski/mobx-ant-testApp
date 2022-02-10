import React, { useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { Row, Col, Button, Card, Divider } from "antd";

const WorkersScreen = observer(({ MainStore }) => {

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const people = await result.json();
      if (MainStore.candidates.length < 2) { // development purposes only due to live rerendering, useless in production
        MainStore.loadCandidates(people);
      }
    };
    fetchData();
  }, []);

  const hireHim = (person) => {
    MainStore.hireCandidate(person);
  };

  const onFireButtonClick = (person) => {
    MainStore.fireWorker(person);
  };

  const renderWorkers = () => {
    const clone = toJS(MainStore.workers);
    return clone.map((worker) => {
      return (
        <Col key={worker.id} span={8}>
          <Card
            key={worker.id}
            title={worker.name}
            extra={
              <Button type="danger" onClick={() => onFireButtonClick(worker)}>Fire</Button>}
          >
            <p>city: {worker.city}</p>
            <p>email: {worker.email} </p>
          </Card>
        </Col>
      );
    });
  };

  const renderCandidates = () => {
    const clone = toJS(MainStore.candidates);
    return clone.map((person) => {
      return (
        <li key={person.id}>
          {person.name+" "} 
          <Button onClick={() => hireHim(person)}>Hire</Button>
        </li>
      );
    });
  };

  return (
    <>
    <div style={{margin:10}}>
      <Divider orientation="left"><h2>Your Team:</h2></Divider>
      <Row>{renderWorkers()}</Row>
      <Divider orientation="left"><h2>Avaible to hire:</h2></Divider>
      <ul>{renderCandidates()}</ul>
      </div>
    </>
  );
});

export default WorkersScreen;
