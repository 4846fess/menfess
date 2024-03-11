import NavbarMenus from "./NavbarMenus";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3 bg-[#ebc49f]">
      <img
        src="/assets/images/logo-transparent.png"
        alt="@4846menfess logo"
        width={56}
        loading="lazy"
      />

      <NavbarMenus />
    </div>
  );
};

export default Navbar;