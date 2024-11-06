import RecentPlay from "./RecentPlay";
import Recommed from "./Recommed";

const Content = () => {
  return (
    <div className="mt-4 px-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <RecentPlay />
      <Recommed />
    </div>
  );
};

export default Content;
