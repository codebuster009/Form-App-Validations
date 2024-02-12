import Logo from '../assets/logo.svg'
const Header = () => {
  return (
    <div className="w-fit md:text-xl md:text-left md:font-bold md:mb-2 bg-[#252F3D] md:w-full md:h-12 flex ">
      <div className="rounded-full pl-12 pt-2">
      <img className="h-8 pl-10" src={Logo} alt="logo" />
      </div>
    </div>
  )
}

export default Header;
