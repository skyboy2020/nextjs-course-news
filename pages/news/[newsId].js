import { useRouter } from 'next/router';

// our-domain.com/news/something-important

function DetailPage(props) {
  const router = useRouter();

  //这个newsId 也可以从getStaticProps和getServerSideProps中获取
  //参见nextjs-course-blog中的pages/post目录
//   const newsId = router.query.newsId;
//   console.log(newsId);
  // send a request to the backend API
  // to fetch the news item with newsId

  return (
     <div style={{textAlign:'center'}} >
      <h1>{ props.newsId }</h1>
     </div>   
  )
}

export function getServerSideProps(context) {
    const { params } = context;
    const { newsId } = params;
  
    
  
    return {
      props: {
        newsId,
      },
      // revalidate: 每600秒重新执行一次
    //   revalidate: 600,
    };
  }

export default DetailPage;