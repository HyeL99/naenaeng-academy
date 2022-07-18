import './App.css';
import {Routes, Route} from "react-router-dom"
import Top from './components/Top';
import MainPage from './Page/MainPage';
import LoginPage from './Page/SignInUp/LoginPage';
import SearchPage from './Page/SearchPage';
import CategoryPage from './Page/Category/CategoryPage';
import MyPage from './Page/MyPage';
import UploadPage from './Page/UploadPage';
import SavedPage from './Page/SavedPage';
import Bottom from './components/Bottom';

function App() {
  return (
    <div>
      <header><Top /></header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage /> } />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/member_info" element={<MyPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/saved_page" element={<SavedPage />} />
        </Routes>
      </main>
      <footer><Bottom /></footer>
    </div>
  );
}

export default App;
