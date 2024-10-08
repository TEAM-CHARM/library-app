import { useEffect, useState } from "react";
import K from "../../constants";
import toast from "react-hot-toast";
import SummaryCard from "./components/SummaryCard";
import SearchBar from "./components/SearchBar";
import PageHeader from "./components/PageHeader";
const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);

  // const fetchStatistics = async () => {
  //   try {
  //     setLoading(true)
  //     const res = await getStats()
  //     if(res.stauts===200){
  //       setStats(res.data)
  //     }
  //   } catch (error) {
  //     toast.error("Error fetching dashboard statistics")
  //     console.log(error)
  //   }finally{
  //     setLoading(false)
  //   }
  // }

  useEffect(() => {
    // fetchStatistics()
    setStats(K.DASHBOARD_SUMMARY);
  }, []);

  return (
    <div>
      <PageHeader
        title="My Library"
        searchPlaceholder="Search books, authors, members..."
      />
      <div className="grid grid-cols-3 gap-8 align-middle items-center">
        {stats?.length &&
          stats.map((stat, index) => {
            return (
              <SummaryCard
                path={stat.path}
                key={index}
                title={stat.title}
                number={stat.number}
                percentage={stat.percentage}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
