
import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portflio from "./components/Portflio";
import SocialMedia from "./components/SocialMedia";
import InsightsandResources from "./components/Insights and Resources";
import Education from "./components/Education";

function App() {
  return (
    <div class="bg-">
   <NavBar></NavBar>
   <Home></Home>
   <SocialMedia></SocialMedia> 
   <About></About>
   <Education></Education>
   <Portflio></Portflio>
   <Experience></Experience>
   <InsightsandResources></InsightsandResources>
   <Contacts></Contacts>
  </div>
  );
}

export default App;
