import Section from "../Section/Section";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Portfolio.css";
import Web from "./Web";
import Graphic from "./Graphic";
import Photography from "./Photography";
import React from "react";

export default React.memo(function Portfolio() {
  return (
    <Section
      id="portfolio"
      className="d-flex flex-column"
      title={"Portfolio"}
      subTitle={"My Work"}
    >
      <Tabs
        defaultActiveKey="development"
        transition={true}
        id="noanim-tab-example"
        className="mb-3 justify-content-end"
      >
        <Tab eventKey="development" title="Development">
          <Web />
        </Tab>
        <Tab eventKey="design" title="Design">
          <Graphic />
        </Tab>
        <Tab eventKey="photography" title="Photography">
          <Photography />
        </Tab>
      </Tabs>
    </Section>
  );
});
