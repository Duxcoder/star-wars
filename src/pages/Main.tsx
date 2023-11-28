import Card from "../components/Card/Card";
import { AiOutlineRobot, AiOutlineSmile } from "react-icons/ai";
import { Path } from "../lib/constants";

const Main = () => {
  return (
    <main className="cards">
      <Card
        title={"Uncontrolled Form"}
        description={"The form created using uncontrolled components approach"}
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
    </main>
  );
};

export default Main;
