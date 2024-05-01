import logo from "../../assets/logo/logo.png"
import back from "../../assets/background/back.png"

function Login() {
  return (
    <div className="header xl:w-[100%] xl:h-[100vh] bg-[#F0F1F3]">
        <div className="container mx-auto">
            <div className="inner xl:w-[100%] pl-[650px] pt-[100px]">
                    <div className="log flex items-center gap-10">
                    <div className="logo">
                        <img src={logo} alt="" className="w-[90px] h-[70px]"/>
                    </div>
                    <div className="logo2">
                        <h1 className="text-[#000] text-[45px] font-bold">LOREM</h1>
                    </div>
                    </div>
                </div>
                <div className="main xl:w-[990px] xl:h-[550px] bg-[#fff] flex gap-10 ml-[300px] mt-[25px]">
                    <div className="back">
                        <img src={back} alt="" className="w-[450px] h-[550px]"/>
                    </div>
                    <div className="form xl:w-[450px] xl:h-[550px]">
                        <h1 className="text-[#000] font-bold text-[35px] mt-[65px]">Sign in to platform</h1>
                        <form className="mt-[30px]">
                            <legend>Your email</legend>
                            <input type="text" placeholder="name@gmail.com" className="xl:w-[100%] bg-[#F9FAFC] xl:h-[40px] border-[1px] pl-[15px] mt-[5px]"/>
                            <legend className="mt-[15px]">Your password</legend>
                            <input type="password" className="xl:w-[100%] bg-[#F9FAFC] xl:h-[40px] border-[1px] pl-[15px] mt-[5px]"  /><i className='bx bx-hide text-[25px] absolute ml-[-40px] mt-[13px]'></i>
                        </form>
                        <div className="check mt-[25px] flex justify-between">
                            <div className="input">
                            <input type="checkbox"  className="w-[18px] h-[18px]"/>
                            <span className="text-[18px] ml-[10px]">Remember me</span>
                            </div>
                            <a href="#" className="text-[#234AE2]">Last Password ?</a>
                        </div>
                        <button className="btn bg-[#234AE2] w-[200px] h-[45px] rounded-sm text-[#fff] mt-[20px]">Login to you account</button>
                        <p className="mt-[20px]">Not registered? <a href="#" className="text-[#234AE2]">Create account</a> </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login