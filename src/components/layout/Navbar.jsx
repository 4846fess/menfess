import TwitterButton from "../button/TwitterButton";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3">
      <img
        src="/assets/icons/circle-logo.svg"
        alt="@4846menfess logo"
        width={56}
      />

      <TwitterButton />
    </div>
  );
};

export default Navbar;