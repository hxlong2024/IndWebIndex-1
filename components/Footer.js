import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [visitCount, setVisitCount] = useState(null);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const response = await fetch('/api/visit-count');
        const data = await response.json();
        setVisitCount(data.count);
      } catch (error) {
        console.error('获取访问量失败：', error);
      }
    };

    fetchVisitCount();
  }, []);

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
    </div>

    
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
};

export default Footer;
