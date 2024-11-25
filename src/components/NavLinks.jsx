import sublinks from '../data';
import { useGlobalContext } from '../Context';

export function NavLinks() {
  const { setIsHover, changeIndex } = useGlobalContext();

  return (
    <div className='navlinks-container'>
      <ul className='pages'>
        {sublinks.map((item) => {
          return (
            <li key={item.pageId}>
              <a
                href='#'
                onMouseOver={changeIndex}
                onMouseOut={() => setIsHover(false)}
              >
                {item.page}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
