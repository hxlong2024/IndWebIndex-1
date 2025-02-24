//components/Titles.js
const Titles = ({ title = "Individual Web Index", link = "https://www.900337.xyz/" }) => (
  <div>
    <h1 className="text-[2rem] my-3 text-center font-normal title-1">
      <a
        className="underline hover:no-underline text-orange-400 dark:text-lime-100"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </h1>
  </div>

    <div className='text-xs whitespace-nowrap text-purple-900 dark:text-rose-200 py-4'>
      <a 
        href='https://github.com/hxlong2024/IndWebIndex-1/blob/main/README.md' 
        target='_blank' 
        rel='noopener noreferrer' 
        className='block mb-2 underline'
      >
        更新数据
      </a>
    </div>

);

export default Titles;
