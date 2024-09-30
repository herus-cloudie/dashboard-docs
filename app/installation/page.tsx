import { CustomAlert } from '@/components/custom/alert'
import CodeBlock from '@/components/custom/codeBlock'
import React from 'react'

const page = () => {
  return (
    <section className="px-7 py-4">
      <h2 id="intro" className="text-4xl border-b-2 w-52 p-3">Installation</h2>
      <div className=' p-3 py-7'>
        <h4 id="intro" className="text-xl mb-5">initialize packages</h4>
        <div className='max-w-[700px]'>
          <CustomAlert />
        </div>
        <p className="py-5 px-3 max-w-[5600px] text-justify"></p>
        <div className='max-w-[400px]'>
          <CodeBlock context='create-next-app@latest' manager='npx&nbsp;'/>
        </div>
      </div>
    </section>
  )
}

export default page