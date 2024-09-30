

import DevCard from '@/components/custom/dev-card'

import {lang} from '@/utils/english'
import {devsData} from '@/constant/index'

export default function Home() {
  return (
    <section>
      <main className="px-7 py-4">
        <h2 id="intro" className="text-4xl border-b-2 w-52 p-3">Introduction</h2>
        <p className="py-5 px-3 max-w-[800px] text-justify">{lang.Introduction_context}</p>
        <h2 className="text-4xl border-b-2 w-40 p-3">Overview</h2>
        <div className="flex">
          <div>
            <img alt="overview-pict" src="/images/hesnical.png"/>
          </div>
          <div>
            <img alt="overview-pict" src="/images/themesidee.png"/>
          </div>
        </div>
        <div id="devs" className="flex justify-between">
          <h2 className="text-4xl border-b-2 w-[440px] p-3">Developers & Contributor</h2>
          <p className="py-5 px-3 max-w-[900px] text-center text-sm text-gray-500">I extend my sincere appreciation to contributors for their invaluable contributions. Your hard work, expertise, and dedication have greatly enriched this project. Thank you for being an essential part of our development team!</p>
        </div>
        <div className="flex justify-evenly">
          {
            devsData.map(({title , name , description , ability , img}) => (
              <div>
                <DevCard img={img} title={title} name={name} description={description} ability={ability}/>
              </div>
            ))
          }
        </div>
      </main>
      {/* <SideBar /> */}
    </section>
  );
}
