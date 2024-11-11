import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Styled from "../components/Styled";

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <Styled.MainSection>
      <Styled.Container>
        <Header />
        <div>Home</div>
      </Styled.Container>
    </Styled.MainSection>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query HomeQuery {
    wpPage(slug: { eq: "home" }) {
      title
      content
    }
  }
`;
