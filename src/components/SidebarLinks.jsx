import sublinks from '../data';

function SidebarLinks() {
  return (
    <section className='sidebar-links'>
      {sublinks.map((item) => {
        return (
          <div className='sublink' key={item.pageId}>
            <h4 className='sublink-title'>{item.page}</h4>
            <ul className='sublink-links'>
              {item.links.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url} className='sub-link'>
                      {link.icon}{' '}
                      <span className='link-desc'>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
}

export default SidebarLinks;
