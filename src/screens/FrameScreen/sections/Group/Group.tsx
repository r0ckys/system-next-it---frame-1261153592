import { useState } from "react";

export const Group = (): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "general",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "general",
          message: ""
        });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  };

  return (
    <div className="absolute top-[8051px] left-[122px] w-[1200px] h-[814px] flex flex-col">
      <div className="ml-[485px] w-[226px] h-[60px] [font-family:'Poppins',Helvetica] text-black text-[40px] font-bold tracking-[0] leading-[normal]">
        Contact Us
      </div>

      <p className="ml-[367px] w-[462px] h-[27px] mt-2.5 [font-family:'Poppins',Helvetica] font-medium text-[#707070] text-lg text-center tracking-[0] leading-[normal]">
        Any question or remarks? Just write us a message!
      </p>

      <div className="w-[1196px] h-[667px] relative mt-[50px]">
        <div className="absolute top-0 left-0 w-[1196px] h-[667px] flex bg-white rounded-[10px] shadow-[0px_0px_60px_30px_#00000008]">
          <div className="mt-2.5 w-[491px] h-[647px] ml-2.5 relative overflow-hidden">
            <img
              className="absolute top-0 left-0 w-[491px] h-[647px] rounded-[10px] object-cover"
              alt="Rectangle"
              src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/rectangle-3841.png"
            />

            <div className="absolute top-[464px] left-[311px] w-[269px] h-[269px] bg-[#191919] rounded-[134.5px]" />

            <div className="absolute top-[438px] left-[283px] w-[138px] h-[138px] bg-[#48484880] rounded-[69px]" />

            <div className="absolute top-10 left-10 [font-family:'Poppins',Helvetica] font-semibold text-white text-[28px] tracking-[0] leading-[normal]">
              Contact Information
            </div>

            <div className="absolute top-[187px] left-10 w-[364px] h-80 flex flex-col">
              <div className="w-[191px] h-[102px] relative">
                <img
                  className="absolute top-0 left-0 w-6 h-6"
                  alt="Bxs phone call"
                  src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/bxs-phone-call.svg"
                />

                <div className="flex w-[189px] items-center justify-between absolute top-[74px] left-0">
                  <img
                    className="relative w-7 h-7"
                    alt="Image"
                    src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/image-956.png"
                  />

                  <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                    +88 0141-0050031
                  </div>
                </div>

                <div className="absolute top-0 left-[49px] font-normal text-white text-base leading-[normal] [font-family:'Poppins',Helvetica] tracking-[0]">
                  +88 0141-0050041
                </div>
              </div>

              <div className="w-[159px] mt-[46px] flex gap-[25px]">
                <img
                  className="w-6 h-6"
                  alt="Fluent person"
                  src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/fluent-person-support-24-filled.svg"
                />

                <div className="w-[108px] h-6 font-normal text-white text-base leading-[normal] [font-family:'Poppins',Helvetica] tracking-[0]">
                  09617 510 520
                </div>
              </div>

              <div className="w-[255px] mt-[50px] flex gap-[25px]">
                <img
                  className="w-6 h-6"
                  alt="Ic sharp email"
                  src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/ic-sharp-email.svg"
                />

                <div className="w-[204px] h-6 [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                  systemnextit@gmail.com
                </div>
              </div>

              <div className="w-[366px] mt-[50px] flex gap-[25px]">
                <img
                  className="w-6 h-6"
                  alt="Carbon location"
                  src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/carbon-location-filled.svg"
                />

                <p className="w-[315px] h-6 [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                  D-14/3, Bank Colony, Savar, Dhaka-1340
                </p>
              </div>
            </div>

            <div className="absolute top-[581px] left-[39px] flex gap-4">
              <a href="#" className="w-[30px] h-[30px] transition-transform duration-300 hover:scale-110" aria-label="Facebook">
                <img
                  alt="Facebook"
                  src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/group-1000001749.png"
                  className="w-full h-full"
                />
              </a>

              <a href="#" className="w-[30px] h-[30px] transition-transform duration-300 hover:scale-110" aria-label="Twitter">
                <img
                  alt="Twitter"
                  src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/group-1000001750.png"
                  className="w-full h-full"
                />
              </a>

              <a href="#" className="w-[30px] h-[30px] transition-transform duration-300 hover:scale-110" aria-label="Instagram">
                <img
                  alt="Instagram"
                  src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/group-1000001753.png"
                  className="w-full h-full"
                />
              </a>

              <a href="#" className="w-[30px] h-[30px] transition-transform duration-300 hover:scale-110" aria-label="LinkedIn">
                <img
                  alt="LinkedIn"
                  src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/group-1000001754.png"
                  className="w-full h-full"
                />
              </a>
            </div>

            <p className="absolute top-[88px] left-10 [font-family:'Poppins',Helvetica] font-normal text-[#c8c8c8] text-lg tracking-[0] leading-[normal]">
              Say something to start a live chat!
            </p>

            <img
              className="absolute top-[607px] left-[106px] w-6 h-6"
              alt="Clarity cursor hand"
              src="https://c.animaapp.com/ml59rzgj7IZLZ2/img/clarity-cursor-hand-click-line.svg"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="absolute top-[60px] left-[551px] w-[280px] h-[55px] flex flex-col">
            <label className="w-[65px] h-5 [font-family:'Poppins',Helvetica] font-medium text-[#8d8d8d] text-xs tracking-[0] leading-5 whitespace-nowrap">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-3 w-full bg-transparent border-b ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:border-orange-500 outline-none transition-colors pb-2`}
            />
            {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName}</span>}
          </div>

          <div className="absolute top-40 left-[551px] w-[280px] h-[55px] flex flex-col">
            <label className="w-[34px] h-5 [font-family:'Poppins',Helvetica] font-medium text-[#8d8d8d] text-xs tracking-[0] leading-5 whitespace-nowrap">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-3 w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-orange-500 outline-none transition-colors pb-2`}
            />
            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
          </div>

          <div className="absolute top-[60px] left-[868px] w-[282px] h-[55px] flex flex-col">
            <label className="w-[65px] h-5 [font-family:'Poppins',Helvetica] font-medium text-black text-xs tracking-[0] leading-5 whitespace-nowrap">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`mt-3 w-full bg-transparent border-b ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:border-orange-500 outline-none transition-colors pb-2`}
            />
            {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName}</span>}
          </div>

          <div className="absolute top-[360px] left-[551px] w-[599px] h-14 flex flex-col">
            <label className="w-[55px] h-5 [font-family:'Poppins',Helvetica] font-medium text-[#8d8d8d] text-xs tracking-[0] leading-5 whitespace-nowrap">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message.."
              className={`mt-2 w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:border-orange-500 outline-none transition-colors pb-2 resize-none`}
              rows={2}
            />
            {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message}</span>}
          </div>

          <div className="absolute top-40 left-[868px] w-[278px] h-[55px] flex flex-col">
            <label className="w-[90px] h-5 font-medium text-black text-xs leading-5 whitespace-nowrap [font-family:'Poppins',Helvetica] tracking-[0]">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+88 018 XXXX-XXXXX"
              className={`mt-3 w-full bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-orange-500 outline-none transition-colors pb-2`}
            />
            {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
          </div>

          <div className="absolute top-[260px] left-[551px] w-[471px] h-[55px]">
            <div className="absolute top-0 left-0 w-[109px] [font-family:'Poppins',Helvetica] font-semibold text-black text-sm tracking-[0] leading-5 whitespace-nowrap">
              Select Subject?
            </div>

            <div className="absolute top-[35px] left-0 flex gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="subject"
                  value="general"
                  checked={formData.subject === "general"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-orange-500"
                />
                <span className="text-xs">General Inquiry</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="subject"
                  value="website"
                  checked={formData.subject === "website"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-orange-500"
                />
                <span className="text-xs">Website</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="subject"
                  value="service"
                  checked={formData.subject === "service"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-orange-500"
                />
                <span className="text-xs">Service</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="subject"
                  value="career"
                  checked={formData.subject === "career"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-orange-500"
                />
                <span className="text-xs">Career</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-start gap-2.5 px-12 py-[15px] absolute top-[461px] left-[932px] bg-black rounded-[5px] shadow-[0px_0px_14px_#0000001f] transition-all duration-300 hover:bg-gray-800 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-400"
          >
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[normal]">
              {submitted ? "Message Sent!" : "Send Message"}
            </div>
          </button>
        </form>

        {submitted && (
          <div className="absolute top-[520px] left-[551px] bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded animate-fade-in">
            Thank you! Your message has been sent successfully.
          </div>
        )}
      </div>
    </div>
  );
};
