// our-domain.com/
import { Fragment  } from 'react'
import Link from 'next/link'

function HomePage() {
  return (
    <Fragment>
     <div style={{textAlign: 'center'}}>
      <br/>
      <br/>
      <h1>Nextjs React JS Demo 小例子 </h1>
      <br/>
      <br/>
      <br/>
      <Link href="/news"><a>1. 页面动态路由参数例子 dynamic router param demo</a></Link>
      <br/>
      <br/>
      <br/>
      <Link href="/todo"><a>2. 父子组件方法传递例子 parment child component  method send demo</a></Link>
     </div> 
    </Fragment>
  )
}

export default HomePage;