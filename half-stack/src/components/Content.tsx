import { CoursePart } from "../App";
import Part from "./Part";

interface ContentProps {
  courseParts: CoursePart[];
}

const Content = (props: ContentProps) => {
  const courseParts = props.courseParts;
  return (
    <div>
      {courseParts.map((x, i) => (
        <Part key={i} coursePart={x} />
      ))}
    </div>
  );
};

export default Content;
