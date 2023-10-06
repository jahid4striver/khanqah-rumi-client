import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Answers from './components/Answers/Answers';
import Boyans from './components/Boyans/Boyans';
import AddAudio from './components/Dashboard/AddAudio';
import AddCategory from './components/Dashboard/AddCategory';
import AddQAAudio from './components/Dashboard/AddQAAudio';
import AddQACategory from './components/Dashboard/AddQACategory';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardHome from './components/Dashboard/DashboardHome';
import History from './components/History.js/History';
import Home from './components/Home/Home';
import Live from './components/Live/Live';
import Notice from './components/Notice/Notice';
import AudioPlayer from './components/Shared/AudioPlayer';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import ecu from '../src/assets/images/ecu.gif';
import Mobile from './components/Mobile/Mobile';
import MobileBoyans from './components/Mobile/MobileBoyans';
import MobileAnswers from './components/Mobile/MobileAnswers';
import MobileKobita from './components/Mobile/MobileKobita';
import MobileLive from './components/Mobile/MobileLive/MobileLive';
import AppDetails from './components/Mobile/AppDetails';
import NewTopics from './components/Mobile/NewTopics';
import MobileNotice from './components/Mobile/MobileNotice';
import Register from './components/Mobile/Register';
import MobileQuran from './components/Mobile/MobileQuran/MobileQuran';
import SurahDetails from './components/Mobile/MobileQuran/SurahDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BoyanCategory from './components/Mobile/BoyanCategory';
import SubjectWiseBoyan from './components/Mobile/SubjectWiseBoyan';
import AddSubject from './components/Dashboard/AddSubject';
import AddKobitaAudio from './components/Dashboard/AddKobitaAudio';
import PrayerTimes from './components/Mobile/PrayerTimes';
import Books from './components/Mobile/Books';
import AudioList from './components/Dashboard/AudioList/AudioList';
import QAList from './components/Dashboard/QAList/QAList';
import KobitaList from './components/Dashboard/KobitaList/KobitaList';
import Login from './components/Auth/Login';
import PrivateRoute from './components/Auth/RequireAuth';
import AddNotice from './components/Dashboard/AddNotice';
import MonthWiseBoyan from './components/Mobile/MonthWiseBoyan';
import AnswerCategory from './components/Mobile/AnswerCategory';
import AddShortBoyan from './components/Dashboard/AddShortBoyan';
import MobileShorts from './components/Mobile/MobileShorts';
import AddBooks from './components/Dashboard/AddBooks';
import QuranRecitation from './components/Mobile/QuranRecitation';
import LiveStreaming from './components/Mobile/LiveStreaming/LiveStreaming';

function App() {
  const [audioData, setAudioData] = useState();

  useEffect(()=>{
    AOS.init({duration: 300});
},[]);

  return (
    <div className="App bg-gray-100">
      <Navbar></Navbar>
      {
        audioData ? <div className='fixed top-28 right-px z-50'>
          <label for="my-modal-6" className='btn btn-square btn-accent text-white'>
            <img src={ecu} alt="" />
          </label>
        </div> : ''
      }
      <Routes>
        <Route path='/' element={<Home setAudioData={setAudioData} />}></Route>
        <Route path='/login' element={<Login setAudioData={setAudioData} />}></Route>
        <Route path='/boyans' element={<Boyans setAudioData={setAudioData} />}></Route>
        <Route path='/answers' element={<Answers setAudioData={setAudioData} />}></Route>
        <Route path='/history' element={<History />}></Route>
        <Route path='/live' element={<Live />}></Route>
        <Route path='/notice' element={<Notice />}></Route>
        <Route path='/mobile' element={<Mobile/>}></Route>
        <Route path='/mobile_boyans' element={<MobileBoyans setAudioData={setAudioData}/>}></Route>
        <Route path='/mobile_answers' element={<MobileAnswers setAudioData={setAudioData}/>}></Route>
        <Route path='/shorts' element={<MobileShorts setAudioData={setAudioData}/>}></Route>
        <Route path='/answer_category' element={<AnswerCategory setAudioData={setAudioData}/>}></Route>
        <Route path='/mobile_kobita' element={<MobileKobita setAudioData={setAudioData}/>}></Route>
        <Route path='/quran_recitation' element={<QuranRecitation setAudioData={setAudioData}/>}></Route>
        <Route path='/mobile_live' element={<MobileLive setAudioData={setAudioData}/>}></Route>
        <Route path='/app_details' element={<AppDetails setAudioData={setAudioData}/>}></Route>
        <Route path='/mobile_quran' element={<MobileQuran setAudioData={setAudioData}/>}></Route>
        <Route path='/prayer_times' element={<PrayerTimes setAudioData={setAudioData}/>}></Route>
        <Route path='/books' element={<Books setAudioData={setAudioData}/>}></Route>
        <Route path='/boyan_category' element={<BoyanCategory setAudioData={setAudioData}/>}></Route>
        <Route path='/boyan_subject' element={<SubjectWiseBoyan setAudioData={setAudioData}/>}></Route>
        <Route path='/boyan_month' element={<MonthWiseBoyan setAudioData={setAudioData}/>}></Route>
        <Route path='/mobile_quran/:surahId' element={<SurahDetails setAudioData={setAudioData}/>}></Route>
        <Route path='/new_topics' element={<NewTopics setAudioData={setAudioData}/>}></Route>
        <Route path='/mobile_notice' element={<MobileNotice setAudioData={setAudioData}/>}></Route>
        <Route path='/register' element={<Register setAudioData={setAudioData}/>}></Route>
        <Route path='/livestreaming' element={<LiveStreaming setAudioData={setAudioData}/>}></Route>
      </Routes>
      <Routes>
        <Route path='/dashboard' element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>}>
          <Route index element={<DashboardHome />}></Route>
          <Route path='addcategory' element={<AddCategory />}></Route>
          <Route path='add_qa_category' element={<AddQACategory />}></Route>
          <Route path='addaudio' element={<AddAudio />}></Route>
          <Route path='add_qa_audio' element={<AddQAAudio />}></Route>
          <Route path='add_kobita_audio' element={<AddKobitaAudio />}></Route>
          <Route path='add_short_audio' element={<AddShortBoyan />}></Route>
          <Route path='add_books' element={<AddBooks />}></Route>
          <Route path='add_notice' element={<AddNotice />}></Route>
          <Route path='addsubject' element={<AddSubject />}></Route>
          <Route path='boyan_list' element={<AudioList />}></Route>
          <Route path='qa_list' element={<QAList />}></Route>
          <Route path='kobita_list' element={<KobitaList />}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <AudioPlayer audioData={audioData}></AudioPlayer>
      <ToastContainer />
    </div>
  );
}

export default App;
