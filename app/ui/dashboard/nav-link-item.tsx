'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type LinkItemProps = {
  name: 'Customers' | 'Invoices' | 'Home';
  href: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export default function NavLinkItem({ link }: { link: LinkItemProps }) {
  const pathname = usePathname();
  const LinkIcon = link.icon;

  return (
    <Link
      key={link.name}
      href={link.href}
      className={clsx(
        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
        {
          'bg-sky-100 text-blue-600': pathname === link.href,
        },
      )}
    >
      <LinkIcon className="w-6" />
      <p className="hidden md:block">{link.name}</p>
    </Link>
  );
}
