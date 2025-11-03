import { Layout } from "../layout/layout";

export const Home = () => {
  return (
    <Layout>
      {" "}
      <h1 className="text-3xl font-bold  underline  container">Hello home!</h1>
      <h1 className="mt-5 text-3xl container text-gray-600">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi,
        autem, architecto quis ipsam vel assumenda hic laudantium reprehenderit
        facilis exercitationem earum distinctio! Veritatis ducimus laborum fuga
        voluptatibus fugit repudiandae.
      </h1>
    </Layout>
  );
};
