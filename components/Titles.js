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

  return (
    <div className='text-xs whitespace-nowrap text-purple-900 dark:text-rose-200 py-4'>
      <a 
        href='https://www.notion.so/1a0ee4c653c0804488a1d089bd56bcf9?v=1a0ee4c653c081359cd6000c42f9038d' 
        target='_blank' 
        rel='noopener noreferrer' 
        className='block mb-2 underline'
      >
        增加网页
      </a>
      <p className='mb-1'>
        {visitCount !== null ? `访问量：${visitCount}` : '访问量：加载中...'}
      </p>
      <p>Copyright © 2021 - NowScott</p>
    </div>
  );

);

export default Titles;
