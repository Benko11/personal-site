interface FactTableItemProps {
  label: string;
  children: React.ReactNode;
}

export function FactTableItem({ label, children }: FactTableItemProps) {
  return (
    <tr className="hover:bg-bluom-select-tint hover:font-bold">
      <th className="text-right p-3 px-5 lg:w-[30%]">{label}</th>
      <td className="p-2 pl-6">{children}</td>
    </tr>
  );
}
