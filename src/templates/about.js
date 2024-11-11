import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Styled from "../components/Styled";

const IndexPage = ({ data }) => {
  // const { wpPage, settings, contactPage } = data;
  console.log();

  return (
    <Styled.MainSection>
      <Styled.Container>
        qwe
        <Header />
        asdq
        <h1>{data?.wpPage?.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data?.wpPage?.content }} />
      </Styled.Container>
    </Styled.MainSection>
  );
};

export default IndexPage;

export const Head = () => <title>About Page</title>;

export const query = graphql`
  query ($slug: String) {
    wpPage(slug: { eq: $slug }) {
      title
      content
    }
  }
`;
