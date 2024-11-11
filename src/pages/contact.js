import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Styled from "./Styled";

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <Styled.MainSection>
      <Styled.Container>
        <Header />
        <h1>{data?.wpPage?.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data?.wpPage?.content }} />
      </Styled.Container>
    </Styled.MainSection>
  );
};

export default IndexPage;

export const Head = () => <title>Sample Page</title>;

export const query = graphql`
  query HomeQuery {
    wpPage(slug: { eq: "contact" }) {
      title
      content
    }
  }
`;