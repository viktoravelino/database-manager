import { ReactNode } from "react";
// import { useOpenFiles } from '@/hooks/useOpenFiles';

//extends LinkProps
interface TableColumnMenuProps {
  children?: ReactNode[];
  label: string;
  subLabel: string;
}

export function TableColumnMenu(props: TableColumnMenuProps) {
  const { label, subLabel } = props;
  //   const { markFileAsOpen } = useOpenFiles();
  //   const pathName = usePathname();

  //   const isCurrentActive = pathName === props.href;

  return (
    <span
      //   data-active={isCurrentActive}
      //   onClick={() => markFileAsOpen(props.href.toString())}
      className="flex text-[10px] items-center justify-between gap-2 pt-1 pl-5 data-[active=true]:bg-[#2a273f] data-[active=true]:text-[#E0DEF2]"
      {...props}
    >
      <span className="font-semibold">{label}</span>
      <span className="text-[#817c9c]">{subLabel}</span>
    </span>
  );
}
