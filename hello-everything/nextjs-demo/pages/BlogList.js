import Link from 'next/link';
import { getPostsMetaData } from '../lib/posts';
import Layout from '../components/layout';

export async function getStaticProps() {
  const allPostsData = getPostsMetaData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function BlogList({ allPostsData }) {

  return (
    <Layout>

    <div>
      <ul>
        {allPostsData ?  (allPostsData.map(({ id }) => (
          <div key={id}>
            <li>
              <Link href={`/posts/${id}`}>{id}</Link>
            </li>
          </div>
        ))) : (
            <div>Null Blog List</div>
        )
        }
      </ul>
    </div>
    </Layout>
  )
}