import { useEffect, useState } from "react";
import K from "../../constants";
import toast from "react-hot-toast";
import SummaryCard from "./components/SummaryCard";
import SearchBar from "./components/SearchBar";
import PageHeader from "./components/PageHeader";
import SummaryCardSkeleton from "./components/SummaryCardSkeleton";
import { apiGetAuthors } from "../../services/author";
import { apiGetBooks } from "../../services/book";
const Dashboard = () => {
  const [stats, setStats] = useState([
    {
      title: "Total Books",
      path: "/dashboard/books",
      number: 50,
      percentage: 11,
    },
    {
      title: "Borrowed Books",
      path: "/dashboard/books",
      number: 0,
      percentage: 0,
    },
    {
      title: "Returned Books",
      path: "/dashboard/books",
      number: "0",
      percentage: 0,
    },
    {
      title: "Overdue Books",
      path: "/dashboard/books",
      number: "0",
      percentage: 0,
    },
    {
      title: "Visitors",
      path: "/dashboard/members",
      number: "0",
      percentage: 0,
    },
    {
      title: "New Members",
      path: "/dashboard/members",
      number: 0,
      percentage: 0,
    },
  ]);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await apiGetBooks();
      if (res.status === 200) {
        setBooks(res.data); // Store full list of books
        setStats((prevStats) =>
          prevStats.map((stat) =>
            stat.title === "Total Books"
              ? { ...stat, number: res.data.length }
              : stat
          )
        );        
      }
    } catch (error) {
      toast.error("Error fetching books");
    } finally {
      setLoading(false);
    }
  };

  const fetchAuthors = async () => {
    try {
      setLoading(true);
      const res = await apiGetAuthors();
      if (res.status === 200) {
        setAuthors(res.data);
      }
    } catch (error) {
      toast.error("Error fetching authors");
    } finally {
      setLoading(false);
    }
  };

  const fetchData = () => {
    fetchBooks();
    fetchAuthors();
  };

  useEffect(() => {
    fetchData()
    
    
  }, []);

  return (
    <div>
      <PageHeader
        title="My Library"
        searchPlaceholder="Search books, authors, members..."
      />
      {loading ? (
        <div className="grid grid-cols-3 gap-8 align-middle items-center">
          <SummaryCardSkeleton />
          <SummaryCardSkeleton />
          <SummaryCardSkeleton />
          <SummaryCardSkeleton />
          <SummaryCardSkeleton />
          <SummaryCardSkeleton />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Dashboard;
