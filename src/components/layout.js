import * as React from 'react';
import { FaBars, FaFortAwesome } from 'react-icons/fa';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className='lg:container lg:mx-auto font-sans'>
      <header className='flex items-center justify-between px-4 py-3'>
        <h1 className='flex items-center text-green-400 font-bold text-xl my-0'>
          <FaFortAwesome className='w-12 h-12 mr-2' />
          {data.site.siteMetadata.title}
        </h1>
        <nav className='flex text-green-400'>
          <button className='text-green-500 hover:text-green-500 focus:text-green-500 md:hidden'>
            <FaBars />
          </button>
          <ul className='flex items-center justify-between gap-x-8 font-bold'>
            <li>
              <Link className='hover:text-green-600' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='hover:text-green-600' to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link to='/blog' className='hover:text-green-600'>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='text-center'>
        <h1 className='text-3xl font-bold text-green-400 my-3'>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
