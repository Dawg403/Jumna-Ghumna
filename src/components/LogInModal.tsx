import React from "react";
import ReCAPTCHA from "react-google-recaptcha";


interface LogInModalProps {
  open: boolean;
  onClose: () => void;
  onSwitchToSignUp: () => void;
  onForgotPassword: () => void;
}

const LogInModal: React.FC<LogInModalProps> = ({
  open,
  onClose,
  onSwitchToSignUp,
  onForgotPassword,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[3000] flex">
      {/* Left colored section */}
      <div className="flex-1 h-full relative" style={{ backgroundColor: "#a3b1c6" }}>
        {/* Branding at top left */}
        <div className="absolute top-6 left-8">
          <span className="text-2xl font-bold text-white tracking-wide" style={{ fontFamily: "Poppins, sans-serif", color: "#111827" }}>
            Jumna Ghumna
          </span>
        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[50%]">
          <h2 className="text-4xl font-extrabold text-[#111827] text-center mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Unveil Nepal’s Beauty
          </h2>
          <p className="text-base text-gray-800 text-center leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
            Journey beyond the ordinary—Jumna Ghumna connects you to breathtaking landscapes, vibrant culture, and authentic local adventures across Nepal.
          </p>
        </div>
      </div>
      {/* Right colored section with centered Log In box */}
      <div
        className="w-full max-w-md h-full flex items-center justify-center"
        style={{ backgroundColor: "#a3b1c6" }}
      >
        <div className="relative w-full bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center px-8 py-6 mr-12" style={{ zIndex: 10 }}>
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
          {/* Welcome Section */}
          <div className="w-full flex flex-col items-center mb-4 mt-2">
            <h1 className="text-2xl font-bold text-[#5D6C8A] mb-2">Welcome to Jumna Ghumna</h1>
            <p className="text-gray-600 mb-4 text-center">Log in to your account</p>
          </div>
          {/* Social Auth */}
            <div className="w-full flex flex-col gap-3 mb-4">
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded py-2 font-semibold text-black hover:bg-gray-50 transition">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                Continue with Google
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded py-2 font-semibold text-black hover:bg-gray-50 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="w-5 h-5" />
                Continue with Facebook
              </button>
            </div>
            {/* OR Divider */}
          <div className="flex items-center w-full mb-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="mx-3 text-gray-400 font-semibold">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          {/* Log In Form */}
          <form className="flex flex-col gap-3 w-full mb-2">
            <input type="email" placeholder="Email address" className="border border-gray-300 rounded px-4 py-2 focus:outline-none text-gray-800" />
            <input type="password" placeholder="Password" className="border border-gray-300 rounded px-4 py-2 focus:outline-none text-gray-800" />
            {/* Forgot password */}
            <div className="flex justify-end mb-2">
              <button
                type="button"
                className="text-xs text-[#5D6C8A] hover:underline"
                onClick={onForgotPassword}
              >
                Forgot password?
              </button>
            </div>
            {/* I'm not a robot (reCAPTCHA) */}
            <div className="flex justify-center my-2">
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={(value: string | null) => {
                  // handle value if needed
                }}
              />
            </div>
            <button type="submit" className="bg-[#5D6C8A] text-white py-2 rounded font-semibold hover:bg-[#4a5870] transition">
              Continue
            </button>
          </form>
          {/* Don't have an account */}
          <div className="w-full text-center mt-2 mb-2">
            <span className="text-sm text-gray-600">Don't have an account? </span>
            <button
              type="button"
              className="text-[#5D6C8A] font-semibold hover:underline"
              onClick={onSwitchToSignUp}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogInModal;