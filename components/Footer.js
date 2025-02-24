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
        href='https://www.notion.so/1a4ee4c653c080beb580f0f0bb905be3?v=1a4ee4c653c08147b7b0000c9784bf6b' 
        target='_blank' 
        rel='noopener noreferrer' 
        className='block mb-2 underline'
      >
        增加网页
      </a>
      <a 
        href='https://github.com/hxlong2024/IndWebIndex-1/blob/main/README.md' 
        target='_blank' 
        rel='noopener noreferrer' 
        className='block mb-2 underline'
      >
        获取更新
      </a>
      <p className='mb-1'>
        {visitCount !== null ? `访问量：${visitCount}` : '访问量：加载中...'}
      </p>
      <p>Copyright © 2021 - 2025 Linlong</p>
    </div>
  );
};

export default Footer;
