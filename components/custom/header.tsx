import ThemeToggle from "@/components/custom/themeToggle";
import SearchDialog from "@/components/custom/searchDialog";
import {lang} from '@/utils/english'
const Header = () => {
  return (
    <header className="z-20 sticky w-full">
      <div className="grid grid-cols-2 px-7 py-4 items-center" style={{boxShadow: '0px 0.1px 4px #787878'}}>
        <ul className="flex justify-between items-center">
          <li className="font-bold text-2xl text-main-1">Binary Poets</li>
          {
            lang.header_li.map(({title , href}) => <a href={href} className="cursor-pointer">{title}</a>)
          }
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