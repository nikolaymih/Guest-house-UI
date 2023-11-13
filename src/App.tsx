import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Header";
import Main from "./pages/Main";
import Footer from "./components/Layout/Footer";
import Gallery from "./pages/Gallery";
import Accommodation from "./pages/Аccommodation";
import Rules from "./pages/Аccommodation/Rules/Rules";
import PersonalDataProtection from "./pages/Аccommodation/PersonalDataProtection/PersonalDataProtection";
import Landmarks from "./pages/Landmarks";
import Reservation from "./pages/Reservation";
import Contacts from "./pages/Contacts";

export default function App() {
	return (
		<div>
			<Layout />
			<Routes>
				<Route path="/" element={<Main />}/>
				<Route path="gallery/*" element={<Gallery />}/>
				<Route path="/accommodation" element={<Accommodation />}/>
				<Route path="/rules" element={<Rules />}/>
				<Route path="/personal-data" element={<PersonalDataProtection />} />
				<Route path="/landmarks" element={<Landmarks/>} />
				<Route path="/reservation" element={<Reservation/>} />
				<Route path="/contacts" element={<Contacts/>} />
			</Routes>
			<Footer />
		</div>
	)
}