import sublinks from '../data';
import { useGlobalContext } from '../Context';

export function Submenu() {
  const { index, isHover, setIsHover } = useGlobalContext();

  const links = sublinks[index].links;
  const title = sublinks[index].page;

  return (
    <div
      className={isHover ? 'submenu show-submenu' : 'submenu'}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <h5 className='sublink-title'>{title}</h5>
      <ul
        className='sublink-links'
        style={{
          marginBottom: '0',
        }}
      >
        {links.map((item) => {
          return (
            <li key={item.id}>
              <a
                href={item.url}
                className='sub-link'
                style={{
                  marginBottom: '0.7rem',
                }}
              >
                {item.icon} <span className='link-desc'>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
