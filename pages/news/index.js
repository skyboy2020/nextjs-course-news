// our-domain.com/news
import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage() {
  return (
    <Fragment>
      <div style={{textAlign: 'center'}}>
      <br/>    
      <h1>The News Page</h1>
      <ul style={{listStyleType:'none'}}>
        <li>
          <Link href='/news/nextjs-is-a-great-framework'>
           <a>
             NextJS Is A Great Framework
           </a>   
          </Link>
        </li>
        <br/>
        <li>
          <Link href='/news/nextjs-is-a-great-framework'>
            <a>
             Something Else
            </a>    
          </Link>
         </li>
      </ul>
      </div>  
    </Fragment>
  );
}

export default NewsPage;