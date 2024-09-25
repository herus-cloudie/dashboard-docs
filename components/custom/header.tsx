import ThemeToggle from "@/components/custom/themeToggle";
import SearchDialog from "@/components/custom/searchDialog";

const Header = () => {
  return (
    <header className="h-96">
    <div className="grid grid-cols-2 px-7 py-4 items-center" style={{boxShadow: '0px 0.1px 4px #787878'}}>
      <ul className="flex justify-between items-center">
        <li className="font-bold text-2xl text-main-1">Binary Poets</li>
        <li className="cursor-pointer">Developers</li>
        <li className="cursor-pointer">description</li>
        <li className="cursor-pointer">installation</li>
        <li className="cursor-pointer">components</li>
        <li className="cursor-pointer">help</li>
      </ul>
      <div className="flex justify-end gap-5">
        <div>
          <SearchDialog />
        </div>
        <div>
          <ThemeToggle/>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header