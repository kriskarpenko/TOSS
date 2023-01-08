import Link from 'next/link';

/**
 * Renders list with navigation links
 * @param {string} [className] - css class for ul tag
 */
const MenuLinks = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <Link href="/">Home</Link>
      </li>
      {/* <li>
        <Link href="/events">Events</Link>
      </li> */}
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MenuLinks;
