import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
  onSwitchToLogIn: () => void; // <-- add this line here
}
const SignInModal: React.FC<SignInModalProps> = ({ open, onClose, onSwitchToLogIn }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[3000] flex">
      {/* Left colored section */}
      <div className="flex-1 h-full relative" style={{ backgroundColor: "#a3b1c6" }}>
        {/* Branding at top left */}
        <div className="absolute top-6 left-8">
          <span className="text-2xl font-bold text-white tracking-wide" style={{ fontFamily: "Poppins, sans-serif",color: "#111827" }}>
            Jumna Ghumna
          </span>
          </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[50%]">
  <h2
    className="text-4xl font-extrabold text-[#111827] text-center mb-4"
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    Discover Nepal’s Wonders
  </h2>
  <p
    className="text-base text-gray-800 text-center leading-relaxed"
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    From the Himalayas to hidden villages, Jumna Ghumna helps you plan, explore, and experience Nepal like never before.
  </p>
</div>
      </div>
      {/* Right colored section with centered Sign In box */}
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
            <p className="text-gray-600 mb-4 text-center">Sign up to continue</p>
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
          {/* Sign Up Form */}
          <form className="flex flex-col gap-3 w-full mb-2">
            <input type="text" placeholder="First name" className="border border-gray-300 rounded px-4 py-2 focus:outline-none text-gray-800" />
            <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 focus:outline-none text-gray-800" />
            <input type="password" placeholder="Password" className="border border-gray-300 rounded px-4 py-2 focus:outline-none text-gray-800" />
            {/* I'm not a robot */}
            <div className="flex justify-center my-2">
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={(value: string | null) => {
                    // handle value if needed
                  }}
                />
              </div>
            {/* Terms */}
            <p className="text-xs text-gray-500 mt-2 mb-2 text-center">
              By creating an account, I am agreeing to Jumna Ghumna's <a href="#" className="underline text-[#5D6C8A]">Terms of Service</a> and <a href="#" className="underline text-[#5D6C8A]">Privacy Policy</a>.
            </p>
            <button type="submit" className="bg-[#5D6C8A] text-white py-2 rounded font-semibold hover:bg-[#4a5870] transition">
              Continue
            </button>
          </form>
          {/* Already have an account */}
          <div className="w-full text-center mt-2 mb-2">
            <span className="text-sm text-gray-600">Already have an account? </span>
               <a
              href="#"
              className="text-[#5D6C8A] font-semibold hover:underline transition"
              onClick={e => {
                e.preventDefault();
                onSwitchToLogIn(); // call the prop function
              }}
            >
            
                
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignInModal;