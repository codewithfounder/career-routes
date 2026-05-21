import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./page/Home";
import SignUp from "./page/auth/register/SignUp";
import Login from "./page/auth/Login";
import VerifyEmail from "./page/auth/forgetpasword/VerifyEmail";
import BrowseJobs from "./components/jobs/BrowseJobs";
import JobDetails from "./components/jobs/JobDetails";
import ProfileLayout from "./candidate/ProfileLayout";
import AppliedJobs from "./candidate/AppliedJobs";
import SavedJobs from "./candidate/SavedJobs";
import ChangePassword from "./candidate/ChangePassword";

// import Profile from "./candidate/Profile";
import VerifyOtp from "./page/auth/register/VerifyOtp";

import ScrollToTop from "./ScrollToTop";
import { ToastProvider } from "./context/ToastContext";
import ProfileInfo from "./candidate/ProfileInfo";
import About from "./page/About";

const scripts = [
  "/js/jquery.min.js",
  "/js/bootstrap.bundle.min.js",
  "/js/wow.js",
  "/js/bootstrap-select.min.js",
  "/js/jquery.bootstrap-touchspin.js",
  "/js/magnific-popup.js",
  "/js/waypoints-min.js",
  "/js/counterup.min.js",
  "/js/imagesloaded.js",
  "/js/masonry-3.1.4.js",
  "/js/masonry.filter.js",
  "/js/owl.carousel.js",
  "/js/scrollbar.min.js",
  "/js/custom.js",
  "/js/dz.carousel.js",
  "/js/dz.ajax.js",
  "/js/switcher.js",
];

function loadScript(src) {
  return new Promise((resolve) => {
    const oldScript = document.querySelector(
      `script[data-original-src="${src}"]`
    );

    if (oldScript) {
      oldScript.remove();
    }

    const script = document.createElement("script");

    script.src = src;
    script.async = false;
    script.dataset.originalSrc = src;

    script.onload = resolve;
    script.onerror = resolve;

    document.body.appendChild(script);
  });
}

export default function App() {
  useEffect(() => {
    let cancelled = false;

    async function initScripts() {
      for (const src of scripts) {
        if (cancelled) return;

        await loadScript(src);
      }
    }

    initScripts();

    return () => {
      cancelled = true;

      document
        .querySelectorAll("script[data-original-src]")
        .forEach((script) => script.remove());
    };
  }, []);

  return (
    <ToastProvider>
      <div className="page-wraper bg-white">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<VerifyEmail />} />
          <Route path="/browse-jobs" element={<BrowseJobs />} />
          <Route path="/job-details/:id" element={<JobDetails />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/profile/:token" element={<ProfileLayout />}>
            {/* <Route index element={<ProfileInfo />} /> */}
            <Route index element={<ProfileInfo/>}/>
            <Route path="applied-jobs" element={<AppliedJobs />} />
            <Route path="saved-jobs" element={<SavedJobs />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
        </Routes>
        <Footer />
        <button className="scroltop fa fa-arrow-up"></button>
      </div>
    </ToastProvider>
  );
}