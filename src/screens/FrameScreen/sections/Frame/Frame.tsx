import { useState } from "react";

export const Frame = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("services");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    
    const sectionMap: { [key: string]: number } = {
      services: 1621,
      saas: 3110,
      websites: 4177,
      marketing: 4995,
      tools: 5693,
      contact: 8051
    };

    const targetPosition = sectionMap[sectionId] || 0;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  return (
    <div className="absolute top-0 left-0 w-[1440px] h-[950px] rounded-[0px_0px_120px_120px] overflow-hidden">
      <img
        className="absolute top-0 left-0 w-[1440px] h-[949px] bg-blend-lighten"
        alt="Nature"
        src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/nature-17.png"
      />

      <img
        className="absolute top-0 left-0 w-[720px] h-[949px]"
        alt="Group"
        src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/group-890.png"
      />

      <div className="absolute top-0 left-[720px] w-[65px] h-[949px] backdrop-blur-[107.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(107.35px)_brightness(100%)] bg-blend-overlay bg-[linear-gradient(270deg,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.2)_76%,rgba(255,255,255,0.01)_100%)]" />

      <div className="absolute top-0 left-[785px] w-[66px] h-[949px] backdrop-blur-[107.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(107.35px)_brightness(100%)] bg-blend-overlay bg-[linear-gradient(270deg,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.2)_76%,rgba(255,255,255,0.01)_100%)]" />

      <div className="absolute top-0 left-[851px] w-[65px] h-[949px] backdrop-blur-[107.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(107.35px)_brightness(100%)] bg-blend-overlay bg-[linear-gradient(270deg,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.2)_76%,rgba(255,255,255,0.01)_100%)]" />

      <div className="absolute top-0 left-[916px] w-[66px] h-[949px] backdrop-blur-[107.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(107.35px)_brightness(100%)] bg-blend-overlay bg-[linear-gradient(270deg,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.2)_76%,rgba(255,255,255,0.01)_100%)]" />

      <div className="absolute top-0 left-[982px] w-[65px] h-[949px] backdrop-blur-[107.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(107.35px)_brightness(100%)] bg-blend-overlay bg-[linear-gradient(270deg,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.2)_76%,rgba(255,255,255,0.01)_100%)]" />

      <div className="absolute top-0 left-[1047px] w-[66px] h-[949px] backdrop-blur-[107.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(107.35px)_brightness(100%)] bg-blend-overlay bg-[linear-gradient(270deg,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.2)_76%,rgba(255,255,255,0.01)_100%)]" />

      <div className="absolute top-0 left-[1113px] w-[65px] h-[949px] backdrop-blur-[107.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(107.35px)_brightness(100%)] bg-blend-overlay bg-[linear-gradient(270deg,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.2)_76%,rgba(255,255,255,0.01)_100%)]" />

      <div className="absolute top-0 left-[1178px] w-[66px] h-[949px] backdrop-blur-[107.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(107.35px)_brightness(100%)] bg-blend-overlay bg-[linear-gradient(270deg,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.2)_76%,rgba(255,255,255,0.01)_100%)]" />

      <div className="absolute top-0 left-[1244px] w-[65px] h-[949px] backdrop-blur-[107.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(107.35px)_brightness(100%)] bg-blend-overlay bg-[linear-gradient(270deg,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.2)_76%,rgba(255,255,255,0.01)_100%)]" />

      <div className="absolute top-0 left-[1309px] w-[66px] h-[949px] backdrop-blur-[107.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(107.35px)_brightness(100%)] bg-blend-overlay bg-[linear-gradient(270deg,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.2)_76%,rgba(255,255,255,0.01)_100%)]" />

      <div className="absolute top-0 left-[1375px] w-[65px] h-[949px] backdrop-blur-[107.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(107.35px)_brightness(100%)] bg-blend-overlay bg-[linear-gradient(270deg,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.2)_76%,rgba(255,255,255,0.01)_100%)]" />

      <div className="absolute top-0 left-0 w-[1440px] h-[949px] bg-[linear-gradient(180deg,rgba(255,255,255,0.45)_0%,rgba(0,140,255,0.72)_100%)]" />

      <div className="flex flex-col w-[1152px] items-center justify-center gap-[33px] absolute top-[195px] left-[calc(50.00%_-_576px)] animate-fade-up" style={{ "--animation-delay": "0.2s" } as React.CSSProperties}>
        <div className="flex flex-col items-start gap-[29px] relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#ff9c1b] text-[17px] text-center tracking-[0.68px] leading-4">
            FROM IDEA TO ONLINE SUCCESS
          </p>
        </div>

        <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-gray-700 text-base text-center tracking-[-0.32px] leading-6">
          Accelerate your business growth with modern, scalable, and
          result-driven digital solutions.
        </p>
      </div>

      <div className="flex flex-col w-[1152px] gap-4 absolute top-[402px] left-[calc(50.00%_-_576px)] items-center justify-center animate-fade-up" style={{ "--animation-delay": "0.4s" } as React.CSSProperties}>
        <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
          <button 
            onClick={() => scrollToSection("contact")}
            className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] rounded-[88px] bg-[linear-gradient(138deg,rgba(255,107,1,1)_0%,rgba(255,159,28,1)_100%)] transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-400 cursor-pointer"
          >
            <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto',Helvetica] font-medium text-neutralwhite text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
              Book a Call
            </div>
          </button>

          <button 
            onClick={() => scrollToSection("services")}
            className="all-[unset] box-border inline-flex gap-2 px-6 py-2 relative flex-[0_0_auto] rounded-[99px] items-center justify-center transition-all duration-300 hover:bg-white/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ff6f03] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
              How it works
            </div>

            <img
              className="relative w-8 h-8 transition-transform duration-300 group-hover:translate-x-1"
              alt="Icon"
              src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/icon.svg"
            />
          </button>
        </div>
      </div>

      {/* Header Navigation */}
      <div className="absolute top-[-11px] left-[calc(50.00%_-_720px)] w-[1440px] h-[88px] flex bg-[#ffffff0f] overflow-hidden backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] z-50">
        <div className="w-[1440px] h-[950px] relative rounded-[0px_0px_120px_120px] overflow-hidden">
          {/* Desktop Navigation */}
          <div className="hidden lg:inline-flex items-start gap-2 p-1 absolute top-7 left-[calc(50.00%_-_321px)]">
            <button
              onClick={() => scrollToSection("services")}
              className={`inline-flex items-center gap-0.5 px-4 py-2 relative flex-[0_0_auto] rounded-lg transition-all duration-300 hover:bg-white/20 cursor-pointer ${
                activeSection === "services" ? "bg-white/30" : ""
              }`}
            >
              <div className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-base tracking-[-0.32px] leading-6 whitespace-nowrap ${
                activeSection === "services" ? "text-gray-900 font-semibold" : "text-gray-900"
              }`}>
                Services
              </div>

              <img
                className="relative w-4 h-4"
                alt="Expand more"
                src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/expand-more.svg"
              />
            </button>

            <button
              onClick={() => scrollToSection("saas")}
              className={`inline-flex items-center gap-0.5 px-4 py-2 relative flex-[0_0_auto] rounded-lg transition-all duration-300 hover:bg-white/20 cursor-pointer ${
                activeSection === "saas" ? "bg-white/30" : ""
              }`}
            >
              <div className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-base tracking-[-0.32px] leading-6 whitespace-nowrap ${
                activeSection === "saas" ? "text-gray-900 font-semibold" : "text-gray-900"
              }`}>
                SaaS
              </div>
            </button>

            <button
              onClick={() => scrollToSection("websites")}
              className={`inline-flex items-center gap-0.5 px-4 py-2 relative flex-[0_0_auto] rounded-lg transition-all duration-300 hover:bg-white/20 cursor-pointer ${
                activeSection === "websites" ? "bg-white/30" : ""
              }`}
            >
              <div className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-base tracking-[-0.32px] leading-6 whitespace-nowrap ${
                activeSection === "websites" ? "text-gray-900 font-semibold" : "text-gray-900"
              }`}>
                Websites
              </div>
            </button>

            <button
              onClick={() => scrollToSection("marketing")}
              className={`inline-flex items-center gap-0.5 px-4 py-2 relative flex-[0_0_auto] rounded-lg transition-all duration-300 hover:bg-white/20 cursor-pointer ${
                activeSection === "marketing" ? "bg-white/30" : ""
              }`}
            >
              <div className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-base tracking-[-0.32px] leading-6 whitespace-nowrap ${
                activeSection === "marketing" ? "text-gray-900 font-semibold" : "text-gray-900"
              }`}>
                Marketing
              </div>
            </button>

            <button
              onClick={() => scrollToSection("tools")}
              className={`inline-flex items-center gap-0.5 px-4 py-2 relative flex-[0_0_auto] rounded-lg transition-all duration-300 hover:bg-white/20 cursor-pointer ${
                activeSection === "tools" ? "bg-white/30" : ""
              }`}
            >
              <div className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-base tracking-[-0.32px] leading-6 whitespace-nowrap ${
                activeSection === "tools" ? "text-gray-900 font-semibold" : "text-gray-900"
              }`}>
                Tools
              </div>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={`inline-flex items-center gap-0.5 px-4 py-2 relative flex-[0_0_auto] rounded-lg transition-all duration-300 hover:bg-white/20 cursor-pointer ${
                activeSection === "contact" ? "bg-white/30" : ""
              }`}
            >
              <div className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-base tracking-[-0.32px] leading-6 whitespace-nowrap ${
                activeSection === "contact" ? "text-gray-900 font-semibold" : "text-gray-900"
              }`}>
                Contact us
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden absolute top-7 right-8 z-50 p-2 rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-[88px] left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-40 animate-fade-in">
              <div className="flex flex-col p-4 gap-2">
                <button
                  onClick={() => scrollToSection("services")}
                  className={`px-4 py-3 text-left rounded-lg transition-colors ${
                    activeSection === "services" ? "bg-orange-100 text-orange-600 font-semibold" : "hover:bg-gray-100"
                  }`}
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("saas")}
                  className={`px-4 py-3 text-left rounded-lg transition-colors ${
                    activeSection === "saas" ? "bg-orange-100 text-orange-600 font-semibold" : "hover:bg-gray-100"
                  }`}
                >
                  SaaS
                </button>
                <button
                  onClick={() => scrollToSection("websites")}
                  className={`px-4 py-3 text-left rounded-lg transition-colors ${
                    activeSection === "websites" ? "bg-orange-100 text-orange-600 font-semibold" : "hover:bg-gray-100"
                  }`}
                >
                  Websites
                </button>
                <button
                  onClick={() => scrollToSection("marketing")}
                  className={`px-4 py-3 text-left rounded-lg transition-colors ${
                    activeSection === "marketing" ? "bg-orange-100 text-orange-600 font-semibold" : "hover:bg-gray-100"
                  }`}
                >
                  Marketing
                </button>
                <button
                  onClick={() => scrollToSection("tools")}
                  className={`px-4 py-3 text-left rounded-lg transition-colors ${
                    activeSection === "tools" ? "bg-orange-100 text-orange-600 font-semibold" : "hover:bg-gray-100"
                  }`}
                >
                  Tools
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`px-4 py-3 text-left rounded-lg transition-colors ${
                    activeSection === "contact" ? "bg-orange-100 text-orange-600 font-semibold" : "hover:bg-gray-100"
                  }`}
                >
                  Contact us
                </button>
              </div>
            </div>
          )}

          <div className="inline-flex items-center justify-center gap-1 absolute top-6 left-[1037px]">
            <button className="all-[unset] box-border inline-flex gap-2 px-6 py-3 relative flex-[0_0_auto] rounded-[99px] items-center justify-center transition-all duration-300 hover:bg-white/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400">
              <img
                className="relative w-8 h-8"
                alt="Carbon language"
                src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/carbon-language.svg"
              />

              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ff6f03] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                বল
              </div>
            </button>

            <button className="all-[unset] box-border inline-flex gap-2 px-6 py-3 relative flex-[0_0_auto] rounded-[99px] items-center justify-center transition-all duration-300 hover:bg-white/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400">
              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ff6f03] text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Sign in
              </div>
            </button>

            <button 
              onClick={() => scrollToSection("contact")}
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] rounded-[88px] bg-[linear-gradient(138deg,rgba(255,107,1,1)_0%,rgba(255,159,28,1)_100%)] transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange-400"
            >
              <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto',Helvetica] font-medium text-neutralwhite text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                Book a Call
              </div>
            </button>
          </div>

          <img
            className="absolute top-[calc(50.00%_-_450px)] left-10 w-[262px] h-[53px]"
            alt="Frame"
            src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/frame-1000001802.png"
          />
        </div>
      </div>

      <img
        className="absolute top-[450px] left-[calc(50.00%_-_450px)] w-[900px] h-[459px] animate-fade-up"
        style={{ "--animation-delay": "0.6s" } as React.CSSProperties}
        alt="Element"
        src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/6-6.png"
      />
    </div>
  );
};
