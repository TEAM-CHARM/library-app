import { FaUsers } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { HiLibrary } from "react-icons/hi";
import profile from "../assets/images/profile.jpg";

const K = {
  USER: {
    name: "Albert Nartey",
    profilePic: profile,
    email: "albertnartey824@gmail.com",
  },
  NAVLINKS: [
    { icon: HiLibrary, link: "My Library", path: "/dashboard" },
    { icon: ImBooks, link: "Books", path: "/dashboard/books" },
    { icon: FaUsers, link: "Members", path: "/dashboard/members" },
  ],

  DASHBOARD_SUMMARY: [
    {
      title: "Total Books",
      path: "/dashboard/books",
      number: "32345",
      percentage: 11,
    },
    {
      title: "Borrowed Books",
      path: "/dashboard/books",
      number: "2405",
      percentage: 23,
    },
    {
      title: "Returned Books",
      path: "/dashboard/books",
      number: "783",
      percentage: -14,
    },
    {
      title: "Overdue Books",
      path: "/dashboard/books",
      number: "45",
      percentage: 23,
    },
    {
      title: "Visitors",
      path: "/dashboard/members",
      number: "1504",
      percentage: 3,
    },
    {
      title: "New Members",
      path: "/dashboard/members",
      number: "34",
      percentage: -10,
    },
  ],
  AUTHORS: [
    {
      id: "01",
      name: "Ann",
      bio: "I am a writer",
    },
    {
      id:"015",
      name:"Napoleon Hill",
      bio:"A writer"
    },
    {
      id:"016",
      name:"Robert Kiosaki",
      bio:"A writer"
    },
    {
      id: "02",
      name: "Ann",
      bio: "I am a writer",
    },
    {
      id: "03",
      name: "Ann",
      bio: "I am a writer",
    },
    {
      id: "04",
      name: "Ann",
      bio: "I am a writer",
    },
    {
      id: "05",
      name: "Ann",
      bio: "I am a writer",
    },
  ],

  BOOKS: [
    {
      isbn: "978-0-316-76948-0",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      year: "1960",
    },
    {
      isbn: "978-0-7432-7356-5",
      title: "The Da Vinci Code",
      author: "Dan Brown",
      category: "Mystery",
      year: "2003",
    },
    {
      isbn: "978-0-452-28423-4",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
      year: "1813",
    },
    {
      isbn: "978-0-06-112008-4",
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Adventure",
      year: "1988",
    },
    {
      isbn: "978-1-4516-7321-5",
      title: "Gone Girl",
      author: "Gillian Flynn",
      category: "Thriller",
      year: "2012",
    },
    {
      isbn: "978-1-59420-009-7",
      title: "The Road",
      author: "Cormac McCarthy",
      category: "Post-apocalyptic",
      year: "2006",
    },
    {
      isbn: "978-0-06-093546-7",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Fiction",
      year: "1951",
    },
    {
      isbn: "978-0-452-28423-3",
      title: "Moby Dick",
      author: "Herman Melville",
      category: "Adventure",
      year: "1851",
    },
    {
      isbn: "978-1-4767-2765-4",
      title: "The Girl on the Train",
      author: "Paula Hawkins",
      category: "Thriller",
      year: "2015",
    },
    {
      isbn: "978-0-316-76947-3",
      title: "Little Fires Everywhere",
      author: "Celeste Ng",
      category: "Drama",
      year: "2017",
    },
    {
      isbn: "978-0-345-39180-3",
      title: "1984",
      author: "George Orwell",
      category: "Dystopian",
      year: "1949",
    },
    {
      isbn: "978-0-7432-7355-8",
      title: "Angels and Demons",
      author: "Dan Brown",
      category: "Mystery",
      year: "2000",
    },
    {
      isbn: "978-0-316-76950-3",
      title: "Big Little Lies",
      author: "Liane Moriarty",
      category: "Drama",
      year: "2014",
    },
    {
      isbn: "978-1-5011-8175-5",
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      category: "Fiction",
      year: "2018",
    },
    {
      isbn: "978-0-15-101026-4",
      title: "Life of Pi",
      author: "Yann Martel",
      category: "Adventure",
      year: "2001",
    },
    {
      isbn: "978-0-452-28422-7",
      title: "The Adventures of Sherlock Holmes",
      author: "Arthur Conan Doyle",
      category: "Mystery",
      year: "1892",
    },
    {
      isbn: "978-1-4767-2764-7",
      title: "Sharp Objects",
      author: "Gillian Flynn",
      category: "Thriller",
      year: "2006",
    },
    {
      isbn: "978-0-375-50494-4",
      title: "The Book Thief",
      author: "Markus Zusak",
      category: "Historical Fiction",
      year: "2005",
    },
    {
      isbn: "978-1-5011-7656-0",
      title: "Educated",
      author: "Tara Westover",
      category: "Memoir",
      year: "2018",
    },
    {
      isbn: "978-1-4767-2768-5",
      title: "Dark Places",
      author: "Gillian Flynn",
      category: "Thriller",
      year: "2009",
    },
    {
      isbn: "978-0-452-28421-0",
      title: "Great Expectations",
      author: "Charles Dickens",
      category: "Classic",
      year: "1861",
    },
    {
      isbn: "978-0-452-28421-1",
      title: "Brave New World",
      author: "Aldous Huxley",
      category: "Dystopian",
      year: "1932",
    },
    {
      isbn: "978-1-250-03136-4",
      title: "The Silent Patient",
      author: "Alex Michaelides",
      category: "Thriller",
      year: "2019",
    },
    {
      isbn: "978-0-06-231500-7",
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "Non-fiction",
      year: "2014",
    },
    {
      isbn: "978-0-452-28423-2",
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      category: "Classic",
      year: "1866",
    },
    {
      isbn: "978-1-4767-2766-1",
      title: "Before I Go to Sleep",
      author: "S.J. Watson",
      category: "Thriller",
      year: "2011",
    },
    {
      isbn: "978-1-4516-6224-2",
      title: "The Night Circus",
      author: "Erin Morgenstern",
      category: "Fantasy",
      year: "2011",
    },
    {
      isbn: "978-0-06-202403-9",
      title: "The Maze Runner",
      author: "James Dashner",
      category: "Dystopian",
      year: "2009",
    },
    {
      isbn: "978-0-7432-7355-9",
      title: "Deception Point",
      author: "Dan Brown",
      category: "Thriller",
      year: "2001",
    },
    {
      isbn: "978-1-5011-8111-7",
      title: "The Testaments",
      author: "Margaret Atwood",
      category: "Dystopian",
      year: "2019",
    },
  ],
};

export default K;