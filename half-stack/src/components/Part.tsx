import { CoursePart } from "../App";

interface PartProps {
  coursePart: CoursePart;
}

const assertNever = (value: never): never => {
  throw new Error(`Unknown course part ${JSON.stringify(value)}`);
};

const Part = ({ coursePart }: PartProps) => {
  switch (coursePart.kind) {
    case "basic": {
      return (
        <p>
          <strong>
            {coursePart.name} {coursePart.exerciseCount}
          </strong>
          <br />
          <em>{coursePart.description}</em>
        </p>
      );
    }
    case "group": {
      return (
        <p>
          <strong>
            {coursePart.name} {coursePart.exerciseCount}
          </strong>
          <br />
          <em>group project: </em> {coursePart.groupProjectCount}
        </p>
      );
    }
    case "background": {
      return (
        <p>
          <strong>
            {coursePart.name} {coursePart.exerciseCount}
          </strong>
          <br />
          <em>background material: </em>
          <a href={coursePart.backgroundMaterial}>
            {coursePart.backgroundMaterial}
          </a>
        </p>
      );
    }
    case "special": {
      return (
        <p>
          <strong>
            {coursePart.name} {coursePart.exerciseCount}
          </strong>
          <br />
          <em>requirements: </em> {coursePart.requirements.join(", ")}
        </p>
      );
    }
    default:
      return assertNever(coursePart);
  }
};

export default Part;
