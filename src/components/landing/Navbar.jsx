import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="sticky py-3 px-8 border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <div className="flex items-center justify-between">
        <p className="font-bold" a>
          FossPage
        </p>

        <Button>SignIn</Button>
      </div>
    </header>
  );
};

export default Navbar;
