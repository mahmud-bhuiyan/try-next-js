import Navbar from "@/components/Navbar";

const WithLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <div>Footer</div>
    </div>
  );
};

export default WithLayout;
