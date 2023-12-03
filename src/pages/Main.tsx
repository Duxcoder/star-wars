import Card from "../components/Card/Card";
import { AiOutlineRobot, AiOutlineSmile } from "react-icons/ai";
import { Path } from "../lib/constants";
import { useAppSelector } from "../redux/hooks";
import styled from "styled-components";
import Tile from "../components/Tile/Tile";

const Main = () => {
  const { allForms } = useAppSelector((state) => state.baseState);

  return (
    <MainBox className="cards">
      <Container>
        <Card
          title={"Uncontrolled Form"}
          description={
            "The form created using uncontrolled components approach"
          }
          path={Path.Uncontrolled}
          icon={<AiOutlineRobot size={100} color={"#888"} />}
        />
        <Card
          title={"React Hook Form"}
          description={
            "The similar form, created with the help of the React Hook Form"
          }
          path={Path.ReactHookForm}
          icon={<AiOutlineSmile size={100} color={"#888"} />}
        />
      </Container>
      <Container>
        {allForms.toReversed().map((form, i) => (
          <Tile key={form.name + form.password} isFirst={!i} formData={form} />
        ))}
      </Container>
    </MainBox>
  );
};

export default Main;

const MainBox = styled.main`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
`;
