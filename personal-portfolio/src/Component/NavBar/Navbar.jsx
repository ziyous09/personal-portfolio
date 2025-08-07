import React from 'react';

const navOptions = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact Me', href: '#contact' }
];

const Navbar = () => {
  return (
    <nav
      className="
        fixed
        left-1/2
        transform
        -translate-x-1/2
        mt-[10px]
        w-1/2
        border
        border-solid
        border-gray-400
        py-4
        z-50
        
      "
      style={{
        backgroundColor: 'var(--priary)',
        borderWidth: '1px',
        borderRadius: '50px',
      }}
    >
      <ul className="flex list-none gap-8 m-0 p-0 justify-center">
        {navOptions.map(option => (
          <li key={option.label}>
            <a
              href={option.href}
              className="no-underline text-gray-100 hover:text-green-400 transition-colors duration-200 font-medium"
            >
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;