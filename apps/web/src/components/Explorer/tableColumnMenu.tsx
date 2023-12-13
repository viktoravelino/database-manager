import { ReactNode } from "react";
// import { useOpenFiles } from '@/hooks/useOpenFiles';

//extends LinkProps
interface TableColumnMenuProps {
  children?: ReactNode[];
  label: string;
  sublabel: string;
}

export function TableColumnMenu(props: TableColumnMenuProps) {
  const { label, sublabel } = props;
  //   const { markFileAsOpen } = useOpenFiles();
  //   const pathName = usePathname();

  //   const isCurrentActive = pathName === props.href;

  return (
    <span
      //   data-active={isCurrentActive}
      //   onClick={() => markFileAsOpen(props.href.toString())}
      className="flex text-[10px] text-text items-center justify-between gap-2 pt-1 pl-3"
      {...props}
    >
      <span>{label}</span>
      <span className="text-explorer-item-sublabel-text">{sublabel}</span>
    </span>
  );
}
