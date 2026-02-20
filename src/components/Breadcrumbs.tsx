import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            ...(item.href ? { item: `https://usebraintrust.com${item.href}` } : {}),
        })),
    };

    return (
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <ol className={styles.list}>
                {items.map((item, index) => (
                    <li key={index} className={styles.item}>
                        {index > 0 && <span className={styles.separator}>/</span>}
                        {item.href ? (
                            <Link href={item.href} className={styles.link}>{item.label}</Link>
                        ) : (
                            <span className={styles.current} aria-current="page">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
